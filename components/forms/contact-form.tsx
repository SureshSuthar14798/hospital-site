'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setForm(initialState);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
      <div className='grid gap-5'>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Full name
          <input placeholder='John Doe' value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Phone number
          <input placeholder='+91 98765 43210' value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Email address
          <input placeholder='john.doe@example.com' type='email' value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className='rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
        <label className='grid gap-2 text-sm font-medium text-slate-700'>
          Message
          <textarea placeholder='Your message here...' rows={5} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className='rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400' />
        </label>
      </div>
      {status === 'success' ? (
        <p className='mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700'>
          Message sent successfully. Our team will get back to you shortly.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className='mt-4 text-sm font-medium text-rose-600'>
          Something went wrong. Please call or email us directly.
        </p>
      ) : null}
      <button type='submit' disabled={status === 'submitting'} className='mt-6 inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-70'>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
