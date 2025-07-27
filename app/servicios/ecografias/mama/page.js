import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Mama en Cali | VeraSalud',
  description: 'Estudio ecográfico de seno para la detección temprana de lesiones mamarias.',
  keywords: ['ecografia de mama cali', 'ultrasonido mamario', 'deteccion cancer seno'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/mama' },
  openGraph: {
    title: 'Ecografía de Mama en Cali | VeraSalud',
    description: 'Examen seguro y eficaz para evaluar el tejido mamario en mujeres de todas las edades.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    images: [
      { url: '/ecografia-mama.jpg', width: 1200, height: 630, alt: 'Ecografía mamaria realizada en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Mamaria en VeraSalud',
    description: 'Diagnóstico temprano de lesiones de seno con ecografía de mama.'
  }
}

export default function EcografiaMamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Mama',
    description: 'Procedimiento de imagen que ayuda a identificar quistes, nódulos y otras alteraciones en el tejido mamario.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    image: 'https://verasalud.com/ecografia-mama.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Mama</h1>
          <p>La ecografía de mama es un examen indoloro que ayuda a detectar masas o cambios en el seno.</p>
          <p>Se recomienda como complemento a la mamografía y en mujeres jóvenes.</p>
          <p>No usa radiación y permite una evaluación rápida y detallada.</p>
          <p>Contribuye a un diagnóstico temprano y oportuno.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-mama.jpg" alt="Realización de ecografía mamaria" width={800} height={500} />
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
