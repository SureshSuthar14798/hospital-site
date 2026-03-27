import type { MetadataRoute } from 'next';

import { blogPosts, doctors, services, siteConfig } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/doctors',
    '/services',
    '/appointment',
    '/contact',
    '/testimonials',
    '/blog',
    '/faq',
    '/admin',
    '/dashboard'
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8
  }));

  const doctorRoutes = doctors.map((doctor) => ({
    url: `${siteConfig.siteUrl}/doctors/${doctor.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...doctorRoutes, ...serviceRoutes, ...blogRoutes];
}
