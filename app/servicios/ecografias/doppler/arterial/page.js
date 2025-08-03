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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Doppler Arterial en Cali</h1>
          <p>El Doppler arterial evalúa el flujo sanguíneo en las arterias de las extremidades y el cuello. Detecta estenosis, oclusiones y aneurismas mediante el análisis de la velocidad y dirección del flujo.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Diagnostica enfermedad arterial periférica y carotídea.</li>
                <li>Evalúa la gravedad de estenosis antes de intervenciones quirúrgicas.</li>
                <li>Controla la permeabilidad de injertos y stents arteriales.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor en las piernas al caminar (claudicación) o frialdad en las extremidades.</li>
                <li>Control de pacientes con factores de riesgo cardiovascular (hipertensión, diabetes, tabaquismo).</li>
                <li>Seguimiento tras cirugía vascular o angioplastia.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se coloca el transductor sobre la piel con gel y se utilizan modos Doppler color y pulsado para medir el flujo. El examen es rápido, no requiere preparación especial y no genera molestias.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-doppler-arterial-verasalud-cali.webp'
          alt='Doppler arterial en VeraSalud'
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
