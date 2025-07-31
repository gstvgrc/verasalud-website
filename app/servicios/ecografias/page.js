import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografías en Cali | Ultrasonido y Doppler | VeraSalud',
  description:
    'Ecografías abdominal, hepática, pélvica, obstétrica, mamaria, osteomuscular y Doppler en Cali con resultados rápidos.',
  keywords: ['ecografias cali', 'ecografia doppler', 'ecografia abdominal', 'ultrasonido en cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecografías en Cali | VeraSalud',
    description: 'Ultrasonido convencional y Doppler en Cali para diagnósticos precisos.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecografías en VeraSalud Cali' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografías de Alta Resolución en Cali',
    description: 'Solicita tu ecografía con especialistas en VeraSalud.'
  }
}

export default function EcografiasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ecografías en VeraSalud',
    description: 'Listado de servicios de ecografías convencionales y Doppler en Cali',
    url: 'https://verasalud.com/servicios/ecografias'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografías en Cali</h1>
          <p>
            En VeraSalud realizamos ecografías de alta resolución y estudios
            Doppler que brindan diagnósticos confiables en poco tiempo.
            Nuestros especialistas ofrecen atención personalizada para cuidar
            tu salud.
          </p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image
          src="/equipo-medico.jpg"
          alt="Equipo médico realizando ecografía"
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </section>

      <section className={styles.ecografiaLinks}>
        <h2>
          <Link href="/servicios/ecografias/abdominal">Ecografía Abdominal</Link>
        </h2>
        <p>
          Evalúa hígado, vesícula y riñones para detectar cálculos
          o masas y guiar tratamientos tempranos.
        </p>
        <h2>
          <Link href="/servicios/ecografias/hepatica">Ecografía Hepática</Link>
        </h2>
        <p>
          Permite valorar el hígado y las vías biliares, fundamental en la
          detección de hepatitis y hígado graso.
        </p>
        <h2>
          <Link href="/servicios/ecografias/pelvica">Ecografía Pélvica</Link>
        </h2>
        <p>
          Estudia útero y ovarios para controlar quistes, miomas y causas de
          dolor pélvico.
        </p>
        <h2>
          <Link href="/servicios/ecografias/obstetrica">Ecografía Obstétrica</Link>
        </h2>
        <p>
          Monitorea el desarrollo del bebé y la salud materna a lo largo del
          embarazo.
        </p>
        <h2>
          <Link href="/servicios/ecografias/mamaria">Ecografía Mamaria</Link>
        </h2>
        <p>
          Detecta lesiones en el tejido mamario y complementa la mamografía en
          el diagnóstico de patologías de la mama.
        </p>
        <h2>
          <Link href="/servicios/ecografias/osteomuscular">Ecografía Osteomuscular</Link>
        </h2>
        <p>
          Analiza músculos y tendones para evaluar lesiones deportivas o
          dolor crónico de las articulaciones.
        </p>
        <h2>
          <Link href="/servicios/ecografias/doppler">Ecografía Doppler</Link>
        </h2>
        <p>
          Mide el flujo sanguíneo en venas y arterias, esencial para
          diagnosticar problemas circulatorios.
        </p>
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
