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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="blog-title text-4xl md:text-5xl font-bold mb-12">
          Blog <span className="italic font-normal">Hub</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link href="#" key={index} className="blog-post group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
