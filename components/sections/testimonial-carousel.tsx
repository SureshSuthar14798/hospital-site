'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { Testimonial } from '@/lib/data';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);

  const totalVisible = Math.min(2, items.length);

  const goToPrevious = () => {
    setActive((current) => (current - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActive((current) => (current + 1) % items.length);
  };

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      goToNext();
    }, 7000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const visible = Array.from({ length: totalVisible }, (_, index) => {
    return items[(active + index) % items.length];
  });

  return (
    <div className='space-y-5 sm:space-y-6'>
      <div className='relative overflow-hidden'>
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className='grid gap-4 sm:gap-6 lg:grid-cols-2'
        >
          {visible.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: 'easeOut' }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex justify-center gap-2 sm:justify-start'>
          {items.map((item, index) => (
            <button
              key={item.id}
              type='button'
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition ${active === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-brand-200'}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
        <div className='hidden lg:flex justify-center gap-3 sm:justify-end'>
          <button
            type='button'
            onClick={goToPrevious}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            type='button'
            onClick={goToNext}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700'
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  );
}