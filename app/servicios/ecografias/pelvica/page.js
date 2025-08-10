import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description:
      'Ecografía pélvica femenina con alta calidad de imagen. Resultados confiables en VeraSalud Cali.',
    openGraph: {
      title: 'Ecografía Pélvica en Cali | VeraSalud',
      description:
        'Ecografía pélvica con equipos de alta resolución en VeraSalud Cali.',
      url: '/servicios/ecografias/pelvica',
      images: [
        { url: '/ecografia-pelvica-ginecologica-verasalud-cali.webp', width: 1200, height: 630 },
      ],
    },
    alternates: { canonical: '/servicios/ecografias/pelvica' },
    keywords: ['ecografía pélvica Cali', 'ultrasonido pélvico', 'ginecológica'],
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
            src="/ecografia-pelvica-ginecologica-verasalud-cali.webp"
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
