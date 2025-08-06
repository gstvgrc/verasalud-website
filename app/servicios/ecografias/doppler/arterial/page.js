import Image from 'next/image'
import ContactForm from '../../../../components/ContactForm'
import styles from '../../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Doppler Arterial en Cali | VeraSalud',
  description: 'Estudio Doppler color y pulsado de arterias para detectar estrechamientos y obstrucciones.',
  keywords: ['doppler arterial cali', 'ecografia doppler arterial', 'ultrasonido arterias'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/doppler/arterial' },
  openGraph: {
    title: 'Doppler Arterial en Cali | VeraSalud',
    description: 'Estudio Doppler color y pulsado de arterias para detectar estrechamientos y obstrucciones.',
    url: 'https://verasalud.com/servicios/ecografias/doppler/arterial',
    images: [
      { url: '/ecografia-doppler-arterial-verasalud-cali.webp', width: 1200, height: 630, alt: 'Doppler arterial en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doppler Arterial en Cali | VeraSalud',
    description: 'Estudio Doppler color y pulsado de arterias para detectar estrechamientos y obstrucciones.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Doppler Arterial en Cali',
    description: 'Estudio Doppler color y pulsado de arterias para detectar estrechamientos y obstrucciones.',
    url: 'https://verasalud.com/servicios/ecografias/doppler/arterial',
    image: 'https://verasalud.com/ecografia-doppler-arterial-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Doppler Arterial en Cali</h1>
          <Image
            src="/ecografia-doppler-arterial-verasalud.webp"
            alt="Ecografía Doppler arterial en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            El Doppler arterial permite visualizar el flujo sanguíneo en arterias de piernas, brazos o cuello. Útil para detectar obstrucciones o estenosis.
          </p>
          <p>
            Se recomienda en casos de dolor al caminar, hipertensión o enfermedades vasculares.
          </p>
          <p>
            Solicita tu evaluación arterial con nosotros.
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
