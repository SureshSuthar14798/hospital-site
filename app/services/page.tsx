import { Activity, ClipboardCheck, HeartHandshake } from 'lucide-react';

import { FadeIn } from '@/components/ui/fade-in';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { pageHeroBackgrounds, services } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description: 'Explore hospital departments including cardiology, orthopedics, dental care, neurology, and emergency support.',
  path: '/services'
});

const pillars = [
  {
    title: 'Evidence-based care',
    description: 'Departments are framed around diagnostic confidence, timely treatment, and clear follow-up.',
    icon: Activity
  },
  {
    title: 'Patient guidance',
    description: 'Every service section is easy to scan so patients understand benefits before booking.',
    icon: ClipboardCheck
  },
  {
    title: 'Compassionate communication',
    description: 'Care pages are designed to feel accessible for families, senior citizens, and first-time visitors.',
    icon: HeartHandshake
  }
];

export default function ServicesPage() {
  return (
    <div className='page-shell section-space space-y-16'>
      <PageHero
        eyebrow='Departments'
        title='Clear department pages for high-trust healthcare decisions'
        description='Each service card connects descriptions, benefits, and related doctors so patients can move from exploration to booking without confusion.'
        backgroundImage={pageHeroBackgrounds.services}
      />

      <section>
        <SectionHeading eyebrow='Medical departments' title='Core specialties presented in a modern card-based grid' />
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.06}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow='Why this layout works' title='Structured information that helps patients act faster' />
        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={index * 0.06}>
                <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
                  <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600'>
                    <Icon className='h-6 w-6' />
                  </span>
                  <h3 className='mt-5 text-xl font-semibold text-ink'>{pillar.title}</h3>
                  <p className='mt-3 text-sm leading-5 text-slate-600'>{pillar.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
