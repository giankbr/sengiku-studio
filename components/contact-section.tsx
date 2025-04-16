"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".contact-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate form elements
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate contact info
      gsap.fromTo(
        ".contact-info",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

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
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-muted dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="contact-title text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
            Got a project? <span className="italic font-normal">Let's talk.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="contact-form">
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
                    className="w-full bg-background dark:bg-zinc-800"
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
                    className="w-full bg-background dark:bg-zinc-800"
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
                    className="w-full bg-background dark:bg-zinc-800"
                  />
                </div>

                <Button type="submit" className="rounded-full w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="contact-info space-y-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
