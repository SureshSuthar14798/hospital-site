'use client';

import { useEffect, useMemo, useState } from 'react';

import { type Doctor, type Service } from '@/lib/data';

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
  const [minDate, setMinDate] = useState('');

  // Set min date on client only to avoid hydration mismatch
  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!form.patientName || !form.phone || !form.email || !form.department || !form.doctor || !form.date || !form.time) {
      setError('Please complete all required fields before submitting.');
      return;
    }

    try {
      setStatus('submitting');

      const formattedDate = new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'long'
      }).format(new Date(`${form.date}T00:00:00`));

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          departmentName,
          doctorName,
          formattedDate
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Unable to submit appointment. Please call the hospital directly.');
    }
  }

  function updateField(name: string, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === 'department' ? { doctor: '' } : {})
    }));
  }

  const inputClass = 'w-full min-w-0 rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400';
  const selectClass = 'w-full min-w-0 appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-brand-400';

  return (
    <div className='grid gap-8 lg:grid-cols-[1.05fr,0.95fr]'>
      <form onSubmit={handleSubmit} className='min-w-0 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card sm:p-8'>
        <div className='grid gap-5 sm:grid-cols-2'>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Patient name
            <input placeholder='Pankaj Sharma' value={form.patientName} onChange={(event) => updateField('patientName', event.target.value)} className={inputClass} />
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Phone number
            <input placeholder='+91 98765 43210' type='tel' value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className={inputClass} />
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Email
            <input placeholder='pankaj.sharma@example.com' type='email' value={form.email} onChange={(event) => updateField('email', event.target.value)} className={inputClass} />
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Department
            <select value={form.department} onChange={(event) => updateField('department', event.target.value)} className={selectClass}>
              <option value=''>Select department</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Doctor
            <select value={form.doctor} onChange={(event) => updateField('doctor', event.target.value)} className={selectClass}>
              <option value=''>Select doctor</option>
              {filteredDoctors.map((doctor) => (
                <option key={doctor.slug} value={doctor.slug}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700'>
            Preferred date
            <input type='date' min={minDate} value={form.date} onChange={(event) => updateField('date', event.target.value)} className={inputClass} />
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700 sm:col-span-2'>
            Preferred time
            <input type='time' value={form.time} onChange={(event) => updateField('time', event.target.value)} className={inputClass} />
          </label>
          <label className='grid min-w-0 gap-2 text-sm font-medium text-slate-700 sm:col-span-2'>
            Message or symptoms
            <textarea placeholder='Describe your symptoms or concerns...' value={form.message} onChange={(event) => updateField('message', event.target.value)} rows={5} className='w-full min-w-0 rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
          </label>
        </div>

        {error ? <p className='mt-4 text-sm font-medium text-rose-600'>{error}</p> : null}
        {status === 'success' ? (
          <div className='mt-4 rounded-2xl bg-emerald-50 px-4 py-4'>
            <div className='flex items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5 shrink-0 text-emerald-600'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
              </svg>
              <p className='text-sm font-semibold text-emerald-700'>Appointment submitted successfully!</p>
            </div>
            <p className='mt-1.5 text-sm leading-5 text-emerald-600'>
              Your appointment details have been sent. Our front desk team will review and confirm your booking shortly.
            </p>
          </div>
        ) : null}

        <button type='submit' disabled={status === 'submitting'} className='mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70 sm:w-auto'>
          {status === 'submitting' ? 'Submitting...' : 'Confirm Appointment'}
        </button>
      </form>

      <aside className='rounded-[2rem] border border-brand-100 bg-brand-50 p-5 shadow-card sm:p-8'>
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
