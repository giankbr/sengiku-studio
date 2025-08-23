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
  // { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  // { name: 'Blogs', href: '/blogs' },
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
        className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'bg-background/80 supports-[backdrop-filter]:bg-background/70 backdrop-blur border-b' : 'bg-transparent')}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight">
            Sengiku Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className={cn('relative text-sm text-muted-foreground hover:text-foreground transition-colors', isActive && 'text-foreground')}>
                  <span>{link.name}</span>
                  <span className={cn('absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300', isActive && 'scale-x-100')} />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button className="rounded-full px-5">Contact</Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full px-3 py-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm">
                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link href={link.href} className={cn('text-lg py-2 text-muted-foreground hover:text-foreground transition-colors', pathname === link.href && 'text-foreground')}>
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
