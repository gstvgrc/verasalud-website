export async function GET() {
  const baseUrl = 'https://verasalud.com';

  const staticPaths = [
    '', // Página de inicio
    'servicios',
    'servicios/ecografias',
    'servicios/consulta-medica',
    'servicios/electrocardiograma',
    'servicios/telemedicina',
    'videoconsulta',
    'citas',
    'sobre-nosotros',
    'contacto',
  ];

  const urls = staticPaths
    .map((path) =>
      `<url><loc>${baseUrl}/${path}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    )
    .join('');

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `${urls}</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
