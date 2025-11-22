/**
 * XML Sitemap Generator
 *
 * Automatically generates sitemap for search engines.
 * Critical for SEO and page discovery.
 */

import type { APIRoute } from 'astro';

const pages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: 'demolition-services', priority: '0.9', changefreq: 'weekly' },
  { url: 'services/project-management', priority: '0.8', changefreq: 'weekly' },
  { url: 'services/concrete-cutting', priority: '0.8', changefreq: 'weekly' },
  { url: 'services/office-strip-out', priority: '0.8', changefreq: 'weekly' },
  { url: 'services/waste-removal', priority: '0.8', changefreq: 'weekly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://rhbc-services.com.au/${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
