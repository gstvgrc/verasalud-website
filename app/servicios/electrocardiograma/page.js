import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Electrocardiograma en Cali | VeraSalud',
  description: 'Examen ECG para evaluar la actividad eléctrica del corazón en VeraSalud Cali.',
  keywords: ['electrocardiograma cali', 'ecg en cali', 'diagnóstico cardiaco'],
  alternates: { canonical: 'https://verasalud.com/servicios/electrocardiograma' },
  openGraph: {
    title: 'Electrocardiograma en Cali | VeraSalud',
    description: 'Electrocardiogramas precisos para detectar arritmias y otras afecciones cardiacas.',
    url: 'https://verasalud.com/servicios/electrocardiograma',
    images: [
      {
        url: '/electrocardiograma.jpg',
        width: 1200,
        height: 630,
        alt: 'Paciente realizándose un electrocardiograma en VeraSalud'
      }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrocardiograma en Cali',
    description: 'Realiza tu electrocardiograma con especialistas en VeraSalud Cali.'
  }
}

export default function ElectrocardiogramaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Electrocardiograma',
    description: 'Prueba que registra la actividad eléctrica del corazón para detectar arritmias y otras alteraciones.',
    url: 'https://verasalud.com/servicios/electrocardiograma',
    image: 'https://verasalud.com/electrocardiograma.jpg'
  }

  return (
    <main className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Electrocardiograma en Cali</h1>
          <p>
            El <strong>electrocardiograma (ECG)</strong> es un examen de
            diagnóstico no invasivo que registra la actividad eléctrica del
            corazón en tiempo real. En VeraSalud Cali, este estudio permite al
            <strong>médico internista</strong> evaluar el ritmo y la función
            cardiaca de forma rápida y precisa. Es una prueba indolora que ayuda
            a detectar anomalías como arritmias, isquemia o signos de infarto de
            manera temprana.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Realizarse un
            electrocardiograma a tiempo facilita la <em>detección temprana</em> de
            problemas cardiacos, permitiendo iniciar tratamientos oportunos y
            prevenir complicaciones graves. Un ECG oportuno puede orientar
            terapias adecuadas y brindar tranquilidad al paciente al descartar
            alteraciones cuando los resultados son normales. Es una herramienta
            esencial de diagnóstico cardiaco en chequeos de rutina y
            emergencias.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>Dolor torácico, presión en el pecho o palpitaciones frecuentes.</li>
            <li>
              Hipertensión arterial, colesterol alto u otros factores de riesgo
              cardiovascular.
            </li>
            <li>Mareos, desmayos (síncope) o falta de aire de causa no explicada.</li>
            <li>Control de marcapasos o seguimiento de arritmias diagnosticadas.</li>
            <li>Evaluación preoperatoria o chequeo cardiaco anual preventivo.</li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Durante el electrocardiograma te
            recostarás en una camilla mientras se colocan pequeños electrodos
            adhesivos en el pecho, brazos y piernas. Estos electrodos están
            conectados al equipo ECG que registra la actividad eléctrica del
            corazón. El procedimiento es muy rápido (por lo general dura menos de
            10 minutos), no produce molestia alguna y es completamente seguro, ya
            que no emite radiación.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> Por lo general no se requiere
            una preparación especial. Se sugiere llevar ropa cómoda que permita
            descubrir el pecho y evitar cremas corporales en esa área el día del
            examen, para lograr una mejor adhesión de los electrodos. También es
            aconsejable estar relajado y evitar ejercicio intenso o cafeína justo
            antes de la prueba, de modo que el ritmo cardiaco esté en reposo.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image src="/electrocardiograma.jpg" alt="Paciente realizándose un electrocardiograma" width={800} height={500} loading="lazy" />
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
