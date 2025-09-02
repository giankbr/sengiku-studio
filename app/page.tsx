'use client';

import ContactSection from '@/components/contact-section';
import FaqSection from '@/components/faq-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import PortfolioSection from '@/components/portfolio-section';
import PricingSection from '@/components/pricing-section';
import ServicesSection from '@/components/services-section';
import { useEffect, useRef } from 'react';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo('.fade-in', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' });

        gsap.utils.toArray('.section').forEach((section: any) => {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
              gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
              });
            },
            onLeaveBack: () => {
              gsap.to(section, {
                opacity: 0.8,
                y: 20,
                duration: 0.8,
                ease: 'power2.out',
              });
            },
          });
        });
      }, mainRef);
    })();
    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen bg-page">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <FaqSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
