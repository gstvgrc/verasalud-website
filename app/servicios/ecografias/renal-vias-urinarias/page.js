import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
  description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
  keywords: ['ecografia renal cali', 'ultrasonido vias urinarias', 'ecografia riñon vejiga'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias' },
  openGraph: {
    title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias',
    images: [
      { url: '/ecografia-renal-vias-urinarias-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía renal en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Renal y Vías Urinarias en Cali',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias',
    image: 'https://verasalud.com/ecografia-renal-vias-urinarias-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Renal y Vías Urinarias en Cali</h1>
          <Image
            src="/ecografia-renal-verasalud.webp"
            alt="Ecografía renal y vías urinarias en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía renal examina riñones, uréteres y vejiga. Detecta cálculos, infecciones o alteraciones estructurales.
          </p>
          <p>
            Recomendada ante infecciones urinarias recurrentes o cólicos renales.
          </p>
          <p>
            Realiza tu estudio renal sin dolor ni radiación.
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
