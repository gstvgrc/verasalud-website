import ContactForm from '../components/ContactForm'
import styles from '../Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Consulta de Medicina Interna en Cali | VeraSalud',
  description: 'Conoce más sobre nuestro servicio de medicina interna realizado por especialistas de la Universidad del Valle en VeraSalud.',
  alternates: { canonical: 'https://verasalud.com/medicina-interna' },
}

export default function MedicinaInternaPage() {
  return (
    <main className={`${styles.container} dark-fix`}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Consulta de Medicina Interna</h1>
          <h2>Atención integral para adultos</h2>
          <p>En VeraSalud evaluamos de forma completa tu estado de salud, prevenimos enfermedades y diseñamos tratamientos personalizados.</p>
        </div>
      </section>

      <figure style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Image
          src="/doctor-gustavo-garcia-verasalud.jpg"
          alt="Dr. Gustavo García, médico internista en Cali – especialista en diagnóstico y salud integral en VeraSalud"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 800px"
          placeholder="blur"
          blurDataURL="/doctor-gustavo-garcia-verasalud.jpg"
          priority
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>
          Dr. Gustavo García – Médico Internista con más de 20 años de experiencia en VeraSalud, Cali
        </figcaption>
      </figure>

      <h2>Medicina Interna con experiencia y diagnóstico confiable</h2>
      <p>En VeraSalud, el Dr. Gustavo García lidera la atención médica con un enfoque humano y preciso. Gracias a su experiencia en enfermedades crónicas y agudas, cada paciente recibe orientación integral, sin demoras y con respaldo profesional.</p>

      <p><strong>Agenda tu consulta hoy mismo.</strong></p>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Lo que ofrecemos</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <ul>
                <li>Especialistas titulados de la Universidad del Valle</li>
                <li>Diagnóstico integral y seguimiento continuo</li>
                <li>Trato humano y tecnología moderna</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.container}>
          <ContactForm />
          <p style={{marginTop: '2rem'}}>
            <Link href="/">Volver al inicio</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
