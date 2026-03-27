import Link from 'next/link';
import { notFound } from 'next/navigation';

import { DoctorCard } from '@/components/ui/doctor-card';
import { IconBadge } from '@/components/ui/icon-badge';
import { doctors, services } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return buildMetadata({
      title: 'Service not found',
      description: 'Service page not found.',
      path: `/services/${slug}`
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedDoctors = doctors.filter((doctor) => doctor.services.includes(service.slug));

  return (
    <div className='page-shell section-space space-y-16'>
      <section className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10'>
        <div className={`inline-flex rounded-[1.4rem] bg-gradient-to-br p-3 ${service.accent}`}>
          <IconBadge name={service.icon as never} className='bg-white text-brand-600' />
        </div>
        <p className='mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>Department details</p>
        <h1 className='mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl'>{service.title}</h1>
        <p className='mt-5 max-w-3xl text-base leading-8 text-slate-600'>{service.description}</p>
        <div className='mt-8 flex flex-wrap gap-4'>
          <Link href='/appointment' className='rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white'>
            Book appointment
          </Link>
          <Link href='/contact' className='rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-700'>
            Contact department
          </Link>
        </div>
      </section>

      <section className='grid gap-8 lg:grid-cols-[0.95fr,1.05fr]'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card'>
          <h2 className='text-2xl font-semibold text-ink'>Benefits and patient outcomes</h2>
          <ul className='mt-6 space-y-4 text-sm leading-5 text-slate-600'>
            {service.benefits.map((benefit) => (
              <li key={benefit} className='flex items-start gap-3'>
                <span className='mt-2 h-2.5 w-2.5 rounded-full bg-brand-600' />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card'>
          <h2 className='text-2xl font-semibold text-ink'>What this page helps patients do</h2>
          <div className='mt-6 space-y-4 text-sm leading-5 text-slate-600'>
            <p>Understand the department in simple language without medical jargon.</p>
            <p>See clear treatment benefits and match the department to the right specialist.</p>
            <p>Move directly into appointment booking or contact support from the same page.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-3xl font-semibold text-ink'>Related doctors</h2>
        <div className='mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {relatedDoctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>
    </div>
  );
}
