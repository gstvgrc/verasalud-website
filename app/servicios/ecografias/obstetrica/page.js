import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Obstétrica en Cali | VeraSalud',
  description: 'Seguimiento del embarazo con ecografía obstétrica de alta resolución.',
  keywords: ['ecografia obstetrica cali', 'ultrasonido embarazo', 'control prenatal cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/obstetrica' },
  openGraph: {
    title: 'Ecografía Obstétrica en Cali | VeraSalud',
    description: 'Imágenes detalladas del bebé y la madre para un control prenatal seguro.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    images: [
      { url: '/ecografia-obstetrica.jpg', width: 1200, height: 630, alt: 'Ecografía obstétrica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Obstétrica en VeraSalud',
    description: 'Control del desarrollo del bebé con ecografía obstétrica especializada.'
  }
}

export default function EcografiaObstetricaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Obstétrica',
    description: 'Procedimiento de imagen para evaluar el desarrollo fetal y la salud materna durante el embarazo.',
    url: 'https://verasalud.com/servicios/ecografias/obstetrica',
    image: 'https://verasalud.com/ecografia-obstetrica.jpg'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Obstétrica en Cali</h1>
          <p>
            La <strong>ecografía obstétrica</strong> es un ultrasonido dedicado al
            <em>control prenatal</em> que permite observar el desarrollo del bebé
            dentro del útero y evaluar la salud materno-fetal durante el
            embarazo. En VeraSalud Cali contamos con tecnología de imagen de alta
            resolución para monitorizar cada etapa de la gestación de forma
            segura y confiable. Mediante la ecografía obstétrica es posible
            confirmar la presencia y edad gestacional del embrión, detectar el
            latido cardíaco fetal temprano, estimar el crecimiento y peso del
            feto, así como identificar a tiempo eventuales anomalías o
            complicaciones.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Los ultrasonidos obstétricos
            regulares son esenciales para un embarazo saludable. Gracias a la
            ecografía obstétrica, se puede realizar una <em>detección temprana</em>
            de malformaciones congénitas, problemas placentarios (como placenta
            previa) o alteraciones en el crecimiento fetal. Esto permite tomar
            medidas médicas oportunas que mejoran el pronóstico tanto para la
            madre como para el bebé. Además, el seguimiento ecográfico brinda
            tranquilidad a los futuros padres, al conocer el progreso del
            embarazo en cada trimestre. Un adecuado control por imágenes
            contribuye a un parto planificado con menos sorpresas y a una
            experiencia de embarazo más segura y tranquila.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>
              Ecografía del primer trimestre: confirmación del embarazo,
              determinación de la edad gestacional (fecha probable de parto) y
              tamizaje genético temprano (alrededor de la semana 12).
            </li>
            <li>
              Ecografía estructural o morfológica de segundo trimestre (18-22
              semanas) para examinar detalladamente los órganos del bebé y
              descartar malformaciones.
            </li>
            <li>
              Control de crecimiento y bienestar fetal en el tercer trimestre:
              evaluación del peso estimado, posición fetal, cantidad de líquido
              amniótico y flujo sanguíneo (Doppler) en casos necesarios.
            </li>
            <li>
              Seguimiento de embarazos de alto riesgo (diabetes, hipertensión,
              gemelos) con controles ecográficos periódicos, y evaluaciones
              cercanas al parto para verificar la posición del bebé (cefálica o
              podálica) y el estado de la placenta de cara al parto.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> La ecografía obstétrica por lo
            general se efectúa de forma transabdominal. Te recostarás cómodamente
            mientras el especialista aplica un gel sobre tu abdomen y desplaza el
            transductor para obtener imágenes del útero y del bebé. El
            procedimiento es indoloro y dura aproximadamente 20 minutos,
            dependiendo de lo detallada que sea la evaluación y la cooperación
            del bebé. En etapas muy tempranas del embarazo o para evaluación
            específica del cuello uterino, puede emplearse una ecografía
            transvaginal complementaria. En cualquier caso, el ultrasonido no
            utiliza radiación y es seguro para el feto.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> Para ecografías obstétricas
            tempranas (primer trimestre), se sugiere acudir con la vejiga
            moderadamente llena. Esto implica beber unos 3 a 4 vasos de agua una
            hora antes y no orinar inmediatamente antes del examen. En ecografías
            de segundo y tercer trimestre no es necesario este preparativo,
            puesto que el tamaño del útero facilita la observación. Evita aplicar
            cremas o lociones en el abdomen el día de la cita, ya que la piel
            limpia mejora la transmisión del ultrasonido. Nuestro equipo
            resolverá tus dudas y te hará sentir cómoda durante todo el proceso.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image
          src="/ecografia-obstetrica.jpg"
          alt="Ecografía obstétrica"
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
