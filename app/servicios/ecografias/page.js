import Image from 'next/image'
import ContactForm from '../../components/ContactForm'
import styles from '../../Home.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ecografías en Cali | Ultrasonido y Doppler | VeraSalud',
  description:
    'Ecografías de alta resolución en Cali con radiólogos expertos. Sin filas, resultados precisos y atención profesional. Agenda tu estudio.',
  keywords: ['ecografias cali', 'ecografia doppler', 'ecografia abdominal', 'ultrasonido en cali'],
  alternates: { canonical: 'https://verasalud.com/servicios/ecografias' },
  openGraph: {
    title: 'Ecografías en Cali | VeraSalud',
    description: 'Ultrasonido convencional y Doppler en Cali para diagnósticos precisos.',
    url: 'https://verasalud.com/servicios/ecografias',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ecografías en VeraSalud Cali' }
    ],
    locale: 'es_CO',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecografías de Alta Resolución en Cali',
    description: 'Solicita tu ecografía con especialistas en VeraSalud.'
  }
}

export default function EcografiasPage() {
  const ecografias = [
    {
      href: '/servicios/ecografias/abdominal',
      src: '/ecografia-abdominal-verasalud-cali.webp',
      alt: 'Ecografía abdominal de alta resolución en VeraSalud Cali',
      title: 'Ecografía Abdominal',
      desc: 'Evaluación hepática, vesicular y renal para diagnóstico oportuno.'
    },
    {
      href: '/servicios/ecografias/hepatica',
      src: '/ecografia-hepatica-verasalud-cali.webp',
      alt: 'Ecografía hepática precisa en VeraSalud Cali',
      title: 'Ecografía Hepática',
      desc: 'Detección de hígado graso, hepatitis y enfermedades biliares.'
    },
    {
      href: '/servicios/ecografias/pelvica',
      src: '/ecografia-pelvica-ginecologica-verasalud-cali.webp',
      alt: 'Ecografía pélvica ginecológica en VeraSalud Cali',
      title: 'Ecografía Pélvica Ginecológica',
      desc: 'Estudio de útero y ovarios para controlar quistes, miomas o dolor pélvico.'
    },
    {
      href: '/servicios/ecografias/obstetrica',
      src: '/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp',
      alt: 'Ecografía obstétrica en VeraSalud Cali',
      title: 'Ecografía Obstétrica',
      desc: 'Monitoreo fetal avanzado durante el embarazo.'
    },
    {
      href: '/servicios/ecografias/tiroides',
      src: '/ecografia-tiroides-verasalud-cali.webp',
      alt: 'Ecografía de tiroides especializada en VeraSalud Cali',
      title: 'Ecografía de Tiroides',
      desc: 'Valoración de nódulos, bocio y función tiroidea con alta resolución.'
    },
    {
      href: '/servicios/ecografias/mama',
      src: '/ecografia-mamaria-verasalud-cali.webp',
      alt: 'Ecografía mamaria en VeraSalud Cali',
      title: 'Ecografía de Mama',
      desc: 'Examen mamario para detección temprana de quistes o tumores.'
    },
    {
      href: '/servicios/ecografias/renal-vias-urinarias',
      src: '/ecografia-renal-vias-urinarias-verasalud-cali.webp',
      alt: 'Ecografía renal y vías urinarias en VeraSalud Cali',
      title: 'Ecografía Renal y Vías Urinarias',
      desc: 'Examen de riñones y vías urinarias para diagnosticar cálculos o infecciones.'
    },
    {
      href: '/servicios/ecografias/prostata',
      src: '/ecografia-prostata-verasalud-cali.webp',
      alt: 'Ecografía prostática en VeraSalud Cali',
      title: 'Ecografía de Próstata',
      desc: 'Evaluación prostática para medir tamaño y detectar anomalías.'
    },
    {
      href: '/servicios/ecografias/tejidos-blandos',
      src: '/ecografia-tejidos-blandos-verasalud-cali.webp',
      alt: 'Ecografía de tejidos blandos en VeraSalud Cali',
      title: 'Ecografía de Tejidos Blandos',
      desc: 'Visualización de músculos y tejidos superficiales para identificar lesiones o masas.'
    },
    {
      href: '/servicios/ecografias/testicular',
      src: '/ecografia-testicular-verasalud-cali.webp',
      alt: 'Ecografía testicular en VeraSalud Cali',
      title: 'Ecografía Testicular',
      desc: 'Evaluación testicular para detectar lesiones u otras anormalidades.'
    },
    {
      href: '/servicios/ecografias/osteomuscular',
      src: '/ecografia-osteomuscular-articular-verasalud-cali.webp',
      alt: 'Ecografía osteomuscular y articular en VeraSalud Cali',
      title: 'Ecografía Osteomuscular',
      desc: 'Visualización de articulaciones y músculos para diagnosticar lesiones o inflamación.'
    },
    {
      href: '/servicios/ecografias/doppler/arterial',
      src: '/ecografia-doppler-arterial-verasalud-cali.webp',
      alt: 'Ecografía Doppler arterial en VeraSalud Cali',
      title: 'Ecografía Doppler Arterial',
      desc: 'Doppler arterial para evaluar el flujo sanguíneo y detectar obstrucciones.'
    },
    {
      href: '/servicios/ecografias/doppler/venoso',
      src: '/ecografia-doppler-venoso-verasalud-cali.webp',
      alt: 'Ecografía Doppler venoso en VeraSalud Cali',
      title: 'Ecografía Doppler Venoso',
      desc: 'Doppler venoso para identificar trombosis o insuficiencia venosa.'
    }
  ]

  const itemList = ecografias.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.title,
    url: `https://verasalud.com${item.href}`
  }))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ecografías en VeraSalud',
    description: 'Listado de servicios de ecografías convencionales y Doppler en Cali',
    url: 'https://verasalud.com/servicios/ecografias',
    itemListElement: itemList
  }

  return (
    <main className={`${styles.container} dark-fix`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.heroImage}>
        <Image
          src="/equipo-medico.webp"
          alt="Equipo médico de VeraSalud"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroText}>
          <h1>Ecografías en Cali</h1>
          <p>
            Ecografías de alta resolución y estudios Doppler para diagnósticos
            confiables. Nuestros especialistas ofrecen atención personalizada
            para cuidar tu salud.
          </p>
          <p>
            <strong>Agenda tu cita hoy mismo.</strong>
          </p>
        </div>
      </section>
      <section className={styles.ecografiaGrid}>
        {ecografias.map(({ href, src, alt, title, desc }, idx) => (
          <article key={href} className={styles.ecografiaCard}>
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
  )
}

