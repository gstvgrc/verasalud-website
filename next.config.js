/** @type {import('next').NextConfig} */
// Configuración optimizada para AWS Amplify - VeraSalud
const nextConfig = {
  // Configuración básica optimizada para despliegue
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  
  // Optimización de imágenes compatible con Amplify
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['verasalud.com', 'localhost'],
  },

  // Headers de seguridad para sitio médico
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig