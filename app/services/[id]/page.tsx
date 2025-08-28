'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
// Lazy-load GSAP on client to avoid SSR issues
import { ArrowUpRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

// This would typically come from a database or API
const servicesData = {
  'web-development': {
    title: 'Web Development',
    description: 'We build fast, responsive, and user-friendly websites using the latest web technologies.',
    fullDescription:
      'Our web development services deliver high-performance, responsive websites that engage your audience and achieve your business goals. We combine clean code, modern frameworks, and performance optimization to create websites that look great and function flawlessly across all devices.',
    image: '/placeholder.svg?height=600&width=1200',
    process: ['Requirements gathering and planning', 'Information architecture and wireframing', 'UI/UX design implementation', 'Frontend and backend development', 'Testing and deployment'],
    benefits: ['Fast-loading, optimized websites', 'Responsive design for all devices', 'SEO-friendly architecture', 'Easy content management', 'Scalable, future-proof solutions'],
    portfolio: [
      {
        title: 'Corporate Website Redesign',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Custom WordPress Implementation',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Interactive Product Showcase',
        image: '/placeholder.svg?height=400&width=600',
      },
    ],
  },
  'e-commerce': {
    title: 'E-commerce Solutions',
    description: 'We develop custom online stores that drive sales and provide seamless shopping experiences.',
    fullDescription:
      'Our e-commerce development services help businesses sell online effectively through custom-built or platform-based solutions. We create intuitive shopping experiences with secure payment processing, inventory management, and marketing integrations to maximize your sales potential.',
    image: '/placeholder.svg?height=600&width=1200',
    process: [
      'Business requirements analysis',
      'Platform selection or custom architecture planning',
      'Store design and user flow optimization',
      'Payment and shipping integration',
      'Testing and launch preparation',
    ],
    benefits: ['Intuitive shopping experience', 'Mobile-optimized purchasing flows', 'Secure payment processing', 'Inventory and order management', 'Marketing and analytics integration'],
    portfolio: [
      {
        title: 'B2C Fashion E-commerce Platform',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Wholesale Ordering System',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Subscription-based Product Store',
        image: '/placeholder.svg?height=400&width=600',
      },
    ],
  },
  'backend-systems': {
    title: 'Backend Systems',
    description: 'We architect robust, scalable backend systems that power your digital products.',
    fullDescription:
      'Our backend development team builds the powerful systems that run behind your digital products. From RESTful APIs to complex data processing systems, we deliver secure, scalable, and maintainable code that serves as the backbone of your digital infrastructure.',
    image: '/placeholder.svg?height=600&width=1200',
    process: ['System architecture design', 'Database modeling and optimization', 'API development and documentation', 'Integration with third-party services', 'Performance testing and optimization'],
    benefits: ['Scalable architecture for growth', 'Optimized database performance', 'Secure data handling', 'Comprehensive API documentation', 'Reduced server costs through efficiency'],
    portfolio: [
      {
        title: 'Real-time Data Processing System',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Custom CMS Platform',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Microservices Architecture Implementation',
        image: '/placeholder.svg?height=400&width=600',
      },
    ],
  },
  'digital-transformation': {
    title: 'Digital Transformation',
    description: 'We help businesses modernize their digital infrastructure for improved efficiency and growth.',
    fullDescription:
      'Our digital transformation services guide businesses through the process of adopting modern digital solutions. We analyze your current systems, identify opportunities for improvement, and implement technology solutions that streamline operations, enhance collaboration, and drive growth.',
    image: '/placeholder.svg?height=600&width=1200',
    process: [
      'Digital audit and roadmap creation',
      'Legacy system assessment',
      'Modernization strategy development',
      'Incremental implementation and migration',
      'Staff training and change management',
    ],
    benefits: ['Streamlined business processes', 'Reduced operational costs', 'Improved data accessibility and insights', 'Enhanced collaboration tools', 'Future-proofed technical infrastructure'],
    portfolio: [
      {
        title: 'Legacy System Migration to Cloud',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Internal Workflow Automation Platform',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Digital Customer Service Transformation',
        image: '/placeholder.svg?height=400&width=600',
      },
    ],
  },
  'web-applications': {
    title: 'Web Applications',
    description: 'We create custom web applications that solve complex business problems and streamline operations.',
    fullDescription:
      'Our web application development services deliver powerful, tailor-made solutions that address specific business challenges. From internal tools to customer-facing platforms, we build feature-rich applications with intuitive interfaces that improve productivity and provide tangible business value.',
    image: '/placeholder.svg?height=600&width=1200',
    process: ['Business process analysis', 'User journey mapping and UX planning', 'Application architecture design', 'Iterative development and testing', 'Deployment and continuous improvement'],
    benefits: ['Streamlined business operations', 'Reduced manual work through automation', 'Centralized data management', 'Improved team collaboration', 'Custom features tailored to your needs'],
    portfolio: [
      {
        title: 'Customer Portal for SaaS Platform',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Real Estate Management Application',
        image: '/placeholder.svg?height=400&width=600',
      },
      {
        title: 'Healthcare Provider Dashboard',
        image: '/placeholder.svg?height=400&width=600',
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const serviceId = params.id as string;

  const service = servicesData[serviceId as keyof typeof servicesData];

  const shouldAnimate = useRef(true);

  // Fallback if service doesn't exist
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (shouldAnimate.current) {
      shouldAnimate.current = false;
      let ctx: any;
      let isMounted = true;
      (async () => {
        const { gsap } = await import('gsap');
        if (!isMounted) return;
        ctx = gsap.context(() => {
          // Animate page elements
          gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });

          // Animate portfolio items
          gsap.utils.toArray('.portfolio-item').forEach((item: any, i) => {
            gsap.fromTo(
              item,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.4 + i * 0.1,
                ease: 'power2.out',
              }
            );
          });
        }, pageRef);
      })();

      return () => {
        isMounted = false;
        if (ctx) ctx.revert();
      };
    }
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20 mt-10">
        <div className="container mx-auto px-4">
          {/* Header - match Services/Projects style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-14">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {service.title}
              <span className="text-primary">.</span>
            </h1>
            <div>
              <p className="text-base md:text-lg text-muted-foreground">{service.description}</p>
              <div className="mt-4">
                <Link href="#details" className="inline-flex items-center gap-2 text-sm text-primary">
                  Explore {service.title} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Details - alternating like sections */}
          <div id="details" className="space-y-16">
            {/* Image + Overview */}
            <div className="border-t pt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="group relative overflow-hidden rounded-xl border bg-card">
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-video md:aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Overview</h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-prose">{service.fullDescription}</p>

                  <div className="mt-6">
                    <Button asChild className="rounded-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Process & Benefits */}
            <div className="border-t pt-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-muted dark:bg-zinc-900 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                  <ul className="space-y-4">
                    {service.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs text-primary-foreground font-medium">{index + 1}</span>
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted dark:bg-zinc-900 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Work */}
            <div className="border-t pt-10">
              <h2 className="text-3xl font-bold mb-10">Related Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {service.portfolio.map((item, index) => (
                  <div key={index} className="portfolio-item group cursor-pointer">
                    <div className="overflow-hidden rounded-lg border">
                      <img src={item.image || '/placeholder.svg'} alt={item.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA - match Services/Projects */}
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
