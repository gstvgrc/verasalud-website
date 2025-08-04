'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function EcografiasPage() {
  const ecografias = [
    {
      href: '/servicios/ecografias/abdominal',
      src: '/ecografia-abdominal-verasalud-cali.webp',
      alt: 'Ecografía abdominal de alta resolución en VeraSalud Cali',
      title: 'Ecografía Abdominal'
    },
    {
      href: '/servicios/ecografias/hepatica',
      src: '/ecografia-hepatica-verasalud-cali.webp',
      alt: 'Ecografía hepática precisa en VeraSalud Cali',
      title: 'Ecografía Hepática'
    },
    {
      href: '/servicios/ecografias/pelvica',
      src: '/ecografia-pelvica-ginecologica-verasalud-cali.webp',
      alt: 'Ecografía pélvica ginecológica en VeraSalud Cali',
      title: 'Ecografía Pélvica Ginecológica'
    },
    {
      href: '/servicios/ecografias/obstetrica',
      src: '/ecografia-obstetrica-tercer-nivel-verasalud-cali.webp',
      alt: 'Ecografía obstétrica de tercer nivel en VeraSalud Cali',
      title: 'Ecografía Obstétrica'
    },
    {
      href: '/servicios/ecografias/tiroides',
      src: '/ecografia-tiroides-verasalud-cali.webp',
      alt: 'Ecografía de tiroides especializada en VeraSalud Cali',
      title: 'Ecografía de Tiroides'
    },
    {
      href: '/servicios/ecografias/mama',
      src: '/ecografia-mamaria-verasalud-cali.webp',
      alt: 'Ecografía mamaria en VeraSalud Cali',
      title: 'Ecografía de Mama'
    },
    {
      href: '/servicios/ecografias/renal-vias-urinarias',
      src: '/ecografia-renal-vias-urinarias-verasalud-cali.webp',
      alt: 'Ecografía renal y vías urinarias en VeraSalud Cali',
      title: 'Ecografía Renal y Vías Urinarias'
    },
    {
      href: '/servicios/ecografias/prostata',
      src: '/ecografia-prostata-verasalud-cali.webp',
      alt: 'Ecografía prostática en VeraSalud Cali',
      title: 'Ecografía de Próstata'
    },
    {
      href: '/servicios/ecografias/tejidos-blandos',
      src: '/ecografia-tejidos-blandos-verasalud-cali.webp',
      alt: 'Ecografía de tejidos blandos en VeraSalud Cali',
      title: 'Ecografía de Tejidos Blandos'
    },
    {
      href: '/servicios/ecografias/testicular',
      src: '/ecografia-testicular-verasalud-cali.webp',
      alt: 'Ecografía testicular en VeraSalud Cali',
      title: 'Ecografía Testicular'
    },
    {
      href: '/servicios/ecografias/osteomuscular',
      src: '/ecografia-osteomuscular-articular-verasalud-cali.webp',
      alt: 'Ecografía osteomuscular y articular en VeraSalud Cali',
      title: 'Ecografía Osteomuscular'
    },
    {
      href: '/servicios/ecografias/doppler/arterial',
      src: '/ecografia-doppler-arterial-verasalud-cali.webp',
      alt: 'Ecografía Doppler arterial en VeraSalud Cali',
      title: 'Ecografía Doppler Arterial'
    },
    {
      href: '/servicios/ecografias/doppler/venoso',
      src: '/ecografia-doppler-venoso-verasalud-cali.webp',
      alt: 'Ecografía Doppler venoso en VeraSalud Cali',
      title: 'Ecografía Doppler Venoso'
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {ecografias.map(({ href, src, alt, title }) => (
        <Link key={href} href={href} className="group rounded-xl shadow hover:shadow-lg transition-all">
          <div className="relative w-full h-48 sm:h-56 lg:h-64">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-xl"
              priority={title === 'Ecografía Abdominal'}
            />
          </div>
          <h2 className="text-center text-lg font-semibold p-4">{title}</h2>
        </Link>
      ))}
    </section>
  );
}

