'use client';
import { useEffect } from 'react';

export default function GoogleAnalytics({ GA_ID }: { GA_ID: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    (window as any).gtag = function () {
      window.dataLayer.push(arguments);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA_ID);
  }, [GA_ID]);

  return null;
}
