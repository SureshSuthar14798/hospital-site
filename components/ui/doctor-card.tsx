import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Languages, Star } from 'lucide-react';

import type { Doctor } from '@/lib/data';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className='group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft'>
      <div className='relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-emerald-100'>
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className='object-cover transition duration-300 group-hover:scale-[1.03]'
        />
      </div>
      <div className='space-y-4 p-6'>
        <div>
          <p className='text-sm font-medium text-brand-600'>
            {doctor.specialization}
          </p>
          <h3 className='mt-1 text-xl font-semibold text-ink'>{doctor.name}</h3>
        </div>
        <p className='text-sm leading-5 text-slate-600'>{doctor.summary}</p>
        <div className='space-y-3 text-sm text-slate-600'>
          <div className='flex items-center gap-2'>
            <Star className='h-4 w-4 text-amber-400' fill='currentColor' />
            <span>
              {doctor.rating} rating • {doctor.reviewCount} reviews
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <CalendarDays className='h-4 w-4 text-brand-500' />
            <span>{doctor.availability}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Languages className='h-4 w-4 text-brand-500' />
            <span>{doctor.languages.join(', ')}</span>
          </div>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Link
            href={`/doctors/${doctor.slug}`}
            className='inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700'
          >
            View Profile
          </Link>
          <Link
            href={`/appointment?doctor=${doctor.slug}`}
            className='inline-flex items-center rounded-full border border-brand-200 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-brand-50'
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </article>
  );
}
