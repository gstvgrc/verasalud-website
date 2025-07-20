// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://verasalud.com'),
  title: {
    default: 'VeraSalud Cali - Medicina Interna y Ecografías Sin Demoras',
    template: '%s | VeraSalud Cali'
  },
  description: 'Centro médico en Cali especializado en medicina interna, ecografías de alta resolución, electrocardiogramas y consultas virtuales. Médicos Universidad del Valle.',
  keywords: [
    'medicina interna cali',
    'ecografías cali',
    'electrocardiograma cali',
    'consulta médica virtual cali',
    'médicos universidad del valle',
    'centro médico cali',
    'verasalud'
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
    description: 'Centro médico especializado con médicos de la Universidad del Valle. Sin filas ni demoras.',
    url: 'https://verasalud.com',
    siteName: 'VeraSalud',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VeraSalud - Centro Médico en Cali',
      }
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeraSalud Cali - Medicina Interna y Ecografías',
    description: 'Centro médico especializado con médicos de la Universidad del Valle',
    images: ['https://verasalud.com/twitter-image.jpg'],
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
  // verification: {
  //   google: 'tu-codigo-de-verificacion', // Agregar cuando tengas Google Search Console
  // },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'VeraSalud',
    description: 'Centro médico especializado en medicina interna y ecografías de alta resolución',
    url: 'https://verasalud.com',
    telephone: '+57-602-394-2289',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrera 77A # 3D - 05',
      addressLocality: 'Cali',
      addressRegion: 'Valle del Cauca',
      postalCode: '760001',
      addressCountry: 'CO'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.4516,
      longitude: -76.5320
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    medicalSpecialty: [
      'InternalMedicine',
      'Radiology',
      'Cardiology'
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Consulta de Medicina Interna',
        description: 'Diagnóstico integral y tratamientos personalizados'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ecografías de Alta Resolución',
        description: 'Ecografías convencionales y Doppler con tecnología avanzada'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Electrocardiogramas',
        description: 'Detección temprana de arritmias y afecciones cardiacas'
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Consultas Virtuales',
        description: 'Atención médica especializada desde casa'
      }
    ],
    priceRange: '$$'
  }

  return (
    <html lang="es-CO">
      <meta name="language" content="Spanish" />
<meta name="locale" content="es_CO" />

      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#21396f" />
        
        {/* Datos estructurados */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0DD5YNJGV5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0DD5YNJGV5', {
              anonymize_ip: true
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}