// app/servicios/consulta-medica/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import styles from '../../Home.module.css';
import Link from 'next/link';

// Función para generar metadatos dinámicos optimizados para SEO médico
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Consulta de Medicina Interna en Cali – Especialistas VeraSalud';
  const description = 'Consulta de medicina interna con especialistas de la Universidad del Valle en VeraSalud. Diagnóstico integral y manejo de enfermedades crónicas sin filas ni demoras en Cali.';
  const pageUrl = '/servicios/consulta-medica';
  
  return {
    title: title,
    description: description,
    keywords: [
      'medicina interna Cali',
      'internista Cali',
      'consulta médica especializada',
      'diabetes hipertensión',
      'enfermedades crónicas',
      'médicos Universidad del Valle',
      'consulta sin demoras Cali'
    ],
    authors: [{ name: 'VeraSalud' }],
    openGraph: {
      title: title,
      description: description,
      url: `https://verasalud.com${pageUrl}`,
      siteName: 'VeraSalud',
      locale: 'es_CO',
      type: 'article',
      images: [
        {
          url: 'https://verasalud.com/equipo-medico.webp',
          width: 1200,
          height: 800,
          alt: 'Médicos internistas de VeraSalud en Cali'
        },
        {
          url: 'https://verasalud.com/og-medicina-interna.jpg',
          width: 1200,
          height: 630,
          alt: 'Consulta de Medicina Interna VeraSalud'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['https://verasalud.com/og-medicina-interna.jpg'],
      creator: '@verasalud'
    },
    alternates: {
      canonical: `https://verasalud.com${pageUrl}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function ConsultaMedicaPage() {
  // Schema estructurado optimizado para medicina interna
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Consulta de Medicina Interna',
    description: 'Consulta médica especializada para diagnóstico integral y control de enfermedades crónicas en adultos.',
    url: 'https://verasalud.com/servicios/consulta-medica',
    provider: {
      '@type': 'MedicalOrganization',
      name: 'VeraSalud',
      url: 'https://verasalud.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cali',
        addressRegion: 'Valle del Cauca',
        addressCountry: 'CO'
      }
    },
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Diagnóstico de Diabetes'
      },
      {
        '@type': 'MedicalTherapy', 
        name: 'Control de Hipertensión'
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Manejo de Dislipidemia'
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Tratamiento de Enfermedades de Tiroides'
      }
    ]
  };

  return (
    <main className={`${styles.container} dark-fix`}>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
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
              alt="Médicos internistas de VeraSalud especializados en medicina interna"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              fetchPriority="high"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <figcaption style={{ 
              textAlign: 'center', 
              fontSize: '0.9rem', 
              color: '#555', 
              marginTop: '0.5rem' 
            }}>
              Equipo de internistas especializados de VeraSalud - Consulta de Medicina Interna en Cali
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

