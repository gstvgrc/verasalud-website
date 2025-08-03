import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Osteomuscular en Cali | VeraSalud',
  description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
  keywords: ['ecografia osteomuscular cali', 'ultrasonido musculos', 'ecografia articular cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/osteomuscular' },
  openGraph: {
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    images: [
      { url: '/ecografia-osteomuscular-articular-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía osteomuscular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Osteomuscular en Cali',
    description: 'Evaluación de músculos, tendones y articulaciones mediante ultrasonido dinámico.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    image: 'https://verasalud.com/ecografia-osteomuscular-articular-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Osteomuscular en Cali</h1>
          <p>La ecografía osteomuscular permite visualizar en tiempo real músculos, tendones, ligamentos y articulaciones. Ofrece un estudio dinámico de los tejidos blandos para diagnosticar lesiones deportivas y trastornos articulares.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Diagnostica desgarros de tendones, rupturas musculares y lesiones ligamentarias.</li>
                <li>Evalúa bursitis, tenosinovitis y síndrome del túnel carpiano.</li>
                <li>Permite guía precisa para infiltraciones o aspiraciones.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor o inflamación en hombro, codo, muñeca, cadera, rodilla o tobillo.</li>
                <li>Sospecha de roturas musculares o tendinosas por actividad física.</li>
                <li>Evaluación de masas de tejidos blandos o quistes sinoviales.</li>
                <li>Seguimiento de lesiones deportivas en rehabilitación.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se aplica gel sobre la zona de interés y se mueve el transductor siguiendo el tendón o articulación afectada. El paciente puede realizar movimientos para evaluar la función y detectar atrapamientos o rupturas.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-osteomuscular-articular-verasalud-cali.webp'
          alt='Ecografía osteomuscular en VeraSalud'
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
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
