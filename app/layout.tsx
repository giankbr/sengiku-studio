import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import type React from 'react';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Sengiku Studio | Web Design & Development',
  description: 'We create stunning digital experiences that drive results. Sengiku Studio is a professional web studio specializing in web design, development, and digital solutions..',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
