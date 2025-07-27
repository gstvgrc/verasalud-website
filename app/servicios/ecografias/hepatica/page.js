import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Hepática en Cali | VeraSalud',
  description: 'Examen ecográfico para estudiar el hígado y diagnosticar enfermedades hepáticas.',
  keywords: ['ecografia hepatica cali', 'ultrasonido de higado', 'diagnostico higado cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/hepatica' },
  openGraph: {
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Ecografía especializada para evaluar el hígado con imágenes de alta resolución.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    images: [
      { url: '/ecografia-hepatica.jpg', width: 1200, height: 630, alt: 'Realizando ecografía hepática en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Hepática en VeraSalud',
    description: 'Diagnóstico preciso de enfermedades del hígado con ecografía hepática.'
  }
}

export default function EcografiaHepaticaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Hepática',
    description: 'Procedimiento de imagen para revisar el hígado, detectar lesiones y evaluar su tamaño.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    image: 'https://verasalud.com/ecografia-hepatica.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Hepática</h1>
          <p>La ecografía hepática permite observar la estructura del hígado de forma detallada.</p>
          <p>Ayuda a diagnosticar hígado graso, quistes, tumores y otras patologías.</p>
          <p>Es un examen rápido y cómodo que no implica radiación.</p>
          <p>Los resultados orientan el tratamiento y control de enfermedades hepáticas.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-hepatica.jpg" alt="Ecografía del hígado en realización" width={800} height={500} />
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
