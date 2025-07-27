// app/page.js
// Página principal de VeraSalud - Actualizada
import styles from './Home.module.css'
import ContactForm from './components/ContactForm'
import MobileMenu from './components/MobileMenu'
import Image from 'next/image'
import Link from 'next/link'

// Metadata extraída del Head anterior
export const metadata = {
  title: 'VeraSalud Cali - Medicina Interna y Ecografías Alta Resolución | Especialistas Universidad del Valle',
  description: 'VeraSalud: Medicina Interna y Ecografías de Alta Resolución sin demoras en Cali. Médicos especialistas Universidad del Valle. Barrio Nápoles. Tel: (602) 394-2289. Agenda tu cita hoy.',
  keywords: 'medicina interna cali, ecografías alta resolución cali, médicos especialistas universidad del valle, electrocardiograma cali, medicina interna nápoles cali, ecografías doppler cali, sin demoras, tecnología avanzada',
  authors: [{ name: 'VeraSalud' }],
  creator: 'VeraSalud',
  publisher: 'VeraSalud',
  robots: 'index, follow, max-image-preview:large',
  alternates: {
    canonical: 'https://verasalud.com',
  },
  openGraph: {
    type: 'website',
    title: 'VeraSalud Cali - Medicina Interna y Ecografías Alta Resolución',
    description: 'Médicos especialistas Universidad del Valle. Sin filas ni demoras. Barrio Nápoles, Cali.',
    url: 'https://verasalud.com',
    siteName: 'VeraSalud',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeraSalud Cali - Medicina Interna y Ecografías',
    description: 'Especialistas Universidad del Valle. Sin demoras. Cali, Colombia.',
  },
  other: {
    'geo.region': 'CO-VAC',
    'geo.placename': 'Cali, Valle del Cauca',
    'geo.position': '3.4516;-76.5320',
    'ICBM': '3.4516, -76.5320',
  },
}

// Datos estructurados para SEO
const jsonLdMedicalOrg = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "VeraSalud",
  "alternateName": "VeraSalud Cali",
  "description": "Centro médico especializado en medicina interna y ecografías de alta resolución con médicos especialistas de la Universidad del Valle en Cali, Colombia.",
  "url": "https://verasalud.com",
  "telephone": "+57-602-394-2289",
  "email": "info@verasalud.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 77A # 3D - 05",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca",
    "postalCode": "760001",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.4516",
    "longitude": "-76.5320"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00", 
      "closes": "12:00"
    }
  ],
  "medicalSpecialty": [
    "Internal Medicine",
    "Medical Imaging",
    "Cardiology"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Consulta de Medicina Interna",
      "description": "Consulta especializada con médicos de la Universidad del Valle"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Ecografías Convencionales y Doppler",
      "description": "Estudios ecográficos de alta resolución con tecnología avanzada"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Electrocardiograma",
      "description": "Diagnóstico de arritmias y afecciones cardiacas"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Medical Degree",
    "educationalLevel": "University",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Universidad del Valle"
    }
  }
}

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VeraSalud",
  "image": "https://verasalud.com/logo.png",
  "description": "Medicina Interna y Ecografías de Alta Resolución sin filas ni demoras. Médicos especialistas de la Universidad del Valle en Cali, Colombia.",
  "url": "https://verasalud.com",
  "telephone": "+57-602-394-2289",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrera 77A # 3D - 05",
    "addressLocality": "Cali",
    "addressRegion": "Valle del Cauca",
    "postalCode": "760001",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 3.4516,
    "longitude": -76.5320
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-12:00"
  ],
  "sameAs": [
    "https://wa.me/573150633005",
    "https://www.instagram.com/vera_salud_cali",
    "https://www.facebook.com/profile.php?id=61578207426838"
  ]
}

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Datos estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMedicalOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Image
              src="/logo-verasalud.png"
              alt="VeraSalud Logo"
              width={150}
              height={150}
              className={styles.logoHeader}
            />
            <div>
              <h1>VeraSalud</h1>
              <p>Medicina Interna & Ecografías</p>
            </div>
          </div>
          <nav className={styles.nav}>
            <a href="#servicios">Servicios</a>
            <a href="#convenios">Convenios</a>
            <a href="#contacto">Contacto</a>
            <a 
              href="https://wa.me/573150633005" 
              className={styles.whatsappBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tu salud no espera</h1>
          <h2>Médicos especialistas de la Universidad del Valle</h2>
          <p>Medicina Interna y Ecografías de Alta Resolución sin filas ni demoras: experiencia clínica y tecnología avanzada</p>
          <div className={styles.heroButtons}>
            <a href="#servicios" className={styles.btnPrimary}>Ver Servicios</a>
            <a href="tel:+576023942289" className={styles.btnSecondary}>Llamar Ahora</a>
          </div>
          <div className={styles.trustIndicators}>
            <p>✓ Médicos Universidad del Valle  ✓ Sin Demoras  ✓ Alta Tecnología</p>
          </div>
        </div>
      </section>

      {/* Services Section - Reordenado */}
      <section id="servicios" className={styles.services}>
        <div className={styles.container}>
          <h2>Servicios Médicos Especializados en Cali</h2>
          <div className={styles.servicesGrid}>
            
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/medicina-interna" prefetch={false}>
                  Medicina Interna Especializada
                </Link>
              </h3>
              <p>
                Consulta de medicina interna con médicos especialistas titulados de la Universidad del Valle. Diagnóstico integral, tratamientos personalizados y seguimiento médico continuo en Cali.
              </p>
              <ul>
                <li>Diagnóstico integral completo</li>
                <li>Tratamientos personalizados</li>
                <li>Seguimiento médico continuo</li>
                <li>Especialistas Universidad del Valle</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/electrocardiograma" prefetch={false}>
                  Electrocardiograma Especializado
                </Link>
              </h3>
              <p>Electrocardiogramas con especialistas en cardiología. Detección temprana de arritmias y afecciones cardiacas. Equipos modernos y diagnóstico preciso en Cali.</p>
              <ul>
                <li>Detección temprana precisa</li>
                <li>Especialistas en cardiología</li>
                <li>Equipos de última tecnología</li>
                <li>Diagnóstico inmediato</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias" prefetch={false}>
                  Ecografías de Alta Resolución
                </Link>
              </h3>
              <p>Ecografías convencionales y Doppler con tecnología de alta resolución. Detecta afecciones antes de síntomas. Resultados inmediatos y estudios precisos en Cali.</p>
              <ul>
                <li>Tecnología de alta resolución</li>
                <li>Resultados inmediatos</li>
                <li>Ecografías Doppler especializadas</li>
                <li>Sin listas de espera</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Convenios Section - Nueva */}
      <section id="convenios" className={styles.convenios}>
        <div className={styles.container}>
          <h2>Convenios y Membresías</h2>
          <div className={styles.conveniosContent}>
            <p>En VeraSalud trabajamos con diferentes convenios empresariales y membresías de descuento para brindar acceso a servicios de salud de calidad a precios preferenciales.</p>
            <div className={styles.conveniosGrid}>
              <div className={styles.convenioCard}>
                <h3>PREVISER</h3>
                <p>Membresía de descuento disponible</p>
              </div>
              <div className={styles.convenioCard}>
                <h3>Convenios Empresariales</h3>
                <p>Consulta por convenios con tu empresa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section - Preparado para imagen */}
      <section className={styles.team}>
        <div className={styles.container}>
          <Image
            src="/equipo-medico.jpg"
            alt="Equipo médico de VeraSalud"
            width={1200}
            height={600}
            className={styles.teamPhoto}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={styles.contact}>
        <div className={styles.container}>
          <h2>Contacta a VeraSalud en Cali</h2>
          <div className={styles.contactGrid}>
            
            <div className={styles.contactInfo}>
              <h3>Información de Contacto</h3>
              <div className={styles.contactItem}>
                <h4>Dirección en Cali</h4>
                <p>Carrera 77A # 3D - 05<br />Barrio Nápoles, Cali, Valle del Cauca</p>
              </div>
              <div className={styles.contactItem}>
                <h4>Teléfono</h4>
                <p><a href="tel:+576023942289">(602) 394 2289</a></p>
              </div>
              <div className={styles.contactItem}>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/573150633005" target="_blank" rel="noopener noreferrer">315 063 3005</a></p>
              </div>
              <div className={styles.contactItem}>
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                   Sábados: 8:00 AM - 12:00 PM</p>
              </div>
            </div>

            <ContactForm />

          </div>
        </div>
      </section>

      {/* Footer con Redes Sociales */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div>
              <h3>VeraSalud Cali</h3>
              <p>Centro médico especializado en Medicina Interna y Ecografías de Alta Resolución. Médicos especialistas de la Universidad del Valle comprometidos con tu bienestar en Cali, Colombia.</p>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/vera_salud_cali" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578207426838" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4>Servicios Médicos</h4>
              <ul>
                <li>Medicina Interna Especializada</li>
                <li>Electrocardiograma</li>
                <li>Ecografías Alta Resolución</li>
              </ul>
            </div>
            <div>
              <h4>Contacto en Cali</h4>
              <p>Carrera 77A # 3D - 05<br />Barrio Nápoles, Cali<br />Tel: (602) 394 2289<br />WhatsApp: 315 063 3005</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 VeraSalud. Todos los derechos reservados. | Medicina Interna y Ecografías en Cali</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
