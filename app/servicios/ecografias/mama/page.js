import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía de Mama en Cali | VeraSalud',
  description: 'Estudio ecográfico de seno para la detección temprana de lesiones mamarias.',
  keywords: ['ecografia de mama cali', 'ultrasonido mamario', 'deteccion cancer seno'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/mama' },
  openGraph: {
    title: 'Ecografía de Mama en Cali | VeraSalud',
    description: 'Examen seguro y eficaz para evaluar el tejido mamario en mujeres de todas las edades.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    images: [
      { url: '/ecografia-mama.jpg', width: 1200, height: 630, alt: 'Ecografía mamaria realizada en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Mamaria en VeraSalud',
    description: 'Diagnóstico temprano de lesiones de seno con ecografía de mama.'
  }
}

export default function EcografiaMamaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía de Mama',
    description: 'Procedimiento de imagen que ayuda a identificar quistes, nódulos y otras alteraciones en el tejido mamario.',
    url: 'https://verasalud.com/servicios/ecografias/mama',
    image: 'https://verasalud.com/ecografia-mama.jpg'
  }

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía de Mama en Cali</h1>
          <p>
            La <strong>ecografía mamaria</strong> (ultrasonido de seno) es un
            examen de <em>diagnóstico por imágenes</em> que permite evaluar el
            tejido de las mamas en detalle. A diferencia de la mamografía, la
            ecografía no utiliza radiación, por lo que es segura incluso en
            mujeres jóvenes o embarazadas. En VeraSalud Cali realizamos
            ecografías de mama de alta resolución para detectar quistes, nódulos
            u otras alteraciones en el seno, contribuyendo a un diagnóstico
            temprano del cáncer de mama y otras patologías mamarias.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Realizarse una ecografía de
            mama a tiempo puede marcar la diferencia en la
            <em>detección temprana</em> de lesiones. Este estudio complementa a la
            mamografía, ayudando a caracterizar hallazgos sospechosos (distinguir
            entre quistes benignos llenos de líquido y nódulos sólidos
            potencialmente peligrosos). También es útil como método de evaluación
            en mujeres con tejidos mamarios densos, donde la mamografía puede
            tener limitaciones. La ecografía mamaria brinda tranquilidad al
            paciente cuando los resultados son normales y guía al médico en caso
            de requerir biopsias o seguimientos, todo esto bajo la asesoría de
            nuestro <strong>médico internista</strong> y equipo especializado.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>Bulto o masa palpable en uno o ambos senos, o engrosamiento inusual del tejido mamario.</li>
            <li>
              Dolor mamario persistente o sensibilidad localizada que requiera
              descartar alteraciones estructurales.
            </li>
            <li>
              Resultados anormales en una mamografía (por ejemplo, un área
              sospechosa que necesite evaluación adicional por ultrasonido).
            </li>
            <li>
              Control periódico en mujeres con antecedentes familiares
              significativos de cáncer de mama, especialmente en menores de 40
              años.
            </li>
            <li>
              Secreción anormal por el pezón o cambios en la piel del seno (como
              retracción, enrojecimiento) que ameriten estudio.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Durante la ecografía mamaria, te
            recostarás sobre una camilla y se aplicará un gel tibio sobre la
            mama a examinar. El especialista moverá suavemente el transductor
            sobre la piel del seno y la axila para obtener imágenes de las
            diferentes zonas. El procedimiento es cómodo, no genera dolor y suele
            tomar entre 15 y 20 minutos en total. Puedes reanudar tus actividades
            inmediatamente luego del examen, ya que no requiere recuperación.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> En general, no se requiere
            preparación especial. Se sugiere no aplicar lociones, cremas o talco
            en las mamas el día de la cita para asegurar el mejor contacto del
            transductor con la piel. Si estás en período menstrual y tus senos
            están muy sensibles, podrías programar la ecografía unos días después
            de tu menstruación para mayor comodidad, aunque esto no afecta la
            eficacia del estudio. Usa ropa de dos piezas que facilite descubrir
            la zona del pecho.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image src="/ecografia-mama.jpg" alt="Realización de ecografía mamaria" width={800} height={500} />
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
