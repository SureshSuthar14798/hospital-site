import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { Service } from '@/lib/data';
import { IconBadge } from '@/components/ui/icon-badge';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft'>
      <div className={`inline-flex rounded-[1.4rem] bg-gradient-to-br p-3 ${service.accent}`}>
        <IconBadge name={service.icon as never} />
      </div>
      <h3 className='mt-5 text-xl font-semibold text-ink'>{service.title}</h3>
      <p className='mt-3 text-sm leading-5 text-slate-600'>
        {service.shortDescription}
      </p>
      <ul className='mt-5 space-y-2 text-sm text-slate-600'>
        {service.benefits.slice(0, 2).map((benefit) => (
          <li key={benefit} className='flex items-start gap-2'>
            <span className='mt-2 h-2 w-2 rounded-full bg-brand-500' />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-900'
      >
        Explore service <ArrowRight className='h-4 w-4' />
      </Link>
    </article>
  );
}
