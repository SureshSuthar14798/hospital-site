'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Wait for the page to be fully loaded
    const handleLoad = () => {
      // Add a small delay so the animation feels smooth
      setTimeout(() => {
        setIsFading(true);
        // Remove the loader after fade-out animation completes
        setTimeout(() => setIsLoading(false), 600);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className='flex flex-col items-center gap-6'>
        {/* Logo with pulse animation */}
        <div className='loader-logo-wrapper'>
          <Image
            src='/images/vrinda-logo.png'
            alt='Vrinda Hospital'
            width={160}
            height={60}
            priority
            className='loader-logo'
          />
        </div>

        {/* Animated dots */}
        <div className='flex items-center gap-1.5'>
          <span className='loader-dot' style={{ animationDelay: '0ms' }} />
          <span className='loader-dot' style={{ animationDelay: '150ms' }} />
          <span className='loader-dot' style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
