import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Pélvica en Cali | VeraSalud',
  description: 'Evaluación ecográfica de útero y ovarios con tecnología de alta resolución.',
  keywords: ['ecografia pelvica cali', 'ultrasonido transvaginal', 'ginecologia cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/pelvica' },
  openGraph: {
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description: 'Diagnóstico de patologías ginecológicas mediante ecografía transvaginal o suprapúbica.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    images: [
      { url: '/ecografia-pelvica.jpg', width: 1200, height: 630, alt: 'Ecografía pélvica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Pélvica en VeraSalud',
    description: 'Control y evaluación ginecológica con ecografía pélvica de alta resolución.'
  }
}

export default function EcografiaPelvicaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Pélvica',
    description: 'Procedimiento ecográfico para revisar útero, ovarios y otras estructuras pélvicas.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    image: 'https://verasalud.com/ecografia-pelvica.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Pélvica</h1>
          <p>La ecografía pélvica permite evaluar el útero, los ovarios y la vejiga.</p>
          <p>Se realiza de forma transvaginal o suprapúbica según tu caso.</p>
          <p>Ayuda a diagnosticar quistes, miomas y causas de dolor pélvico.</p>
          <p>Es un examen rápido que facilita el seguimiento de tratamientos ginecológicos.</p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image src="/ecografia-pelvica.jpg" alt="Procedimiento de ecografía pélvica" width={800} height={500} />
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
