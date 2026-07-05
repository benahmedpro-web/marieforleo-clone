'use client';

import { useEffect } from 'react';

function scrollToHash(hash: string) {
  const id = hash.replace('#', '');
  if (!id) return;
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

export function HashScrollHandler() {
  useEffect(() => {
    // Next.js resets scroll position on mount, overriding the browser's
    // native jump-to-anchor behavior. Re-apply it once the DOM has settled.
    if (window.location.hash) {
      const raf = requestAnimationFrame(() => scrollToHash(window.location.hash));
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute('href') || '';
      const id = hash.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', hash);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
