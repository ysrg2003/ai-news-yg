import { useEffect } from 'react';
import { APP_URL } from '@shared/const';

export default function Sitemap() {
  useEffect(() => {
    // Set content type to XML
    document.documentElement.innerHTML = generateSitemap();
  }, []);

  return null;
}

function generateSitemap(): string {
  const baseUrl = APP_URL.replace(/\/$/, '');
  const currentDate = new Date().toISOString().split('T')[0];

  const pages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/articles', changefreq: 'daily', priority: '0.9' },
    { url: '/categories', changefreq: 'weekly', priority: '0.8' },
    { url: '/about', changefreq: 'monthly', priority: '0.7' },
    { url: '/privacy', changefreq: 'monthly', priority: '0.5' },
    { url: '/terms', changefreq: 'monthly', priority: '0.5' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}
