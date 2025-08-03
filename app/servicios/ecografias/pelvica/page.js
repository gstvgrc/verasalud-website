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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Pélvica en Cali</h1>
          <p>La ecografía pélvica produce imágenes del útero, cuello uterino, ovarios, trompas de Falopio y vejiga. Es una herramienta clave para evaluar el sistema reproductor femenino y el tracto urinario sin radiación.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Ayuda a diagnosticar causas de dolor pélvico, sangrado anormal o infertilidad.</li>
                <li>Detecta quistes ováricos, fibromas, malformaciones uterinas y embarazo ectópico.</li>
                <li>Monitorea el desarrollo y bienestar fetal durante el embarazo.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Evaluación de sangrado uterino anormal o dolor pélvico persistente.</li>
                <li>Seguimiento de embarazo y control del crecimiento fetal.</li>
                <li>Estudio de infertilidad y evaluación de malformaciones uterinas.</li>
                <li>Búsqueda de quistes, fibromas o masas pélvicas.</li>
                <li>Control postoperatorio de cirugías ginecológicas.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Dependiendo del caso, puede ser transabdominal (con la vejiga llena) o transvaginal, utilizando un transductor cubierto. Ambas técnicas permiten visualizar con claridad los órganos pélvicos.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-pelvica-ginecologica-verasalud-cali.webp'
          alt='Ecografía pélvica ginecológica en VeraSalud'
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
