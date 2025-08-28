'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We build fast, responsive, and user-friendly websites using the latest web technologies to help you grow.',
      image: '/placeholder.svg?height=600&width=400',
      items: ['Next.js', 'React', 'Vue.js', 'WordPress', 'Tailwind CSS', 'Full-Stack'],
    },
    {
      id: 'e-commerce',
      title: 'E-commerce Solutions',
      description: 'Custom online stores that drive sales and provide seamless shopping experiences across devices.',
      image: '/placeholder.svg?height=600&width=400',
      items: ['Shopify', 'WooCommerce', 'Custom Stores', 'Payment Integration', 'Inventory Management'],
    },
    {
      id: 'backend-systems',
      title: 'Backend Systems',
      description: 'Robust, scalable backend systems that power your digital products with reliability and speed.',
      image: '/placeholder.svg?height=600&width=400',
      items: ['API Development', 'Node.js', 'Python', 'Database Design', 'Serverless Functions', 'CMS Integration'],
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Modernize your digital infrastructure for improved efficiency, performance, and long-term growth.',
      image: '/placeholder.svg?height=600&width=400',
      items: ['Legacy Migration', 'Cloud Deployment', 'DevOps', 'Microservices', 'Performance Optimization'],
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20 mt-10">
        <div className="container mx-auto px-4">
          {/* Header (match portfolio style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Services<span className="text-primary">.</span>
            </h1>
            <div>
              <p className="text-base md:text-lg text-muted-foreground">We design, build, and scale modern web products. Explore our capabilities and see how we can help your business grow.</p>
              <div className="mt-4">
                <Link href="#capabilities" className="inline-flex items-center gap-2 text-sm text-primary">
                  Explore Sengiku Studio Services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services - alternating layout (match portfolio sections) */}
          <div id="capabilities" className="space-y-16">
            {services.map((service, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div key={service.id} className="border-t pt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                    <Link href={`/services/${service.id}`} className={`${isImageLeft ? '' : 'md:order-2'} group relative overflow-hidden rounded-xl border bg-card`}>
                      <img
                        src={service.image || '/placeholder.svg'}
                        alt={service.title}
                        className="w-full h-full object-cover aspect-video md:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center transition-all translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className={`${isImageLeft ? '' : 'md:order-1'}`}>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{service.title}</h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-prose">{service.description}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.items.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full border bg-muted/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section (match portfolio) */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-y py-14">
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Let's Work
                <br />
                Together
              </h3>
              <p className="mt-6 text-muted-foreground max-w-md">Get in touch for a no obligation casual chat to discuss your needs. Our door is always open for a good cup of coffee.</p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild variant="outline" size="icon" className="rounded-full w-16 h-16">
                <Link href="/contact">
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
