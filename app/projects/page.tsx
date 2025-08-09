'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'UI/UX', 'Illustration'];

const projects = [
  {
    id: 'petshop-app',
    title: 'PETSHOP',
    category: 'Mobile App',
    description: "A comprehensive mobile app for pet owners to manage their pets' health, schedule vet appointments, and shop for pet supplies.",
    client: 'PetCare Inc.',
    year: '2024',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
  },
  {
    id: 'arteco-brand',
    title: 'ARTECO',
    category: 'Branding',
    description: 'Complete brand identity for an eco-friendly art supply company, including logo design, packaging, and digital assets.',
    client: 'Arteco Supplies',
    year: '2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
  },
  {
    id: 'nomad-website',
    title: 'NOMAD',
    category: 'Web Design',
    description: 'A responsive website for a travel blog focusing on off-the-beaten-path destinations and authentic experiences.',
    client: 'Nomad Explorers',
    year: '2024',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
  },
  {
    id: 'lumina-ux',
    title: 'LUMINA',
    category: 'UI/UX',
    description: 'User interface and experience design for a smart home control system, focusing on accessibility and intuitive interactions.',
    client: 'Lumina Tech',
    year: '2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
  },
  {
    id: 'verde-branding',
    title: 'VERDE',
    category: 'Branding',
    description: 'Brand identity for a sustainable fashion label, including logo, color palette, typography, and brand guidelines.',
    client: 'Verde Fashion',
    year: '2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
  },
  {
    id: 'pulse-app',
    title: 'PULSE',
    category: 'Mobile App',
    description: 'Fitness tracking app with personalized workout plans, nutrition guidance, and progress visualization.',
    client: 'Pulse Fitness',
    year: '2022',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
  },
  {
    id: 'horizon-website',
    title: 'HORIZON',
    category: 'Web Design',
    description: 'Corporate website for a renewable energy company, highlighting their innovative solutions and global impact.',
    client: 'Horizon Energy',
    year: '2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
  },
  {
    id: 'bloom-illustrations',
    title: 'BLOOM',
    category: 'Illustration',
    description: 'Series of botanical illustrations for a gardening app, featuring detailed plant drawings and care instructions.',
    client: 'Bloom Gardens',
    year: '2022',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
  },
];

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      if (!isMounted) return;
      ctx = gsap.context(() => {
        // Animate page title
        gsap.fromTo('.page-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });

        // Animate project items
        gsap.utils.toArray('.project-card').forEach((card: any, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2 + i * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
              },
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

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => activeCategory === 'All' || project.category === activeCategory);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="page-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5">
              Work that <span className="text-primary">solves problems</span>, builds brands, and <span className="text-primary">drives growth</span>.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">A curated selection of recent projects across product, web, and brand. Filter by category to explore specific work.</p>
          </div>

          {/* Filter Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} className="rounded-full" onClick={() => setActiveCategory(category)}>
                {category}
              </Button>
            ))}
          </div>

          {/* Showcase */}
          {activeCategory === 'All' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                Project <span className="text-primary">Showcase</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="project-card group">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border bg-card" onMouseEnter={() => setHoveredProject(index)} onMouseLeave={() => setHoveredProject(null)}>
                        <img src={project.image || '/placeholder.svg'} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                        {/* Overlay tags + arrow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute left-4 bottom-4 flex gap-2">
                          <span className="px-2 py-1 text-[11px] rounded-full bg-white/90 text-black">{project.category}</span>
                          <span className="px-2 py-1 text-[11px] rounded-full bg-white/60 text-black">{project.year}</span>
                        </div>
                        <div className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex justify-between items-center mt-4 px-1">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{activeCategory === 'All' ? 'All Projects' : activeCategory}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="project-card group">
                  <div
                    className="relative aspect-square overflow-hidden rounded-2xl border bg-card"
                    onMouseEnter={() => setHoveredProject(index + 100)} // Offset to avoid conflict with featured projects
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img src={project.image || '/placeholder.svg'} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    {/* Overlay tags + arrow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute left-3 bottom-3 flex gap-2">
                      <span className="px-2 py-1 text-[11px] rounded-full bg-white/90 text-black">{project.category}</span>
                      <span className="px-2 py-1 text-[11px] rounded-full bg-white/60 text-black">{project.year}</span>
                    </div>
                    <div
                      className={`absolute right-3 bottom-3 w-9 h-9 rounded-full bg-white/90 text-black flex items-center justify-center transition-all ${
                        hoveredProject === index + 100 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Info below image */}
                  <div className="flex justify-between items-center mt-3 px-1">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 py-12 px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's collaborate to bring your vision to life. Our team is ready to help you create something amazing.</p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
