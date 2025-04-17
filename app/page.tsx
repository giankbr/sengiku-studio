'use client';

import BlogSection from '@/components/blog-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import PortfolioSection from '@/components/portfolio-section';
import ServicesSection from '@/components/services-section';
import StatsSection from '@/components/stats-section';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize animations
    const ctx = gsap.context(() => {
      // Fade in the page
      gsap.fromTo('.fade-in', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power2.out' });

      // Animate sections on scroll
      gsap.utils.toArray('.section').forEach((section: any, i) => {
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

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
