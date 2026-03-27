'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FaqAccordion({
  items
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className='space-y-4'>
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <article key={item.question} className='rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-card'>
            <button
              type='button'
              onClick={() => setOpen(isOpen ? null : index)}
              className='flex w-full items-center justify-between gap-4 text-left'
              aria-expanded={isOpen}
            >
              <span className='text-lg font-semibold text-ink'>{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-brand-600 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen ? (
              <p className='mt-4 text-sm leading-5 text-slate-600'>{item.answer}</p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
