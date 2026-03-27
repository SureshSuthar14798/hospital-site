import Image from 'next/image';
import Link from 'next/link';

import type { BlogPost } from '@/lib/data';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className='overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft'>
      <div className='relative aspect-[16/10] overflow-hidden'>
        <Image src={post.cover} alt={post.title} fill className='object-cover' />
      </div>
      <div className='space-y-4 p-6'>
        <div className='flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600'>
          <span>{post.category}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className='text-xl font-semibold leading-snug text-ink'>
          {post.title}
        </h3>
        <p className='text-sm leading-5 text-slate-600'>{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className='inline-flex items-center rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100'
        >
          Read article
        </Link>
      </div>
    </article>
  );
}
