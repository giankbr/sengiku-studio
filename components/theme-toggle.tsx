"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")

    // Add animation when toggling theme
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, { rotate: 0 }, { rotate: 360, duration: 0.6, ease: "power2.out" })
    }
  }

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full bg-background/80 backdrop-blur-sm"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
