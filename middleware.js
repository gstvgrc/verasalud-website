// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const { pathname } = request.nextUrl
  
  // Headers de respuesta para SEO y seguridad
  const response = NextResponse.next()
  
  // Solo forzar HTTPS en el dominio de producción
  const isProductionDomain = url.hostname === 'verasalud.com' || 
                            url.hostname === 'www.verasalud.com'
  
  // Solo redirigir a HTTPS si estamos en el dominio de producción Y es HTTP
  if (isProductionDomain && url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }
  
  // Eliminar trailing slashes duplicadas
  if (pathname.endsWith('//')) {
    url.pathname = pathname.replace(/\/+$/, '/')
    return NextResponse.redirect(url)
  }
  
  // Convertir URLs a minúsculas (excepto query params)
  if (pathname !== pathname.toLowerCase()) {
    url.pathname = pathname.toLowerCase()
    return NextResponse.redirect(url)
  }
  
  // Headers adicionales de SEO
  response.headers.set('X-Robots-Tag', 'index, follow')
  
  // Hreflang para contenido en español de Colombia
  response.headers.set('Link', '<https://verasalud.com>; rel="canonical"')
  
  // Headers de seguridad
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  
  // Content Security Policy básica
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https: blob:; " +
    "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;"
  )
  
  return response
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}