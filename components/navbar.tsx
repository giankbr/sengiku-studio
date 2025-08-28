'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Project', href: '/projects' },
];

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
        <div className="container mx-auto px-4 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
              Sengiku Studio
            </Link>
          </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm md:text-[15px] tracking-tight px-3 py-2 rounded-full transition-colors',
                    isActive ? 'bg-muted/60 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  )}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions - right */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <Link href="/contact">
              <Button variant="outline" className="rounded-full px-5">
                Contact Us
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center justify-end gap-2 col-span-1">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full px-3 py-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm" aria-label="Mobile navigation menu">
                <div className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-base px-3 py-3 rounded-full transition-colors',
                          pathname === link.href ? 'bg-muted/60 text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                        )}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}

                  <SheetClose asChild>
                    <Link href="/contact">
                      <Button className="rounded-full w-full mt-4 py-6 text-base">Contact Us</Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
