"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

const categories = ["All", "Design", "UX/UI", "Branding", "Illustration", "Motion Graphics"]

const blogPosts = [
  {
    id: "building-positive-office",
    title: "Building a Positive Office Environment for Designers",
    excerpt:
      "A well-designed workspace can fuel creativity, productivity, and teamwork in the design industry. This blog post explores how to create an inspiring office environment that meets designers' unique needs.",
    date: "Nov 4, 2024",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
  {
    id: "crafting-experiences",
    title: "Crafting Experiences that Keep Visitors Coming Back",
    excerpt:
      "User experience (UX) is at the heart of every successful design project. This article covers the principles of user-centric design, from research to prototyping, and explains how prioritizing the user's journey leads to more engaging digital products.",
    date: "Nov 4, 2024",
    category: "UX/UI",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
  {
    id: "managing-creative-teams",
    title: "Managing Creative Teams in the Design Industry",
    excerpt:
      "Managing a team of designers requires a unique blend of creativity, leadership, and strategy. This post delves into effective ways to inspire, motivate, and guide a design team while balancing deadlines, client demands, and creative excellence.",
    date: "Nov 4, 2024",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    id: "effective-online-meetings",
    title: "Tips for More Effective Online Meetings",
    excerpt:
      "In today's digital-first world, online meetings are more important than ever. Learn how to make your virtual collaborations more productive and engaging with these practical tips.",
    date: "Nov 4, 2024",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "4 min read",
  },
  {
    id: "color-theory-design",
    title: "Understanding Color Theory in Modern Design",
    excerpt:
      "Color is one of the most powerful tools in a designer's toolkit. This comprehensive guide explores color theory principles and how to apply them effectively in your design projects.",
    date: "Oct 28, 2024",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  },
  {
    id: "typography-fundamentals",
    title: "Typography Fundamentals Every Designer Should Know",
    excerpt:
      "Typography can make or break your design. Learn the essential principles of typography that will elevate your design work and improve readability and user experience.",
    date: "Oct 21, 2024",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    id: "branding-small-business",
    title: "Effective Branding Strategies for Small Businesses",
    excerpt:
      "Small businesses face unique challenges when it comes to branding. Discover practical strategies to create a memorable brand identity without breaking the bank.",
    date: "Oct 14, 2024",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
  {
    id: "illustration-trends",
    title: "Current Trends in Digital Illustration",
    excerpt:
      "The world of digital illustration is constantly evolving. Stay ahead of the curve with this overview of the latest trends and techniques in the field.",
    date: "Oct 7, 2024",
    category: "Illustration",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
  },
]

export default function BlogsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page title
      gsap.fromTo(
        ".page-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
      )

      // Animate blog posts
      gsap.utils.toArray(".blog-card").forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + i * 0.1, ease: "power2.out" },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog <span className="italic font-normal">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, tips, and inspiration from our team of designers and creative thinkers.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className="rounded-full"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link href={`/blogs/${post.id}`} key={post.id} className="blog-card group">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Reset filters
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 py-12 px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest articles, resources, and inspiration delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
