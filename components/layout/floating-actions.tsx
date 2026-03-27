import { MessageCircleMore, PhoneCall } from 'lucide-react';

import { siteConfig } from '@/lib/data';
import Image from 'next/image';

export function FloatingActions() {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-end px-4 sm:px-6 lg:px-8'>
      <div className='pointer-events-auto flex flex-col gap-3'>
        <a
          href={`https://wa.me/${siteConfig.whatsappPhone}`}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-2 lg:px-3 lg:py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#128C7E]'
          aria-label='Open WhatsApp chat'
        >
          <Image src='/images/whatsapp-icon.png' alt='WhatsApp' width={20} height={20} className='w-6 h-6 lg:w-6 lg:h-6' />
          <span className='hidden sm:inline'>WhatsApp Chat</span>
        </a>
        <a
          href={`tel:${siteConfig.emergencyPhone}`}
          className='inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-3 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800 sm:px-4'
          aria-label='Call emergency support'
        >
          <PhoneCall className='h-4 w-4 shrink-0' />
          <span className='hidden sm:inline'>Emergency Call</span>
        </a>
      </div>
    </div>
  );
}