"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

const services = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "We create visual concepts that inspire, inform, and captivate consumers.",
    image: "/placeholder.svg?height=400&width=600",
    items: ["Logo Design", "Book Cover Design", "Digital Marketing", "Social Media"],
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "We design digital products with a focus on user experience and interface design.",
    image: "/placeholder.svg?height=400&width=600",
    items: ["UI/UX Design", "Web Design", "Mobile App Design", "Dashboard Design"],
  },
  {
    id: "illustration",
    title: "Illustration",
    description: "We create custom illustrations that tell your story and enhance your brand.",
    image: "/placeholder.svg?height=400&width=600",
    items: ["Character Art", "Vector Illustration", "Book Illustration", "Digital Art"],
  },
  {
    id: "branding",
    title: "Branding",
    description: "We develop comprehensive brand identities that resonate with your audience.",
    image: "/placeholder.svg?height=400&width=600",
    items: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Rebranding"],
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "We bring your ideas to life through animation and motion design.",
    image: "/placeholder.svg?height=400&width=600",
    items: ["2D Animation", "3D Animation", "Explainer Videos", "Motion Branding"],
  },
]

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page title
      gsap.fromTo(
        ".page-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
      )

      // Animate service items
      gsap.utils.toArray(".service-card").forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 + i * 0.1, ease: "power2.out" },
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
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="italic font-normal">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer a comprehensive range of design services to help your brand stand out. From branding to
              illustration, we've got you covered.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="service-card border-t border-border pt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.items.map((item, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-muted text-sm">
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="rounded-full group">
                        Learn More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="order-first md:order-last">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full rounded-lg object-cover aspect-video"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's collaborate to bring your vision to life. Our team is ready to help you create something amazing.
            </p>
            <Link href="/contact">
              <Button className="rounded-full px-8">
                Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
