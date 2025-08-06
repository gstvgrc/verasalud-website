import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Próstata en Cali | VeraSalud',
  description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
  keywords: ['ecografia prostata cali', 'ultrasonido prostatico', 'ecografia transabdominal prostata'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/prostata' },
  openGraph: {
    title: 'Ecografía de Próstata en Cali | VeraSalud',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
    url: 'https://verasalud.com/servicios/ecografias/prostata',
    images: [
      { url: '/ecografia-prostata-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía de próstata en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía de Próstata en Cali | VeraSalud',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Próstata en Cali',
    description: 'Ultrasonido transabdominal para evaluar tamaño y salud prostática de forma cómoda y rápida.',
    url: 'https://verasalud.com/servicios/ecografias/prostata',
    image: 'https://verasalud.com/ecografia-prostata-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Próstata en Cali</h1>
          <Image
            src="/ecografia-prostata-verasalud.webp"
            alt="Ecografía de próstata en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>La ecografía de próstata transabdominal permite visualizar la glándula prostática a través del abdomen inferior. Es un método cómodo para medir su tamaño y detectar hiperplasia o lesiones mayores.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Evalúa el volumen prostático y el grado de crecimiento benigno.</li>
                <li>Ayuda en el seguimiento de síntomas urinarios y en el control tras cirugía prostática.</li>
                <li>Puede detectar lesiones de mayor tamaño que requieran estudios adicionales.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Síntomas de obstrucción urinaria o flujo débil.</li>
                <li>Control de hiperplasia prostática benigna.</li>
                <li>Monitoreo tras cirugía prostática o radioterapia.</li>
                <li>Seguimiento del antígeno prostático específico (PSA) elevado.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> El paciente acude con la vejiga moderadamente llena. Se coloca el transductor sobre el abdomen bajo y se toman mediciones del tamaño prostático; el examen es rápido y no invasivo.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
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
