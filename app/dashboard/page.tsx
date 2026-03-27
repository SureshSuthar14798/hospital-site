import { CalendarClock, Download, FileHeart, UserRound } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { pageHeroBackgrounds } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Patient Dashboard',
  description: 'Patient dashboard layout with appointment history, downloadable reports, and profile management.',
  path: '/dashboard'
});

export default function DashboardPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Patient dashboard'
        title='A future-ready space for appointments, reports, and profile management'
        description='This optional advanced page demonstrates how patients can review upcoming visits, access reports, and manage their profile in one secure interface.'
        backgroundImage={pageHeroBackgrounds.dashboard}
      />

      <section className='grid gap-6 lg:grid-cols-[0.85fr,1.15fr]'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
          <div className='flex items-center gap-4'>
            <span className='inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600'>
              <UserRound className='h-7 w-7' />
            </span>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-600'>Patient profile</p>
              <h2 className='mt-1 text-2xl font-semibold text-ink'>Aarav Sharma</h2>
            </div>
          </div>
          <div className='mt-8 space-y-4 text-sm text-slate-600'>
            <p>Member ID: VSH-2048</p>
            <p>Email: aarav@example.com</p>
            <p>Phone: +91 98765 12345</p>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
            <CalendarClock className='h-6 w-6 text-brand-600' />
            <p className='mt-5 text-2xl font-semibold text-ink'>2</p>
            <p className='mt-2 text-sm text-slate-600'>Upcoming appointments</p>
          </article>
          <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
            <FileHeart className='h-6 w-6 text-brand-600' />
            <p className='mt-5 text-2xl font-semibold text-ink'>6</p>
            <p className='mt-2 text-sm text-slate-600'>Reports available</p>
          </article>
          <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
            <Download className='h-6 w-6 text-brand-600' />
            <p className='mt-5 text-2xl font-semibold text-ink'>3</p>
            <p className='mt-2 text-sm text-slate-600'>Prescriptions ready</p>
          </article>
        </div>
      </section>

      <section className='grid gap-8 xl:grid-cols-[1.1fr,0.9fr]'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
          <h2 className='text-2xl font-semibold text-ink'>Appointment history</h2>
          <div className='mt-6 space-y-4'>
            {[
              'Cardiology follow-up - 04 Apr 2026 - Confirmed',
              'Dental check-up - 10 Apr 2026 - Pending',
              'Annual health package - 19 Jan 2026 - Completed'
            ].map((item) => (
              <div key={item} className='rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600'>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
          <h2 className='text-2xl font-semibold text-ink'>Download center</h2>
          <div className='mt-6 space-y-4'>
            {['Blood report.pdf', 'ECG summary.pdf', 'Prescription - Feb 2026.pdf'].map((item) => (
              <button key={item} type='button' className='flex w-full items-center justify-between rounded-[1.5rem] border border-slate-100 bg-slate-50 px-4 py-4 text-left text-sm text-slate-600'>
                <span>{item}</span>
                <Download className='h-4 w-4 text-brand-600' />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
