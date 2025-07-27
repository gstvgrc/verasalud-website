import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecograf\u00edas en Cali | Ultrasonido y Doppler | VeraSalud',
  description:
    'Ecograf\u00edas abdominal, hep\u00e1tica, p\u00e9lvica, obst\u00e9trica, mamaria, osteomuscular y Doppler en Cali con resultados r\u00e1pidos.',
  keywords: ['ecografias cali', 'ecografia doppler', 'ecografia abdominal', 'ultrasonido en cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecograf\u00edas en Cali | VeraSalud',
    description: 'Ultrasonido convencional y Doppler en Cali para diagn\u00f3sticos precisos.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecograf\u00edas en VeraSalud Cali' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecograf\u00edas de Alta Resoluci\u00f3n en Cali',
    description: 'Solicita tu ecograf\u00eda con especialistas en VeraSalud.'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecograf\u00edas en Cali</h1>
          <p>
            En VeraSalud realizamos ecograf\u00edas de alta resoluci\u00f3n y estudios
            Doppler que brindan diagn\u00f3sticos confiables en poco tiempo.
            Nuestros especialistas ofrecen atenci\u00f3n personalizada para cuidar
            tu salud.
          </p>
          <p><strong>Agenda tu cita hoy mismo.</strong></p>
        </div>
        <Image
          src="/equipo-medico.jpg"
          alt="Equipo m\u00e9dico realizando ecograf\u00eda"
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </section>

      <section className={styles.ecografiaLinks}>
        <h2>
          <Link href="/servicios/ecografias/abdominal">Ecograf\u00eda Abdominal</Link>
        </h2>
        <p>
          Eval\u00faa h\u00edgado, ves\u00edcula y ri\u00f1ones para detectar c\u00e1lculos
          o masas y guiar tratamientos tempranos.
        </p>
        <h2>
          <Link href="/servicios/ecografias/hepatica">Ecograf\u00eda Hep\u00e1tica</Link>
        </h2>
        <p>
          Permite valorar el h\u00edgado y las v\u00edas biliares, fundamental en la
          detecci\u00f3n de hepatitis y h\u00edgado graso.
        </p>
        <h2>
          <Link href="/servicios/ecografias/pelvica">Ecograf\u00eda P\u00e9lvica</Link>
        </h2>
        <p>
          Estudia \u00fatero y ovarios para controlar quistes, miomas y causas de
          dolor p\u00e9lvico.
        </p>
        <h2>
          <Link href="/servicios/ecografias/obstetrica">Ecograf\u00eda Obst\u00e9trica</Link>
        </h2>
        <p>
          Monitorea el desarrollo del beb\u00e9 y la salud materna a lo largo del
          embarazo.
        </p>
        <h2>
          <Link href="/servicios/ecografias/mamaria">Ecograf\u00eda Mamaria</Link>
        </h2>
        <p>
          Detecta lesiones en el tejido mamario y complementa la mamograf\u00eda en
          el diagn\u00f3stico de patolog\u00edas de la mama.
        </p>
        <h2>
          <Link href="/servicios/ecografias/osteomuscular">Ecograf\u00eda Osteomuscular</Link>
        </h2>
        <p>
          Analiza m\u00fasculos y tendones para evaluar lesiones deportivas o
          dolor cr\u00f3nico de las articulaciones.
        </p>
        <h2>
          <Link href="/servicios/ecografias/doppler">Ecograf\u00eda Doppler</Link>
        </h2>
        <p>
          Mide el flujo sangu\u00edneo en venas y arterias, esencial para
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
