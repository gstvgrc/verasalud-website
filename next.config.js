// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar modo estricto de React
  reactStrictMode: true,
  
  // Configuración de imágenes
  images: {
    // Dominios permitidos para imágenes externas
    domains: [
      'verasalud.com',
      'images.unsplash.com', // Si usas Unsplash
      // Agrega otros dominios según necesites
    ],
    // Formatos de imagen modernos
    formats: ['image/avif', 'image/webp'],
    // Tamaños de dispositivo para optimización
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimizar imágenes
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 año
  },
  
  // Compresión de archivos
  compress: true,
  
  // Trailing slash desactivado para coincidir con URL canónicas
  trailingSlash: false,

  // Configuración de internacionalización
  i18n: {
    locales: ['es-CO'],
    defaultLocale: 'es-CO',
  },
  
  // Configuración de headers de seguridad y SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      },
      // Cache para archivos estáticos
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  
  // Redirecciones 301 para SEO
  async redirects() {
    return [
      // Ejemplo: redirigir URLs antiguas a nuevas
      {
        source: '/medicina-general',
        destination: '/medicina-interna',
        permanent: true,
      },
      {
        source: '/ecografias',
        destination: '/servicios/ecografias',
        permanent: true,
      },
      {
        source: '/electrocardiogramas',
        destination: '/servicios/electrocardiograma',
        permanent: true,
      },
      // Redirección nueva: electrocardiograma singular
      {
        source: '/electrocardiograma',
        destination: '/servicios/electrocardiograma',
        permanent: true,
      },
      // Redirigir index.html a raíz
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Agrega más redirecciones según necesites
    ]
  },
  
  // Rewrites para URLs limpias
  async rewrites() {
    return [
      // Ejemplo: URLs amigables para filtros
      {
        source: '/servicios/:categoria',
        destination: '/api/servicios?categoria=:categoria',
      },
    ]
  },
  
  // Variables de entorno
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://verasalud.com',
    NEXT_PUBLIC_GA_ID: 'G-0DD5YNJGV5',
  },
  
  // Optimizaciones de webpack
  webpack: (config, { isServer }) => {
    // Optimización para reducir el tamaño del bundle
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    }
    return config
  },
}

module.exports = nextConfig
