import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografías en Cali | Ultrasonido y Doppler | VeraSalud',
  description:
    'Ecografías abdominal, hepática, pélvica, obstétrica, mamaria, osteomuscular y Doppler en Cali con resultados rápidos.',
  keywords: ['ecografias cali', 'ecografia doppler', 'ecografia abdominal', 'ultrasonido en cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecografías en Cali | VeraSalud',
    description: 'Ultrasonido convencional y Doppler en Cali para diagnósticos precisos.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecografías en VeraSalud Cali' }
    ],
    locale: 'es_CO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografías de Alta Resolución en Cali',
    description: 'Solicita tu ecografía con especialistas en VeraSalud.'
  }
}

export default function EcografiasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ecografías en VeraSalud',
    description: 'Listado de servicios de ecografías convencionales y Doppler en Cali',
    url: 'https://verasalud.com/servicios/ecografias',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ecografía Abdominal',
        url: 'https://verasalud.com/servicios/ecografias/abdominal'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Ecografía Hepática',
        url: 'https://verasalud.com/servicios/ecografias/hepatica'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ecografía Pélvica Ginecológica',
        url: 'https://verasalud.com/servicios/ecografias/pelvica'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Ecografía Obstétrica de Tercer Nivel',
        url: 'https://verasalud.com/servicios/ecografias/obstetrica/tercer-nivel'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Ecografía de Tiroides',
        url: 'https://verasalud.com/servicios/ecografias/tiroides'
      }
    ]
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografías en Cali</h1>
          <p>
            En VeraSalud realizamos ecografías de alta resolución y estudios
            Doppler que brindan diagnósticos confiables en poco tiempo.
            Nuestros especialistas ofrecen atención personalizada para cuidar
            tu salud.
          </p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        {/* TODO: Optimizar esta imagen a formato .webp */}
        <Image
          src="/equipo-medico.jpg"
          alt="Equipo médico realizando ecografía"
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </section>

      <section className={styles.ecografiaGrid}>
        <article className={styles.ecografiaCard}>
          <Link href="/servicios/ecografias/abdominal">
            <Image
              src="/ecografia-abdominal-verasalud-cali.webp"
              alt="Ecografía abdominal en Cali - VeraSalud"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
            <h2>Ecografía Abdominal</h2>
            <p>Evaluación hepática, vesicular y renal para diagnóstico oportuno.</p>
          </Link>
        </article>

        <article className={styles.ecografiaCard}>
          <Link href="/servicios/ecografias/hepatica">
            <Image
              src="/ecografia-hepatica-verasalud-cali.webp"
              alt="Ecografía hepática en Cali - VeraSalud"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
            <h2>Ecografía Hepática</h2>
            <p>Detección de hígado graso, hepatitis y enfermedades biliares.</p>
          </Link>
        </article>

        <article className={styles.ecografiaCard}>
          <Link href="/servicios/ecografias/pelvica">
            <Image
              src="/ecografia-pelvica-ginecologica-verasalud-cali.webp"
              alt="Ecografía pélvica ginecológica en Cali - VeraSalud"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
            <h2>Ecografía Pélvica Ginecológica</h2>
            <p>Estudio de útero y ovarios para controlar quistes, miomas o dolor pélvico.</p>
          </Link>
        </article>

        <article className={styles.ecografiaCard}>
          <Link href="/servicios/ecografias/obstetrica/tercer-nivel">
            <Image
              src="/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp"
              alt="Ecografía obstétrica tercer nivel en Cali - VeraSalud"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
            <h2>Ecografía Obstétrica de Tercer Nivel</h2>
            <p>Monitoreo fetal avanzado durante el embarazo.</p>
          </Link>
        </article>

        <article className={styles.ecografiaCard}>
          <Link href="/servicios/ecografias/tiroides">
            <Image
              src="/ecografia-tiroides-verasalud-cali.webp"
              alt="Ecografía de tiroides en Cali - VeraSalud"
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto' }}
              loading="lazy"
            />
            <h2>Ecografía de Tiroides</h2>
            <p>Valoración de nódulos, bocio y función tiroidea con alta resolución.</p>
          </Link>
        </article>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <ContactForm />
          <p style={{ marginTop: '2rem' }}>
            <Link href="/">Volver al inicio</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
