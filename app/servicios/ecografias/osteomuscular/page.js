import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Osteomuscular en Cali | VeraSalud',
  description: 'Ultrasonido especializado para evaluar músculos, tendones y articulaciones.',
  keywords: ['ecografia osteomuscular cali', 'ultrasonido musculos', 'ecografia de tendones'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/osteomuscular' },
  openGraph: {
    title: 'Ecografía Osteomuscular en Cali | VeraSalud',
    description: 'Diagnóstico de lesiones deportivas y trastornos músculo-esqueléticos mediante ecografía.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    images: [
      { url: '/ecografia-osteomuscular.jpg', width: 1200, height: 630, alt: 'Ecografía osteomuscular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Osteomuscular en VeraSalud',
    description: 'Valoración precisa de tendones y articulaciones con ecografía osteomuscular.'
  }
}

export default function EcografiaOsteomuscularPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Osteomuscular',
    description: 'Procedimiento de imagen para analizar lesiones en músculos, tendones y ligamentos.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular',
    image: 'https://verasalud.com/ecografia-osteomuscular.jpg'
  }

  return (
    <main className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Osteomuscular en Cali</h1>
          <p>
            La <strong>ecografía osteomuscular</strong> es un ultrasonido
            especializado que forma parte del <em>diagnóstico por imágenes</em>
            musculoesquelético. Permite visualizar en tiempo real músculos,
            tendones, ligamentos y articulaciones para identificar lesiones o
            alteraciones estructurales. En VeraSalud Cali contamos con equipos de
            alta definición para realizar ecografías osteomusculares, ideales
            tanto en lesiones deportivas agudas como en dolores crónicos,
            brindando información detallada sin exposición a radiación.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> Este examen dinámico posibilita
            la <em>detección temprana</em> de desgarros musculares, tendinitis,
            esguinces ligamentarios y otras lesiones de los tejidos blandos.
            Realizar una ecografía osteomuscular oportunamente ayuda a planificar
            un tratamiento adecuado (fisioterapia, reposo, medicamentos o cirugía
            si es necesaria) y a monitorear la evolución de la lesión en
            consultas posteriores. Al obtener un diagnóstico preciso de la causa
            del dolor o la limitación funcional, se contribuye a una recuperación
            más rápida y efectiva del paciente. Nuestro
            <strong>médico internista</strong>, en conjunto con nuestro equipo
            especializado, te guiará en los pasos a seguir según los hallazgos,
            asegurando una atención integral.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>
              Lesiones deportivas agudas: sospecha de desgarro muscular, esguince
              de ligamentos o rotura de tendón (ej.: tendón de Aquiles, manguito
              rotador del hombro).
            </li>
            <li>
              Dolor articular o inflamación crónica en hombros, codos, muñecas,
              rodillas o tobillos para evaluar tendinitis, bursitis o acumulación
              de líquido (derrame articular).
            </li>
            <li>
              Síndrome del túnel carpiano u otros atrapamientos nerviosos donde
              la ecografía pueda visualizar estructuras comprimidas.
            </li>
            <li>
              Bultos o masas blandas bajo la piel (lipomas, quistes sinoviales) en
              zonas musculares o cercanas a articulaciones.
            </li>
            <li>
              Seguimiento de la cicatrización de una lesión muscular o tendinosa
              previamente diagnosticada, para ajustar el plan de rehabilitación.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Durante la ecografía
            osteomuscular, el paciente se coloca en una posición cómoda que
            exponga la región a examinar (por ejemplo, el brazo o la pierna
            afectados). El especialista aplicará gel sobre la piel y desplazará
            el transductor sobre el área lesionada, posiblemente pidiéndote
            realizar ciertos movimientos o contraer el músculo para evaluar su
            función en vivo. El procedimiento puede durar entre 15 y 30 minutos,
            dependiendo de la extensión de la zona a revisar. No causa dolor,
            aunque podrías sentir una leve presión del transductor; si el área
            está sensible, cualquier molestia será mínima y momentánea.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> No se requieren preparativos
            especiales para este examen. Es aconsejable usar ropa cómoda que
            permita descubrir fácilmente la zona a evaluar (por ejemplo,
            pantalones cortos para ecografía de rodilla o calzado fácil de quitar
            para ecografía de tobillo). Si cuentas con estudios previos
            relacionados (radiografías, resonancias o informes médicos), tráelos
            a tu cita para complementar la valoración. Por lo demás, puedes
            alimentarte normalmente y tomar tus medicamentos habituales antes del
            procedimiento.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image src="/ecografia-osteomuscular.jpg" alt="Ecografía de músculos y articulaciones" width={800} height={500} loading="lazy" />
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
