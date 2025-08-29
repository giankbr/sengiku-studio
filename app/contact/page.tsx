'use client';

import type React from 'react';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    let ctx: any;
    let isMounted = true;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Hero animation
        gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });

        gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' });

        // Form and info animations
        gsap.fromTo(
          '.contact-form',
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.4,
            scrollTrigger: {
              trigger: '.contact-form',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          '.contact-info',
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.6,
            scrollTrigger: {
              trigger: '.contact-info',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Stagger animation for contact cards
        gsap.fromTo(
          '.contact-card',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.8,
            scrollTrigger: {
              trigger: '.contact-cards',
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, pageRef);
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-page">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="section-pad">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Got a project? <span className="italic font-normal text-muted-foreground">Let's talk.</span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">We're ready to help you plan, scope, and ship. Tell us a bit about your goals and timeline.</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-pad bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div className="contact-form">
                  <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
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
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                          </label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" required className="w-full" />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            rows={5}
                            required
                            className="w-full resize-none"
                          />
                        </div>

                        <Button type="submit" className="w-full rounded-full h-12 text-base">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                      <p className="text-muted-foreground">Feel free to reach out to us through any of these channels:</p>
                    </div>

                    <div className="contact-cards space-y-4">
                      <Card className="contact-card border-0 shadow-sm bg-background/60 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Email</h3>
                              <p className="text-muted-foreground">hello@sengikustudio.com</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="contact-card border-0 shadow-sm bg-background/60 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Phone</h3>
                              <p className="text-muted-foreground">+1 891 989-11-91</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="contact-card border-0 shadow-sm bg-background/60 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Address</h3>
                              <p className="text-muted-foreground">
                                2372 Westheimer Rd,
                                <br />
                                Jakarta, Indonesia 85485
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="contact-card border-0 shadow-sm bg-background/60 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Working Hours</h3>
                              <p className="text-muted-foreground">
                                Monday - Friday: 9:00 AM - 6:00 PM
                                <br />
                                Weekend: Closed
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="pt-6">
                      <h3 className="font-semibold mb-4">Follow Us</h3>
                      <div className="flex gap-3">
                        <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors group">
                          <span className="font-medium group-hover:scale-110 transition-transform">Be</span>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors group">
                          <span className="text-lg group-hover:scale-110 transition-transform">◎</span>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors group">
                          <span className="text-lg group-hover:scale-110 transition-transform">𝕏</span>
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors group">
                          <span className="text-lg group-hover:scale-110 transition-transform">◼</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
