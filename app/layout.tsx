import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Sora } from 'next/font/google';

import './globals.css';

import { Footer } from '@/components/layout/footer';
import { FloatingActions } from '@/components/layout/floating-actions';
import { Header } from '@/components/layout/header';
import { PageLoader } from '@/components/layout/page-loader';
import { siteConfig } from '@/lib/data';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang='en' className={`${plusJakarta.variable} ${sora.variable}`}>
      <body className='font-[var(--font-plus-jakarta)] text-ink'>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy='afterInteractive' />
            <Script id='ga-script' strategy='afterInteractive'>
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <div className='relative min-h-screen'>
          <PageLoader />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}