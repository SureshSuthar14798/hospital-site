import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlogCard } from '@/components/ui/blog-card';
import { blogPosts } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return buildMetadata({
      title: 'Article not found',
      description: 'Health article not found.',
      path: `/blog/${params.slug}`
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div className='page-shell section-space space-y-14'>
      <article className='mx-auto max-w-4xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>
          {post.category} • {post.readingTime}
        </p>
        <h1 className='mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl'>
          {post.title}
        </h1>
        <p className='mt-4 text-sm text-slate-500'>Published on {post.date}</p>
        <div className='mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft'>
          <Image src={post.cover} alt={post.title} width={1200} height={700} className='h-auto w-full rounded-[1.5rem]' priority />
        </div>
        <div className='mt-10'>
          {post.content.map((paragraph) => (
            <p key={paragraph} className='mb-6 text-base leading-8 text-slate-700'>
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <section>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-brand-600'>More articles</p>
            <h2 className='mt-3 text-3xl font-semibold text-ink'>Keep reading</h2>
          </div>
          <Link href='/blog' className='hidden text-sm font-semibold text-brand-700 lg:inline-flex'>
            Visit blog
          </Link>
        </div>
        <div className='mt-10 grid gap-6 lg:grid-cols-2'>
          {relatedPosts.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
      </section>
    </div>
  );
}