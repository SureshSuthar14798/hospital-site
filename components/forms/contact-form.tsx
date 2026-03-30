'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_78vimxb';
const EMAILJS_TEMPLATE_ID = 'template_1vk4kzp';
const EMAILJS_PUBLIC_KEY = '2oAoSfk4l01sD7M-N';

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!form.name || !form.phone || !form.email || !form.message) {
      setError('Please fill in all fields before submitting.');
      return;
    }

    try {
      setStatus('submitting');

      // Send email via EmailJS
      // Template variables must match the {{variable}} names in your EmailJS template
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          // Also send with alternate common names so the template can use either
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
        },
        EMAILJS_PUBLIC_KEY
      );

      setForm(initialState);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setError('Failed to send message. Please try again or call us directly.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
      <div className='grid gap-5'>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Full name
          <input placeholder='Pankaj Sharma' value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Phone number
          <input placeholder='+91 98765 43210' value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Email address
          <input placeholder='pankaj.sharma@example.com' type='email' value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Message
          <textarea placeholder='Your message here...' rows={5} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className='rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
      </div>

      {error ? <p className='mt-4 text-sm font-medium text-rose-600'>{error}</p> : null}
      {status === 'success' ? (
        <div className='mt-4 rounded-2xl bg-emerald-50 px-4 py-4'>
          <div className='flex items-center gap-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5 text-emerald-600'>
              <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
            </svg>
            <p className='text-sm font-semibold text-emerald-700'>Message sent successfully!</p>
          </div>
          <p className='mt-1.5 text-sm leading-5 text-emerald-600'>
            Our team will get back to you shortly.
          </p>
        </div>
      ) : null}

      <button type='submit' disabled={status === 'submitting'} className='mt-6 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70'>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
