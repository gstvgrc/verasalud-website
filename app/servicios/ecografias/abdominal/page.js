import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Ecografía Abdominal en Cali | VeraSalud',
    description:
      'Ecografía abdominal para evaluación de hígado, vesícula y riñones con equipos de alta resolución. VeraSalud Cali.',
    openGraph: {
      title: 'Ecografía Abdominal en Cali | VeraSalud',
      description:
        'Ecografía abdominal de alta calidad con resultados confiables en VeraSalud Cali.',
      url: '/servicios/ecografias/abdominal',
      images: [
        { url: '/ecografia-abdominal-verasalud-cali.webp', width: 1200, height: 630 },
      ],
    },
    alternates: { canonical: '/servicios/ecografias/abdominal' },
    keywords: ['ecografía abdominal Cali', 'ultrasonido abdomen', 'ecografías Cali'],
  }
}

export default function EcografiaAbdominalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Abdominal',
    description: 'Procedimiento de imagen que permite visualizar hígado, vesícula, riñones y otros órganos abdominales.',
    url: 'https://verasalud.com/servicios/ecografias/abdominal',
    image: 'https://verasalud.com/ecografia-abdominal-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Abdominal en Cali</h1>
          <Image
            src="/ecografia-abdominal-verasalud-cali.webp"
            alt="Ecografía abdominal en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />

          <p>
            La ecografía abdominal permite observar hígado, vesícula, páncreas y riñones. Detecta cálculos, masas o inflamación sin usar radiación.
          </p>
          <p>
            Solicítala si presentas dolor, distensión o antecedentes hepáticos.
          </p>
          <p>
            Agenda tu cita con nuestros especialistas.
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