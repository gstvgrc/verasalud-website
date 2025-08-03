import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Mamaria en Cali | VeraSalud',
  description: 'Diagnóstico por ultrasonido de la mama para distinguir entre quistes y tumores y complementar la mamografía.',
  keywords: ['ecografia mamaria cali', 'ultrasonido mama', 'ecografia de seno cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/mama' },
  openGraph: {
    title: 'Ecografía Mamaria en Cali | VeraSalud',
    description: 'Diagnóstico por ultrasonido de la mama para distinguir entre quistes y tumores y complementar la mamografía.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    images: [
      { url: '/ecografia-mamaria-verasalud-cali.webp', width: 1200, height: 630, alt: 'Realizando ecografía mamaria en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Mamaria en Cali | VeraSalud',
    description: 'Diagnóstico por ultrasonido de la mama para distinguir entre quistes y tumores y complementar la mamografía.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Mamaria en Cali',
    description: 'Diagnóstico por ultrasonido de la mama para distinguir entre quistes y tumores y complementar la mamografía.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    image: 'https://verasalud.com/ecografia-mamaria-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Mamaria en Cali</h1>
          <p>La ecografía mamaria utiliza ondas de sonido para producir imágenes del tejido mamario. Es especialmente útil para examinar bultos detectados en la mamografía o el examen físico y para evaluar mamas densas.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Distingue entre quistes llenos de líquido y masas sólidas.</li>
                <li>Complementa la mamografía y reduce biopsias innecesarias.</li>
                <li>Permite guiar procedimientos como biopsias o drenajes.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Bultos o anomalías detectados en el examen físico o la mamografía.</li>
                <li>Evaluación de dolor o secreción mamaria.</li>
                <li>Control de implantes mamarios o cambios postquirúrgicos.</li>
                <li>Seguimiento de masas benignas conocidas.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> La paciente se recuesta y se aplica gel sobre la mama. El médico mueve el transductor sobre la piel para visualizar estructuras internas y puede emplear Doppler para evaluar el flujo sanguíneo.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-mamaria-verasalud-cali.webp'
          alt='Realizando ecografía mamaria en VeraSalud'
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
