// app/sitemap.xml/route.ts
export async function GET() {
  const baseUrl = 'https://verasalud.com'

  const staticPages = [
    '', // home
    'servicios',
    'servicios/ecografias',
    'servicios/consulta-medica',
    'servicios/electrocardiograma',
    'nosotros',
    'contacto'
  ]

  const urls = staticPages.map((path) => {
    return `
      <url>
        <loc>${baseUrl}/${path}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
