import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Ecografía Mamaria en Cali | VeraSalud',
    description:
      'Ecografía de mama de alta resolución para evaluación y control en VeraSalud Cali.',
    openGraph: {
      title: 'Ecografía Mamaria en Cali | VeraSalud',
      description:
        'Ecografía mamaria con equipos de alta resolución en VeraSalud Cali.',
      url: '/servicios/ecografias/mama',
      images: [
        { url: '/ecografia-mamaria-verasalud-cali.webp', width: 1200, height: 630 },
      ],
    },
    alternates: { canonical: '/servicios/ecografias/mama' },
    keywords: ['ecografía mamaria Cali', 'ultrasonido de mama', 'control de mama'],
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Mamaria en Cali',
    description: 'Diagnóstico por ultrasonido de la mama para distinguir entre quistes y tumores y complementar la mamografía.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    image: 'https://verasalud.com/ecografia-mamaria-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Mamaria en Cali</h1>
          <Image
            src="/ecografia-mamaria-verasalud-cali.webp"
            alt="Ecografía mamaria en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />

          <p>
            La ecografía mamaria permite visualizar tejido mamario en mujeres jóvenes, embarazadas o como complemento de la mamografía.
          </p>
          <p>
            Sirve para detectar masas, quistes o lesiones sospechosas.
          </p>
          <p>
            Solicita tu chequeo de mama con tecnología segura y sin dolor.
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
