'use client';

import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const portfolioItems = [
  {
    title: 'PETSHOP',
    category: 'Mobile App Design',
    image: '/placeholder.svg?height=600&width=400',
    year: '2024',
  },
  {
    title: 'ARTECO',
    category: 'Brand Identity',
    image: '/placeholder.svg?height=600&width=400',
    year: '2023',
  },
  {
    title: 'NOMAD',
    category: 'Web Design',
    image: '/placeholder.svg?height=600&width=400',
    year: '2024',
  },
  {
    title: 'LUMINA',
    category: 'UI/UX Design',
    image: '/placeholder.svg?height=600&width=400',
    year: '2023',
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        '.portfolio-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.portfolio-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate portfolio items
      gsap.utils.toArray('.portfolio-item').forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
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

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="section-pad bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="portfolio-title section-header flex items-center">
              Our <span className="italic ml-3 font-normal">Work</span>
            </h2>
            <p className="section-subtitle mt-3">Selected projects and recent case studies from our studio.</p>
          </div>
          <Button variant="outline" className="rounded-full hidden md:flex">
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item relative overflow-hidden rounded-2xl group panel" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={item.image || '/placeholder.svg'} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Overlay that appears on hover */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-center text-white p-6">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                      <Plus className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.category}</p>
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="flex justify-between items-center mt-4 px-4 pb-4">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="rounded-full">
            View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
