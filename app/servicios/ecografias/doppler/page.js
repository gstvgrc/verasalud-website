import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Ecografía Doppler en Cali | VeraSalud',
    description:
      'Ecografía Doppler arterial y venosa para evaluación vascular. Atención oportuna en VeraSalud Cali.',
    openGraph: {
      title: 'Ecografía Doppler en Cali | VeraSalud',
      description:
        'Ecografía Doppler con equipos de alta resolución en VeraSalud Cali.',
      url: '/servicios/ecografias/doppler',
      images: [
        { url: '/ecografia-doppler-arterial-verasalud-cali.webp', width: 1200, height: 630 },
      ],
    },
    alternates: { canonical: '/servicios/ecografias/doppler' },
    keywords: ['ecografía doppler Cali', 'ultrasonido vascular', 'doppler venoso arterial'],
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
          <Image
            src="/ecografia-doppler-verasalud.webp"
            alt="Ecografía Doppler en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía Doppler evalúa el flujo de sangre en arterias y venas. Es clave para diagnosticar obstrucciones, trombos o insuficiencias.
          </p>
          <p>
            Ideal para personas con enfermedades vasculares o antecedentes de trombosis.
          </p>
          <p>
            Agenda tu estudio vascular hoy.
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
