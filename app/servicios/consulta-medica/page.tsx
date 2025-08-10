import { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { buildMetadata, getServiceSEO, buildBreadcrumbJSONLD, SITE } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const s = await getServiceSEO('consulta-medica')
  if (s) return buildMetadata(s)
  return {
    title: 'Consulta de Medicina Interna | VeraSalud',
    description:
      'Consulta de medicina interna con especialistas. Diagnóstico integral y manejo de enfermedades crónicas en Cali.',
    alternates: { canonical: `${SITE.baseUrl}/servicios/consulta-medica` },
  }
}

export default function ConsultaMedicaPage() {
  const breadcrumb = buildBreadcrumbJSONLD([
    { name: 'Inicio', item: SITE.baseUrl },
    { name: 'Servicios', item: `${SITE.baseUrl}/servicios` },
    { name: 'Consulta de Medicina Interna' },
  ])
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Consulta de Medicina Interna',
    description:
      'Consulta médica especializada para diagnóstico integral y control de enfermedades crónicas en adultos.',
    url: 'https://verasalud.com/servicios/consulta-medica',
    provider: {
      '@type': 'MedicalOrganization',
      name: 'VeraSalud',
      url: 'https://verasalud.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cali',
        addressRegion: 'Valle del Cauca',
        addressCountry: 'CO',
      },
    },
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Diagnóstico de Diabetes' },
      { '@type': 'MedicalTherapy', name: 'Control de Hipertensión' },
      { '@type': 'MedicalTherapy', name: 'Manejo de Dislipidemia' },
      { '@type': 'MedicalTherapy', name: 'Tratamiento de Enfermedades de Tiroides' },
    ],
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero">
        <div className="heroContent">
          <h1>Consulta de Medicina Interna en Cali</h1>
          <p>
            Valoración integral de tu salud por internistas especializados en enfermedades crónicas,
            diagnóstico temprano y tratamiento personalizado.
          </p>

          <figure style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <Image
              src="/equipo-medico.webp"
              alt="Equipo médico de VeraSalud realizando consulta de medicina interna en Cali"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <figcaption
              style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: '#555',
                marginTop: '0.5rem',
              }}
            >
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

      <section className="contact">
        <div className="container">
          <ContactForm />
          <p style={{ marginTop: '2rem' }}>
            <Link href="/">Volver al inicio</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

