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
    <section ref={sectionRef} id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="faq-title text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="italic font-normal">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">Find answers to common questions about our web development services, process, and technologies.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-border py-6">
              <button className="w-full flex justify-between items-center text-left" onClick={() => toggleFaq(index)} aria-expanded={openIndex === index}>
                <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                <ChevronDown className={cn('h-5 w-5 text-muted-foreground transition-transform duration-200', openIndex === index && 'rotate-180')} />
              </button>

              <div className={cn('mt-2 overflow-hidden transition-all duration-300', openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                <p className="text-muted-foreground py-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Still have questions? We're here to help.</p>
          <Link href="/contact">
            <Button className="rounded-full px-6">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
