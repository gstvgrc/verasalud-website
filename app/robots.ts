// Crea un robots.txt dinámico compatible con Next.js 14.
export default function robots() {
  const baseUrl = 'https://verasalud.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
