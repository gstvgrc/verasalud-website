import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Abdominal en Cali | VeraSalud',
  description: 'Ultrasonido abdominal para evaluar órganos internos y detectar patologías en VeraSalud.',
  keywords: ['ecografia abdominal cali', 'ultrasonido de abdomen', 'imagen diagnostica cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/abdominal' },
  openGraph: {
    title: 'Ecografía Abdominal en Cali | VeraSalud',
    description: 'Estudio ecográfico de abdomen con tecnología de alta resolución en Cali.',
    url: 'https://verasalud.com/servicios/ecografias/abdominal',
    images: [
      {
        url: '/ecografia-abdominal-verasalud-cali.webp',
        width: 1200,
        height: 630,
        alt: 'Equipo realizando ecografía abdominal en Cali'
      }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Abdominal en VeraSalud',
    description: 'Diagnóstico preciso de hígado, riñones y vesícula con ecografía abdominal.'
  }
}

export default function EcografiaAbdominalPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Abdominal',
    description: 'Procedimiento de imagen que permite visualizar hígado, vesícula, riñones y otros órganos abdominales.',
    url: 'https://verasalud.com/servicios/ecografias/abdominal',
    image: 'https://verasalud.com/ecografia-abdominal-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Abdominal en Cali</h1>
          <p>
            La <strong>ecografía abdominal</strong> es un estudio de
            <em>diagnóstico por imágenes</em> no invasivo que permite visualizar en
            tiempo real los órganos internos de la cavidad abdominal. En VeraSalud contamos con tecnología de alta resolución para examinar
            hígado, vesícula biliar, riñones, páncreas y otros órganos del abdomen. Este ultrasonido es indoloro, no expone a radiación y
            proporciona resultados rápidos, lo que lo convierte en una herramienta fundamental para evaluar molestias abdominales de manera
            segura.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Realizarse una ecografía
            abdominal a tiempo ayuda a <em>detectar tempranamente</em> cálculos en
            la vesícula, quistes, tumores o signos de enfermedades como hígado graso y pancreatitis. Un diagnóstico oportuno permite iniciar el
            tratamiento adecuado antes de que las condiciones empeoren, evitando complicaciones. Además, al ser un procedimiento accesible y seguro,
            facilita el control periódico de patologías crónicas abdominales bajo la supervisión de nuestro <strong>médico internista en Cali</strong>.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>
              Dolor abdominal persistente, cólicos en el costado derecho bajo las
              costillas o sospecha de cálculos biliares.
            </li>
            <li>
              Alteraciones en exámenes de hígado (enzimas hepáticas elevadas) o
              diagnóstico de hígado graso.
            </li>
            <li>
              Signos de infección renal, cólico nefrítico (dolor lumbar) o
              sangre en la orina que sugieran cálculos renales.
            </li>
            <li>
              Abultamiento, masas o inflamación abdominal detectados en un examen físico.
            </li>
            <li>
              Seguimiento de enfermedades crónicas como hepatitis, cirrosis o pancreatitis crónica.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Para el examen, te recostarás cómodamente mientras el especialista aplica un gel conductor sobre tu abdomen.
            Luego desplazará un transductor (sonda de ultrasonido) a lo largo del área abdominal para obtener imágenes detalladas de tus órganos.
            El procedimiento suele durar entre 15 y 30 minutos, es completamente indoloro y te permite reanudar tus actividades inmediatamente después.
            Nuestros expertos en imágenes diagnósticas interpretarán los resultados y te explicarán los hallazgos.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> En muchos casos se recomienda acudir en ayunas (sin comer alimentos sólidos por unas 6 a 8 horas antes)
            para lograr una mejor visualización del hígado y la vesícula biliar. Esto reduce la presencia de gases intestinales que puedan dificultar las imágenes.
            Puedes beber pequeños sorbos de agua si es necesario, pero evita comidas pesadas antes del estudio. Sigue las indicaciones específicas que te brinde el
            personal médico al agendar tu cita.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image
          src="/ecografia-abdominal-verasalud-cali.webp"
          alt="Equipo realizando ecografía abdominal en Cali"
          width={800}
          height={500}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          className="rounded-xl"
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