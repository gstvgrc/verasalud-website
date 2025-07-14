/** @type {import('next').NextConfig} */
// Configuración compatible de Next.js optimizada para VeraSalud
// Compatible con Next.js 15.3.5 - Enfocada en velocidad y AWS Amplify
// Incluye optimizaciones específicas para sitios web médicos

const nextConfig = {
  // Configuración básica optimizada para rendimiento médico
  poweredByHeader: false, // Remueve header innecesario para mejor seguridad
  
  // Optimización de imágenes médicas con configuración compatible
  images: {
    // Formatos de próxima generación para carga ultra-rápida
    formats: ['image/webp', 'image/avif'],
    
    // Tamaños de dispositivo optimizados para acceso médico móvil
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Dominios permitidos para imágenes (incluye CDN futuro)
    domains: ['verasalud.com', 'localhost', 'www.verasalud.com'],
    
    // Configuración de carga diferida para mejor rendimiento
    loader: 'default',
  },

  // Compresión avanzada para acelerar transferencia de datos médicos
  compress: true,
  
  // Configuración de headers de seguridad para sitios médicos
  async headers() {
    return [
      {
        // Headers aplicados a todas las páginas médicas
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Previene ataques de clickjacking en formularios médicos
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Previene ataques de tipo MIME
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Protege privacidad de pacientes
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on', // Acelera resolución de DNS para recursos externos
          },
        ],
      },
      {
        // Headers específicos para recursos estáticos médicos
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Caché agresivo para imágenes
          },
        ],
      },
      {
        // Headers para archivos JavaScript y CSS optimizados
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirecciones SEO optimizadas para clínica médica
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // Redirect 301 para SEO
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/medicina-interna.html',
        destination: '/#servicios',
        permanent: true,
      },
      {
        source: '/ecografias.html',
        destination: '/#servicios',
        permanent: true,
      },
      {
        source: '/contacto.html',
        destination: '/#contacto',
        permanent: true,
      },
    ]
  },

  // Configuración de trailing slash para URLs consistentes
  trailingSlash: false,

  // Configuración de compilador optimizada para producción médica
  compiler: {
    // Remueve console.log en producción para archivos más pequeños
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'], // Mantiene console.error para debugging médico crítico
    } : false,
  },

  // Configuración de output optimizada para AWS Amplify
  // Esta configuración asegura compatibilidad total con AWS Amplify
  
  // Variables de entorno para optimización médica
  env: {
    CUSTOM_KEY: 'verasalud_cali_medical_site',
    SITE_TYPE: 'medical_clinic',
    OPTIMIZATION_LEVEL: 'maximum_performance',
  },

  // Configuración de webpack personalizada para optimización médica
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimización de bundle splitting para sitios médicos
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Separa vendor libraries para mejor caching
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            // Separa código común médico
            medical: {
              name: 'medical-commons',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      }
    }

    // Optimización para análisis de bundles médicos
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')()
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
          openAnalyzer: false,
        })
      )
    }

    return config
  },

  // Configuración experimental compatible para optimización
  experimental: {
    // Optimizaciones de CSS para mejor rendimiento médico
    optimizeCss: false, // Mantenemos en false para máxima compatibilidad
  },
}

module.exports = nextConfig