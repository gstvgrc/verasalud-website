import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecograf\u00edas en Cali | Alta Resoluci\u00f3n y Doppler | VeraSalud',
  description: 'Ecograf\u00edas convencionales y Doppler con resultados inmediatos en VeraSalud Cali.',
  keywords: ['ecografias cali', 'ecografia doppler', 'ecografia abdominal', 'ultrasonido cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecograf\u00edas en Cali | VeraSalud',
    description: 'Estudios ecogr\u00e1ficos de alta resoluci\u00f3n y Doppler en Cali.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecograf\u00edas en VeraSalud Cali' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecograf\u00edas de Alta Resoluci\u00f3n en Cali | VeraSalud',
    description: 'Diagn\u00f3stico confiable y atenci\u00f3n sin demoras.'
  }
}

export default function EcografiasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ecograf\u00edas en VeraSalud',
    description: 'Listado de servicios de ecograf\u00edas convencionales y Doppler en Cali',
    url: 'https://verasalud.com/servicios/ecografias'
  }

  return (
    <main className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecograf\u00edas en Cali</h1>
          <p>En VeraSalud ofrecemos estudios ecogr\u00e1ficos de alta resoluci\u00f3n para un diagn\u00f3stico preciso.</p>
          <p>Conoce nuestras ecograf\u00edas disponibles:</p>
          <ul>
            <li><Link href="/servicios/ecografias/abdominal">Ecograf\u00eda Abdominal</Link></li>
            <li><Link href="/servicios/ecografias/doppler">Ecograf\u00eda Doppler</Link></li>
            <li><Link href="/servicios/ecografias/hepatica">Ecograf\u00eda Hep\u00e1tica</Link></li>
            <li><Link href="/servicios/ecografias/mama">Ecograf\u00eda Mamaria</Link></li>
            <li><Link href="/servicios/ecografias/obstetrica">Ecograf\u00eda Obst\u00e9trica</Link></li>
            <li><Link href="/servicios/ecografias/osteomuscular">Ecograf\u00eda Osteomuscular</Link></li>
            <li><Link href="/servicios/ecografias/pelvica">Ecograf\u00eda P\u00e9lvica</Link></li>
          </ul>
        </div>
        <Image src="/equipo-medico.jpg" alt="Equipo m\u00e9dico realizando ecograf\u00eda" width={800} height={500} loading="lazy" />
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
