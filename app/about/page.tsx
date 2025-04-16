"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

const teamMembers = [
  {
    name: "Aiko Tanaka",
    role: "Founder & Creative Director",
    bio: "With over 15 years of experience in design, Aiko leads our creative vision and ensures every project meets our high standards of excellence.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Ryo Nakamura",
    role: "Lead UI/UX Designer",
    bio: "Ryo specializes in creating intuitive user experiences that balance aesthetics with functionality across digital platforms.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Mei Suzuki",
    role: "Senior Graphic Designer",
    bio: "Mei brings brands to life through thoughtful visual design, with particular expertise in typography and color theory.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Kenji Watanabe",
    role: "Motion Designer",
    bio: "Kenji transforms static designs into dynamic experiences through animation and interactive elements.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Hana Yamamoto",
    role: "Illustrator",
    bio: "Hana creates custom illustrations that tell compelling stories and enhance brand narratives across various media.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Takashi Ito",
    role: "Project Manager",
    bio: "Takashi ensures projects run smoothly from concept to completion, maintaining clear communication with clients throughout the process.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

const values = [
  {
    title: "Creativity",
    description:
      "We approach every project with fresh eyes and innovative thinking, pushing boundaries to create unique solutions.",
  },
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards, refining every detail until it reaches perfection.",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best work emerges from open communication and partnership with our clients and each other.",
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all our relationships and business practices.",
  },
]

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      )

      // Animate team members
      gsap.utils.toArray(".team-member").forEach((member: any, i) => {
        gsap.fromTo(
          member,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: member,
              start: "top 85%",
            },
          },
        )
      })

      // Animate values
      gsap.utils.toArray(".value-item").forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="italic font-normal">Sengiku Studio</span>
            </h1>
            <p className="fade-in text-xl text-muted-foreground mb-8">
              We are a creative design studio based in Jakarta, Indonesia, dedicated to crafting meaningful digital
              experiences that connect brands with their audiences.
            </p>
          </div>

          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Sengiku Studio began as a small team of passionate designers with a shared vision: to
                  create design that matters. What started as a three-person operation has grown into a diverse team of
                  creative professionals serving clients across the globe.
                </p>
                <p>
                  Our name, Sengiku, draws inspiration from the Japanese concept of "sen" (線) meaning line, and "giku"
                  (菊) representing chrysanthemum – symbolizing both precision and beauty. This duality reflects our
                  approach to design: meticulous attention to detail combined with creative flourish.
                </p>
                <p>
                  Today, we continue to push boundaries and challenge conventions, always seeking new ways to elevate
                  brands through thoughtful, purpose-driven design.
                </p>
              </div>
            </div>
            <div className="fade-in order-first md:order-last">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Sengiku Studio office"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="value-item bg-muted dark:bg-zinc-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="fade-in text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our diverse team of creative professionals brings together expertise across multiple disciplines to
              deliver exceptional results for our clients.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member group">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clients */}
          <div className="mb-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Trusted By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="fade-in flex justify-center">
                  <img
                    src="/placeholder-logo.svg"
                    alt={`Client logo ${index + 1}`}
                    className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="fade-in bg-muted dark:bg-zinc-900 rounded-lg p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to work with us?</h2>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your vision to life. Our team is ready to help you create something amazing.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
