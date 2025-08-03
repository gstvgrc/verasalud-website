import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
  description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
  keywords: ['ecografia tejidos blandos cali', 'ultrasonido musculos ligamentos', 'ecografia lesiones musculares'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/tejidos-blandos' },
  openGraph: {
    title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
    url: 'https://verasalud.com/servicios/ecografias/tejidos-blandos',
    images: [
      { url: '/ecografia-tejidos-blandos-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía de tejidos blandos en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía de Tejidos Blandos en Cali | VeraSalud',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Tejidos Blandos en Cali',
    description: 'Evaluación precisa de músculos y tejidos blandos para detectar lesiones, masas y procesos inflamatorios.',
    url: 'https://verasalud.com/servicios/ecografias/tejidos-blandos',
    image: 'https://verasalud.com/ecografia-tejidos-blandos-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Tejidos Blandos en Cali</h1>
          <p>La ecografía de tejidos blandos utiliza ondas de sonido para visualizar músculos, tendones y ligamentos. Permite detectar hematomas, quistes, abscesos, calcificaciones, tumores y lesiones inflamatorias.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Detecta lesiones musculares, tendinosas y ligamentosas con gran detalle.</li>
                <li>Identifica quistes, abscesos y masas de tejidos blandos.</li>
                <li>Evalúa inflamación y permite guía para aspiraciones o biopsias.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor o inflamación en músculos, tendones o ligamentos.</li>
                <li>Sospecha de roturas, esguinces o desgarros.</li>
                <li>Palpación de masas subcutáneas o bultos indeterminados.</li>
                <li>Seguimiento de lesiones deportivas y procesos inflamatorios.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> El especialista aplica gel sobre la zona afectada y desplaza el transductor para obtener imágenes en tiempo real. Se pueden realizar movimientos para evaluar la función y se usa Doppler para ver vasos sanguíneos.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-tejidos-blandos-verasalud-cali.webp'
          alt='Ecografía de tejidos blandos en VeraSalud'
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
