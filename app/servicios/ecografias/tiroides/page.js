import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'


// import'../../../components/ContactForm' ContactForm from '..//../components/Con'../../../components/ContactForm'
// import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Tiroides en Cali | VeraSalud',
  description: 'Ultrasonido de tiroides para evaluar nódulos y la glándula tiroides en VeraSalud.',
  keywords: ['ecografia tiroides cali', 'ultrasonido de tiroides', 'tiroides ecografia'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/tiroides' },
  openGraph: {
    title: 'Ecografía de Tiroides en Cali | VeraSalud',
    description: 'Estudio ecográfico de tiroides con tecnología de alta resolución en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/tiroides',
    images: [
      { url: '/ecografia-tiroides-verasalud-cali.webp', width: 1200, height: 630, alt: 'Equipo realizando ecografía de tiroides' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía de Tiroides en VeraSalud',
    description: 'Diagnóstico preciso de la glándula tiroides con ecografía.'
  }
}

export default function EcografiaTiroidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Tiroides',
    description: 'Procedimiento de imagen no invasivo para evaluar la glándula tiroides y detectar nódulos o anomalías.',
    url: 'https://verasalud.com/servicios/ecografias/tiroides',
    image: 'https://verasalud.com/ecografia-tiroides-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Tiroides en Cali</h1>
            <Image
              src="/ecografia-tiroides-verasalud-cali.webp"
              alt="Ecografía de tiroides en Cali Verasalud"
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
              priority
            />

            <p>
              La ecografía de tiroides observa nódulos, quistes o inflamación en la glándula. No emite radiación y es clave en el seguimiento clínico.
            </p>
            <p>
              Recomendada si tienes hipotiroidismo, bocio o alteraciones en el cuello.
            </p>
            <p>
              Agenda tu ecografía tiroidea hoy.
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
