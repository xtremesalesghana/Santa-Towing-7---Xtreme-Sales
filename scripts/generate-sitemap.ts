import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOWING_ADVERTS } from '../src/data/towingAdverts';
import { VEHICLES } from '../src/data/mockData';
import { BLOG_POSTS } from '../src/data/blogData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get domain from env or use a default one
const DOMAIN = process.env.VITE_SITE_URL || 'https://sparkprimeautoservices.com';

const STANDARD_SERVICES = [
  { id: 'emergency-towing', title: 'Emergency Towing' },
  { id: 'scheduled-towing', title: 'Scheduled Towing' },
  { id: 'vehicle-recovery', title: 'Vehicle Recovery' },
  { id: 'long-distance-towing', title: 'Long-Distance Towing' }
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  const urls: string[] = [];
  const addedUrls = new Set<string>();

  const addUrl = (url: string) => {
    if (!addedUrls.has(url)) {
      urls.push(url);
      addedUrls.add(url);
    }
  };

  // 1. Automatically Parse Static Routes from App.tsx
  const appTsxPath = path.resolve(__dirname, '../src/App.tsx');
  if (fs.existsSync(appTsxPath)) {
    const appTsxContent = fs.readFileSync(appTsxPath, 'utf8');
    // Regex to match <Route path="<path>"
    const routeRegex = /<Route[^>]+path=["']([^"']+)["']/g;
    let match;
    while ((match = routeRegex.exec(appTsxContent)) !== null) {
      const routePath = match[1];
      // Skip dynamic routes (containing ':'), wildcards ('*'), and search results
      if (!routePath.includes(':') && !routePath.includes('*') && routePath !== '/search') {
        addUrl(routePath);
      }
    }
  }

  // 2. Add dynamic routes for service areas
  const areas = Array.from(new Set(TOWING_ADVERTS.map(ad => ad.district))).sort();
  
  areas.forEach(area => {
    const areaSlug = area.toLowerCase().replace(/ /g, '-');
    addUrl(`/service-areas/${areaSlug}`);
    
    STANDARD_SERVICES.forEach(service => {
      addUrl(`/service-areas/${areaSlug}/${service.id}`);
    });
  });

  // 3. Add dynamic routes from mockData
  VEHICLES.forEach(vehicle => {
    addUrl(`/sales/${vehicle.id}`);
  });

  BLOG_POSTS.forEach(post => {
    addUrl(`/blog/${post.id}`);
  });

  // Also extract products from Parts.tsx if possible (using simple regex parsing)
  const partsTsxPath = path.resolve(__dirname, '../src/pages/Parts.tsx');
  if (fs.existsSync(partsTsxPath)) {
    const partsContent = fs.readFileSync(partsTsxPath, 'utf8');
    const productRegex = /id:\s*(\d+)/g;
    let match;
    let count = 0;
    while ((match = productRegex.exec(partsContent)) !== null && count < 20) {
      addUrl(`/parts/${match[1]}`);
      count++;
    }
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.includes('/service-areas/') ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to public directory so it gets copied to dist, and is available in dev
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapContent);
  console.log(`Sitemap generated successfully at public/sitemap.xml with ${urls.length} URLs.`);
}

generateSitemap().catch(console.error);
