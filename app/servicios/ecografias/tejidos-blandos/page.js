import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
  description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
  keywords: ['ecografia tejidos blandos cali', 'ultrasonido musculos ligamentos', 'ecografia lesiones musculares'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/tejidos-blandos' },
  openGraph: {
    title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
    url: 'https://verasalud.com/servicios/ecografias/tejidos-blandos',
    images: [
      { url: '/ecografia-tejidos-blandos-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía de tejidos blandos en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Tejidos Blandos en Cali',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
    url: 'https://verasalud.com/servicios/ecografias/tejidos-blandos',
    image: 'https://verasalud.com/ecografia-tejidos-blandos-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Tejidos Blandos en Cali</h1>
          <Image
            src="/ecografia-tejidos-blandos-verasalud.webp"
            alt="Ecografía de tejidos blandos en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía de tejidos blandos permite valorar bultos, abscesos, ganglios o lesiones bajo la piel.
          </p>
          <p>
            Útil ante inflamación localizada o masas sospechosas.
          </p>
          <p>
            Solicita tu valoración diagnóstica segura y precisa.
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
