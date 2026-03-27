'use client';

import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { useEffect, useState } from 'react';

import { FadeIn } from '@/components/ui/fade-in';
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

export function FeaturedDoctorsCarousel({ doctors }: { doctors: Doctor[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeDoctor = doctors[activeIndex];

  useEffect(() => {
    if (!doctors.length) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((current) => (current >= doctors.length ? 0 : current));
  }, [doctors.length]);

  useEffect(() => {
    if (doctors.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % doctors.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [doctors.length]);

  function goToIndex(index: number) {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (doctors.length <= 1) {
      return;
    }

    if (info.offset.x <= -swipeDistance || info.velocity.x <= -swipeVelocity) {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % doctors.length);
      return;
    }

    if (info.offset.x >= swipeDistance || info.velocity.x >= swipeVelocity) {
      setDirection(-1);
      setActiveIndex((current) => (current - 1 + doctors.length) % doctors.length);
    }
  }

  return (
    <>
      {activeDoctor ? (
        <div className='mt-10 space-y-4 md:hidden'>
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
                drag={doctors.length > 1 ? 'x' : false}
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

          {doctors.length > 1 ? (
            <div className='flex justify-center gap-2'>
              {doctors.map((doctor, index) => (
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

      <div className='mt-10 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3'>
        {doctors.map((doctor, index) => (
          <FadeIn key={doctor.slug} delay={index * 0.07}>
            <DoctorCard doctor={doctor} />
          </FadeIn>
        ))}
      </div>
    </>
  );
}
