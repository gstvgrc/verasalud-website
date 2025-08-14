import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    'servicios',
    'servicios/consulta-medica',
    'servicios/ecografias',
    'servicios/ecografias/abdominal',
    'servicios/ecografias/hepatica',
    'servicios/ecografias/pelvica',
    'servicios/ecografias/obstetrica',
    'servicios/ecografias/obstetrica/tercer-nivel',
    'servicios/ecografias/tiroides',
    'servicios/ecografias/mama',
    'servicios/ecografias/renal-vias-urinarias',
    'servicios/ecografias/prostata',
    'servicios/ecografias/tejidos-blandos',
    'servicios/ecografias/testicular',
    'servicios/ecografias/osteomuscular',
    'servicios/ecografias/doppler',
    'servicios/electrocardiograma',
    'servicios/telemedicina',
    'videoconsulta',
    'citas',
    'sobre-nosotros',
    'contacto',
  ]

  return pages.map((path) => ({
    url: path ? `${SITE.baseUrl}/${path}` : SITE.baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
}
