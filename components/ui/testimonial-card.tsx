import { Quote, Star } from 'lucide-react';

import type { Testimonial } from '@/lib/data';

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className='rounded-[1.75rem] border border-slate-200 bg-white p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-1 text-amber-400'>
          {Array.from({ length: item.rating }).map((_, index) => (
            <Star key={index} className='h-4 w-4' fill='currentColor' />
          ))}
        </div>
        <Quote className='h-8 w-8 text-brand-200' />
      </div>
      <p className='mt-5 text-base leading-5 text-slate-600'>{item.feedback}</p>
      <div className='mt-6'>
        <p className='font-semibold text-ink'>{item.name}</p>
        <p className='text-sm text-slate-500'>{item.condition}</p>
      </div>
    </article>
  );
}
