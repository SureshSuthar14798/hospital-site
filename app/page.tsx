import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartPulse, ShieldPlus, Stethoscope } from 'lucide-react';

import { FeaturedDoctorsCarousel } from '@/components/sections/featured-doctors-carousel';
import { TestimonialCarousel } from '@/components/sections/testimonial-carousel';
import { StructuredData } from '@/components/sections/structured-data';
import { BlogCard } from '@/components/ui/blog-card';
import { FadeIn } from '@/components/ui/fade-in';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import {
  blogPosts,
  doctors,
  quickHighlights,
  services,
  siteConfig,
  testimonials,
  infrastructureImages
} from '@/lib/data';
import { buildMetadata, hospitalJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Vrinda Face & Superspeciality Hospital',
  description:
    'Explore emergency-ready care, experienced doctors, and responsive appointment booking at Vrinda Superspeciality Hospital.',
  path: '/'
});

const highlightIcons = [HeartPulse, ShieldPlus, Stethoscope, CheckCircle2];

export default function HomePage() {
  return (
    <>
      <StructuredData data={hospitalJsonLd()} />
      <section className='page-shell section-space'>
        <div className='grid items-center gap-10 lg:grid-cols-[1.08fr,0.92fr]'>
          <FadeIn>
            <div className='space-y-6'>
              <div className='inline-flex items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-card'>
                India's First Exclusive Face Surgery Center
              </div>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>
                  Vrinda Face &amp; Superspeciality Hospital
                </p>
                <h1 className='mt-4 font-[var(--font-sora)] text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-5xl lg:text-6xl'>
                  <span className='block'>Excellence in</span>
                  <span className='block'>
                    <span className='text-brand-600 italic'>Face Surgery</span> &amp;
                  </span>
                  <span className='block'>Superspeciality</span>
                  <span className='block'>Care.</span>
                </h1>
                <p className='mt-4 max-w-2xl text-base leading-5 text-slate-600 sm:text-lg sm:leading-8'>
                  {siteConfig.description} Our goal is to make reliable healthcare easily accessible for everyone.
                </p>
              </div>
              <div className='flex flex-wrap gap-4'>
                <Link href='/appointment' className='inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700'>
                  Book Appointment
                </Link>
                <a href={`tel:${siteConfig.phone}`} className='inline-flex items-center rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50'>
                  Call Now
                </a>
              </div>
              <div className='grid gap-4 grid-flow-col lg:grid-flow-row sm:grid-cols-4'>
                {siteConfig.stats.map((stat, index) => (
                  <FadeIn key={stat.label} delay={index * 0.08}>
                    <div className='rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-card'>
                      <p className='text-2xl font-semibold text-ink'>{stat.value}</p>
                      <p className='mt-2 text-sm text-slate-600'>{stat.label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className='relative overflow-hidden rounded-[2rem] border border-white/70 bg-hero-grid p-3 shadow-soft'>
              <Image src='/images/hospital.png'  alt='Modern hospital interior and patient care environment' width={780} height={700} className='h-[500px] w-full rounded-[1.5rem]' priority />
              <div className='absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/80 bg-white/90 px-5 py-3 shadow-card backdrop-blur'>
                <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-600'>
                  Emergency ready
                </p>
                <div className='mt-1 flex items-center flex-wrap justify-between gap-2'>
                  <div>
                    <p className='text-lg font-semibold text-ink'>24/7 emergency care and quick admissions</p>
                    <p className='text-sm text-slate-600'>Rapid triage, supportive staff, and modern diagnostic support.</p>
                  </div>
                  <a href={`tel:${siteConfig.emergencyPhone}`} className='rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white'>
                    Emergency
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className='page-shell pb-6'>
        <div className='rounded-[2rem] border border-brand-100 bg-brand-50 px-6 py-5 shadow-card sm:px-8'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>Emergency support</p>
              <p className='mt-2 text-lg font-semibold text-ink'>Need urgent medical attention? Call our emergency desk immediately.</p>
            </div>
            <a href={`tel:${siteConfig.emergencyPhone}`} className='inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white justify-center'>
              {siteConfig.emergencyPhone}
              <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </div>
      </section>

      <section className='page-shell section-space'>
        <SectionHeading
          eyebrow='Quick services'
          title='A clean, easy healthcare journey from the first click'
          description='The website is structured to help patients act quickly, understand services clearly, and connect with the right doctor with minimum friction.'
        />
        <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {quickHighlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
                  <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600'>
                    <Icon className='h-6 w-6' />
                  </span>
                  <h3 className='mt-5 text-xl font-semibold text-ink'>{item.title}</h3>
                  <p className='mt-3 text-sm leading-5 text-slate-600'>{item.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className='page-shell section-space'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center'>
          <FadeIn>
            <div className='relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft'>
              <Image
                src={infrastructureImages[0]}
                alt='Hospital interior and infrastructure'
                width={640}
                height={520}
                className='h-auto w-full rounded-[1.5rem]'
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <SectionHeading
              eyebrow='About hospital'
              title='Modern facilities with patient-first systems that build trust'
              description='Vrinda Superspeciality Hospital combines experienced clinicians, organized departments, and a comfortable care environment so patients and families feel supported from consultation to recovery.'
            />
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
                <p className='text-lg font-semibold text-ink'>Accurate diagnosis</p>
                <p className='mt-2 text-sm leading-5 text-slate-600'>Reliable evaluation with modern diagnostics and coordinated follow-up.</p>
              </div>
              <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
                <p className='text-lg font-semibold text-ink'>Compassionate care</p>
                <p className='mt-2 text-sm leading-5 text-slate-600'>Warm support for every age group, including senior-friendly accessibility.</p>
              </div>
            </div>
            <Link href='/about' className='mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700'>
              Explore our story <ArrowRight className='h-4 w-4' />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className='page-shell section-space'>
        <SectionHeading
          eyebrow='Departments'
          title='Core specialties with focused, responsive clinical support'
          description='Patients can explore departments quickly, understand benefits, and move directly into appointment booking from each service area.'
        />
        <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.07}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className='page-shell section-space'>
        <div className='flex items-end justify-between gap-6'>
          <SectionHeading
            eyebrow='Featured doctors'
            title='Meet experienced specialists patients can trust'
            description='Doctor profiles include qualifications, timing, care focus, and direct appointment actions for a clear patient journey.'
          />
          <Link href='/doctors' className='hidden text-sm font-semibold text-brand-700 lg:inline-flex'>
            View all doctors
          </Link>
        </div>
        <FeaturedDoctorsCarousel doctors={doctors.slice(0, 3)} />
      </section>

      <section className='page-shell section-space'>
        <div className='grid gap-8 lg:grid-cols-[0.75fr,1.25fr] lg:items-start'>
          <SectionHeading
            eyebrow='Testimonials'
            title='Patient reviews that reinforce confidence and credibility'
            description='Social proof is front-and-center to help new patients feel reassured before booking or contacting the hospital.'
          />
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className='page-shell section-space'>
        <div className='flex items-end justify-between gap-6'>
          <SectionHeading
            eyebrow='Health tips'
            title='SEO-friendly blog content for long-term trust and discoverability'
            description='The blog section helps answer common patient questions while also supporting search visibility for medical topics and local healthcare intent.'
          />
          <Link href='/blog' className='hidden text-sm font-semibold text-brand-700 lg:inline-flex'>
            Visit blog
          </Link>
        </div>
        <div className='mt-10 grid gap-6 lg:grid-cols-3'>
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.06}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className='page-shell section-space'>
        <div className='rounded-[2rem] border border-brand-100 bg-brand-600 px-6 py-10 text-white shadow-soft sm:px-10'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div className='max-w-2xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-100'>
                Ready to book?
              </p>
              <h2 className='mt-3 font-[var(--font-sora)] text-3xl font-semibold tracking-tight sm:text-4xl'>
                Let patients connect with the right department in just a few taps.
              </h2>
              <p className='mt-4 text-base leading-5 text-brand-50/90'>
                Use the appointment page for online booking, contact the care desk directly, or explore doctors before deciding.
              </p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <Link href='/appointment' className='rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-700'>
                Book Now
              </Link>
              <Link href='/contact' className='rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white'>
                Contact Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



