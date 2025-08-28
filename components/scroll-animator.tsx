'use client';

import { useEffect } from 'react';

/**
 * Observes elements with `data-animate` and adds `is-visible` when intersecting.
 * Usage: add `data-animate` to any element. Optional `data-animate-delay` in ms.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const delayAttr = target.getAttribute('data-animate-delay');
            const delay = delayAttr ? parseInt(delayAttr, 10) : 0;
            if (delay > 0) {
              const timeoutId = window.setTimeout(() => {
                target.classList.add('is-visible');
              }, delay);
              // Store id in dataset to clear if needed
              (target as any).dataset.animateTimeoutId = String(timeoutId);
            } else {
              target.classList.add('is-visible');
            }
            // Once visible, stop observing this element for perf
            observer.unobserve(target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => {
        const id = (el as any).dataset.animateTimeoutId;
        if (id) window.clearTimeout(Number(id));
      });
      observer.disconnect();
    };
  }, []);

  return null;
}
