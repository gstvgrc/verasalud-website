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
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Tiroides en Cali</h1>
          <p>
            La <strong>ecografía tiroidea</strong> es un examen de <em>diagnóstico por imágenes</em> que utiliza ondas de ultrasonido
            para obtener vistas detalladas de la glándula tiroides. Permite evaluar el tamaño, forma y estructura de la tiroides, así
            como detectar la presencia de nódulos, quistes u otras anomalías. Es un procedimiento indoloro y seguro que no utiliza
            radiación ionizante.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> La ecografía de tiroides ayuda a <em>detectar tempranamente</em> nódulos y alteraciones
            estructurales, a guiar biopsias por aspiración con aguja fina y a monitorizar cambios en el tamaño de la glándula a lo largo
            del tiempo. Además, es útil para identificar agrandamiento de las glándulas paratiroides y evaluar masas cervicales.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>Nódulos palpables o crecimiento visible en la parte anterior del cuello.</li>
            <li>Resultados anormales en pruebas de función tiroidea o historia familiar de enfermedad tiroidea.</li>
            <li>Seguimiento de nódulos tiroideos previamente detectados o control tras tratamiento.</li>
            <li>Preparación para procedimientos como biopsias guiadas por imagen.</li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Te recostarás cómodamente mientras el especialista aplica un gel conductor sobre tu cuello.
            Luego desplazará suavemente un transductor sobre la zona para obtener imágenes en tiempo real de la tiroides. El estudio
            suele durar entre 15 y 20 minutos y podrás retomar tus actividades de inmediato.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en VeraSalud y cuida tu salud tiroidea.</strong>
          </p>
        </div>
        <Image
          src="/ecografia-tiroides-verasalud-cali.webp"
          alt="Equipo realizando ecografía de tiroides"
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
