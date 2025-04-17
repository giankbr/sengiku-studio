'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: 'Gian Prasetyo',
    role: 'Founder & Technical Director',
    bio: 'With over 15 years of experience in web development, Gian leads our technical strategy and ensures every project meets our high standards of performance and innovation.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Anindita Wijaya',
    role: 'Lead Frontend Developer',
    bio: 'Anindita specializes in creating responsive, accessible interfaces with modern frameworks like React, Vue, and Angular.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Budi Santoso',
    role: 'Senior Backend Developer',
    bio: 'Budi architects robust backend systems with expertise in Node.js, Python, and database optimization.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Gianna Putri',
    role: 'DevOps Engineer',
    bio: 'Gianna ensures smooth deployment pipelines and maintains our cloud infrastructure for optimal performance and security.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Dian Permata',
    role: 'UI/UX Developer',
    bio: 'Dian bridges design and development, implementing responsive interfaces with meticulous attention to user experience.',
    image: '/placeholder.svg?height=400&width=400',
  },
  {
    name: 'Gianluigi Hartono',
    role: 'Project Manager',
    bio: 'Gianluigi oversees our web projects from planning to launch, ensuring seamless communication and on-time delivery.',
    image: '/placeholder.svg?height=400&width=400',
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

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });

      // Animate team members
      gsap.utils.toArray('.team-member').forEach((member: any, i) => {
        gsap.fromTo(
          member,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 + i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: member,
              start: 'top 85%',
            },
          }
        );
      });

      // Animate values
      gsap.utils.toArray('.value-item').forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="italic font-normal">Sengiku Studio</span>
            </h1>
            <p className="fade-in text-xl text-muted-foreground mb-8">
              We are a full-stack web development studio based in Jakarta, Indonesia, dedicated to building high-performance, scalable web applications that drive business growth.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Sengiku Studio began as a small team of passionate developers with a shared vision: to create web experiences that matter. What started as a three-person operation
                  has grown into a diverse team of technical professionals serving clients across the globe.
                </p>
                <p>
                  Our name, Sengiku, draws inspiration from the Japanese concept of "sen" (線) meaning line, and "giku" (菊) representing chrysanthemum – symbolizing both structured code and beautiful
                  experiences. This duality reflects our approach to web development: technical excellence combined with outstanding user interfaces.
                </p>
                <p>Today, we continue to push technological boundaries, always seeking new ways to elevate digital experiences through innovative, performance-driven web solutions.</p>
              </div>
            </div>
            <div className="fade-in order-first md:order-last">
              <img src="/placeholder.svg?height=600&width=800" alt="Sengiku Studio office" className="rounded-lg w-full" />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="value-item bg-muted dark:bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="fade-in text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our diverse team of web developers and engineers brings together expertise across the full development stack to deliver exceptional digital solutions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member group">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src={member.image || '/placeholder.svg'} alt={member.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Trusted By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="fade-in flex justify-center">
                  <img src="/placeholder-logo.svg" alt={`Client logo ${index + 1}`} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="fade-in bg-muted dark:bg-zinc-900 rounded-lg p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to build your next web project?</h2>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your digital vision to life. Our team is ready to create a fast, scalable, and user-friendly web solution for your business.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
