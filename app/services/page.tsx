'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build fast, responsive, and user-friendly websites using the latest web technologies.',
    image: '/placeholder.svg?height=400&width=600',
    items: ['Next.js', 'React', 'Vue.js', 'WordPress', 'Tailwind CSS', 'Full-Stack'],
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Solutions',
    description: 'We develop custom online stores that drive sales and provide seamless shopping experiences.',
    image: '/placeholder.svg?height=400&width=600',
    items: ['Shopify', 'WooCommerce', 'Custom Stores', 'Payment Integration', 'Inventory Management'],
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    description: 'We architect robust, scalable backend systems that power your digital products.',
    image: '/placeholder.svg?height=400&width=600',
    items: ['API Development', 'Node.js', 'Python', 'Database Design', 'Serverless Functions', 'CMS Integration'],
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'We help businesses modernize their digital infrastructure for improved efficiency and growth.',
    image: '/placeholder.svg?height=400&width=600',
    items: ['Legacy System Migration', 'Cloud Deployment', 'DevOps', 'Microservices', 'Performance Optimization'],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'We create custom web applications that solve complex business problems and streamline operations.',
    image: '/placeholder.svg?height=400&width=600',
    items: ['SaaS Products', 'Admin Dashboards', 'Customer Portals', 'Web Tools', 'Progressive Web Apps'],
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page title
      gsap.fromTo('.page-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });

      // Animate service items
      gsap.utils.toArray('.service-card').forEach((card: any, i) => {
        gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + i * 0.1, ease: 'power2.out' });
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
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="italic font-normal">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer comprehensive web development services to power your digital presence. From responsive websites to complex applications, we build solutions that drive results.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="service-card border-t border-border pt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.items.map((item, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-muted text-sm">
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="rounded-full group">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="order-first md:order-last">
                    <img src={service.image || '/placeholder.svg'} alt={service.title} className="w-full rounded-lg object-cover aspect-video" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to launch your web project?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Let's build something exceptional together. Our team of web specialists is ready to turn your ideas into reality.</p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Start Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
