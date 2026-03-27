'use client';

import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

import { DoctorCard } from '@/components/ui/doctor-card';
import type { Doctor } from '@/lib/data';

const swipeDistance = 90;
const swipeVelocity = 650;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 42 : -42
  }),
  center: {
    x: 0
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -42 : 42
  })
};

export function DoctorsDirectory({ doctors }: { doctors: Doctor[] }) {
  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const specialties = ['All', ...new Set(doctors.map((doctor) => doctor.specialization))];
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesQuery = [doctor.name, doctor.specialization, doctor.summary]
      .join(' ')
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesSpecialty = specialty === 'All' || doctor.specialization === specialty;

    return matchesQuery && matchesSpecialty;
  });

  const activeDoctor = filteredDoctors[activeIndex];

  useEffect(() => {
    if (!filteredDoctors.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((current) => (current >= filteredDoctors.length ? 0 : current));
  }, [filteredDoctors.length]);

  useEffect(() => {
    if (filteredDoctors.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % filteredDoctors.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [filteredDoctors.length]);

  function goToIndex(index: number) {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (filteredDoctors.length <= 1) {
      return;
    }

    if (info.offset.x <= -swipeDistance || info.velocity.x <= -swipeVelocity) {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % filteredDoctors.length);
      return;
    }

    if (info.offset.x >= swipeDistance || info.velocity.x >= swipeVelocity) {
      setDirection(-1);
      setActiveIndex((current) => (current - 1 + filteredDoctors.length) % filteredDoctors.length);
    }
  }

  return (
    <div className='space-y-8'>
      <div className='grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-card md:grid-cols-[2fr,1fr]'>
        <label className='flex items-center gap-3 rounded-full border border-slate-200 px-4 py-3'>
          <Search className='h-4 w-4 text-slate-400' />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search doctor, specialty, or care area'
            className='w-full bg-transparent text-sm outline-none'
          />
        </label>
        <label className='rounded-full border border-slate-200 px-4 py-3'>
          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className='w-full bg-transparent text-sm outline-none'
          >
            {specialties.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      {activeDoctor ? (
        <div className='space-y-4 md:hidden'>
          <div className='overflow-hidden px-1'>
            <AnimatePresence mode='wait' initial={false} custom={direction}>
              <motion.div
                key={activeDoctor.slug}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                drag={filteredDoctors.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleDragEnd}
                className='cursor-grab touch-pan-y active:cursor-grabbing'
              >
                <div className='px-1 pb-1'>
                  <DoctorCard doctor={activeDoctor} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {filteredDoctors.length > 1 ? (
            <div className='flex justify-center gap-2'>
              {filteredDoctors.map((doctor, index) => (
                <button
                  key={doctor.slug}
                  type='button'
                  onClick={() => goToIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeIndex === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-brand-200'
                  }`}
                  aria-label={`Show doctor ${index + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      <div className='hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3'>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>

      {!filteredDoctors.length ? (
        <div className='rounded-[1.5rem] border border-dashed border-brand-200 bg-brand-50 px-6 py-10 text-center text-sm text-brand-700'>
          No doctors matched your search. Try another specialty or broader keyword.
        </div>
      ) : null}
    </div>
  );
}

