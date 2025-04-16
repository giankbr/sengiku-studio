"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate page elements
      gsap.fromTo(
        ".fade-in",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div ref={pageRef} className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Got a project? <span className="italic font-normal">Let's talk.</span>
            </h1>

            <p className="fade-in text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're excited to hear about your project. Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="w-full"
                    />
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
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="rounded-full w-full">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              <div className="fade-in space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-2">
                    Feel free to reach out to us through any of these channels:
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Email</h4>
                  <p className="text-lg mb-4">hello@sengikustudio.com</p>

                  <h4 className="text-sm font-medium mb-2">Phone</h4>
                  <p className="text-lg mb-4">+1 891 989-11-91</p>

                  <h4 className="text-sm font-medium mb-2">Address</h4>
                  <p className="text-lg">
                    2372 Westheimer Rd,
                    <br />
                    Jakarta, Indonesia 85485
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Weekend: Closed
                  </p>
                </div>

                <div className="pt-6">
                  <h4 className="text-sm font-medium mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <span className="font-medium">Be</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <span className="text-lg">◎</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <span className="text-lg">𝕏</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <span className="text-lg">◼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
