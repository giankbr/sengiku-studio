'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Highlighted principal profiles for the About page layout
const principals = [
  {
    name: 'Gian Prasetyo',
    role: 'Founder & Principal',
    bio: 'Principal engineer and co-founder who oversees technical direction and shapes our approach to building scalable, impactful products.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Gianlagi Wijaya',
    role: 'Founder & Principal',
    bio: 'Design-minded principal focused on front-end architecture and product experiences that are beautiful, fast, and accessible.',
    image: '/placeholder-user.jpg',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay at the forefront of web technologies, constantly exploring new tools and approaches to build better digital experiences.',
  },
  {
    title: 'Performance',
    description: 'We optimize every line of code to ensure our websites and applications are fast, responsive, and efficient.',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients throughout the development process, ensuring their vision is realized in every pixel and function.',
  },
  {
    title: 'Reliability',
    description: 'We build robust solutions that are secure, scalable, and maintainable for the long term.',
  },
];

const aboutStats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Industry Awards' },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Generic fade for section elements
        gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out' });

        // Image chips / cards
        gsap.utils.toArray('.photo-chip').forEach((chip: any, i) => {
          gsap.fromTo(
            chip,
            { opacity: 0, y: 24, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: 0.1 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: chip, start: 'top 85%' },
            }
          );
        });

        // Values
        gsap.utils.toArray('.value-item').forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.1 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 85%' },
            }
          );
        });

        // Principals cards
        gsap.utils.toArray('.principal-card').forEach((card: any, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.15 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 85%' },
            }
          );
        });
      }, pageRef);
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero: Oversized heading + image chips + philosophy */}
          <section className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Big text */}
              <div className="lg:col-span-1">
                <h1 className="fade-in text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight">
                  ABOUT
                  <br className="hidden sm:block" />
                  US
                </h1>
                <p className="fade-in mt-6 text-muted-foreground max-w-md">
                  Modern elegance in code. We craft fast, dependable, and beautiful digital products with clean architecture and high-quality standards.
                </p>
              </div>

              {/* Image chips */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="photo-chip overflow-hidden rounded-2xl">
                      <img src={`/placeholder.jpg?height=340&width=${i === 2 ? 520 : 420}`} alt="Studio work" className="w-full h-40 md:h-48 object-cover" />
                    </div>
                  ))}
                </div>
                <div className="fade-in bg-muted dark:bg-zinc-900 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">Our Philosophy</h3>
                  <p className="text-muted-foreground">
                    At Sengiku Studio, we believe in creating luxurious-feeling, highly personalized digital environments that reflect our clients’ identity. Every interface decision is grounded in
                    performance, accessibility, and timeless aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-16 md:mb-20">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Sengiku Studio began as a small team of passionate developers with a shared vision: to create web experiences that matter. Today we partner with brands around the
                  world, delivering technology that balances precision engineering and thoughtful design.
                </p>
                <p>
                  The name Sengiku draws from Japanese philosophy—lines and chrysanthemums—symbolizing structured systems and enduring beauty. This duality shapes how we build: robust foundations,
                  refined interfaces.
                </p>
              </div>
            </div>
            <div className="fade-in order-first md:order-last">
              <img src="/placeholder.jpg?height=600&width=800" alt="Sengiku Studio office" className="rounded-xl w-full object-cover" />
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16 md:mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="value-item bg-muted dark:bg-zinc-900 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Principals */}
          <section className="mb-16 md:mb-20">
            <h2 className="fade-in text-3xl font-bold mb-4 text-center">Meet the Principals</h2>
            <p className="fade-in text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              A hands-on duo who lead strategy, design, and engineering to deliver outcomes that move the business needle.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {principals.map((person, i) => (
                <div key={i} className="principal-card bg-muted/50 dark:bg-zinc-900/60 rounded-2xl p-6 md:p-8">
                  <div className="grid sm:grid-cols-3 gap-6 items-center">
                    <div className="sm:col-span-1 overflow-hidden rounded-2xl">
                      <img src={`${person.image}?height=640&width=640`} alt={person.name} className="w-full aspect-square object-cover" />
                    </div>
                    <div className="sm:col-span-2">
                      <h3 className="text-2xl font-semibold">{person.name}</h3>
                      <p className="text-primary text-sm mb-3">{person.role}</p>
                      <p className="text-muted-foreground">{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats strip */}
          <section className="mb-16 md:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-muted dark:bg-zinc-900 rounded-2xl p-6 md:p-8 text-center">
              {aboutStats.map((s, i) => (
                <div key={i} className="stat-item">
                  <div className="text-4xl font-bold">{s.value}</div>
                  <div className="text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Clients */}
          <section className="mb-16 md:mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Trusted By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="fade-in flex justify-center">
                  <img src="/placeholder-logo.svg" alt={`Client logo ${index + 1}`} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="fade-in bg-muted dark:bg-zinc-900 rounded-lg p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to build your next web project?</h2>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your digital vision to life. Our team is ready to create a fast, scalable, and user-friendly web solution for your business.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
