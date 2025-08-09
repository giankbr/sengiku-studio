'use client';

import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero elements
      gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' });

      gsap.fromTo('.hero-subtitle', { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' });

      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power2.out' });

      gsap.fromTo('.hero-social', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1, ease: 'power2.out' });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center pt-24 pb-16 border-b border-border bg-page">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-14">
            <h1 className="hero-title section-header mb-6">
              Break Out
              <br />
              The <span className="italic font-normal">Square Space.</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto md:mx-0">
              Build fast, modern, and scalable websites that empower your brand online. We turn technical complexity into seamless digital experiences.
            </p>

            <div className="hero-cta flex flex-col md:flex-row items-center gap-4 mt-8 justify-center md:justify-start">
              <Link href="#contact">
                <Button className="rounded-full px-6 shadow-sm">Let's Talk</Button>
              </Link>
              <Link href="#portfolio">
                <Button variant="outline" className="rounded-full px-6">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-social flex flex-wrap justify-center md:justify-start gap-4 mt-16">
            <SocialButton label="Be" />
            <SocialButton icon="dribbble" />
            <SocialButton icon="twitter" />
            <SocialButton icon="instagram" />
          </div>

          <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span className="hidden md:inline">/</span>
            <a href="#" className="hover:text-foreground transition-colors">
              About Us
            </a>
            <span className="hidden md:inline">/</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <span className="hidden md:inline">/</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Services
            </a>
            <span className="hidden md:inline">/</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ label, icon }: { label?: string; icon?: string }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
      {label && <span className="font-medium">{label}</span>}
      {icon === 'dribbble' && <span className="text-lg">◎</span>}
      {icon === 'twitter' && <span className="text-lg">𝕏</span>}
      {icon === 'instagram' && <span className="text-lg">◼</span>}
    </a>
  );
}
