import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Obstétrica en Cali | VeraSalud',
  description: 'Seguimiento del embarazo con ecografía obstétrica de alta resolución.',
  keywords: ['ecografia obstetrica cali', 'ultrasonido embarazo', 'control prenatal cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/obstetrica' },
  openGraph: {
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Imágenes detalladas del bebé y la madre para un control prenatal seguro.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    images: [
      { url: '/ecografia-obstetrica.jpg', width: 1200, height: 630, alt: 'Ecografía obstétrica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Obstétrica en VeraSalud',
    description: 'Control del desarrollo del bebé con ecografía obstétrica especializada.'
  }
}

export default function EcografiaObstetricaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Obstétrica',
    description: 'Procedimiento de imagen para evaluar el desarrollo fetal y la salud materna durante el embarazo.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    image: 'https://verasalud.com/ecografia-obstetrica.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Obstétrica</h1>
          <p>La ecografía obstétrica permite observar al bebé y la placenta durante la gestación.</p>
          <p>Ayuda a confirmar la edad gestacional y detectar posibles anomalías de forma temprana.</p>
          <p>Es un examen seguro que utiliza ultrasonido sin radiación.</p>
          <p>Contribuye a un control prenatal responsable y tranquilo.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-obstetrica.jpg" alt="Ecografía obstétrica" width={800} height={500} />
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
