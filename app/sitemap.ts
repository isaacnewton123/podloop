import { MetadataRoute } from 'next';
import { getPostSlugs } from './lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://podloop.xyz";

  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/careers',
    '/changelog',
    '/contact',
    '/cookies',
    '/docs',
    '/faq',
    '/integrations',
    '/privacy',
    '/refund',
    '/terms',
    '/waitlist'
  ];

  const sitemapRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogSlugs = getPostSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.mdx$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...sitemapRoutes, ...blogRoutes];
}
