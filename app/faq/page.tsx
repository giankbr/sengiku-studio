'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Extended FAQ list for dedicated page
const faqs = [
  {
    category: 'General',
    questions: [
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
        question: 'What makes Sengiku Studio different from other web development companies?',
        answer:
          'We combine technical excellence with creative problem-solving. Our team consists of specialized developers rather than generalists, ensuring every aspect of your project is handled by an expert in that field. We also emphasize performance optimization and future-proofing in all our solutions.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What technologies do you use?',
        answer:
          "We specialize in modern web technologies including React, Next.js, Vue.js, Node.js, and Python. For content management, we work with WordPress, Strapi, and custom CMS solutions. Our technology choices are always tailored to your project's specific needs and long-term goals.",
      },
      {
        question: 'How do you ensure website security?',
        answer:
          'Security is built into our development process at every stage. We implement industry best practices for secure coding, use HTTPS encryption, conduct regular security audits, implement proper authentication systems, and keep all software updated. For e-commerce sites, we ensure PCI compliance for payment processing.',
      },
      {
        question: 'Are your websites mobile-responsive?',
        answer:
          'Absolutely. Every website we build is fully responsive and optimized for all screen sizes and devices. We employ a mobile-first approach to ensure excellent performance and user experience across smartphones, tablets, and desktops.',
      },
      {
        question: 'Do you optimize websites for search engines (SEO)?',
        answer:
          'Yes, we implement SEO best practices in all our websites, including semantic HTML structure, optimized page load speeds, proper meta tags, structured data, and mobile optimization. We can also develop more comprehensive SEO strategies as an additional service.',
      },
    ],
  },
  {
    category: 'Services & Support',
    questions: [
      {
        question: 'Do you provide website maintenance services?',
        answer:
          'Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, performance optimization, and technical support.',
      },
      {
        question: 'Can you redesign my existing website?',
        answer:
          'Absolutely. We specialize in website redesigns that improve both aesthetics and performance. Our approach involves auditing your current site, identifying areas for improvement, and implementing modern design and development practices while preserving your brand identity and SEO value.',
      },
      {
        question: 'How do you handle website hosting?',
        answer:
          'We can recommend and set up optimal hosting solutions based on your needs, including AWS, Google Cloud, Vercel, or traditional hosting providers. We handle the entire deployment process and can either manage hosting for you or provide guidance if you prefer to manage it yourself.',
      },
      {
        question: 'What kind of support do you offer after launch?',
        answer:
          'We provide 30 days of complimentary support after website launch to address any issues and ensure everything is running smoothly. Beyond that, we offer various support and maintenance packages to suit different needs and budgets.',
      },
    ],
  },
  {
    category: 'Business & Pricing',
    questions: [
      {
        question: 'What payment terms do you offer?',
        answer:
          'We typically structure payments in milestones: 30% upfront to initiate the project, 30% upon design approval, and the remaining 40% before final launch. For larger projects, we can create a custom payment schedule aligned with project phases.',
      },
      {
        question: 'Do you offer fixed-price quotes or work hourly?',
        answer:
          "We primarily work with fixed-price quotes to provide budget certainty for clients. For ongoing development or projects with evolving requirements, we may suggest a retainer model or time-and-materials approach. We'll recommend the most appropriate billing structure based on your project's nature.",
      },
      {
        question: 'Do you sign NDAs?',
        answer: "Yes, we're happy to sign non-disclosure agreements before discussing your project in detail. We respect the confidentiality of your business ideas and information.",
      },
      {
        question: 'What is your revision policy?',
        answer:
          'Our proposals specify the number of revision rounds included for each project phase. For design phases, we typically include 2-3 rounds of revisions. Additional revisions beyond the included rounds are billed at our standard hourly rate.',
      },
    ],
  },
];

export default function FaqPage() {
  const [openCategory, setOpenCategory] = useState<string>('General');
  const [openQuestionIndex, setOpenQuestionIndex] = useState<{ [key: string]: number | null }>({
    General: 0,
    Technical: null,
    'Services & Support': null,
    'Business & Pricing': null,
  });
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo('.fade-in', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const toggleCategory = (category: string) => {
    setOpenCategory(category);
  };

  const toggleQuestion = (category: string, index: number) => {
    setOpenQuestionIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="italic font-normal">Questions</span>
            </h1>
            <p className="fade-in text-xl text-muted-foreground mb-8">Find answers to common questions about our web development services, process, and technical approach.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Category Navigation */}
            <div className="fade-in mb-12 flex flex-wrap border-b border-border">
              {faqs.map((category) => (
                <button
                  key={category.category}
                  className={cn(
                    'px-4 py-3 text-sm md:text-base transition-all',
                    openCategory === category.category ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground'
                  )}
                  onClick={() => toggleCategory(category.category)}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="fade-in">
              {faqs.map((category) => (
                <div key={category.category} className={openCategory === category.category ? 'block' : 'hidden'}>
                  {category.questions.map((faq, index) => (
                    <div key={index} className="border-b border-border py-6">
                      <button
                        className="w-full flex justify-between items-center text-left"
                        onClick={() => toggleQuestion(category.category, index)}
                        aria-expanded={openQuestionIndex[category.category] === index}
                      >
                        <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                        <ChevronDown className={cn('h-5 w-5 text-muted-foreground transition-transform duration-200', openQuestionIndex[category.category] === index && 'rotate-180')} />
                      </button>

                      <div className={cn('mt-2 overflow-hidden transition-all duration-300', openQuestionIndex[category.category] === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                        <p className="text-muted-foreground py-4">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="fade-in mt-16 text-center py-10 px-6 bg-muted dark:bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">Contact our team for answers to your specific questions about our services, process, or pricing.</p>
              <Link href="/contact">
                <Button className="rounded-full px-6">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
