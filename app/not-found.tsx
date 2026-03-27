import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='page-shell section-space'>
      <div className='rounded-[2rem] border border-slate-200 bg-white px-6 py-16 text-center shadow-card sm:px-10'>
        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>
          Page not found
        </p>
        <h1 className='mt-4 text-4xl font-semibold text-ink'>
          The page you are looking for is unavailable.
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600'>
          Please return to the homepage, browse our doctors, or book an appointment with the care team.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <Link href='/' className='rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white'>
            Back to home
          </Link>
          <Link href='/appointment' className='rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700'>
            Book appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
