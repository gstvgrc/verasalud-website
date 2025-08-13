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
  // Compilación moderna por defecto en Next 15+
  compiler: {
    removeConsole: false,
  },
  
  // Configuración de headers de seguridad y SEO
  async headers() {
    // Ajusta dominios si añades/quitas proveedores
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      // Permite estilos en línea necesarios para componentes de Next.js
      "style-src 'self' 'unsafe-inline'",
      // Limita conexiones externas a Google Analytics/Tag Manager; ajusta dominios según tus proveedores
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
      // Permite scripts propios y los de Google Analytics/Tag Manager
      "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline'",
      "form-action 'self'",
      "upgrade-insecure-requests",
      // Activa Trusted Types para mitigar XSS basado en DOM
      "require-trusted-types-for 'script'",
      "trusted-types verasalud default"
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          // Indexación explícita
          { key: 'X-Robots-Tag', value: 'all' },

          // HSTS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },

          // CSP + Trusted Types
          { key: 'Content-Security-Policy', value: csp },

          // Aislamiento de origen
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },

          // Otras cabeceras recomendadas
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ]
      }
    ];
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
    return [];
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
    // Optimiza la eliminación de código JavaScript no utilizado
    config.optimization = config.optimization || {}
    config.optimization.usedExports = true
    return config
  },
}

module.exports = nextConfig
