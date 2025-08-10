import { cache } from 'react'
import type { Metadata } from 'next'

export const SITE = {
  name: 'VeraSalud',
  baseUrl: 'https://verasalud.com',
  locale: 'es_CO',
  twitter: '@verasalud'
}

type ServiceSEO = {
  slug: string
  title: string
  description: string
  path: string
  image: string
  ogAlt?: string
  type?: 'website' | 'article'
  keywords?: string[]
}

// Fuente central de verdad para metadatos por servicio
const SERVICES: Record<string, ServiceSEO> = {
  'consulta-medica': {
    slug: 'consulta-medica',
    title: 'Consulta de Medicina Interna en Cali – Especialistas VeraSalud',
    description:
      'Consulta de medicina interna con especialistas de la Universidad del Valle. Diagnóstico integral y manejo de enfermedades crónicas sin filas ni demoras en Cali.',
    path: '/servicios/consulta-medica',
    image: '/equipo-medico.webp',
    ogAlt: 'Médicos internistas de VeraSalud en Cali',
    type: 'article',
    keywords: [
      'medicina interna Cali',
      'internista Cali',
      'consulta médica especializada',
      'diabetes',
      'hipertensión',
      'enfermedades crónicas'
    ]
  },
  electrocardiograma: {
    slug: 'electrocardiograma',
    title: 'Electrocardiograma en Cali | Rápido y Confiable | VeraSalud',
    description:
      'Electrocardiograma digital para detección de arritmias y riesgos cardíacos. Atención sin demoras con lectura por especialistas en VeraSalud Cali.',
    path: '/servicios/electrocardiograma',
    image: '/electrocardiograma-verasalud-cali.webp',
    ogAlt: 'Paciente realizándose un electrocardiograma en VeraSalud Cali',
    type: 'website',
    keywords: [
      'electrocardiograma Cali',
      'ECG Cali',
      'arritmias',
      'bloqueos de rama',
      'chequeo cardiaco',
      'resultados inmediatos'
    ]
  },
  // Ecografías (añade/ajusta según tus páginas disponibles)
  'ecografias/abdominal': {
    slug: 'ecografias/abdominal',
    title: 'Ecografía Abdominal en Cali | VeraSalud',
    description:
      'Ecografía abdominal de alta resolución para evaluación de hígado, vesícula y riñones. Resultados confiables en VeraSalud Cali.',
    path: '/servicios/ecografias/abdominal',
    image: '/ecografia-abdominal-verasalud-cali.webp',
    ogAlt: 'Ecografía abdominal en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía abdominal Cali', 'ultrasonido abdomen', 'ecografías Cali']
  },
  'ecografias/doppler': {
    slug: 'ecografias/doppler',
    title: 'Ecografía Doppler en Cali | VeraSalud',
    description:
      'Ecografía Doppler arterial y venosa para evaluación vascular. Equipos de alta resolución en VeraSalud Cali.',
    path: '/servicios/ecografias/doppler',
    image: '/ecografia-doppler-verasalud-cali.webp',
    ogAlt: 'Ecografía Doppler en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía doppler Cali', 'doppler venoso', 'doppler arterial']
  },
  'ecografias/hepatica': {
    slug: 'ecografias/hepatica',
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description:
      'Ecografía hepática para evaluación de hígado y vías biliares. Atención oportuna en VeraSalud Cali.',
    path: '/servicios/ecografias/hepatica',
    image: '/ecografia-hepatica-verasalud-cali.webp',
    ogAlt: 'Ecografía hepática en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía hepática Cali', 'hígado ecografía', 'vías biliares']
  },
  'ecografias/mama': {
    slug: 'ecografias/mama',
    title: 'Ecografía Mamaria en Cali | VeraSalud',
    description:
      'Ecografía de mama de alta resolución para evaluación y control. VeraSalud Cali.',
    path: '/servicios/ecografias/mama',
    image: '/ecografia-mamaria-verasalud-cali.webp',
    ogAlt: 'Ecografía mamaria en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía mamaria Cali', 'ultrasonido de mama', 'control de mama']
  },
  'ecografias/osteomuscular': {
    slug: 'ecografias/osteomuscular',
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description:
      'Ecografía osteomuscular para tendones, ligamentos y articulaciones. VeraSalud Cali.',
    path: '/servicios/ecografias/osteomuscular',
    image: '/ecografia-osteomuscular-verasalud-cali.webp',
    ogAlt: 'Ecografía osteomuscular en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía osteomuscular Cali', 'tendones ligamentos ecografía']
  },
  'ecografias/pelvica': {
    slug: 'ecografias/pelvica',
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description:
      'Ecografía pélvica femenina con alta calidad de imagen. Resultados confiables en VeraSalud Cali.',
    path: '/servicios/ecografias/pelvica',
    image: '/ecografia-pelvica-verasalud-cali.webp',
    ogAlt: 'Ecografía pélvica en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía pélvica Cali', 'ultrasonido pélvico', 'ginecológica']
  },
  'ecografias/obstetrica': {
    slug: 'ecografias/obstetrica',
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description:
      'Ecografía obstétrica para control prenatal con equipos de alta resolución. VeraSalud Cali.',
    path: '/servicios/ecografias/obstetrica',
    image: '/ecografia-obstetrica-verasalud-cali.webp',
    ogAlt: 'Ecografía obstétrica en VeraSalud Cali',
    type: 'article',
    keywords: ['ecografía obstétrica Cali', 'control prenatal', 'ultrasonido embarazo']
  }
}

export const getServiceSEO = cache(async (slug: string): Promise<ServiceSEO | null> => {
  return SERVICES[slug] ?? null
})

export function buildMetadata(s: ServiceSEO): Metadata {
  const url = new URL(s.path, SITE.baseUrl).toString()
  const ogImage = new URL(s.image, SITE.baseUrl).toString()
  return {
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: s.title,
      description: s.description,
      url,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: s.ogAlt || s.title }],
      locale: SITE.locale,
      type: s.type || 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: s.title,
      description: s.description,
      images: [ogImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}

export function buildBreadcrumbJSONLD(crumbs: Array<{ name: string; item?: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.item ? { item: c.item } : {})
    }))
  }
}
