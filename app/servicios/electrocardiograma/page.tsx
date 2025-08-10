import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Electrocardiograma en Cali | Rápido y Confiable | VeraSalud'
  const description =
    'Realiza tu electrocardiograma en VeraSalud Cali. Detección de arritmias y riesgos cardíacos sin filas, con equipos digitales y lectura por especialistas. Agenda tu cita.'
  const pageUrl = '/servicios/electrocardiograma'
  const baseUrl = 'https://verasalud.com'
  const imageUrl = `${baseUrl}/electrocardiograma-verasalud-cali.webp`

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description:
        'En VeraSalud realizamos tu electrocardiograma con atención sin demoras, equipos digitales y lectura inmediata por especialistas.',
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: 'Paciente realizándose un electrocardiograma en VeraSalud Cali.',
        },
      ],
      locale: 'es_CO',
      type: 'website',
      siteName: 'VeraSalud',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: [
      'electrocardiograma Cali',
      'ECG Cali',
      'arritmias',
      'bloqueos de rama',
      'chequeo cardiaco',
      'resultados inmediatos',
      'verasalud',
    ],
    authors: [{ name: 'VeraSalud' }],
  }
}

export default function ElectrocardiogramaPage(): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: 'Electrocardiograma (ECG)',
    description:
      'Electrocardiograma digital para la detección y monitoreo de arritmias, bloqueos y otros trastornos del ritmo cardíaco.',
    url: 'https://verasalud.com/servicios/electrocardiograma',
    image: 'https://verasalud.com/electrocardiograma-verasalud-cali.webp',
    usedToDiagnose: {
      '@type': 'MedicalCondition',
      name: 'Arrhythmia',
    },
    provider: {
      '@type': 'MedicalOrganization',
      name: 'VeraSalud',
      url: 'https://verasalud.com',
      logo: 'https://verasalud.com/verasalud-logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tu Dirección en Cali',
        addressLocality: 'Cali',
        addressRegion: 'Valle del Cauca',
        postalCode: '760001',
        addressCountry: 'CO',
      },
    },
  }

  return (
    <main className={`${styles.container} dark-fix`}>
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
          <figure style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Image
              src="/electrocardiograma-verasalud-cali.webp"
              alt="Paciente realizándose electrocardiograma en VeraSalud Cali con lectura por médico internista"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
              placeholder="blur"
              blurDataURL="/electrocardiograma-verasalud-cali.webp"
              priority
              fetchPriority="high"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <figcaption
              style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#555',
                marginTop: '0.5rem',
              }}
            >
              Electrocardiograma digital con interpretación médica inmediata – VeraSalud, Cali
            </figcaption>
          </figure>
          <h2>Electrocardiograma con resultados inmediatos y sin demoras</h2>
          <p>
            En VeraSalud realizamos electrocardiogramas digitales que permiten detectar alteraciones del
            ritmo cardíaco, hipertrofias, bloqueos y signos de enfermedad coronaria. La interpretación la
            realiza directamente un médico internista con experiencia clínica.
          </p>
          <p>
            <strong>Solicita tu cita y obtén resultados confiables en minutos.</strong>
          </p>
          <p>
            Nuestros equipos cuentan con tecnología moderna y la interpretación es realizada por
            especialistas en temas de cardiología.
          </p>
          <p>
            Ideal para chequeos médicos, valoraciones prequirúrgicas o seguimiento de enfermedades crónicas.
          </p>
          <p>
            <strong>Agende su cita con resultados confiables y sin demoras.</strong>
          </p>
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

