// generate-sitemap.js

const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

// --------------------------------------------------------
// Remplacez par votre domaine exact :
// (ici nous utilisons nanosoft.ly)
const SITE_URL = 'https://nanosoft.ly';
// --------------------------------------------------------

// 1. Liste des pages statiques (vous pouvez ajuster/changefreq/priority/lastmod selon vos besoins)
const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/contact', changefreq: 'monthly', priority: 0.12, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/accounting', changefreq: 'monthly', priority: 0.11, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/inventory', changefreq: 'monthly', priority: 0.10, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/hr', changefreq: 'monthly', priority: 0.9, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/injaz', changefreq: 'monthly', priority: 0.8, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/erp', changefreq: 'monthly', priority: 0.7, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/software-development', changefreq: 'monthly', priority: 0.6, lastmod: '2025-05-15T00:00:00.000Z' },
  { url: '/cyber-security', changefreq: 'monthly', priority: 0.5, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/cloud-services', changefreq: 'monthly', priority: 0.4, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/terms-of-use', changefreq: 'monthly', priority: 0.3, lastmod: '2025-05-20T00:00:00.000Z' },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.2, lastmod: '2025-05-20T00:00:00.000Z' },
  // … ajoutez ici toutes vos pages “statiques”
];

// 2. Exemple de pages dynamiques (s’il y en a). Remplacez par l’appel à votre API/DB si besoin.
const getDynamicPages = () => {
  return [
    { url: '/pricing', changefreq: 'weekly', priority: 0.9, lastmod: '2025-06-01T12:00:00.000Z' },
    { url: '/admin/login', changefreq: 'weekly', priority: 0.9, lastmod: '2025-06-01T12:00:00.000Z' },
    { url: '/admin', changefreq: 'weekly', priority: 0.9, lastmod: '2025-05-30T08:00:00.000Z' },
    // … autres articles
  ];
};

(async () => {
  try {
    // Récupération des pages dynamiques
    const dynamicPages = getDynamicPages();
    const allPages = [...staticPages, ...dynamicPages];

    // Si moins de 50 000 URLs, on crée un seul sitemap.xml
    if (allPages.length <= 50000) {
      // Création du SitemapStream avec le hostname
      const smStream = new SitemapStream({ hostname: SITE_URL });
      // On enregistre normalement (sans gzip)
      const xmlBuffer = await streamToPromise(smStream);

      // Écriture de chaque URL dans le stream
      allPages.forEach(page => {
        smStream.write({
          url: page.url,
          changefreq: page.changefreq,
          priority: page.priority,
          lastmod: page.lastmod,
        });
      });
      smStream.end();

      // Récupère le contenu XML généré
      const sitemapXml = xmlBuffer.toString();

      // Sauvegarde dans public/sitemap.xml
      fs.writeFileSync('./public/sitemap.xml', sitemapXml, 'utf8');
      console.log('✅ sitemap.xml a bien été créé dans ./public');
    } else {
      // Si > 50 000 URLs, vous pouvez implémenter une logique de "chunking",
      // mais pour la plupart des sites moyens, ce n’est pas nécessaire.
      console.error(' Trop de pages pour un seul sitemap (plus de 50 000)');
    }
  } catch (err) {
    console.error(' Erreur lors de la génération du sitemap :', err);
  }
})();
