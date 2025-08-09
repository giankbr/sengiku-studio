'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    question: 'What is your web development process?',
    answer:
      'Our development process consists of 5 key phases: Discovery (understanding your requirements), Planning (sitemap and wireframing), Design (creating visual mockups), Development (coding the website), and Deployment (launching and testing). We maintain clear communication throughout each phase to ensure your vision is realized.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      "The timeline varies based on project complexity. A simple website might take 2-4 weeks, while complex web applications can take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements and project scope.",
  },
  {
    question: 'Do you provide website maintenance services?',
    answer:
      'Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, performance optimization, and technical support.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      "We specialize in modern web technologies including React, Next.js, Vue.js, Node.js, and Python. For content management, we work with WordPress, Strapi, and custom CMS solutions. Our technology choices are always tailored to your project's specific needs and long-term goals.",
  },
  {
    question: 'How do you handle website hosting?',
    answer:
      'We can recommend and set up optimal hosting solutions based on your needs, including AWS, Google Cloud, Vercel, or traditional hosting providers. We handle the entire deployment process and can either manage hosting for you or provide guidance if you prefer to manage it yourself.',
  },
  {
    question: 'What payment terms do you offer?',
    answer:
      'We typically structure payments in milestones: 30% upfront to initiate the project, 30% upon design approval, and the remaining 40% before final launch. For larger projects, we can create a custom payment schedule aligned with project phases.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. We specialize in website redesigns that improve both aesthetics and performance. Our approach involves auditing your current site, identifying areas for improvement, and implementing modern design and development practices while preserving your brand identity and SEO value.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        '.faq-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.faq-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate FAQ items
      gsap.utils.toArray('.faq-item').forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1 * i,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="section-pad bg-background">
      <div className="container mx-auto px-4">
        <div className="faq-grid grid lg:grid-cols-12 gap-10">
          {/* Left: sticky intro */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h2 className="faq-title section-header mb-3">
                Frequently Asked <span className="italic font-normal">Questions</span>
              </h2>
              <p className="section-subtitle mb-8">Find clear answers to common topics like process, timelines, tech stack, and support.</p>
              <div className="panel p-6">
                <p className="text-sm text-muted-foreground">Need a direct answer?</p>
                <div className="mt-3 flex gap-3">
                  <Link href="/contact">
                    <Button className="rounded-full">Talk to us</Button>
                  </Link>
                  <Link href="#pricing">
                    <Button variant="outline" className="rounded-full">
                      Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion list */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const contentId = `faq-content-${index}`;
                return (
                  <div key={index} className="faq-item panel">
                    <button className="w-full flex items-center justify-between text-left px-6 py-5" onClick={() => toggleFaq(index)} aria-expanded={isOpen} aria-controls={contentId}>
                      <h3 className="text-base md:text-lg font-medium pr-6">{faq.question}</h3>
                      <span className={cn('shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors', isOpen && 'bg-primary text-primary-foreground')}>
                        <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')} />
                      </span>
                    </button>
                    <div id={contentId} className={cn('overflow-hidden transition-all duration-300 px-6', isOpen ? 'max-h-96 pb-6' : 'max-h-0')}>
                      <p className="text-muted-foreground pt-1">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-6">Still have questions? We're here to help.</p>
              <Link href="/contact">
                <Button className="rounded-full px-6">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
