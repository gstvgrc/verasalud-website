import { MetadataRoute } from 'next';

// Crea un robots.txt dinámico compatible con Next.js 14.
export default function robots(): MetadataRoute.Robots {
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
