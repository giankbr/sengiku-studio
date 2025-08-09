'use client';

import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    items: ['Next.js', 'React', 'Vue.js', 'WordPress', 'Tailwind CSS', 'Full-Stack'],
    image: '/placeholder.svg?height=300&width=300',
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Solutions',
    items: ['Shopify', 'WooCommerce', 'Custom Stores', 'Payment Integration', 'Inventory Management'],
    image: '/placeholder.svg?height=300&width=600',
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    items: ['API Development', 'Node.js', 'Python', 'Database Design', 'Serverless Functions', 'CMS Integration'],
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    items: ['Legacy System Migration', 'Cloud Deployment', 'DevOps', 'Microservices', 'Performance Optimization'],
    image: '/placeholder.svg?height=300&width=500',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Animate section title
        gsap.fromTo(
          '.services-title',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: '.services-title',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate service items
        gsap.utils.toArray('.service-item').forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.2,
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }, sectionRef);
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  // Animation for service image on hover
  useEffect(() => {
    let isMounted = true;
    (async () => {
      if (activeService !== null) {
        const { gsap } = await import('gsap');
        if (!isMounted) return;
        gsap.fromTo(`.service-image-${activeService}`, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [activeService]);

  return (
    <section ref={sectionRef} id="services" aria-labelledby="services-heading" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 id="services-heading" className="services-title text-4xl md:text-5xl lg:text-6xl font-bold mb-12 flex items-center">
          Our <span className="italic ml-3 font-normal">Services</span>
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="service-item border-t border-border pt-8" onMouseEnter={() => setActiveService(index)} onMouseLeave={() => setActiveService(null)}>
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl md:text-4xl font-bold">{service.title}</h3>
                <button className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              {/* Service image that appears on hover */}
              <div className={`mb-8 transition-all duration-300 ${activeService === index ? 'block' : 'hidden'}`}>
                <img src={service.image || '/placeholder.svg'} alt={`${service.title} service showcase image`} className={`service-image-${index} rounded-md w-full max-w-md object-cover opacity-0`} />
              </div>

              <ul className="flex flex-wrap gap-4" aria-label="Technologies and deliverables">
                {service.items.map(
                  (item, i) =>
                    item && (
                      <li key={i} className="px-4 py-2 rounded-full bg-muted text-sm hover:bg-primary/10 transition-colors cursor-pointer">
                        {item}
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
