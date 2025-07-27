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
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Electrocardiograma</h1>
          <p>El electrocardiograma (ECG) es un examen indoloro que mide la actividad eléctrica del corazón.</p>
          <p>Sirve para diagnosticar arritmias, evaluar el ritmo cardiaco y controlar tratamientos.</p>
          <p>Durante la prueba se colocan pequeños electrodos sobre tu pecho y extremidades. El procedimiento es rápido y seguro.</p>
          <p>Entre sus beneficios están la detección temprana de problemas cardiacos y la orientación de terapias adecuadas.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/electrocardiograma.jpg" alt="Paciente realizándose un electrocardiograma" width={800} height={500} />
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <ContactForm />
          <p style={{ marginTop: '2rem' }}>
            <Link href="/">Volver al inicio</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
