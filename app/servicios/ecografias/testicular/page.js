import Image from 'next/image'
import ContactForm from '../../../components/ContactForm'
import styles from '../../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografía Testicular en Cali | VeraSalud',
  description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
  keywords: ['ecografia testicular cali', 'ultrasonido escrotal', 'ecografia de testiculos'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias/testicular' },
  openGraph: {
    title: 'Ecografía Testicular en Cali | VeraSalud',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
    url: 'https://verasalud.com/servicios/ecografias/testicular',
    images: [
      { url: '/ecografia-testicular-verasalud-cali.webp', width: 1200, height: 630, alt: 'Ecografía testicular en VeraSalud' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografía Testicular en Cali | VeraSalud',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.'
  }
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Ecografía Testicular en Cali',
    description: 'Evaluación de testículos y escroto para diagnosticar dolor, masas y problemas de fertilidad.',
    url: 'https://verasalud.com/servicios/ecografias/testicular',
    image: 'https://verasalud.com/ecografia-testicular-verasalud-cali.webp'
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ecografía Testicular en Cali</h1>
          <p>La ecografía testicular produce imágenes de los testículos, epidídimos y escroto. Es la principal herramienta para evaluar dolor testicular, traumatismos, masas y varicoceles.</p>
          <p><strong>Beneficios clínicos:</strong></p>
          <ul>
                <li>Distingue entre quistes, tumores y procesos inflamatorios.</li>
                <li>Detecta torsión testicular, epididimitis y varicoceles.</li>
                <li>Ayuda en el estudio de infertilidad y localiza testículos no descendidos.</li>
          </ul>
          <p><strong>Indicaciones frecuentes:</strong></p>
          <ul>
                <li>Dolor o hinchazón testicular repentino.</li>
                <li>Presencia de bultos o nódulos en el escroto.</li>
                <li>Traumatismos testiculares o torsión sospechada.</li>
                <li>Evaluación de infertilidad y varicocele.</li>
          </ul>
          <p><strong>¿Cómo se realiza?</strong> El paciente se acuesta y se aplica gel sobre el escroto. Se emplea un transductor de alta frecuencia para visualizar las estructuras y usar Doppler para evaluar el flujo sanguíneo.</p>
          <p><strong>Agenda tu cita hoy mismo en Cali con nuestro equipo médico.</strong></p>
        </div>
        <Image
          src='/ecografia-testicular-verasalud-cali.webp'
          alt='Ecografía testicular en VeraSalud'
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
