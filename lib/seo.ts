import type { Metadata } from 'next';

import { siteConfig } from '@/lib/data';

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = []
}: MetadataInput): Metadata {
  const absoluteUrl = new URL(path, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    keywords: [
      'hospital website',
      'medical care',
      'doctor appointment',
      'Vrinda Superspeciality Hospital',
      ...keywords
    ],
    alternates: {
      canonical: absoluteUrl
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: 'https://images.pexels.com/photos/21073473/pexels-photo-21073473.jpeg?auto=compress&cs=tinysrgb&w=1600',
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.pexels.com/photos/21073473/pexels-photo-21073473.jpeg?auto=compress&cs=tinysrgb&w=1600']
    }
  };
}

export function hospitalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: siteConfig.name,
    description: siteConfig.description,
    image: 'https://images.pexels.com/photos/21073473/pexels-photo-21073473.jpeg?auto=compress&cs=tinysrgb&w=1600',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'IN'
    },
    areaServed: 'India',
    url: siteConfig.siteUrl,
    medicalSpecialty: siteConfig.services.map((service) => service.title),
    openingHours: siteConfig.workingHours.map(
      (slot) => `${slot.days} ${slot.hours}`
    )
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
