import Image from 'next/image';
import Link from 'next/link';

import { FadeIn } from '@/components/ui/fade-in';
import { cn } from '@/lib/utils';

type Action = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
  backgroundImage?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  backgroundImage,
  className
}: PageHeroProps) {
  const hasBackgroundImage = Boolean(backgroundImage);

  return (
    <FadeIn>
      <section
        className={cn(
          'relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-hero-grid px-4 py-10 shadow-soft sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-10 lg:py-14',
          className
        )}
      >
        {hasBackgroundImage ? (
          <>
            <div className='absolute inset-0'>
              <Image
                src={backgroundImage!}
                alt=''
                fill
                sizes='100vw'
                className='object-cover object-center scale-[1.02]'
                aria-hidden='true'
              />
            </div>
            <div
              className='absolute inset-0 bg-[linear-gradient(180deg,rgba(245,250,255,0.95)_0%,rgba(245,250,255,0.90)_42%,rgba(245,250,255,0.78)_100%)] sm:bg-[linear-gradient(90deg,rgba(245,250,255,0.96)_0%,rgba(245,250,255,0.90)_34%,rgba(245,250,255,0.74)_62%,rgba(236,249,246,0.78)_100%)]'
              aria-hidden='true'
            />
            <div
              className='absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.36),transparent_56%)] sm:bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.34),transparent_52%)]'
              aria-hidden='true'
            />
          </>
        ) : null}

        <div
          className={cn(
            'relative z-10 max-w-3xl',
            hasBackgroundImage &&
              'rounded-[1.5rem] border border-white/70 bg-white/55 p-5 shadow-[0_20px_60px_rgba(16,33,59,0.08)] backdrop-blur-[3px] sm:rounded-[1.75rem] sm:p-8'
          )}
        >
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 sm:text-sm'>
            {eyebrow}
          </p>
          <h1 className='mt-3 text-3xl font-semibold tracking-tight text-ink sm:mt-4 sm:text-4xl lg:text-4xl'>
            {title}
          </h1>
          <p className='mt-4 max-w-2xl text-sm leading-5 text-slate-700 sm:mt-5 sm:text-lg sm:leading-6'>
            {description}
          </p>
          {actions.length ? (
            <div className='mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4'>
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={cn(
                    'inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition duration-200 sm:px-5',
                    action.variant === 'secondary'
                      ? 'border border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  )}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className='absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-brand-100/60 to-transparent lg:block' />
      </section>
    </FadeIn>
  );
}