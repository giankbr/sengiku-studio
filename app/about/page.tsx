'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Globe, Heart, Monitor, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Highlighted principal profiles for the About page layout
const principals = [
  {
    name: 'Gian Prasetyo',
    role: 'Founder & Principal',
    bio: 'Principal engineer and co-founder who oversees technical direction and shapes our approach to building scalable, impactful products.',
    image: '/placeholder-user.jpg',
    expertise: ['Full-Stack Development', 'System Architecture', 'Team Leadership'],
  },
  {
    name: 'Gianlagi Wijaya',
    role: 'Founder & Principal',
    bio: 'Design-minded principal focused on front-end architecture and product experiences that are beautiful, fast, and accessible.',
    image: '/placeholder-user.jpg',
    expertise: ['UI/UX Design', 'Frontend Architecture', 'Product Strategy'],
  },
];

const aboutStats = [
  { value: '200+', label: 'Projects Completed', icon: Code },
  { value: '150+', label: 'Happy Clients', icon: Heart },
];

const timeline = [
  {
    year: '2018',
    title: 'Foundation',
    description: 'Sengiku Studio was founded with a vision to create meaningful web experiences.',
  },
  {
    year: '2020',
    title: 'Growth',
    description: 'Expanded team and started working with international clients.',
  },
  {
    year: '2022',
    title: 'Innovation',
    description: 'Launched our proprietary development framework and design system.',
  },
  {
    year: '2024',
    title: 'Leadership',
    description: 'Recognized as a leading web development studio in the region.',
  },
];

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: Monitor,
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'E-commerce',
    description: 'Full-featured online stores with payment processing and inventory management.',
    icon: Globe,
  },
  {
    title: 'API Development',
    description: 'Robust backend APIs and database design for scalable applications.',
    icon: Database,
  },
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

        // Hero section animations
        gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
        gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' });
        gsap.fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'power2.out' });

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

        // Service items
        gsap.utils.toArray('.service-item').forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 18, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: 0.1 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 85%' },
            }
          );
        });

        // Section headers
        gsap.utils.toArray('.section-title').forEach((title: any) => {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: title, start: 'top 85%' },
            }
          );
        });

        // Section subtitles
        gsap.utils.toArray('.section-subtitle-animate').forEach((subtitle: any) => {
          gsap.fromTo(
            subtitle,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: { trigger: subtitle, start: 'top 85%' },
            }
          );
        });

        // Text content animations
        gsap.utils.toArray('.text-content').forEach((content: any) => {
          gsap.fromTo(
            content,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: content, start: 'top 85%' },
            }
          );
        });

        // Principals cards
        gsap.utils.toArray('.principal-card').forEach((card: any, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 24, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: 0.15 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: card, start: 'top 85%' },
            }
          );
        });

        // Timeline items
        gsap.utils.toArray('.timeline-item').forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: 0.1 * i,
              ease: 'power2.out',
              scrollTrigger: { trigger: item, start: 'top 85%' },
            }
          );
        });

        // CTA section animations
        gsap.fromTo('.cta-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.cta-title', start: 'top 85%' } });
        gsap.fromTo('.cta-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.cta-description', start: 'top 85%' } });
        gsap.fromTo('.cta-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out', scrollTrigger: { trigger: '.cta-buttons', start: 'top 85%' } });
        gsap.fromTo('.cta-visual', { opacity: 0, x: 30, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.cta-visual', start: 'top 85%' } });

        // Floating elements animation
        gsap.utils.toArray('.floating-element').forEach((element: any, i) => {
          gsap.fromTo(
            element,
            { opacity: 0, scale: 0, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              delay: 0.1 * i,
              ease: 'back.out(1.7)',
              scrollTrigger: { trigger: element, start: 'top 85%' },
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
    <div ref={pageRef} className="min-h-screen bg-page">
      <Navbar />

      {/* Hero Section */}
      <section className="section-pad border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Big text and description */}
            <div className="space-y-8">
              <div>
                <h1 className="hero-title fade-in section-header leading-[0.9] tracking-tight">
                  ABOUT
                  <br />
                  US
                </h1>
                <p className="hero-subtitle fade-in section-subtitle mt-6">
                  We are a passionate team of developers, designers, and strategists who believe in the power of exceptional digital experiences. Since 2018, we've been crafting websites and
                  applications that not only look stunning but also perform flawlessly.
                </p>
                <p className="fade-in text-muted-foreground mt-4">
                  Our approach combines cutting-edge technology with timeless design principles, ensuring every project we deliver is fast, accessible, and built to last. We work closely with our
                  clients to understand their unique needs and transform their vision into reality.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6">
                {aboutStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="hero-stats text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Image grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="photo-chip overflow-hidden rounded-2xl">
                  <img src="/placeholder.jpg?height=400&width=300" alt="Studio work" className="w-full h-48 object-cover" />
                </div>
                <div className="photo-chip overflow-hidden rounded-2xl">
                  <img src="/placeholder.jpg?height=400&width=300" alt="Studio work" className="w-full h-48 object-cover" />
                </div>
              </div>
              <div className="photo-chip overflow-hidden rounded-2xl">
                <img src="/placeholder.jpg?height=300&width=600" alt="Studio work" className="w-full h-32 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-pad border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title fade-in section-header mb-4">What We Do</h2>
            <p className="section-subtitle-animate fade-in section-subtitle">We specialize in creating digital solutions that drive business growth and deliver exceptional user experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="service-item panel p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story with Timeline */}
      <section className="section-pad border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="text-content space-y-8">
              <h2 className="section-title section-header">Our Journey</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2018, Sengiku Studio began as a small team of passionate developers with a shared vision: to create web experiences that matter. What started as a local web development
                  agency has grown into a trusted partner for brands worldwide.
                </p>
                <p>
                  The name "Sengiku" draws from Japanese philosophy—combining "sen" (line) and "giku" (chrysanthemum)—symbolizing structured systems and enduring beauty. This duality shapes everything
                  we do: robust technical foundations paired with refined, beautiful interfaces.
                </p>
                <p>
                  Today, we're proud to have delivered over 200 successful projects, working with clients ranging from startups to established enterprises. Our commitment to quality, performance, and
                  user experience remains at the core of everything we build.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="section-title text-2xl font-semibold mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principals */}
      <section className="section-pad border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title fade-in section-header mb-4">Meet the Team</h2>
            <p className="section-subtitle-animate fade-in section-subtitle">The passionate individuals behind every project we deliver</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {principals.map((person, i) => (
              <div key={i} className="principal-card panel p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="overflow-hidden rounded-2xl mb-4 md:mb-0">
                      <img src={`${person.image}?height=640&width=640`} alt={person.name} className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{person.name}</h3>
                      <p className="text-primary text-sm">{person.role}</p>
                    </div>
                    <p className="text-muted-foreground">{person.bio}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {person.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-muted rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-pad border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title fade-in section-header mb-4">Trusted By</h2>
            <p className="section-subtitle-animate fade-in section-subtitle">Leading brands trust us to deliver exceptional digital experiences</p>
          </div>
          <div className="panel p-8 overflow-hidden">
            <div className="flex animate-marquee">
              {/* First set of logos */}
              <div className="flex gap-16 items-center flex-shrink-0">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="fade-in flex justify-center">
                    <img src="/placeholder-logo.svg" alt={`Client logo ${index + 1}`} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-16 items-center flex-shrink-0">
                {[...Array(6)].map((_, index) => (
                  <div key={`duplicate-${index}`} className="fade-in flex justify-center">
                    <img src="/placeholder-logo.svg" alt={`Client logo ${index + 1}`} className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div className="space-y-6">
              <h2 className="cta-title fade-in section-header leading-tight">
                Ready to build your
                <br />
                next web project?
              </h2>
              <p className="cta-description fade-in text-lg text-muted-foreground">
                Let's collaborate to bring your digital vision to life. Our team is ready to create a fast, scalable, and user-friendly web solution for your business.
              </p>
              <div className="cta-buttons flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="rounded-full px-8 shadow-sm">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="rounded-full px-8">
                    See Our Work
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Visual element */}
            <div className="cta-visual relative">
              <div className="panel p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative z-10 space-y-6">
                  {/* Glass panels */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-panel p-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Monitor className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">Web App</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="glass-panel p-4 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Smartphone className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">Mobile</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                        <div className="h-2 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main glass panel */}
                  <div className="glass-panel p-6 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Development</div>
                        <div className="text-xs text-muted-foreground">In Progress</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-white/20 rounded-full"></div>
                      <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
                      <div className="h-3 bg-white/20 rounded-full w-4/5"></div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/40 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-xs text-muted-foreground">75%</span>
                    </div>
                  </div>

                  {/* Floating glass elements */}
                  <div className="absolute top-2 right-2">
                    <div className="glass-panel w-6 h-6 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="floating-element absolute -top-4 -right-4 w-8 h-8 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20"></div>
              <div className="floating-element absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30"></div>
              <div className="floating-element absolute top-1/2 -right-8 w-4 h-4 bg-primary/15 rounded-full backdrop-blur-sm border border-primary/25"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
