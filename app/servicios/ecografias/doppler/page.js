import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Doppler en Cali | VeraSalud',
  description: 'Estudio Doppler para evaluar el flujo sanguíneo y detectar obstrucciones vasculares.',
  keywords: ['ecografia doppler cali', 'doppler venoso', 'doppler arterial'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/doppler' },
  openGraph: {
    title: 'Ecografía Doppler en Cali | VeraSalud',
    description: 'Procedimiento Doppler color para valorar venas y arterias con precisión.',
    url: 'https://verasalud.com/servicios/ecografias/doppler',
    images: [
      { url: '/ecografia-doppler.jpg', width: 1200, height: 630, alt: 'Ecografía Doppler en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Doppler en VeraSalud',
    description: 'Diagnóstico de problemas circulatorios con ecografía Doppler de alta definición.'
  }
}

export default function EcografiaDopplerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Doppler',
    description: 'Procedimiento que analiza el flujo sanguíneo en venas y arterias para detectar obstrucciones o reflujos.',
    url: 'https://verasalud.com/servicios/ecografias/doppler',
    image: 'https://verasalud.com/ecografia-doppler.jpg'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Doppler</h1>
          <p>La ecografía Doppler permite estudiar el flujo de la sangre en venas y arterias.</p>
          <p>Es fundamental para diagnosticar trombosis, varices o problemas en arterias carótidas.</p>
          <p>Utiliza ultrasonido con efecto Doppler para medir la velocidad y dirección de la circulación.</p>
          <p>Ayuda a planear tratamientos vasculares y a prevenir complicaciones.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image
          src="/ecografia-doppler.jpg"
          alt="Aplicación de ecografía Doppler"
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
