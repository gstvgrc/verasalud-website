import ContactForm from '../components/ContactForm'
import styles from '../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Consulta de Medicina Interna en Cali | VeraSalud',
  description: 'Conoce más sobre nuestro servicio de medicina interna realizado por especialistas de la Universidad del Valle en VeraSalud.',
  alternates: { canonical: 'https://verasalud.com/medicina-interna' },
}

export default function MedicinaInternaPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Consulta de Medicina Interna</h1>
          <h2>Atención integral para adultos</h2>
          <p>En VeraSalud evaluamos de forma completa tu estado de salud, prevenimos enfermedades y diseñamos tratamientos personalizados.</p>
        </div>
      </section>
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
