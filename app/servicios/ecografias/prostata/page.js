import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Próstata en Cali | VeraSalud',
  description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
  keywords: ['ecografia prostata cali', 'ultrasonido prostatico', 'ecografia transabdominal prostata'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/prostata' },
  openGraph: {
    title: 'Ecografía de Próstata en Cali | VeraSalud',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
    url: 'https://verasalud.com/servicios/ecografias/prostata',
    images: [
      { url: '/ecografia-prostata-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía de próstata en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía de Próstata en Cali | VeraSalud',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Próstata en Cali',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
    url: 'https://verasalud.com/servicios/ecografias/prostata',
    image: 'https://verasalud.com/ecografia-prostata-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Próstata en Cali</h1>
          <Image
            src="/ecografia-prostata-verasalud.webp"
            alt="Ecografía de próstata en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía prostática evalúa tamaño y forma de la próstata por vía suprapúbica o transrectal. Útil en síntomas urinarios o chequeo masculino.
          </p>
          <p>
            Solicítala si tienes dificultad para orinar o antecedentes familiares.
          </p>
          <p>
            Agenda tu examen de próstata con confianza.
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
