import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your domain
const hostname = 'https://suryavamsi.vercel.app';

// Routes
const routes = [
  '/',
  '/projects/mojito',
  '/projects/photogram',
  '/projects/cygnus',
  '/projects/shwas',
];

async function generateSitemap() {
  // Create a SitemapStream
  const sitemap = new SitemapStream({ hostname });

  // Write all routes
  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  // Home page
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });

  sitemap.end();

  // Convert stream to XML string
  const xml = await streamToPromise(sitemap).then((data) => data.toString());

  // Write to public/sitemap.xml
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  writeFileSync(sitemapPath, xml);

  console.log('Sitemap generated at:', sitemapPath);
}

generateSitemap();
