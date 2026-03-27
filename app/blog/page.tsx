import { BlogCard } from '@/components/ui/blog-card';
import { FadeIn } from '@/components/ui/fade-in';
import { PageHero } from '@/components/ui/page-hero';
import { blogPosts, pageHeroBackgrounds } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blog & Health Tips',
  description: 'Read SEO-friendly health articles on heart care, bone health, dental care, and preventive wellness.',
  path: '/blog'
});

export default function BlogPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Health tips'
        title='Helpful medical content built for trust, clarity, and search visibility'
        description='The blog page uses card-based article previews, readable summaries, and detail pages that are structured for patient education and SEO.'
        backgroundImage={pageHeroBackgrounds.blog}
      />
      <div className='grid gap-6 lg:grid-cols-3'>
        {blogPosts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.06}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
