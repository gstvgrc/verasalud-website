// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = 'https://verasalud.com'

  const paths = [
    '/',
    '/medicina-interna',
    '/servicios/ecografias',
    '/servicios/ecografias/abdominal',
    '/servicios/ecografias/hepatica',
    '/servicios/ecografias/pelvica',
    '/servicios/ecografias/obstetrica',
    '/servicios/ecografias/mama',
    '/servicios/ecografias/osteomuscular',
    '/servicios/ecografias/doppler',
    '/servicios/electrocardiograma',
    '/servicios/telemedicina',
    '/videoconsulta',
    '/sobre-nosotros',
    '/contacto',
    '/citas',
    '/blog',
  ]

  const staticPages = paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'daily' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map((page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
