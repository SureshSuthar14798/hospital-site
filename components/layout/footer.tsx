import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

import { siteConfig } from '@/lib/data';

export function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr,1fr,1fr] lg:px-8'>
        <div>
          <div className='inline-flex overflow-hidden'>
            <Image
              src='/images/vrinda-logo.png'
              alt='Vrinda Hospital logo'
              width={260}
              height={92}
              className='h-16 w-auto object-contain'
            />
          </div>
          <p className='mt-4 max-w-xl text-base leading-6 text-slate-600'>
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-ink'>Quick Links</h3>
          <div className='mt-4 grid gap-3 text-sm grid-flow-col lg:grid-flow-row text-slate-600'>
            <Link href='/about'>About</Link>
            <Link href='/doctors'>Doctors</Link>
            <Link href='/services'>Services</Link>
            <Link href='/appointment'>Appointment</Link>
            <Link href='/faq'>FAQ</Link>
          </div>
        </div>

        <div>
          <h3 className='text-lg font-semibold text-ink'>Contact</h3>
          <div className='mt-4 grid gap-4 text-sm text-slate-600'>
            <div className='flex items-start gap-3'>
              <MapPin className='mt-1 min-w-4 h-4 w-4 text-brand-600' />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}
              </span>
            </div>
            <a href={`tel:${siteConfig.phone}`} className='flex items-center gap-3'>
              <Phone className='min-w-4 h-4 w-4 text-brand-600' />
              <span>{siteConfig.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className='flex items-center gap-3'>
              <Mail className='min-w-4 h-4 w-4 text-brand-600' />
              <span>{siteConfig.email}</span>
            </a>
            <div className='flex items-start gap-3'>
              <Clock3 className='mt-1 min-w-4 h-4 w-4 text-brand-600' />
              <div>
                {siteConfig.workingHours.map((slot) => (
                  <p key={slot.days}>
                    {slot.days}: {slot.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}