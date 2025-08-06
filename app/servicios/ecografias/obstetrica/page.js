import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Obstétrica en Cali | VeraSalud',
  description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
  keywords: ['ecografia obstetrica cali', 'ultrasonido embarazo', 'ecografia prenatal cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/obstetrica' },
  openGraph: {
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    images: [
      { url: '/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía obstétrica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Obstétrica en Cali',
    description: 'Monitorización del embarazo y desarrollo fetal mediante ultrasonido seguro y confiable.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    image: 'https://verasalud.com/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Obstétrica en Cali</h1>
          <Image
            src="/ecografia-obstetrica-verasalud.webp"
            alt="Ecografía obstétrica en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>La ecografía obstétrica es una prueba rutinaria durante el embarazo que usa ondas de sonido para crear imágenes del feto y el útero. Permite estimar la edad gestacional, valorar la anatomía fetal y vigilar el bienestar del bebé.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Confirma y data el embarazo, y determina el número de fetos.</li>
                <li>Evalúa el crecimiento fetal, la posición de la placenta y la cantidad de líquido amniótico.</li>
                <li>Detecta anomalías estructurales o malformaciones congénitas.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Control prenatal rutinario en cada trimestre.</li>
                <li>Sospecha de crecimiento intrauterino restringido o macrosomía.</li>
                <li>Sangrado o dolor abdominal durante el embarazo.</li>
                <li>Monitorización en embarazos de alto riesgo (hipertensión, diabetes, gemelos).</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Dependiendo de la etapa del embarazo, se realiza transabdominalmente con la vejiga moderadamente llena. El transductor se desliza sobre el abdomen para obtener imágenes detalladas del feto, placenta y líquido amniótico.</p>
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
