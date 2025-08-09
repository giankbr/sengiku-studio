'use client';

import { useEffect, useRef } from 'react';
// Lazy-load GSAP on client to avoid SSR issues
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.footer-content',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.footer-content',
              start: 'top 90%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, footerRef);
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer ref={footerRef} className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col gap-12">
          {/* Top section with logo and info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Sengiku Studio</h2>
              <p className="text-muted-foreground max-w-md mb-6">
                We transform ideas into impactful experiences. Our creative design agency specializes in graphic design, product design, and illustration.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <span className="font-medium">Be</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <span className="text-lg">◎</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <span className="text-lg">◼</span>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">+1 891 989-11-91</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">hello@sengikustudio.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    2372 Westheimer Rd,
                    <br />
                    Jakarta, Indonesia 85485
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with copyright and back to top */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">© {new Date().getFullYear()} Sengiku Studio. All rights reserved.</p>

            <button onClick={scrollToTop} className="p-3 rounded-full border border-border hover:bg-muted transition-colors" aria-label="Back to top">
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
