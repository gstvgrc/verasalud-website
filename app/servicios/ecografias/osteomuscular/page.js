import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Osteomuscular en Cali | VeraSalud',
  description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
  keywords: ['ecografia osteomuscular cali', 'ultrasonido musculos', 'ecografia articular cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/osteomuscular' },
  openGraph: {
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    images: [
      { url: '/ecografia-osteomuscular-articular-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía osteomuscular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Osteomuscular en Cali',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    image: 'https://verasalud.com/ecografia-osteomuscular-articular-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Osteomuscular en Cali</h1>
          <Image
            src="/ecografia-osteomuscular-articular-verasalud-cali.webp"
            alt="Ecografía osteomuscular en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />

          <p>
            La ecografía osteomuscular analiza músculos, tendones y articulaciones. Detecta desgarros, inflamaciones y derrames articulares.
          </p>
          <p>
            Ideal para lesiones deportivas o dolor musculoesquelético.
          </p>
          <p>
            Agenda tu ecografía musculoesquelética sin radiación.
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
