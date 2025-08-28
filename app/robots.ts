import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sengiku.studio';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
