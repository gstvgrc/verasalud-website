import Image from 'next/image'
import ContactForm from '../../../../components/ContactForm'
import styles from '../../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Doppler Venoso en Cali | VeraSalud',
  description: 'Ecografía Doppler de venas para detectar trombosis y evaluar insuficiencia venosa.',
  keywords: ['doppler venoso cali', 'ecografia doppler venas', 'ultrasonido venoso'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/doppler/venoso' },
  openGraph: {
    title: 'Doppler Venoso en Cali | VeraSalud',
    description: 'Ecografía Doppler de venas para detectar trombosis y evaluar insuficiencia venosa.',
    url: 'https://verasalud.com/servicios/ecografias/doppler/venoso',
    images: [
      { url: '/ecografia-doppler-venoso-verasalud-cali.webp', width: 1200, height: 630, alt: 'Doppler venoso en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doppler Venoso en Cali | VeraSalud',
    description: 'Ecografía Doppler de venas para detectar trombosis y evaluar insuficiencia venosa.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Doppler Venoso en Cali',
    description: 'Ecografía Doppler de venas para detectar trombosis y evaluar insuficiencia venosa.',
    url: 'https://verasalud.com/servicios/ecografias/doppler/venoso',
    image: 'https://verasalud.com/ecografia-doppler-venoso-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Doppler Venoso en Cali</h1>
          <Image
            src="/ecografia-doppler-venoso-verasalud.webp"
            alt="Ecografía Doppler venoso en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            El Doppler venoso detecta trombosis, insuficiencia venosa y varices al observar las venas en tiempo real.
          </p>
          <p>
            Recomendado ante dolor, hinchazón o antecedentes de trombosis.
          </p>
          <p>
            Haz tu estudio venoso con atención profesional.
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
