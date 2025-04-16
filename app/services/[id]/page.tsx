"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { useParams } from "next/navigation"

// This would typically come from a database or API
const servicesData = {
  "graphic-design": {
    title: "Graphic Design",
    description: "We create visual concepts that inspire, inform, and captivate consumers.",
    fullDescription:
      "Our graphic design services focus on creating visual solutions that communicate your message effectively. We combine artistic elements with strategic thinking to deliver designs that not only look great but also achieve your business objectives.",
    image: "/placeholder.svg?height=600&width=1200",
    process: [
      "Discovery and research",
      "Concept development",
      "Design creation",
      "Revisions and refinement",
      "Final delivery",
    ],
    benefits: [
      "Stand out from competitors",
      "Communicate your message clearly",
      "Build brand recognition",
      "Increase engagement",
      "Enhance marketing effectiveness",
    ],
    portfolio: [
      {
        title: "Brand Identity for Tech Startup",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Annual Report Design",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Marketing Collateral",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  "product-design": {
    title: "Product Design",
    description: "We design digital products with a focus on user experience and interface design.",
    fullDescription:
      "Our product design services help you create digital products that users love. We combine user research, interaction design, and visual design to create intuitive and engaging experiences that meet both user needs and business goals.",
    image: "/placeholder.svg?height=600&width=1200",
    process: [
      "User research and analysis",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design",
      "User testing and iteration",
    ],
    benefits: [
      "Improved user satisfaction",
      "Increased conversion rates",
      "Reduced development costs",
      "Faster time to market",
      "Competitive advantage",
    ],
    portfolio: [
      {
        title: "E-commerce Mobile App",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "SaaS Dashboard",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Financial Services Website",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  illustration: {
    title: "Illustration",
    description: "We create custom illustrations that tell your story and enhance your brand.",
    fullDescription:
      "Our illustration services bring your ideas to life through custom artwork. Whether you need character designs, editorial illustrations, or visual storytelling, our illustrators create unique visuals that capture attention and communicate your message.",
    image: "/placeholder.svg?height=600&width=1200",
    process: [
      "Concept discussion",
      "Style exploration",
      "Sketch development",
      "Color and detail refinement",
      "Final artwork delivery",
    ],
    benefits: [
      "Unique visual identity",
      "Enhanced storytelling",
      "Improved user engagement",
      "Memorable brand assets",
      "Versatile content for multiple channels",
    ],
    portfolio: [
      {
        title: "Children's Book Illustrations",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Editorial Illustrations",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Character Design",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  branding: {
    title: "Branding",
    description: "We develop comprehensive brand identities that resonate with your audience.",
    fullDescription:
      "Our branding services help you build a strong, cohesive identity that connects with your audience. We develop strategic brand foundations and visual systems that communicate your values and differentiate you in the marketplace.",
    image: "/placeholder.svg?height=600&width=1200",
    process: [
      "Brand discovery workshop",
      "Market and competitor analysis",
      "Brand strategy development",
      "Visual identity creation",
      "Brand guidelines and implementation",
    ],
    benefits: [
      "Increased brand recognition",
      "Stronger customer loyalty",
      "Consistent brand experience",
      "Higher perceived value",
      "Clear market positioning",
    ],
    portfolio: [
      {
        title: "Restaurant Rebranding",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Startup Brand Identity",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Retail Brand System",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  "motion-graphics": {
    title: "Motion Graphics",
    description: "We bring your ideas to life through animation and motion design.",
    fullDescription:
      "Our motion graphics services transform static content into dynamic visual experiences. From explainer videos to animated logos, we create engaging motion content that captures attention and communicates complex ideas simply.",
    image: "/placeholder.svg?height=600&width=1200",
    process: [
      "Concept and storyboarding",
      "Style frames and design",
      "Animation and timing",
      "Sound design and music",
      "Final rendering and delivery",
    ],
    benefits: [
      "Increased engagement",
      "Improved information retention",
      "Enhanced storytelling",
      "Stronger brand recall",
      "Versatile content for multiple platforms",
    ],
    portfolio: [
      {
        title: "Product Explainer Video",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Animated Brand Identity",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Social Media Animations",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
}

export default function ServiceDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const serviceId = params.id as string

  const service = servicesData[serviceId as keyof typeof servicesData]

  const shouldAnimate = useRef(true)

  // Fallback if service doesn't exist
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  useEffect(() => {
    if (shouldAnimate.current) {
      shouldAnimate.current = false
      const ctx = gsap.context(() => {
        // Animate page elements
        gsap.fromTo(
          ".fade-in",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        )

        // Animate portfolio items
        gsap.utils.toArray(".portfolio-item").forEach((item: any, i) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.4 + i * 0.1,
              ease: "power2.out",
            },
          )
        })
      }, pageRef)

      return () => ctx.revert()
    }
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
          <div className="mb-16">
            <Link
              href="/services"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
                <p className="fade-in text-xl text-muted-foreground mb-8">{service.description}</p>
                <Link href="/contact" className="fade-in inline-block">
                  <Button className="rounded-full">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="fade-in">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="fade-in max-w-3xl mx-auto my-20">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Process and Benefits */}
          <div className="grid md:grid-cols-2 gap-12 my-20">
            <div className="fade-in bg-muted dark:bg-zinc-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <ul className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-xs text-primary-foreground font-medium">{index + 1}</span>
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in bg-muted dark:bg-zinc-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="my-20">
            <h2 className="fade-in text-3xl font-bold mb-10 text-center">Related Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.portfolio.map((item, index) => (
                <div key={index} className="portfolio-item group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="fade-in my-20 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to create something amazing. Contact us today to discuss your project.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
