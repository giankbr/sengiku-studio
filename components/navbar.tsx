'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Navigation links temporarily removed for single-page landing

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-background/70 supports-[backdrop-filter]:bg-background/60 backdrop-blur border-b' : 'bg-transparent')}
      >
        <div className="container mx-auto px-4 h-20 grid grid-cols-2 items-center">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
              Sengiku Studio
            </Link>
          </div>

          {/* Desktop Navigation removed */}

          {/* Desktop Actions - right */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center justify-end gap-2 col-span-1">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
