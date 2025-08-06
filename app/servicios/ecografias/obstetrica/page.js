import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Obstétrica en Cali | VeraSalud',
  description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
  keywords: ['ecografia obstetrica cali', 'ultrasonido embarazo', 'ecografia prenatal cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/obstetrica' },
  openGraph: {
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    images: [
      { url: '/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía obstétrica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Obstétrica en Cali',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    image: 'https://verasalud.com/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Obstétrica en Cali</h1>
          <Image
            src="/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp"
            alt="Ecografía obstétrica en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />

          <p>
            La ecografía obstétrica evalúa el desarrollo fetal, edad gestacional y bienestar del bebé. Es segura y esencial durante el embarazo.
          </p>
          <p>
            Se recomienda en todos los trimestres, con seguimiento especializado.
          </p>
          <p>
            Programa tu ecografía prenatal con nosotros.
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
