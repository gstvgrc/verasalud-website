import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Servicios Médicos en Cali – VeraSalud',
  description:
    'Consulta de medicina interna, ecografías, electrocardiograma, telemedicina y videoconsulta en Cali sin filas ni demoras. Agenda tu cita con nuestros internistas.',
  alternates: { canonical: 'https://verasalud.com/servicios' },
  openGraph: {
    title: 'Servicios Médicos en Cali – VeraSalud',
    description: 'Conoce nuestros servicios de medicina interna, ecografía, electrocardiograma y telemedicina en Cali.',
    url: 'https://verasalud.com/servicios',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Logotipo de VeraSalud sobre fondo azul',
      },
    ],
    locale: 'es_CO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Médicos en Cali – VeraSalud',
    description: 'Consulta médica, ecografías, electrocardiograma y telemedicina sin demoras.',
    images: [
      {
        url: '/twitter-image',
        alt: 'Logotipo de VeraSalud sobre fondo azul',
      },
    ],
  }
};

export default function ServiciosPage() {
  const services = [
    {
      href: '/servicios/consulta-medica',
      title: 'Consulta de Medicina Interna',
      desc: 'Valoración integral por médicos internistas especialistas en enfermedades crónicas.',
      src: '/equipo-medico.webp',
      alt: 'Consulta de medicina interna en VeraSalud'
    },
    {
      href: '/servicios/ecografias',
      title: 'Ecografías de Alta Resolución',
      desc: 'Ecografías convencionales y Doppler con equipos de última generación.',
      src: '/ecografia-abdominal-verasalud-cali.webp',
      alt: 'Ecografías en VeraSalud Cali'
    },
    {
      href: '/servicios/electrocardiograma',
      title: 'Electrocardiograma Digital',
      desc: 'Detección de arritmias y otros trastornos del ritmo cardíaco sin filas.',
      src: '/electrocardiograma-verasalud-cali.webp',
      alt: 'Electrocardiograma en VeraSalud'
    },
    {
      href: '/servicios/telemedicina',
      title: 'Telemedicina',
      desc: 'Consulta médica desde casa mediante videollamada segura.',
      src: '/telemedicina-verasalud-cali.webp',
      alt: 'Telemedicina en VeraSalud'
    }
  ];

  const itemList = services.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    url: `https://verasalud.com${item.href}`
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Servicios médicos en VeraSalud',
    description:
      'Listado de servicios de medicina interna, ecografías, electrocardiograma y telemedicina en Cali',
    url: 'https://verasalud.com/servicios',
    itemListElement: itemList
  };

  return (
    <main className={`${styles.container} dark-fix`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Servicios Médicos Especializados</h1>
          <p>Conoce nuestros servicios de medicina interna, ecografías, electrocardiograma y telemedicina.</p>
        </div>
      </section>
      <section className={styles.servicesGrid}>
        {services.map(({ href, title, desc, src, alt }, idx) => (
          <article key={href} className={styles.serviceCard}>
            <Link href={href}>
              <Image
                src={src}
                alt={alt}
                width={500}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
                {...(idx === 0 ? { priority: true } : { loading: 'lazy' })}
              />
              <h2>{title}</h2>
              <p>{desc}</p>
            </Link>
          </article>
        ))}
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

