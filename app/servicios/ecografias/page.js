import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografías en VeraSalud | Alta Resolución y Doppler en Cali',
  description:
    'Ecografías abdominal, doppler, hepática, mamaria, obstétrica, osteomuscular y pélvica realizadas por especialistas en VeraSalud.',
  keywords: [
    'ecografias cali',
    'ecografia doppler',
    'ecografia abdominal',
    'ecografia pelvica',
  ],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecografías en VeraSalud',
    description:
      'Centro médico en Cali con equipos de alta resolución para todo tipo de ecografías diagnósticas.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecografías en VeraSalud Cali',
      },
    ],
    locale: 'es_CO',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografías en VeraSalud Cali',
    description: 'Diagnóstico preciso con ecografías de alta definición y doppler.',
  },
}

export default function EcografiasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ecografías en VeraSalud',
    description:
      'Listado de servicios de ecografías convencionales y Doppler que ofrece VeraSalud en Cali.',
    url: 'https://verasalud.com/servicios/ecografias',
  }

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografías en VeraSalud</h1>
          <p>
            La ecografía diagnóstica es esencial para evaluar tejidos blandos y
            órganos internos sin radiación.
          </p>
          <p>
            En VeraSalud combinamos equipos de alta definición con especialistas
            en imágenes para brindarte resultados confiables.
          </p>
          <p>
            Permite detectar y seguir múltiples enfermedades de forma segura y
            oportuna.
          </p>
          <p>Conoce nuestras principales ecografías disponibles:</p>
        </div>
        <Image
          src="/equipo-medico.jpg"
          alt="Equipo médico realizando ecografía"
          width={800}
          height={500}
          loading="lazy"
        />
      </section>
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/abdominal" prefetch={false}>
                  Ecografía Abdominal
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/doppler" prefetch={false}>
                  Ecografía Doppler
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/hepatica" prefetch={false}>
                  Ecografía Hepática
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/mama" prefetch={false}>
                  Ecografía Mamaria
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/osteomuscular" prefetch={false}>
                  Ecografía Osteomuscular
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/pelvica" prefetch={false}>
                  Ecografía Pélvica
                </Link>
              </h3>
            </div>
            <div className={styles.serviceCard}>
              <h3>
                <Link href="/servicios/ecografias/obstetrica" prefetch={false}>
                  Ecografía Obstétrica
                </Link>
              </h3>
            </div>
          </div>
        </div>
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
