'use client';

import { useMemo, useState } from 'react';

import { siteConfig, type Doctor, type Service } from '@/lib/data';

type AppointmentFormProps = {
  doctors: Doctor[];
  services: Service[];
};

const initialState = {
  patientName: '',
  phone: '',
  email: '',
  department: '',
  doctor: '',
  date: '',
  time: '',
  message: ''
};

export function AppointmentForm({ doctors, services }: AppointmentFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const filteredDoctors = useMemo(() => {
    if (!form.department) {
      return doctors;
    }

    return doctors.filter((doctor) => doctor.services.includes(form.department));
  }, [doctors, form.department]);

  const departmentName = useMemo(() => {
    return services.find((service) => service.slug === form.department)?.title ?? form.department;
  }, [form.department, services]);

  const doctorName = useMemo(() => {
    return doctors.find((doctor) => doctor.slug === form.doctor)?.name ?? form.doctor;
  }, [doctors, form.doctor]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setWhatsappUrl('');

    if (!form.patientName || !form.phone || !form.email || !form.department || !form.doctor || !form.date || !form.time) {
      setError('Please complete all required fields before submitting.');
      return;
    }

    try {
      setStatus('submitting');

      const formattedDate = new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'long'
      }).format(new Date(`${form.date}T00:00:00`));
      const normalizedWhatsappNumber = siteConfig.whatsappPhone.replace(/\D/g, '');
      const message = [
        'New Appointment Request',
        '',
        `Patient Name: ${form.patientName}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Department: ${departmentName}`,
        `Doctor: ${doctorName}`,
        `Preferred Date: ${formattedDate}`,
        `Preferred Time: ${form.time}`,
        `Symptoms / Message: ${form.message || 'Not provided'}`
      ].join('\n');
      const nextWhatsappUrl = `https://wa.me/${normalizedWhatsappNumber}?text=${encodeURIComponent(message)}`;

      setWhatsappUrl(nextWhatsappUrl);
      setStatus('success');
      setForm(initialState);

      const popup = window.open(nextWhatsappUrl, '_blank', 'noopener,noreferrer');

      if (!popup) {
        window.location.href = nextWhatsappUrl;
      }
    } catch {
      setStatus('error');
      setError('Unable to open WhatsApp right now. Please call the hospital directly.');
    }
  }

  function updateField(name: string, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === 'department' ? { doctor: '' } : {})
    }));
  }

  return (
    <div className='grid gap-8 lg:grid-cols-[1.05fr,0.95fr]'>
      <form onSubmit={handleSubmit} className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
        <div className='grid gap-5 sm:grid-cols-2'>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Patient name
            <input placeholder='Pankaj Sharma' value={form.patientName} onChange={(event) => updateField('patientName', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Phone number
            <input placeholder='+91 98765 43210' type='tel' value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Email
            <input placeholder='pankaj.sharma@example.com' type='email' value={form.email} onChange={(event) => updateField('email', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Department
            <select value={form.department} onChange={(event) => updateField('department', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400'>
              <option value=''>Select department</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Doctor
            <select value={form.doctor} onChange={(event) => updateField('doctor', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400'>
              <option value=''>Select doctor</option>
              {filteredDoctors.map((doctor) => (
                <option key={doctor.slug} value={doctor.slug}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Preferred date
            <input type='date' min={new Date().toISOString().split('T')[0]} value={form.date} onChange={(event) => updateField('date', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700'>
            Preferred time
            <input type='time' value={form.time} onChange={(event) => updateField('time', event.target.value)} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
          <label className='grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2'>
            Message or symptoms
            <textarea placeholder='Describe your symptoms or concerns...' value={form.message} onChange={(event) => updateField('message', event.target.value)} rows={5} className='rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
        </div>

        {error ? <p className='mt-4 text-sm font-medium text-rose-600'>{error}</p> : null}
        {status === 'success' ? (
          <p className='mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700'>
            WhatsApp opened with your appointment details. Please press send in WhatsApp to complete your request.
          </p>
        ) : null}
        {status === 'success' && whatsappUrl ? (
          <p className='mt-3 text-sm font-medium text-brand-700'>
            If WhatsApp did not open,{' '}
            <a href={whatsappUrl} target='_blank' rel='noreferrer' className='underline underline-offset-4'>
              tap here to continue
            </a>
            .
          </p>
        ) : null}

        <button type='submit' disabled={status === 'submitting'} className='mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70'>
          {status === 'submitting' ? 'Submitting...' : 'Confirm Appointment'}
        </button>
      </form>

      <aside className='rounded-[2rem] border border-brand-100 bg-brand-50 p-6 shadow-card sm:p-8'>
        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>
          Booking support
        </p>
        <h3 className='mt-4 text-2xl font-semibold text-ink'>
          Fast appointment assistance for every department
        </h3>
        <div className='mt-6 space-y-4 text-sm leading-5 text-slate-600'>
          <p>Choose a department, select the preferred doctor, and submit your symptoms or care concern. The form is designed for quick mobile-first booking.</p>
          <p>For emergencies, please use the sticky emergency call button instead of waiting for an online confirmation.</p>
        </div>
        <div className='mt-8 grid gap-4'>
          <div className='rounded-[1.5rem] bg-white p-5'>
            <p className='text-sm font-semibold text-ink'>What happens next?</p>
            <p className='mt-2 text-sm leading-5 text-slate-600'>Our front desk team reviews the request, confirms doctor availability, and contacts the patient for final scheduling.</p>
          </div>
          <div className='rounded-[1.5rem] bg-white p-5'>
            <p className='text-sm font-semibold text-ink'>Need urgent assistance?</p>
            <p className='mt-2 text-sm leading-5 text-slate-600'>Call the hospital directly for emergency admissions, urgent consultations, or diagnostic support.</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

