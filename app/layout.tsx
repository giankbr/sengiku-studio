import ScrollAnimator from '@/components/scroll-animator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import type React from 'react';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3002'),
  title: {
    default: 'Sengiku Studio | Web Design & Development',
    template: '%s | Sengiku Studio',
  },
  description: 'We create stunning digital experiences that drive results. Sengiku Studio is a professional web studio specializing in web design, development, and digital solutions.',
  applicationName: 'Sengiku Studio',
  keywords: ['web design', 'web development', 'frontend', 'Next.js', 'React', 'Tailwind CSS', 'UI/UX', 'Sengiku Studio'],
  authors: [{ name: 'Sengiku Studio' }],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Sengiku Studio | Web Design & Development',
    description: 'We create stunning digital experiences that drive results. Sengiku Studio is a professional web studio specializing in web design, development, and digital solutions.',
    siteName: 'Sengiku Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sengiku Studio | Web Design & Development',
    description: 'We create stunning digital experiences that drive results. Sengiku Studio is a professional web studio specializing in web design, development, and digital solutions.',
    creator: '@sengikustudio',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollAnimator />
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
