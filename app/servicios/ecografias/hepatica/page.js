import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Hepática en Cali | VeraSalud',
  description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
  keywords: ['ecografia hepatica cali', 'ultrasonido de higado', 'diagnostico higado cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/hepatica' },
  openGraph: {
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    images: [
      { url: '/ecografia-hepatica-verasalud-cali.webp', width: 1200, height: 630, alt: 'Equipo realizando ecografía hepática en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Hepática en Cali',
    description: 'Diagnóstico preciso del hígado y vías biliares con ecografía hepática especializada en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    image: 'https://verasalud.com/ecografia-hepatica-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Hepática en Cali</h1>
          <p>La ecografía hepática es un ultrasonido especializado del hígado y las estructuras hepato‑biliares. Utiliza ondas de sonido para evaluar el tamaño, forma y textura del hígado, así como la vesícula y los conductos biliares, sin radiación.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Permite detectar a tiempo hígado graso, hepatitis crónica, cirrosis, quistes y tumores.</li>
                <li>Identifica lesiones sospechosas de cáncer hepático en etapas iniciales.</li>
                <li>Monitorea la eficacia de tratamientos en enfermedades hepáticas conocidas.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Pruebas de sangre con enzimas hepáticas elevadas o bilirrubina alta.</li>
                <li>Antecedente de hepatitis B o C u otras enfermedades hepáticas crónicas.</li>
                <li>Sospecha de hígado graso por obesidad, diabetes o consumo de alcohol.</li>
                <li>Dolor persistente en el cuadrante superior derecho del abdomen.</li>
                <li>Seguimiento de quistes, nódulos o tumores hepáticos detectados previamente.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> El paciente se acuesta y se aplica un gel conductor sobre la parte superior del abdomen. El médico desliza suavemente un transductor sobre el hígado y la vesícula para obtener imágenes detalladas; es un procedimiento breve, indoloro y seguro.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-hepatica-verasalud-cali.webp'
          alt='Equipo realizando ecografía hepática en VeraSalud'
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
