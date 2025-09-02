'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate form elements
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate contact info
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send');
      }
      toast.success('Message sent! We will get back to you soon.', { id: toastId });
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="section-pad bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="contact-title section-header mb-3 text-center">
            Got a project? <span className="italic font-normal">Let's talk.</span>
          </h2>
          <p className="section-subtitle mb-10 text-center mx-auto">We’re ready to help you plan, scope, and ship. Tell us a bit about your goals and timeline.</p>

          <div className="bg-card panel overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Form */}
              <div className="contact-form p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="What's your name?" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required className="w-full" />
                  </div>

                  <Button type="submit" className="rounded-full w-full" disabled={isSubmitting}>
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="contact-info bg-primary/10 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">Feel free to reach out to us through any of these channels:</p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Email</h4>
                      <a href="mailto:hello@sengikustudio.com" className="text-lg hover:text-primary transition-colors">
                        sengikustudio@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Phone</h4>
                      <a href="tel:+6281779963472" className="text-lg hover:text-primary transition-colors">
                        +62817-7996-3472
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Address</h4>
                      <p className="text-lg">
                        Kembangan, Jakarta Barat
                        <br />
                        Jakarta, Indonesia 11610
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Weekend: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-sm font-medium mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <span className="font-medium">Be</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <span className="text-lg">◎</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <span className="text-lg">𝕏</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <span className="text-lg">◼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
