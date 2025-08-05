import Image from 'next/image'
import ContactForm from '../../../../components/ContactForm'
import styles from '../../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Obstétrica de Tercer Nivel en Cali | VeraSalud',
  description: 'Ultrasonido avanzado del tercer trimestre para evaluar crecimiento fetal, placenta y flujo sanguíneo.',
  keywords: ['ecografia tercer trimestre cali', 'ultrasonido avanzado embarazo', 'ecografia tercer nivel'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/obstetrica/tercer-nivel' },
  openGraph: {
    title: 'Ecografía Obstétrica de Tercer Nivel en Cali | VeraSalud',
    description: 'Ultrasonido avanzado del tercer trimestre para evaluar crecimiento fetal, placenta y flujo sanguíneo.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica/tercer-nivel',
    images: [
      { url: '/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía obstétrica tercer nivel en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Obstétrica de Tercer Nivel en Cali | VeraSalud',
    description: 'Ultrasonido avanzado del tercer trimestre para evaluar crecimiento fetal, placenta y flujo sanguíneo.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Obstétrica de Tercer Nivel en Cali',
    description: 'Ultrasonido avanzado del tercer trimestre para evaluar crecimiento fetal, placenta y flujo sanguíneo.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica/tercer-nivel',
    image: 'https://verasalud.com/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Obstétrica de Tercer Nivel en Cali</h1>
          <p>La ecografía de tercer nivel se realiza en el tercer trimestre y combina imágenes 2D, 3D y Doppler para evaluar el crecimiento fetal, la madurez placentaria y el flujo en las arterias uterinas y umbilicales.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Detecta restricción del crecimiento intrauterino y macrosomía.</li>
                <li>Evalúa el bienestar fetal mediante índices Doppler de arterias uterinas y umbilicales.</li>
                <li>Identifica anomalías tardías del sistema nervioso central o cardiaco.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Embarazos de alto riesgo por hipertensión, diabetes o preeclampsia.</li>
                <li>Anomalías detectadas en ecografías previas que requieren seguimiento.</li>
                <li>Disminución de movimientos fetales o cambios en el crecimiento.</li>
                <li>Evaluación de placenta previa o desprendimiento prematuro.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se efectúa transabdominalmente con el transductor sobre el abdomen. Se analizan medidas biométricas, la posición fetal y el estado de la placenta y se revisan las arterias con Doppler color.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp'
          alt='Ecografía obstétrica tercer nivel en VeraSalud'
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
