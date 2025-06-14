// scripts/sitemap-generator.js
const fs = require('fs');
const path = require('path');

// 1. روابط موقعك - عدلها حسب احتياجاتك
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/about', priority: 0.9, changefreq: 'monthly' },
  { url: '/services', priority: 0.9, changefreq: 'monthly' },
  { url: '/portfolio', priority: 0.8, changefreq: 'weekly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.7, changefreq: 'weekly' },
];

// 2. توليد محتوى XML
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `
  <url>
    <loc>https://nanosoft.ly${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;
};

// 3. حفظ الملف في public/
const sitemapContent = generateSitemap();
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent);
console.log('✅ تم إنشاء sitemap.xml بنجاح في: ' + outputPath);