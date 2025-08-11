'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Lazy-load GSAP on client to avoid SSR issues
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const categories = ['All', 'Design', 'UX/UI', 'Branding', 'Illustration', 'Motion Graphics'];

const blogPosts = [
  {
    id: 'building-positive-office',
    title: 'Building a Positive Office Environment for Designers',
    excerpt:
      "A well-designed workspace can fuel creativity, productivity, and teamwork in the design industry. This blog post explores how to create an inspiring office environment that meets designers' unique needs.",
    date: 'Nov 4, 2024',
    category: 'Design',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '5 min read',
  },
  {
    id: 'crafting-experiences',
    title: 'Crafting Experiences that Keep Visitors Coming Back',
    excerpt:
      "User experience (UX) is at the heart of every successful design project. This article covers the principles of user-centric design, from research to prototyping, and explains how prioritizing the user's journey leads to more engaging digital products.",
    date: 'Nov 4, 2024',
    category: 'UX/UI',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '7 min read',
  },
  {
    id: 'managing-creative-teams',
    title: 'Managing Creative Teams in the Design Industry',
    excerpt:
      'Managing a team of designers requires a unique blend of creativity, leadership, and strategy. This post delves into effective ways to inspire, motivate, and guide a design team while balancing deadlines, client demands, and creative excellence.',
    date: 'Nov 4, 2024',
    category: 'Design',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '6 min read',
  },
  {
    id: 'effective-online-meetings',
    title: 'Tips for More Effective Online Meetings',
    excerpt: "In today's digital-first world, online meetings are more important than ever. Learn how to make your virtual collaborations more productive and engaging with these practical tips.",
    date: 'Nov 4, 2024',
    category: 'Design',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '4 min read',
  },
  {
    id: 'color-theory-design',
    title: 'Understanding Color Theory in Modern Design',
    excerpt: "Color is one of the most powerful tools in a designer's toolkit. This comprehensive guide explores color theory principles and how to apply them effectively in your design projects.",
    date: 'Oct 28, 2024',
    category: 'Design',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '8 min read',
  },
  {
    id: 'typography-fundamentals',
    title: 'Typography Fundamentals Every Designer Should Know',
    excerpt: 'Typography can make or break your design. Learn the essential principles of typography that will elevate your design work and improve readability and user experience.',
    date: 'Oct 21, 2024',
    category: 'Design',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '6 min read',
  },
  {
    id: 'branding-small-business',
    title: 'Effective Branding Strategies for Small Businesses',
    excerpt: 'Small businesses face unique challenges when it comes to branding. Discover practical strategies to create a memorable brand identity without breaking the bank.',
    date: 'Oct 14, 2024',
    category: 'Branding',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '5 min read',
  },
  {
    id: 'illustration-trends',
    title: 'Current Trends in Digital Illustration',
    excerpt: 'The world of digital illustration is constantly evolving. Stay ahead of the curve with this overview of the latest trends and techniques in the field.',
    date: 'Oct 7, 2024',
    category: 'Illustration',
    image: '/placeholder.svg?height=400&width=600',
    readTime: '7 min read',
  },
];

export default function BlogsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let ctx: any;
    let isMounted = true;
    (async () => {
      const { gsap } = await import('gsap');
      if (!isMounted) return;
      ctx = gsap.context(() => {
        // Animate page title
        gsap.fromTo('.page-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });

        // Animate blog posts
        gsap.utils.toArray('.blog-card').forEach((card: any, i) => {
          gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + i * 0.1, ease: 'power2.out' });
        });
      }, pageRef);
    })();

    return () => {
      isMounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Select featured and remaining posts for layout (two featured on top)
  const heroPosts = filteredPosts.slice(0, 2);
  const gridPosts = filteredPosts.slice(2);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Blog <span className="italic font-normal">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">Insights, tips, and inspiration from our team of designers and creative thinkers.</p>
          </div>

          {/* Filters row */}
          <div className="mb-8 flex flex-col gap-4">
            <div className="relative w-full md:max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Search articles..." className="pl-10" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((category) => (
                <Button key={category} size="sm" variant={activeCategory === category ? 'default' : 'outline'} className="rounded-full whitespace-nowrap" onClick={() => setActiveCategory(category)}>
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Top: two featured */}
            {heroPosts.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {heroPosts.map((post) => (
                  <Link key={post.id} href={`/blogs/${post.id}`} className="blog-card panel overflow-hidden group">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <img src={post.image || '/placeholder.svg'} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <div className="flex items-center justify-between text-xs md:text-sm text-white/80 mb-2">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">{post.title}</h2>
                        <p className="hidden md:line-clamp-2 text-white/80">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Grid: rest */}
            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {gridPosts.map((post) => (
                  <Link href={`/blogs/${post.id}`} key={post.id} className="blog-card panel overflow-hidden group">
                    <div className="aspect-[16/10] w-full overflow-hidden">
                      <img src={post.image || '/placeholder.svg'} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 py-12 px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-6">Get the latest articles, resources, and inspiration delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
