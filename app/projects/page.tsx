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
    date: 'June 30, 2024',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
    tags: ['Strategy', 'Design', 'Development'],
  },
  {
    id: 'arteco-brand',
    title: 'ARTECO',
    category: 'Branding',
    description: 'Complete brand identity for an eco-friendly art supply company, including logo design, packaging, and digital assets.',
    client: 'Arteco Supplies',
    year: '2023',
    date: 'December 4, 2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
    tags: ['Research', 'Brand System', 'Guidelines'],
  },
  {
    id: 'nomad-website',
    title: 'NOMAD',
    category: 'Web Design',
    description: 'A responsive website for a travel blog focusing on off-the-beaten-path destinations and authentic experiences.',
    client: 'Nomad Explorers',
    year: '2024',
    date: 'August 19, 2024',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
    tags: ['Product Roadmap', 'Design', 'Dev'],
  },
  {
    id: 'lumina-ux',
    title: 'LUMINA',
    category: 'UI/UX',
    description: 'User interface and experience design for a smart home control system, focusing on accessibility and intuitive interactions.',
    client: 'Lumina Tech',
    year: '2023',
    date: 'May 9, 2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: true,
    tags: ['Research', 'Strategy', 'Design'],
  },
  {
    id: 'verde-branding',
    title: 'VERDE',
    category: 'Branding',
    description: 'Brand identity for a sustainable fashion label, including logo, color palette, typography, and brand guidelines.',
    client: 'Verde Fashion',
    year: '2023',
    date: 'October 14, 2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
    tags: ['Identity', 'Packaging'],
  },
  {
    id: 'pulse-app',
    title: 'PULSE',
    category: 'Mobile App',
    description: 'Fitness tracking app with personalized workout plans, nutrition guidance, and progress visualization.',
    client: 'Pulse Fitness',
    year: '2022',
    date: 'March 7, 2022',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
    tags: ['iOS', 'Android', 'Dev'],
  },
  {
    id: 'horizon-website',
    title: 'HORIZON',
    category: 'Web Design',
    description: 'Corporate website for a renewable energy company, highlighting their innovative solutions and global impact.',
    client: 'Horizon Energy',
    year: '2023',
    date: 'July 2, 2023',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
    tags: ['Design', 'Development', 'Maintenance'],
  },
  {
    id: 'bloom-illustrations',
    title: 'BLOOM',
    category: 'Illustration',
    description: 'Series of botanical illustrations for a gardening app, featuring detailed plant drawings and care instructions.',
    client: 'Bloom Gardens',
    year: '2022',
    date: 'January 11, 2022',
    image: '/placeholder.svg?height=600&width=400',
    featured: false,
    tags: ['Illustration'],
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

      <main className="pt-24 pb-20 mt-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-14">
            <h1 className="page-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Portfolio<span className="text-primary">.</span>
            </h1>
            <div>
              <p className="text-base md:text-lg text-muted-foreground">
                Our portfolio showcases our previous work and highlights the quality of our services. Browse through our projects and see for yourself.
              </p>
              <div className="mt-4">
                <Link href="#projects" className="inline-flex items-center gap-2 text-sm text-primary">
                  Explore Sengiku Studio Portfolio <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Category filter (optional) */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} className="rounded-full h-9 px-4" onClick={() => setActiveCategory(category)}>
                {category}
              </Button>
            ))}
          </div>

          {/* Projects - alternating layout */}
          <div id="projects" className="space-y-16">
            {filteredProjects.map((project, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div key={project.id} className="project-card border-t pt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image */}
                    <Link
                      href={`/projects/${project.id}`}
                      className={`${isImageLeft ? '' : 'md:order-2'} group relative overflow-hidden rounded-xl border bg-card`}
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover aspect-video md:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div
                        className={`absolute right-4 bottom-4 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center transition-all ${
                          hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
                        }`}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className={`${isImageLeft ? '' : 'md:order-1'}`}>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-prose">{project.description}</p>

                      <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
                        <div>
                          <div className="text-muted-foreground">Project Date</div>
                          <div className="mt-1">{project.date ?? project.year}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Client</div>
                          <div className="mt-1">{project.client}</div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {(project.tags ?? [project.category, project.year]).map((tag) => (
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

          {/* CTA Section */}
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
