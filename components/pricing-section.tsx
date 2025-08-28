'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

// Define pricing plans with USD pricing
const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and personal websites',
    price: {
      monthly: 1500, // $1,500 per month
      yearly: 16200, // $16,200 per year (10% discount)
    },
    features: [
      'Responsive website (up to 5 pages)',
      'Mobile optimization',
      'Basic SEO setup',
      'Contact form integration',
      'Google Analytics integration',
      'Social media integration',
      '3 rounds of revisions',
      '1 month of support',
      'Basic security setup',
      'Performance optimization',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business',
    description: 'Comprehensive solution for growing businesses',
    price: {
      monthly: 3500, // $3,500 per month
      yearly: 37800, // $37,800 per year (10% discount)
    },
    features: [
      'Responsive website (up to 15 pages)',
      'Custom design & branding',
      'Advanced SEO optimization',
      'Content management system',
      'Email newsletter setup',
      'Performance optimization',
      'E-commerce integration',
      'Payment gateway setup',
      'Advanced analytics & reporting',
      'Social media management tools',
      '5 rounds of revisions',
      '3 months of support',
      'Security hardening',
      'Backup & recovery system',
    ],
    cta: 'Choose Business',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Custom development for complex requirements',
    price: {
      monthly: 7500, // $7,500 per month
      yearly: 81000, // $81,000 per year (10% discount)
    },
    features: [
      'Fully custom website development',
      'Advanced functionality & integrations',
      'E-commerce capabilities',
      'Custom database solutions',
      'API development & integration',
      'Comprehensive SEO strategy',
      'Performance & security optimization',
      'Multi-language support',
      'Advanced user management',
      'Custom reporting dashboard',
      'Third-party integrations',
      'Scalable architecture',
      'Unlimited revisions',
      '12 months of priority support',
      '24/7 monitoring',
      'Dedicated project manager',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animations handled globally by `ScrollAnimator` using data attributes

  // Deterministic USD formatter to avoid SSR/CSR Intl differences
  const formatPrice = (price: number) => {
    const absolute = Math.floor(Math.abs(price));
    const digits = absolute.toString();
    const withThousandsSeparators = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formatted = `$${withThousandsSeparators}`;
    return price < 0 ? `- ${formatted}` : formatted;
  };

  return (
    <section ref={sectionRef} id="pricing" className="section-pad bg-background subtle-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate>
          <h2 className="pricing-title section-header mb-3">
            Simple, <span className="italic font-normal">Transparent</span> Pricing
          </h2>
          <p className="pricing-subtitle section-subtitle mb-12 mx-auto">
            Choose the right package for your project. All plans include enterprise-grade development, premium support, and our commitment to delivering exceptional digital experiences.
          </p>

          {/* Pricing toggle */}
          <div className="pricing-toggle inline-flex items-center bg-muted rounded-full p-1 mb-12" data-animate data-animate-delay="120">
            <button
              className={cn('px-6 py-2 rounded-full text-sm transition-all', billingCycle === 'monthly' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:text-foreground')}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn('px-6 py-2 rounded-full text-sm transition-all', billingCycle === 'yearly' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:text-foreground')}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="text-xs opacity-75 ml-1">Save 10%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'pricing-card relative panel p-8 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex flex-col h-full',
                plan.popular && 'ring-2 ring-primary/30 shadow-md'
              )}
              data-animate
              data-animate-delay={(index * 140).toString()}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-end mb-1">
                  <span suppressHydrationWarning className="text-4xl font-bold">
                    {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{billingCycle === 'monthly' ? 'per month' : 'per year'}</p>
                {billingCycle === 'yearly' && (
                  <p suppressHydrationWarning className="text-primary text-sm mt-2">
                    You save {formatPrice(plan.price.monthly * 12 - plan.price.yearly)}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto w-full">
                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full rounded-full group">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-16 text-center max-w-4xl mx-auto" data-animate data-animate-delay="160">
          <h3 className="text-xl font-semibold mb-4">Need a custom enterprise solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer bespoke development packages for large-scale projects, custom integrations, and specialized requirements. Contact us to discuss your enterprise needs.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full">
              Get Enterprise Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
