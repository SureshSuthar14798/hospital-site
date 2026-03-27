import Image from 'next/image';

import { DoctorCard } from '@/components/ui/doctor-card';
import { FadeIn } from '@/components/ui/fade-in';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { doctors, infrastructureImages, pageHeroBackgrounds, siteConfig } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About',
  description: 'Learn about the mission, vision, team, and modern medical infrastructure at Vrinda Superspeciality Hospital.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <div className='page-shell section-space space-y-16'>
      <PageHero
        eyebrow='About us'
        title='Professional medical care guided by accuracy, trust, and compassion'
        description='Vrinda Superspeciality Hospital is built around safe, modern healthcare delivery with experienced doctors, advanced facilities, and a commitment to accessible treatment for families.'
        backgroundImage={pageHeroBackgrounds.about}
      />

      <section className='grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-center'>
        <FadeIn>
          <SectionHeading
            eyebrow='Hospital introduction'
            title='A care environment designed to feel capable, organized, and reassuring'
            description='From diagnostics to specialty consultation, our systems are focused on clear communication, timely treatment, and a comfortable patient experience.'
          />
          <div className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
              <h3 className='text-lg font-semibold text-ink'>Mission</h3>
              <p className='mt-2 text-sm leading-5 text-slate-600'>Deliver accurate diagnosis, quality treatment, and compassionate patient support with dignity and clarity.</p>
            </div>
            <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
              <h3 className='text-lg font-semibold text-ink'>Vision</h3>
              <p className='mt-2 text-sm leading-5 text-slate-600'>Make dependable healthcare accessible for every family through trusted doctors and modern facilities.</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.05}>
          <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft'>
            <Image src={infrastructureImages[1]} alt='Hospital infrastructure and patient care environment' width={720} height={560} className='h-auto w-full rounded-[1.5rem]' />
          </div>
        </FadeIn>
      </section>

      <section>
        <SectionHeading eyebrow='Achievements' title='Key numbers that reflect experience and patient trust' />
        <div className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {siteConfig.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06}>
              <div className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
                <p className='text-3xl font-semibold text-ink'>{stat.value}</p>
                <p className='mt-3 text-sm text-slate-600'>{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow='Infrastructure'
          title='Clean, well-organized spaces built for safe and comfortable care'
          description='Use these image sections to showcase reception, diagnostics, consultation rooms, inpatient care, and patient-friendly interiors.'
        />
        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {infrastructureImages.map((image, index) => (
            <FadeIn key={image} delay={index * 0.06}>
              <div className='overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-card'>
                <Image src={image} alt='Hospital infrastructure visual' width={480} height={360} className='h-[241px] w-full rounded-[1.35rem]' />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow='Our team'
          title='A specialist-led hospital team with patient-first communication'
          description='Doctor profiles are structured to highlight qualifications, availability, and care focus in a clear card-based layout.'
        />
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {doctors.slice(0, 3).map((doctor, index) => (
            <FadeIn key={doctor.slug} delay={index * 0.07}>
              <DoctorCard doctor={doctor} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
