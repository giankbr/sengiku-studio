'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const blogPosts = [
  {
    title: 'Building a Positive Office Environment for Designers',
    excerpt:
      "A well-designed workspace can fuel creativity, productivity, and teamwork in the design industry. This blog post explores how to create an inspiring office environment that meets designers' unique needs.",
    date: 'Nov 4, 2024',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Crafting Experiences that Keep Visitors Coming Back',
    excerpt:
      "User experience (UX) is at the heart of every successful design project. This article covers the principles of user-centric design, from research to prototyping, and explains how prioritizing the user's journey leads to more engaging digital products.",
    date: 'Nov 4, 2024',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    title: 'Managing Creative Teams in the Design Industry',
    excerpt:
      'Managing a team of designers requires a unique blend of creativity, leadership, and strategy. This post delves into effective ways to inspire, motivate, and guide a design team while balancing deadlines, client demands, and creative excellence.',
    date: 'Nov 4, 2024',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Tips for More Effective Online Meetings',
    excerpt: "In today's digital-first world, online meetings are more important than ever. Learn how to make your virtual collaborations more productive and engaging with these practical tips.",
    date: 'Nov 4, 2024',
    image: '/placeholder.svg?height=300&width=400',
  },
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        '.blog-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.blog-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate blog posts
      gsap.utils.toArray('.blog-post').forEach((post: any, i) => {
        gsap.fromTo(
          post,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: post,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <section ref={sectionRef} className="section-pad bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="blog-title section-header mb-3">
            Blog <span className="italic font-normal">Hub</span>
          </h2>
          <p className="section-subtitle">Insights, stories, and practical notes from our day-to-day building digital products.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured */}
          <Link href="#" className="blog-post panel overflow-hidden lg:col-span-7 group">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={featured.image || '/placeholder.svg'} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{featured.date}</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-muted-foreground line-clamp-3">{featured.excerpt}</p>
            </div>
          </Link>

          {/* List */}
          <div className="lg:col-span-5 space-y-4">
            {rest.map((post, index) => (
              <Link href="#" key={index} className="blog-post panel p-4 flex gap-4 items-start group">
                <div className="w-32 shrink-0 overflow-hidden rounded-md">
                  <img src={post.image || '/placeholder.svg'} alt={post.title} className="h-24 w-32 object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
