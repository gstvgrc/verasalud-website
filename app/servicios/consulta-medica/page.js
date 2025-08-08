import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import styles from '../../Home.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Consulta de Medicina Interna en Cali – VeraSalud',
  description:
    'Consulta de medicina interna con especialistas de la Universidad del Valle en VeraSalud. Diagnóstico integral y manejo de enfermedades crónicas sin filas ni demoras en Cali.',
  alternates: { canonical: 'https://verasalud.com/servicios/consulta-medica' },
  openGraph: {
    title: 'Consulta de Medicina Interna en Cali – VeraSalud',
    description: 'Consulta médica especializada con internistas de VeraSalud en Cali.',
    url: 'https://verasalud.com/servicios/consulta-medica',
    images: [
      { url: '/equipo-medico.webp', width: 1200, height: 600, alt: 'Médicos internistas en Cali' }
    ],
    locale: 'es_CO',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta de Medicina Interna en Cali – VeraSalud',
    description: 'Agenda tu consulta con internistas de la Universidad del Valle en Cali.'
  }
};

export default function ConsultaMedicaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Consulta de Medicina Interna',
    description:
      'Consulta médica especializada para diagnóstico y control de enfermedades en adultos.',
    url: 'https://verasalud.com/servicios/consulta-medica'
  };

  return (
    <main className={`${styles.container} dark-fix`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Consulta de Medicina Interna en Cali</h1>
          <p>
            Valoración integral de tu salud por internistas especializados en enfermedades crónicas,
            diagnóstico temprano y tratamiento personalizado.
          </p>
          <figure style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Image
              src="/equipo-medico.webp"
              alt="Médicos internistas de VeraSalud"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              fetchPriority="high"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
              Consulta de Medicina Interna con especialistas en VeraSalud – Cali
            </figcaption>
          </figure>
          <h2>Atención especializada sin demoras</h2>
          <p>
            En VeraSalud ofrecemos diagnóstico y control de diabetes, hipertensión, dislipidemia,
            enfermedades de tiroides y patologías autoinmunes.
          </p>
          <p>
            <strong>Agenda tu consulta para recibir atención personalizada y oportuna.</strong>
          </p>
        </div>
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
  );
}

