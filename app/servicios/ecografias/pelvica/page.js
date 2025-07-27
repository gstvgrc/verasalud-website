import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Pélvica en Cali | VeraSalud',
  description: 'Evaluación ecográfica de útero y ovarios con tecnología de alta resolución.',
  keywords: ['ecografia pelvica cali', 'ultrasonido transvaginal', 'ginecologia cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/pelvica' },
  openGraph: {
    title: 'Ecografía Pélvica en Cali | VeraSalud',
    description: 'Diagnóstico de patologías ginecológicas mediante ecografía transvaginal o suprapúbica.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    images: [
      { url: '/ecografia-pelvica.jpg', width: 1200, height: 630, alt: 'Ecografía pélvica en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Pélvica en VeraSalud',
    description: 'Control y evaluación ginecológica con ecografía pélvica de alta resolución.'
  }
}

export default function EcografiaPelvicaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Pélvica',
    description: 'Procedimiento ecográfico para revisar útero, ovarios y otras estructuras pélvicas.',
    url: 'https://verasalud.com/servicios/ecografias/pelvica',
    image: 'https://verasalud.com/ecografia-pelvica.jpg'
  }

  return (
    <main className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Pélvica en Cali</h1>
          <p>
            La <strong>ecografía pélvica</strong> es un estudio de ultrasonido
            enfocado en visualizar los órganos reproductivos femeninos y
            estructuras cercanas en la pelvis. Es una herramienta fundamental en
            <em>ginecología</em> para el diagnóstico de diversas patologías
            uterinas y ováricas. En VeraSalud Cali realizamos ecografías pélvicas
            con equipos de alta resolución, ya sea por vía transvaginal (interna)
            o suprapúbica (externa) según las necesidades de cada paciente. El
            examen es seguro, rápido y no utiliza radiación, proporcionando
            imágenes claras del útero, ovarios, trompas de Falopio y vejiga.
          </p>
          <p>
            <strong>Beneficios clínicos:</strong> La ecografía pélvica permite la
            <em>detección temprana</em> de condiciones ginecológicas antes de que
            se agraven. Identificar oportunamente quistes ováricos, miomas
            uterinos (fibromas), endometriosis u otras alteraciones puede marcar
            la diferencia en el tratamiento y pronóstico. Este examen también
            ayuda a monitorear la respuesta a tratamientos ginecológicos – por
            ejemplo, verificando la reducción de un quiste con medicación.
            Además, en casos de infertilidad, la ecografía pélvica es clave para
            evaluar la reserva ovárica (folículos) y la salud uterina, guiando
            intervenciones adecuadas. Todo ello contribuye a un cuidado
            ginecológico integral y a la tranquilidad de la paciente.
          </p>
          <p>
            <strong>Indicaciones frecuentes:</strong>
          </p>
          <ul>
            <li>
              Alteraciones menstruales: sangrados uterinos anormales, periodos
              muy abundantes (menorragia) o dolor menstrual severo (dismenorrea)
              que sugieren evaluar útero y ovarios.
            </li>
            <li>
              Dolor pélvico crónico o agudo, presión en la parte baja del
              abdomen o dolor durante las relaciones sexuales (dispareunia) sin
              causa determinada.
            </li>
            <li>
              Sospecha de quistes ováricos, síndrome de ovario poliquístico o
              tumores ováricos por síntomas o hallazgos clínicos.
            </li>
            <li>
              Evaluación inicial en estudios de fertilidad para observar
              folículos ováricos y el estado del útero.
            </li>
          </ul>
          <p>
            <strong>¿Cómo se realiza?</strong> Según el caso, la ecografía pélvica
            puede hacerse de dos maneras: <strong>transvaginal</strong>
            (introduciendo una sonda delgada en la vagina para obtener imágenes
            detalladas del útero y los ovarios) o <strong>transabdominal</strong>
            (aplicando la sonda sobre el abdomen inferior). Si es transvaginal,
            se te solicitará vaciar la vejiga antes del examen y el procedimiento,
            aunque puede generar leve incomodidad, no suele ser doloroso. Si es
            transabdominal, se requiere que tengas la vejiga llena; te pediremos
            beber agua antes de la cita y evitar orinar hasta terminar el
            estudio, ya que una vejiga distendida ayuda a visualizar mejor las
            estructuras. En ambos casos, el examen dura aproximadamente 15
            minutos. Nuestro personal te explicará cada paso para que te sientas
            cómoda y confiada durante el procedimiento.
          </p>
          <p>
            <strong>Recomendaciones previas:</strong> Sigue las indicaciones
            brindadas al agendar tu cita. Generalmente, si está programada una
            ecografía transvaginal, acude con vejiga vacía y vestimenta fácil de
            quitar de la cintura hacia abajo (como falda o pantalón holgado). Si
            la ecografía será transabdominal, llega con <strong>vejiga llena</strong>,
            lo cual suele lograrse bebiendo unos 4 vasos de agua una hora antes y
            evitando orinar hasta después del examen. Evita aplicar cremas en el
            bajo vientre el día de la prueba, ya que el gel se adhiere mejor
            sobre la piel limpia. Ante cualquier duda, nuestro equipo te orientará
            sobre cómo prepararte para obtener las mejores imágenes.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong>
          </p>
        </div>
        <Image
          src="/ecografia-pelvica.jpg"
          alt="Procedimiento de ecografía pélvica"
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
