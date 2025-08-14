import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import GA from './components/GA'
import { Footer } from '@/components/Footer'
import Header from '@/components/layout/Header'
import BackgroundAccent from '@/components/fx/BackgroundAccent'
import { PageTransition } from '@/components/fx/MotionPrimitives'
import { SITE } from '@/lib/seo'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: 'VeraSalud - Medicina Interna y Ecografías en Cali',
    template: '%s | VeraSalud',
  },
  description:
    'Centro médico en Cali especializado en medicina interna, ecografías de alta resolución, electrocardiogramas y consultas virtuales. Médicos Universidad del Valle.',
  keywords: [
    'medicina interna cali',
    'ecografías cali',
    'electrocardiograma cali',
    'consulta médica virtual cali',
    'médicos universidad del valle',
    'centro médico cali',
    'verasalud',
  ],
  authors: [{ name: 'VeraSalud' }],
  creator: 'VeraSalud',
  publisher: 'VeraSalud',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'VeraSalud Cali - Medicina Interna y Ecografías Sin Demoras',
    description:
      'Centro médico especializado con médicos de la Universidad del Valle. Sin filas ni demoras.',
    url: 'https://verasalud.com',
    siteName: 'VeraSalud',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Logotipo de VeraSalud sobre fondo azul',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeraSalud Cali - Medicina Interna y Ecografías',
    description:
      'Centro médico especializado con médicos de la Universidad del Valle',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://verasalud.com',
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180' }],
  },
  // verification: {
  //   google: 'tu-codigo-de-verificacion', // Agregar cuando tengas Google Search Console
  // },
}

// Viewport dinámico (puede extenderse según preferencias)
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#21396f',
    colorScheme: 'light',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CO">
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="locale" content="es_CO" />
        <meta name="geo.region" content="CO-VAC" />
        <meta name="geo.placename" content="Cali, Valle del Cauca" />
        <meta name="geo.position" content="3.4516;-76.5320" />
        <meta name="ICBM" content="3.4516, -76.5320" />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#21396f" />

        {/* Preconexión con dominios indispensables para evitar cadenas de solicitudes críticas */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "VeraSalud",
  "image": "https://verasalud.com/logo-verasalud.png",
  "url": "https://verasalud.com",
  "description": "Atención médica especializada en Medicina Interna, Electrocardiograma y Ecografías de alta resolución en Cali.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 77A 3D-05, Barrio Nápoles",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca",
    "postalCode": "760001",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.3907",
    "longitude": "-76.5396"
  },
  "telephone": "+57-602-3942289",
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+57-315-0633005",
    "url": "https://wa.me/573150633005",
    "availableLanguage": ["Spanish"],
    "areaServed": "CO"
  }],
  "medicalSpecialty": ["InternalMedicine", "Cardiology", "MedicalImaging"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Consulta de Medicina Interna",
      "description": "Valoración médica integral para adultos, diagnóstico y control de enfermedades crónicas.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Electrocardiograma",
      "description": "Registro de la actividad eléctrica del corazón para detección de arritmias y problemas cardíacos.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Abdominal",
      "description": "Estudio de hígado, vesícula, riñones y órganos digestivos.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Hepática",
      "description": "Evaluación detallada del hígado, conductos biliares y sistema porta.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Pélvica Ginecológica",
      "description": "Visualización de útero, ovarios y endometrio para salud femenina.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Obstétrica de Tercer Nivel",
      "description": "Seguimiento fetal detallado durante el embarazo con Doppler y biometría avanzada.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía de Tiroides",
      "description": "Estudio morfológico de la glándula tiroides para nódulos o alteraciones.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía de Mama",
      "description": "Detección de lesiones mamarias, quistes o nódulos.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Renal y Vías Urinarias",
      "description": "Valoración de riñones, vejiga y posible litiasis urinaria.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía de Próstata",
      "description": "Detección de crecimiento prostático o lesiones compatibles con HBP.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía de Tejidos Blandos",
      "description": "Evaluación de masas, lipomas o lesiones subcutáneas.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Testicular",
      "description": "Diagnóstico de varicocele, torsión o inflamación testicular.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Doppler Arterial",
      "description": "Estudio de circulación arterial para evaluar estenosis o flujo reducido.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Doppler Venoso",
      "description": "Evaluación de insuficiencia venosa y trombosis.",
      "areaServed": "Cali, Colombia"
    },
    {
      "@type": "MedicalImagingProcedure",
      "name": "Ecografía Osteomuscular o Articular",
      "description": "Visualización de tendones, articulaciones y lesiones musculares.",
      "areaServed": "Cali, Colombia"
    }
  ]
}`,
          }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        <BackgroundAccent />
        <div className="pt-14">
          <PageTransition>{children}</PageTransition>
          <Footer />
          {/* Carga asíncrona de Google Analytics a través del componente GA */}
          <GA />
        </div>
      </body>
    </html>
  )
}

