import { TestimonialCard } from '@/components/ui/testimonial-card';
import { FadeIn } from '@/components/ui/fade-in';
import { PageHero } from '@/components/ui/page-hero';
import { pageHeroBackgrounds, testimonials } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Testimonials',
  description: 'Read patient reviews and experiences across major departments at Vrinda Superspeciality Hospital.',
  path: '/testimonials'
});

export default function TestimonialsPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Patient feedback'
        title='Real reviews that help future patients feel confident'
        description='Testimonial layouts are designed for trust-building with star ratings, department context, and readable feedback cards.'
        backgroundImage={pageHeroBackgrounds.testimonials}
      />
      <div className='grid gap-6 md:grid-cols-2'>
        {testimonials.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.06}>
            <TestimonialCard item={item} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
