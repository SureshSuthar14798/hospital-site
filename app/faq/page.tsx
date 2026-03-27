import Link from 'next/link';

import { FaqAccordion } from '@/components/sections/faq-accordion';
import { PageHero } from '@/components/ui/page-hero';
import { faqs, pageHeroBackgrounds } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'FAQ',
  description: 'Find answers to common hospital questions about booking, services, timings, and emergency care.',
  path: '/faq'
});

export default function FaqPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='FAQ'
        title='Common patient questions answered in a simple accordion layout'
        description='This section covers booking, emergency timing, doctor selection, accessibility, and digital patient support.'
        backgroundImage={pageHeroBackgrounds.faq}
      />
      <div className='grid gap-8 lg:grid-cols-[1.1fr,0.9fr]'>
        <FaqAccordion items={faqs} />
        <aside className='rounded-[2rem] border border-brand-100 bg-brand-50 p-8 shadow-card'>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>Need more help?</p>
          <h2 className='mt-4 text-2xl font-semibold text-ink'>Patients can switch from questions to action quickly.</h2>
          <p className='mt-4 text-sm leading-5 text-slate-600'>For unresolved queries, patients can move directly into appointment booking or contact the care desk without leaving the page flow.</p>
          <div className='mt-8 flex flex-wrap gap-4'>
            <Link href='/appointment' className='rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white'>
              Book appointment
            </Link>
            <Link href='/contact' className='rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700'>
              Contact hospital
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
