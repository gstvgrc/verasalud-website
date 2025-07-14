// Página principal de VeraSalud - Versión estable sin bucles de Fast Refresh
// Implementación optimizada que evita re-renders constantes

import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Head section con SEO optimizado */}
      <Head>
        <title>VeraSalud Cali - Medicina Interna y Ecografías Alta Resolución | Especialistas Universidad del Valle</title>
        <meta name="description" content="VeraSalud: Medicina Interna y Ecografías de Alta Resolución sin demoras en Cali. Médicos especialistas Universidad del Valle. Barrio Nápoles. Tel: (602) 394-2289. Agenda tu cita hoy." />
        <meta name="keywords" content="medicina interna cali, ecografías alta resolución cali, médicos especialistas universidad del valle, electrocardiograma cali, videoconsulta médica, medicina interna nápoles cali, ecografías doppler cali, sin demoras, tecnología avanzada" />
        
        <meta name="geo.region" content="CO-VAC" />
        <meta name="geo.placename" content="Cali, Valle del Cauca" />
        <meta name="geo.position" content="3.4516;-76.5320" />
        <meta name="ICBM" content="3.4516, -76.5320" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VeraSalud Cali - Medicina Interna y Ecografías Alta Resolución" />
        <meta property="og:description" content="Médicos especialistas Universidad del Valle. Sin filas ni demoras. Barrio Nápoles, Cali." />
        <meta property="og:url" content="https://verasalud.com" />
        <meta property="og:site_name" content="VeraSalud" />
        <meta property="og:locale" content="es_CO" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VeraSalud Cali - Medicina Interna y Ecografías" />
        <meta name="twitter:description" content="Especialistas Universidad del Valle. Sin demoras. Cali, Colombia." />
        
        <link rel="canonical" href="https://verasalud.com" />
        <link rel="icon" href="/favicon.ico" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "Cardiology",
                "Telemedicine"
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
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Videoconsulta Médica",
                  "description": "Consultas médicas virtuales profesionales"
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
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "https://wa.me/573150633005"
              ]
            })
          }}
        />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1>VeraSalud</h1>
            <p>Medicina Interna & Ecografías</p>
          </div>
          <nav className={styles.nav}>
            <a href="#servicios">Servicios</a>
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

      {/* Services Section */}
      <section id="servicios" className={styles.services}>
        <div className={styles.container}>
          <h2>Servicios Médicos Especializados en Cali</h2>
          <div className={styles.servicesGrid}>
            
            <div className={styles.serviceCard}>
              <h3>Medicina Interna Especializada</h3>
              <p>Consulta de medicina interna con médicos especialistas titulados de la Universidad del Valle. Diagnóstico integral, tratamientos personalizados y seguimiento médico continuo en Cali.</p>
              <ul>
                <li>Diagnóstico integral completo</li>
                <li>Tratamientos personalizados</li>
                <li>Seguimiento médico continuo</li>
                <li>Especialistas Universidad del Valle</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3>Ecografías de Alta Resolución</h3>
              <p>Ecografías convencionales y Doppler con tecnología de alta resolución. Detecta afecciones antes de síntomas. Resultados inmediatos y estudios precisos en Cali.</p>
              <ul>
                <li>Tecnología de alta resolución</li>
                <li>Resultados inmediatos</li>
                <li>Ecografías Doppler especializadas</li>
                <li>Sin listas de espera</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3>Electrocardiograma Especializado</h3>
              <p>Electrocardiogramas con especialistas en cardiología. Detección temprana de arritmias y afecciones cardiacas. Equipos modernos y diagnóstico preciso en Cali.</p>
              <ul>
                <li>Detección temprana precisa</li>
                <li>Especialistas en cardiología</li>
                <li>Equipos de última tecnología</li>
                <li>Diagnóstico inmediato</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3>Videoconsulta Médica</h3>
              <p>Consultas médicas virtuales con la misma calidad profesional. Atención médica especializada desde casa con horarios flexibles y seguimiento personalizado.</p>
              <ul>
                <li>Consulta médica desde casa</li>
                <li>Horarios flexibles</li>
                <li>Seguimiento personalizado</li>
                <li>Calidad profesional garantizada</li>
              </ul>
            </div>

          </div>
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

            <div className={styles.contactForm}>
              <h3>Agenda tu Cita Médica</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Formulario enviado. Nos contactaremos contigo pronto.');
              }}>
                <input type="text" placeholder="Nombre completo" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Teléfono" required />
                <select required>
                  <option value="">Selecciona el servicio</option>
                  <option value="medicina-interna">Medicina Interna</option>
                  <option value="ecografias">Ecografías</option>
                  <option value="electrocardiograma">Electrocardiograma</option>
                  <option value="videoconsulta">Videoconsulta</option>
                </select>
                <textarea placeholder="Describe tu consulta médica" rows="4" required></textarea>
                <button type="submit" className={styles.btnPrimary}>Solicitar Cita</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div>
              <h3>VeraSalud Cali</h3>
              <p>Centro médico especializado en Medicina Interna y Ecografías de Alta Resolución. Médicos especialistas de la Universidad del Valle comprometidos con tu bienestar en Cali, Colombia.</p>
            </div>
            <div>
              <h4>Servicios Médicos</h4>
              <ul>
                <li>Medicina Interna Especializada</li>
                <li>Ecografías Alta Resolución</li>
                <li>Electrocardiograma</li>
                <li>Videoconsulta Médica</li>
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

      {/* Google Analytics - Implementación simplificada y estable */}
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

    </div>
  )
}