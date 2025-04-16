"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".footer-content",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer ref={footerRef} className="py-10 border-t border-border bg-background dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sengiku Studio</h2>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mb-8 md:mb-0">
            <div>
              <h3 className="text-sm font-medium mb-3">Contact Us</h3>
              <p className="text-sm text-muted-foreground">+1 891 989-11-91</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Location</h3>
              <p className="text-sm text-muted-foreground">2372 Westheimer Rd, Jakarta, Indonesia 85485</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Email</h3>
              <p className="text-sm text-muted-foreground">hello@sengikustudio.com</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-border hover:bg-muted transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
