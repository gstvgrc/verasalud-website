import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Osteomuscular en Cali | VeraSalud',
  description: 'Ultrasonido especializado para evaluar músculos, tendones y articulaciones.',
  keywords: ['ecografia osteomuscular cali', 'ultrasonido musculos', 'ecografia de tendones'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/osteomuscular' },
  openGraph: {
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Diagnóstico de lesiones deportivas y trastornos músculo-esqueléticos mediante ecografía.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    images: [
      { url: '/ecografia-osteomuscular.jpg', width: 1200, height: 630, alt: 'Ecografía osteomuscular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Osteomuscular en VeraSalud',
    description: 'Valoración precisa de tendones y articulaciones con ecografía osteomuscular.'
  }
}

export default function EcografiaOsteomuscularPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Osteomuscular',
    description: 'Procedimiento de imagen para analizar lesiones en músculos, tendones y ligamentos.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    image: 'https://verasalud.com/ecografia-osteomuscular.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Osteomuscular</h1>
          <p>La ecografía osteomuscular permite observar en tiempo real músculos y articulaciones.</p>
          <p>Se utiliza en lesiones deportivas y dolores crónicos para planear el tratamiento adecuado.</p>
          <p>Es un examen dinámico y sin radiación que brinda información detallada del área afectada.</p>
          <p>Ayuda a una recuperación más rápida y precisa.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-osteomuscular.jpg" alt="Ecografía de músculos y articulaciones" width={800} height={500} />
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <ContactForm />
          <p style={{ marginTop: '2rem' }}>
            <Link href="/">Volver al inicio</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
