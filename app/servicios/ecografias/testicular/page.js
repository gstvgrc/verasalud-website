import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Testicular en Cali | VeraSalud',
  description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
  keywords: ['ecografia testicular cali', 'ultrasonido escrotal', 'ecografia de testiculos'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/testicular' },
  openGraph: {
    title: 'Ecografía Testicular en Cali | VeraSalud',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
    url: 'https://verasalud.com/servicios/ecografias/testicular',
    images: [
      { url: '/ecografia-testicular-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía testicular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Testicular en Cali | VeraSalud',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Testicular en Cali',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
    url: 'https://verasalud.com/servicios/ecografias/testicular',
    image: 'https://verasalud.com/ecografia-testicular-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Testicular en Cali</h1>
          <Image
            src="/ecografia-testicular-verasalud-cali.webp"
            alt="Ecografía testicular en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />

          <p>
            La ecografía testicular analiza testículos, epidídimo y vasos. Detecta torsión, quistes, tumores o varicocele.
          </p>
          <p>
            Indicada ante dolor, inflamación o masas en el escroto.
          </p>
          <p>
            Agenda tu estudio testicular con personal especializado.
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
