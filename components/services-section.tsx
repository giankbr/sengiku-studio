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
  const [activeService, setActiveService] = useState<number>(0);

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

  // Animation for service image on change
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      if (!isMounted) return;
      gsap.fromTo(`.service-image-${activeService}`, { opacity: 0, y: 8, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out' });
    })();
    return () => {
      isMounted = false;
    };
  }, [activeService]);

  return (
    <section ref={sectionRef} id="services" aria-labelledby="services-heading" className="section-pad subtle-section-gradient">
      <div className="container mx-auto px-4">
        <h2 id="services-heading" className="services-title section-header mb-3 flex items-center">
          Our <span className="italic ml-3 font-normal">Services</span>
        </h2>
        <p className="section-subtitle mb-10">Capabilities we use to design, build, and scale digital products for your business.</p>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: list */}
          <div className="lg:col-span-6">
            <div className="panel divide-y">
              {services.map((service, index) => {
                const isActive = activeService === index;
                return (
                  <button
                    key={service.id}
                    className={`service-item w-full text-left px-6 md:px-8 py-6 transition-colors focus:outline-none ${isActive ? 'bg-muted/50' : 'hover:bg-muted/40'}`}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    aria-selected={isActive}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.items.slice(0, 4).map((chip) => (
                            <span key={chip} className="px-3 py-1 rounded-full bg-muted text-xs">
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${isActive ? 'bg-primary text-primary-foreground' : ''}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: sticky preview */}
          <div className="lg:col-span-6">
            <div className="sticky top-24">
              <div className="panel overflow-hidden p-6 md:p-8">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-6">
                  {services.map((s, i) => (
                    <img
                      key={s.id}
                      src={s.image || '/placeholder.svg'}
                      alt={`${s.title} preview`}
                      className={`service-image-${i} w-full h-full object-cover transition-opacity duration-300 ${activeService === i ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                    />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{services[activeService].title}</h3>
                <p className="text-sm text-muted-foreground mb-4">What you get</p>
                <ul className="flex flex-wrap gap-2">
                  {services[activeService].items.map((item) => (
                    <li key={item} className="px-3 py-1 rounded-full bg-muted text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
