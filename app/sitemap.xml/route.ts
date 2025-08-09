export async function GET() {
  const baseUrl = 'https://verasalud.com'

  // Enumera todas las rutas públicas para que Google las descubra
  const staticPaths = [
    '',
    'servicios',
    'servicios/consulta-medica',
    'servicios/ecografias',
    'servicios/ecografias/abdominal',
    'servicios/ecografias/hepatica',
    'servicios/ecografias/pelvica',
    'servicios/ecografias/obstetrica',
    'servicios/ecografias/tiroides',
    'servicios/ecografias/mama',
    'servicios/ecografias/renal-vias-urinarias',
    'servicios/ecografias/prostata',
    'servicios/ecografias/tejidos-blandos',
    'servicios/ecografias/testicular',
    'servicios/ecografias/osteomuscular',
    'servicios/ecografias/doppler/arterial',
    'servicios/ecografias/doppler/venoso',
    'servicios/electrocardiograma',
    'servicios/telemedicina',
    'videoconsulta',
    'citas',
    'sobre-nosotros',
    'contacto'
  ]

  const urls = staticPaths
    .map(
      (path) =>
        `<url><loc>${baseUrl}/${path}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join('')

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `${urls}</urlset>`

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  })
}
