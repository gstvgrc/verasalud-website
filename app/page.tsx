import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServiceCard from '@/components/ui/ServiceCard'
import Testimonials from '@/components/sections/Testimonials'
import MobileActionBar from '@/components/ui/MobileActionBar'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Medicina Interna y Ecografías en Cali | VeraSalud',
  description:
    'Centro médico especializado en metabolismo, enfermedades crónicas y ecografías de alta precisión en Cali.',
  alternates: { canonical: 'https://verasalud.com' },
  openGraph: {
    type: 'website',
    url: 'https://verasalud.com',
    title: 'Medicina Interna y Ecografías en Cali | VeraSalud',
    description:
      'Centro médico especializado en metabolismo, enfermedades crónicas y ecografías de alta precisión en Cali.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicina Interna y Ecografías en Cali | VeraSalud',
    description:
      'Centro médico especializado en metabolismo, enfermedades crónicas y ecografías de alta precisión en Cali.',
  },
}

export default function Page(){
  return (
    <>
      <Hero />
      <main className="mx-auto max-w-screen-sm px-4 py-10 space-y-8">
        <section aria-labelledby="servicios">
          <h2 id="servicios" className="text-2xl font-extrabold text-navy">Servicios</h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <ServiceCard title="Consulta de Medicina Interna" summary="Evaluación integral de adultos, enfoque en metabolismo y crónicos." href="/servicios/consulta-medica" />
            <ServiceCard title="Ecografía Doppler" summary="Arterial y venoso. Evaluación hemodinámica de vasos periféricos." href="/servicios/ecografias/doppler" />
            <ServiceCard title="Obstétrica (tercer nivel)" summary="Evaluación avanzada con enfoque en bienestar fetal." href="/servicios/ecografias/obstetrica/tercer-nivel" />
            <ServiceCard title="Tiroides" summary="Valoración anatómica y nódulos tiroideos." href="/servicios/ecografias/tiroides" />
          </div>
        </section>
        <Testimonials />
      </main>
      <MobileActionBar />
    </>
  )
}
