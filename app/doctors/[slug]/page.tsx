import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, GraduationCap, Languages, Star } from 'lucide-react';

import { DoctorCard } from '@/components/ui/doctor-card';
import { doctors, testimonials } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

type DoctorDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: DoctorDetailPageProps) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    return buildMetadata({
      title: 'Doctor not found',
      description: 'Doctor profile not found.',
      path: `/doctors/${slug}`
    });
  }

  return buildMetadata({
    title: doctor.name,
    description: `${doctor.specialization} with ${doctor.experience} of experience at Vrinda Superspeciality Hospital.`,
    path: `/doctors/${doctor.slug}`
  });
}

export default async function DoctorDetailPage({ params }: DoctorDetailPageProps) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);

  if (!doctor) {
    notFound();
  }

  const relatedDoctors = doctors.filter((item) => item.slug !== doctor.slug).slice(0, 3);

  return (
    <div className='page-shell section-space space-y-16'>
      <section className='grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center'>
        <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft'>
          <Image src={doctor.image} alt={doctor.name} width={720} height={640} className='h-auto w-full rounded-[1.5rem]' priority />
        </div>
        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>
            {doctor.specialization}
          </p>
          <h1 className='mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl'>
            {doctor.name}
          </h1>
          <p className='mt-5 text-base leading-8 text-slate-600'>{doctor.summary}</p>
          <div className='mt-6 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
              <div className='flex items-center gap-2 text-slate-600'>
                <Star className='h-4 w-4 text-amber-400' fill='currentColor' />
                <span>{doctor.rating} rating</span>
              </div>
              <p className='mt-2 text-sm text-slate-500'>{doctor.reviewCount} verified patient reviews</p>
            </div>
            <div className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
              <div className='flex items-center gap-2 text-slate-600'>
                <CalendarDays className='h-4 w-4 text-brand-600' />
                <span>{doctor.availability}</span>
              </div>
              <p className='mt-2 text-sm text-slate-500'>{doctor.experience} experience</p>
            </div>
          </div>
          <div className='mt-8 flex flex-wrap gap-4'>
            <Link href={`/appointment?doctor=${doctor.slug}`} className='rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white'>
              Book Appointment
            </Link>
            <Link href='/contact' className='rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700'>
              Contact Hospital
            </Link>
          </div>
        </div>
      </section>

      <section className='grid gap-8 lg:grid-cols-[1fr,1fr]'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card'>
          <h2 className='text-2xl font-semibold text-ink'>Qualifications & languages</h2>
          <div className='mt-6 space-y-5 text-sm leading-5 text-slate-600'>
            <div>
              <p className='flex items-center gap-2 font-semibold text-ink'>
                <GraduationCap className='h-4 w-4 text-brand-600' /> Qualifications
              </p>
              <ul className='mt-3 space-y-2'>
                {doctor.qualifications.map((item) => (
                  <li key={item} className='flex items-start gap-2'>
                    <span className='mt-2 h-2 w-2 rounded-full bg-brand-500' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='flex items-center gap-2 font-semibold text-ink'>
                <Languages className='h-4 w-4 text-brand-600' /> Languages
              </p>
              <p className='mt-3'>{doctor.languages.join(', ')}</p>
            </div>
          </div>
        </div>

        <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card'>
          <h2 className='text-2xl font-semibold text-ink'>Experience timeline</h2>
          <div className='mt-6 space-y-6'>
            {doctor.timeline.map((step) => (
              <div key={`${step.year}-${step.title}`} className='relative border-l border-brand-200 pl-6'>
                <span className='absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-600' />
                <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-600'>{step.year}</p>
                <p className='mt-2 text-sm leading-5 text-slate-600'>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-semibold text-ink'>Selected patient reviews</h2>
        <div className='mt-8 grid gap-6 md:grid-cols-2'>
          {testimonials.slice(0, 2).map((item) => (
            <article key={item.id} className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-brand-600'>{item.condition}</p>
              <p className='mt-4 text-base leading-5 text-slate-600'>{item.feedback}</p>
              <p className='mt-5 font-semibold text-ink'>{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>Other specialists</p>
            <h2 className='mt-3 text-3xl font-semibold text-ink'>Explore more doctors</h2>
          </div>
          <Link href='/doctors' className='hidden text-sm font-semibold text-brand-700 lg:inline-flex'>
            View all doctors
          </Link>
        </div>
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {relatedDoctors.map((item) => (
            <DoctorCard key={item.slug} doctor={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
