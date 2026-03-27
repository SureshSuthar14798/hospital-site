import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '@/components/forms/contact-form';
import { PageHero } from '@/components/ui/page-hero';
import { pageHeroBackgrounds, siteConfig } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Contact Vrinda Superspeciality Hospital by phone, email, map location, or online enquiry form.',
  path: '/contact'
});

export default function ContactPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Contact us'
        title='Reach the hospital by call, message, map, or direct enquiry'
        description='The contact page combines online forms, working hours, click-to-call actions, and Google Maps embedding for a complete patient access experience.'
        backgroundImage={pageHeroBackgrounds.contact}
      />

      <div className='grid gap-8 lg:grid-cols-[0.95fr,1.05fr]'>
        <div className='space-y-6'>
          <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
            <div className='grid gap-5 text-sm text-slate-600'>
              <div className='flex items-start gap-4'>
                <MapPin className='mt-1 min-w-5 h-5 w-5 text-brand-600' />
                <span>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}</span>
              </div>
              <a href={`tel:${siteConfig.phone}`} className='flex items-center gap-4'>
                <Phone className='min-w-5 h-5 w-5 text-brand-600' />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className='flex items-center gap-4'>
                <Mail className='min-w-5 h-5 w-5 text-brand-600' />
                <span>{siteConfig.email}</span>
              </a>
              <div className='flex items-start gap-4'>
                <Clock3 className='mt-1 min-w-5 h-5 w-5 text-brand-600' />
                <div>
                  {siteConfig.workingHours.map((slot) => (
                    <p key={slot.days}>{slot.days}: {slot.hours}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card'>
            <iframe
              title='Hospital map location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68510.26321508063!2d72.995602215605!3d26.250690981122776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418dcf31dd8161%3A0x74bf1943a5ffb17e!2sVRINDA%20Face%20%26%20Superspeciality%20Hospital!5e1!3m2!1sen!2sus!4v1774609911351!5m2!1sen!2sus'
              className='h-[320px] w-full rounded-[1.5rem] border-0'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
