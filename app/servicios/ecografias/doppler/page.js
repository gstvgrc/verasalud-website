import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Doppler en Cali | VeraSalud',
  description: 'Estudio Doppler para evaluar el flujo sanguíneo en arterias y venas, detectando obstrucciones y trombosis.',
  keywords: ['ecografia doppler cali', 'ultrasonido vascular', 'doppler venoso arterial'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/doppler' },
  openGraph: {
    title: 'Ecografía Doppler en Cali | VeraSalud',
    description: 'Estudio Doppler para evaluar el flujo sanguíneo en arterias y venas, detectando obstrucciones y trombosis.',
    url: 'https://verasalud.com/servicios/ecografias/doppler',
    images: [
      { url: '/ecografia-doppler-arterial-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía Doppler de miembros en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Doppler en Cali | VeraSalud',
    description: 'Estudio Doppler para evaluar el flujo sanguíneo en arterias y venas, detectando obstrucciones y trombosis.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Doppler en Cali',
    description: 'Estudio Doppler para evaluar el flujo sanguíneo en arterias y venas, detectando obstrucciones y trombosis.',
    url: 'https://verasalud.com/servicios/ecografias/doppler',
    image: 'https://verasalud.com/ecografia-doppler-arterial-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Doppler en Cali</h1>
          <p>La ecografía Doppler utiliza el efecto Doppler para medir la velocidad y dirección del flujo sanguíneo. Es esencial para evaluar arterias y venas en busca de estrechamientos, oclusiones o trombosis.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Detecta la presencia de trombos o coágulos en venas profundas.</li>
                <li>Evalúa estenosis o bloqueos en arterias de cuello y extremidades.</li>
                <li>Ayuda a planificar cirugías vasculares y monitorizar injertos o stents.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor o hinchazón en las extremidades sugerente de trombosis venosa.</li>
                <li>Evaluación de enfermedad arterial periférica o varices.</li>
                <li>Seguimiento postoperatorio de procedimientos vasculares.</li>
                <li>Control de fístulas arteriovenosas en diálisis.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se coloca el transductor sobre la piel con gel conductor y se emplea Doppler color o pulsado para observar el flujo. Es un examen no invasivo que dura unos minutos y no requiere preparación especial.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-doppler-arterial-verasalud-cali.webp'
          alt='Ecografía Doppler de miembros en VeraSalud'
          width={800}
          height={500}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="rounded-xl"
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
