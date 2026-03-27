import { DoctorsDirectory } from '@/components/sections/doctors-directory';
import { PageHero } from '@/components/ui/page-hero';
import { doctors, pageHeroBackgrounds } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Doctors',
  description: 'Browse specialist doctors, review qualifications and availability, and book appointments online.',
  path: '/doctors'
});

export default function DoctorsPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Doctors'
        title='Explore specialists by care area, timing, and experience'
        description='The doctors directory is built with search and filter support so patients can quickly find the right specialist and move straight into appointment booking.'
        backgroundImage={pageHeroBackgrounds.doctors}
      />
      <DoctorsDirectory doctors={doctors} />
    </div>
  );
}
