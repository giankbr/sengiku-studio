"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

const categories = ["All", "Web Design", "Mobile App", "Branding", "UI/UX", "Illustration"]

const projects = [
  {
    id: "petshop-app",
    title: "PETSHOP",
    category: "Mobile App",
    description:
      "A comprehensive mobile app for pet owners to manage their pets' health, schedule vet appointments, and shop for pet supplies.",
    client: "PetCare Inc.",
    year: "2024",
    image: "/placeholder.svg?height=600&width=400",
    featured: true,
  },
  {
    id: "arteco-brand",
    title: "ARTECO",
    category: "Branding",
    description:
      "Complete brand identity for an eco-friendly art supply company, including logo design, packaging, and digital assets.",
    client: "Arteco Supplies",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    featured: true,
  },
  {
    id: "nomad-website",
    title: "NOMAD",
    category: "Web Design",
    description:
      "A responsive website for a travel blog focusing on off-the-beaten-path destinations and authentic experiences.",
    client: "Nomad Explorers",
    year: "2024",
    image: "/placeholder.svg?height=600&width=400",
    featured: true,
  },
  {
    id: "lumina-ux",
    title: "LUMINA",
    category: "UI/UX",
    description:
      "User interface and experience design for a smart home control system, focusing on accessibility and intuitive interactions.",
    client: "Lumina Tech",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    featured: true,
  },
  {
    id: "verde-branding",
    title: "VERDE",
    category: "Branding",
    description:
      "Brand identity for a sustainable fashion label, including logo, color palette, typography, and brand guidelines.",
    client: "Verde Fashion",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    featured: false,
  },
  {
    id: "pulse-app",
    title: "PULSE",
    category: "Mobile App",
    description:
      "Fitness tracking app with personalized workout plans, nutrition guidance, and progress visualization.",
    client: "Pulse Fitness",
    year: "2022",
    image: "/placeholder.svg?height=600&width=400",
    featured: false,
  },
  {
    id: "horizon-website",
    title: "HORIZON",
    category: "Web Design",
    description:
      "Corporate website for a renewable energy company, highlighting their innovative solutions and global impact.",
    client: "Horizon Energy",
    year: "2023",
    image: "/placeholder.svg?height=600&width=400",
    featured: false,
  },
  {
    id: "bloom-illustrations",
    title: "BLOOM",
    category: "Illustration",
    description:
      "Series of botanical illustrations for a gardening app, featuring detailed plant drawings and care instructions.",
    client: "Bloom Gardens",
    year: "2022",
    image: "/placeholder.svg?height=600&width=400",
    featured: false,
  },
]

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page title
      gsap.fromTo(
        ".page-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
      )

      // Animate project items
      gsap.utils.toArray(".project-card").forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2 + i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

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
              Our <span className="italic font-normal">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of projects across various disciplines, from web design to branding and
              illustration.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
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

          {/* Featured Projects */}
          {activeCategory === "All" && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="project-card group">
                      <div
                        className="relative aspect-[4/5] overflow-hidden rounded-lg"
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Overlay that appears on hover */}
                        <div
                          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                            hoveredProject === index ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="text-center text-white p-6">
                            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4">
                              <Plus className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm opacity-80">{project.category}</p>
                          </div>
                        </div>
                      </div>

                      {/* Info below image */}
                      <div className="flex justify-between items-center mt-4 px-2">
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.category}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-bold mb-8">{activeCategory === "All" ? "All Projects" : activeCategory}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="project-card group">
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredProject(index + 100)} // Offset to avoid conflict with featured projects
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay that appears on hover */}
                    <div
                      className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === index + 100 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-center text-white p-6">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-3">
                          <Plus className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-xs opacity-80">{project.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Info below image */}
                  <div className="flex justify-between items-center mt-4 px-2">
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 py-12 px-8 bg-muted dark:bg-zinc-900 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
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
