import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description:
      'Ecografía hepática para evaluación de hígado y vías biliares con alta resolución. VeraSalud Cali.',
    openGraph: {
      title: 'Ecografía Hepática en Cali | VeraSalud',
      description:
        'Ecografía hepática con resultados confiables en VeraSalud Cali.',
      url: '/servicios/ecografias/hepatica',
      images: [
        { url: '/ecografia-hepatica-verasalud-cali.webp', width: 1200, height: 630 },
      ],
    },
    alternates: { canonical: '/servicios/ecografias/hepatica' },
    keywords: ['ecografía hepática Cali', 'hígado ecografía', 'vías biliares'],
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
            src="/ecografia-hepatica-verasalud-cali.webp"
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
