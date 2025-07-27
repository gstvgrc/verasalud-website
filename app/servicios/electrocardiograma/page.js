import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Electrocardiograma en Cali – VeraSalud',
  description:
    'Realiza tu electrocardiograma en VeraSalud con atención sin demoras, equipos digitales y lectura por especialistas. Agenda tu cita en Cali.',
  alternates: { canonical: 'https://verasalud.com/servicios/electrocardiograma' },
  openGraph: {
    title: 'Electrocardiograma en Cali – VeraSalud',
    description:
      'Realiza tu electrocardiograma en VeraSalud con atención sin demoras, equipos digitales y lectura por especialistas.',
    url: 'https://verasalud.com/servicios/electrocardiograma',
    images: [
      {
        url: '/electrocardiograma.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo realizando electrocardiograma en VeraSalud'
      }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrocardiograma en Cali – VeraSalud',
    description:
      'Realiza tu electrocardiograma con especialistas en temas de cardiología en VeraSalud.'
  }
}

export default function ElectrocardiogramaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Electrocardiograma',
    description:
      'Electrocardiograma digital para detectar arritmias y otros trastornos del ritmo cardiaco',
    url: 'https://verasalud.com/servicios/electrocardiograma'
  }

  return (
    <main className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Electrocardiograma en Cali</h1>
          <p>
            En VeraSalud realizamos electrocardiogramas digitales que permiten
            detectar arritmias, bloqueos y otros trastornos del ritmo cardíaco en
            pocos minutos.
          </p>
          <p>
            Nuestros equipos cuentan con tecnología moderna y la interpretación
            es realizada por especialistas en temas de cardiología.
          </p>
          <p>
            Ideal para chequeos médicos, valoraciones prequirúrgicas o
            seguimiento de enfermedades crónicas.
          </p>
          <p>
            <strong>Agende su cita con resultados confiables y sin demoras.</strong>
          </p>
        </div>
        <Image
          src="/electrocardiograma.jpg"
          alt="Paciente realizándose un electrocardiograma"
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
