'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/services', label: 'Services' },
  { href: '/appointment', label: 'Appointment' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function isActivePath(href: string) {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-[200] isolate border-b border-white/70 bg-white/90 backdrop-blur-xl'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8'>
          <Link href='/' className='flex min-w-0 items-center gap-3'>
            <div className='overflow-hidden'>
              <Image
                src='/images/vrinda-logo.png'
                alt='Vrinda Hospital logo'
                width={210}
                height={72}
                className='h-11 w-auto rounded-md object-contain sm:h-12 lg:h-14'
                priority
              />
            </div>
          </Link>

          <nav className='hidden items-center gap-7 lg:flex'>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative pb-2 text-sm font-medium transition',
                  isActivePath(item.href)
                    ? 'text-brand-700'
                    : 'text-slate-600 hover:text-brand-700'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-600 transition-all duration-200',
                    isActivePath(item.href)
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0'
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className='hidden items-center gap-3 lg:flex'>
            <a
              href={`tel:${siteConfig.phone}`}
              className='inline-flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50'
            >
              <Phone className='h-4 w-4' />
              {siteConfig.phone}
            </a>
            <Link
              href='/appointment'
              className='inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700'
            >
              Book Appointment
            </Link>
          </div>

          <button
            type='button'
            onClick={() => setIsOpen((value) => !value)}
            className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden'
            aria-label='Toggle navigation'
            aria-expanded={isOpen}
          >
            {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </header>

      <div className='lg:hidden'>
        <button
          type='button'
          aria-label='Close navigation overlay'
          className={cn(
            'fixed inset-x-0 bottom-0 top-[69px] z-[210] bg-slate-950/45 transition duration-300 sm:top-[77px]',
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          )}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={cn(
            'fixed bottom-0 right-0 top-[69px] z-[220] flex h-[calc(100dvh-69px)] w-full max-w-[20rem] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out sm:top-[77px] sm:h-[calc(100dvh-77px)]',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          aria-hidden={!isOpen}
        >
          <div className='border-b border-slate-100 px-5 py-4'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand-700'>
              Menu
            </p>
          </div>

          <nav className='flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-5'>
            <div className='grid gap-2'>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition',
                    isActivePath(item.href)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className='mt-auto grid gap-3 border-t border-slate-100 pt-4'>
              <a
                href={`tel:${siteConfig.phone}`}
                className='inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700'
              >
                <Phone className='h-4 w-4' />
                Call {siteConfig.phone}
              </a>
              <Link
                href='/appointment'
                onClick={() => setIsOpen(false)}
                className='inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white'
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div aria-hidden='true' className='h-[69px] sm:h-[77px]' />
    </>
  );
}
