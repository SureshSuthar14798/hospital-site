import { AppointmentForm } from '@/components/forms/appointment-form';
import { PageHero } from '@/components/ui/page-hero';
import { doctors, pageHeroBackgrounds, services } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Appointment Booking',
  description: 'Book a hospital appointment online by selecting department, doctor, date, time, and symptoms.',
  path: '/appointment'
});

export default function AppointmentPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Book appointment'
        title='A mobile-first booking form built to reduce patient friction'
        description='Patients can choose a department, select the right doctor, and submit their preferred slot with simple validation and confirmation feedback.'
        backgroundImage={pageHeroBackgrounds.appointment}
      />
      <AppointmentForm doctors={doctors} services={services} />
    </div>
  );
}
