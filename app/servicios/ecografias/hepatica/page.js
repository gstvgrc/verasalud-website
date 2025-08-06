import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Hepática en Cali | VeraSalud',
  description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
  keywords: ['ecografia hepatica cali', 'ultrasonido de higado', 'diagnostico higado cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/hepatica' },
  openGraph: {
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    images: [
      { url: '/ecografia-hepatica-verasalud-cali.webp', width: 1200, height: 630, alt: 'Equipo realizando ecografía hepática en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Hepática en Cali',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    image: 'https://verasalud.com/ecografia-hepatica-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Hepática en Cali</h1>
          <Image
            src="/ecografia-hepatica-verasalud.webp"
            alt="Ecografía hepática en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía hepática examina el hígado y estructuras vecinas como vesícula y vías biliares. Detecta quistes, masas, grasa hepática y más.
          </p>
          <p>
            Útil ante elevación de enzimas hepáticas o dolor en el hipocondrio derecho.
          </p>
          <p>
            Agenda tu valoración hepática hoy mismo.
          </p>
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
