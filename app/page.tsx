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
      <Hero/>
      <section className="mx-auto max-w-screen-sm px-4 py-8 space-y-8">
        <h2 className="text-2xl font-extrabold text-[color:#21396F]">Servicios</h2>
        <div className="grid grid-cols-1 gap-4">
          <ServiceCard title="Consulta de Medicina Interna" summary="Evaluación integral de adultos, enfoque en metabolismo y enfermedades crónicas." href="/servicios/consulta-medica" />
          <ServiceCard title="Ecografía Doppler" summary="Arterial y venoso. Evaluación hemodinámica." href="/servicios/ecografias/doppler" />
          <ServiceCard title="Obstétrica (tercer nivel)" summary="Evaluación avanzada con enfoque en bienestar fetal." href="/servicios/ecografias/obstetrica/tercer-nivel" />
        </div>
      </section>
      <Testimonials/>
      <MobileActionBar/>
    </>
  )
}
