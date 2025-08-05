import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
  description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
  keywords: ['ecografia renal cali', 'ultrasonido vias urinarias', 'ecografia riñon vejiga'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias' },
  openGraph: {
    title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias',
    images: [
      { url: '/ecografia-renal-vias-urinarias-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía renal en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Renal y Vías Urinarias en Cali | VeraSalud',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Renal y Vías Urinarias en Cali',
    description: 'Visualización segura de riñones y vejiga para detectar cálculos, tumores y anomalías urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/renal-vias-urinarias',
    image: 'https://verasalud.com/ecografia-renal-vias-urinarias-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Renal y Vías Urinarias en Cali</h1>
          <p>La ecografía renal y de vías urinarias es una prueba no invasiva que obtiene imágenes de los riñones, uréteres y vejiga. Detecta cálculos, quistes, tumores y obstrucciones en el sistema urinario sin radiación.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Identifica cálculos renales y ureterales de manera temprana.</li>
                <li>Detecta quistes, masas o tumores en riñones y vejiga.</li>
                <li>Evalúa obstrucciones del tracto urinario y la causa de infecciones repetitivas.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor lumbar o cólico renal sospechoso de litiasis.</li>
                <li>Infecciones urinarias recurrentes o hematuria (sangre en la orina).</li>
                <li>Control de quistes renales o tumores conocidos.</li>
                <li>Evaluación de hidronefrosis durante el embarazo o en recién nacidos.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se aplica gel sobre el abdomen y flancos mientras el paciente está acostado. El transductor se mueve para explorar cada riñón y la vejiga; en ocasiones se solicita al paciente beber agua para evaluar la vejiga llena.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-renal-vias-urinarias-verasalud-cali.webp'
          alt='Ecografía renal en VeraSalud'
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
