import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Pélvica en Cali | VeraSalud',
  description: 'Evaluación ecográfica del útero, ovarios y vejiga para diagnosticar afecciones ginecológicas y urológicas.',
  keywords: ['ecografia pelvica cali', 'ultrasonido ginecologico', 'ecografia transvaginal cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/pelvica' },
  openGraph: {
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description: 'Evaluación ecográfica del útero, ovarios y vejiga para diagnosticar afecciones ginecológicas y urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    images: [
      { url: '/ecografia-pelvica-ginecologica-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía pélvica ginecológica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description: 'Evaluación ecográfica del útero, ovarios y vejiga para diagnosticar afecciones ginecológicas y urológicas.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Pélvica en Cali',
    description: 'Evaluación ecográfica del útero, ovarios y vejiga para diagnosticar afecciones ginecológicas y urológicas.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    image: 'https://verasalud.com/ecografia-pelvica-ginecologica-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Pélvica en Cali</h1>
          <Image
            src="/ecografia-pelvica-verasalud.webp"
            alt="Ecografía pélvica en Cali Verasalud"
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
            priority
          />
          <p>
            La ecografía pélvica estudia útero, ovarios y vejiga en mujeres. Detecta miomas, quistes, endometriosis o alteraciones urinarias.
          </p>
          <p>
            Indicada ante dolor pélvico, sangrado irregular o infertilidad.
          </p>
          <p>
            Consulta con nuestro equipo y agenda tu ecografía.
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
