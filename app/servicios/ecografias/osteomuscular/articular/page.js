import Image from 'next/image'
import ContactForm from '../../../../components/ContactForm'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Articular en Cali | VeraSalud',
  description: 'Examen ecográfico de articulaciones para valorar cartílago, líquido sinovial y lesiones articulares.',
  keywords: ['ecografia articular cali', 'ultrasonido articulaciones', 'ecografia de rodilla hombro'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/osteomuscular/articular' },
  openGraph: {
    title: 'Ecografía Articular en Cali | VeraSalud',
    description: 'Examen ecográfico de articulaciones para valorar cartílago, líquido sinovial y lesiones articulares.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular/articular',
    images: [
      { url: '/ecografia-osteomuscular-articular-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía articular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Articular en Cali | VeraSalud',
    description: 'Examen ecográfico de articulaciones para valorar cartílago, líquido sinovial y lesiones articulares.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Articular en Cali',
    description: 'Examen ecográfico de articulaciones para valorar cartílago, líquido sinovial y lesiones articulares.',
    url: 'https://verasalud.com/servicios/ecografias/osteomuscular/articular',
    image: 'https://verasalud.com/ecografia-osteomuscular-articular-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={`${styles.hero} px-4`}>
        <div className={styles.heroContent}>
          <h1>Ecografía Articular en Cali</h1>
          <p>La ecografía articular se centra en la valoración de articulaciones como hombro, codo, rodilla o tobillo. Permite visualizar el cartílago, el líquido sinovial y detectar derrames, sinovitis o lesiones meniscales.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Diagnostica derrames articulares, sinovitis y condromalacia.</li>
                <li>Visualiza lesiones del manguito rotador, meniscos y ligamentos.</li>
                <li>Facilita la guía de infiltraciones intraarticulares.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor articular persistente o inflamación.</li>
                <li>Limitación de movimiento o crepitaciones en la articulación.</li>
                <li>Sospecha de lesiones deportivas o degenerativas.</li>
                <li>Control de artritis reumatoide u otras enfermedades inflamatorias.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> Se aplica gel y se examina la articulación en diferentes planos mientras el paciente realiza movimientos suaves. Se pueden detectar desgarros, inestabilidad y evaluar la respuesta al tratamiento.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-osteomuscular-articular-verasalud-cali.webp'
          alt='Ecografía articular en VeraSalud'
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
