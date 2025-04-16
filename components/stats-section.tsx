"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  {
    value: "92%",
    description:
      "Our agency has produced many products that have been live, showcasing our expertise in delivering high-quality",
  },
  {
    value: "64%",
    description:
      "Most of the designers in our agency have high job opportunities, thanks to their exceptional skills and the agency's strong reputation",
  },
  {
    value: "0%",
    description:
      "Our agency never gets complaints and is dedicated to consistently satisfying clients with exceptional results.",
  },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const countersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate text content
      gsap.fromTo(
        ".stats-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".stats-content",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate stats counters
      gsap.utils.toArray(".stat-counter").forEach((counter: any, i) => {
        gsap.fromTo(
          counter,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: countersRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="stats-content">
              <p className="text-sm font-medium mb-4">Digital Agency based in Jakarta, ID</p>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                Explore our work, where creativity seamlessly meets purpose, pushing boundaries and transforming ideas
                into impactful experiences. We believe in crafting designs that not only captivate but also drive
                meaningful connections.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-full group">
                  About Us <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-counter bg-muted rounded-lg p-6 dark:bg-zinc-900">
                <div className="text-5xl font-bold mb-4">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
