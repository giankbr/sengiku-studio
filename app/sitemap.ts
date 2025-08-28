import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sengiku.studio';

  // Static routes. Add dynamic routes if needed by fetching data.
  const routes = ['', '/services', '/projects', '/contact'];

  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
