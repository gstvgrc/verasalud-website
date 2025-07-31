import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Hepática en Cali | VeraSalud',
  description: 'Examen ecográfico para estudiar el hígado y diagnosticar enfermedades hepáticas.',
  keywords: ['ecografia hepatica cali', 'ultrasonido de higado', 'diagnostico higado cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/hepatica' },
  openGraph: {
    title: 'Ecografía Hepática en Cali | VeraSalud',
    description: 'Ecografía especializada para evaluar el hígado con imágenes de alta resolución.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    images: [
      { url: '/ecografia-hepatica.jpg', width: 1200, height: 630, alt: 'Realizando ecografía hepática en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Hepática en VeraSalud',
    description: 'Diagnóstico preciso de enfermedades del hígado con ecografía hepática.'
  }
}

export default function EcografiaHepaticaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Hepática',
    description: 'Procedimiento de imagen para revisar el hígado, detectar lesiones y evaluar su tamaño.',
    url: 'https://verasalud.com/servicios/ecografias/hepatica',
    image: 'https://verasalud.com/ecografia-hepatica.jpg'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Hepática en Cali</h1>
          <p>
            La <strong>ecografía hepática</strong> es un ultrasonido especializado
            del hígado y las estructuras hepato-biliares. Se trata de un estudio
            de <em>imágenes diagnósticas</em> enfocado en evaluar el tamaño, la
            forma y la textura del hígado, así como la vesícula biliar y
            conductos biliares, en busca de lesiones o anomalías. En VeraSalud
            Cali, este examen nos permite diagnosticar enfermedades del hígado de
            manera oportuna, usando tecnología de alta resolución sin exposición
            a radiación.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Una evaluación hepática temprana
            mediante ecografía ayuda a <em>detectar a tiempo</em> condiciones como
            hígado graso (esteatosis), hepatitis crónica, cirrosis incipiente,
            quistes, tumores benignos (como hemangiomas) o incluso lesiones
            sospechosas de cáncer hepático. Identificar estas alteraciones en
            etapas iniciales es clave para iniciar el tratamiento adecuado o
            profundizar el estudio con prontitud. Asimismo, el seguimiento
            periódico por ultrasonido en pacientes con enfermedades hepáticas
            conocidas permite a nuestro <strong>médico internista en Cali</strong>
            monitorear la evolución y eficacia de las terapias indicadas.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>
              Pruebas de sangre anormales (enzimas hepáticas elevadas, bilirrubina
              alta) que sugieren daño o inflamación del hígado.
            </li>
            <li>
              Antecedente de hepatitis B, hepatitis C u otras enfermedades
              hepáticas crónicas para control y despistaje de complicaciones.
            </li>
            <li>
              Sospecha de <em>hígado graso</em> por obesidad, diabetes o consumo
              habitual de alcohol.
            </li>
            <li>
              Dolor o molestia persistente en la parte superior derecha del
              abdomen, debajo de las costillas (zona del hígado).
            </li>
            <li>
              Ictericia (coloración amarillenta de piel y ojos) o resultados
              anormales en exámenes de función hepática que requieran evaluación
              por imágenes.
            </li>
            <li>
              Detección y seguimiento de quistes, nódulos o tumores hepáticos
              hallados en exámenes previos.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> La ecografía hepática se realiza
            con el paciente acostado, aplicando un gel conductor sobre el abdomen
            superior. El especialista desliza suavemente el transductor por la
            región del hígado y la vesícula para obtener imágenes detalladas. El
            procedimiento es breve (aproximadamente 15 minutos), indoloro y muy
            seguro. En VeraSalud, nuestros expertos en diagnóstico por imágenes
            interpretarán los resultados y te brindarán un informe claro,
            generalmente el mismo día.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> Es importante asistir en
            ayunas de 6 a 8 horas (sin ingerir alimentos sólidos) para que la
            vesícula biliar esté distendida y el gas intestinal no dificulte la
            visualización. Se sugiere programar la ecografía en horas de la
            mañana y evitar comidas pesadas la noche anterior. Si necesitas tomar
            agua o medicamentos, hazlo con pequeños sorbos. Sigue cualquier
            instrucción adicional que te proporcionemos al agendar tu cita para
            asegurar la mejor calidad diagnóstica.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image
          src="/ecografia-hepatica.jpg"
          alt="Ecografía del hígado en realización"
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
