import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Abdominal en Cali | VeraSalud',
  description: 'Ultrasonido abdominal para evaluar órganos internos y detectar patologías en VeraSalud.',
  keywords: ['ecografia abdominal cali', 'ultrasonido de abdomen', 'imagen diagnostica cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/abdominal' },
  openGraph: {
    title: 'Ecografía Abdominal en Cali | VeraSalud',
    description: 'Estudio ecográfico de abdomen con tecnología de alta resolución en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/abdominal',
    images: [
      { url: '/ecografia-abdominal.jpg', width: 1200, height: 630, alt: 'Equipo realizando ecografía abdominal en Cali' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Abdominal en VeraSalud',
    description: 'Diagnóstico preciso de hígado, riñones y vesícula con ecografía abdominal.'
  }
}

export default function EcografiaAbdominalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Abdominal',
    description: 'Procedimiento de imagen que permite visualizar hígado, vesícula, riñones y otros órganos abdominales.',
    url: 'https://verasalud.com/servicios/ecografias/abdominal',
    image: 'https://verasalud.com/ecografia-abdominal.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Abdominal</h1>
          <p>La ecografía abdominal es un examen no invasivo que permite revisar tus órganos internos.</p>
          <p>Se utiliza para diagnosticar afecciones del hígado, vesícula, riñones y páncreas, entre otros.</p>
          <p>Durante el procedimiento se desliza un transductor sobre tu abdomen con un gel especial.</p>
          <p>Ofrece resultados rápidos y no produce radiación, siendo seguro para la mayoría de pacientes.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-abdominal.jpg" alt="Equipo realizando ecografía abdominal" width={800} height={500} />
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
