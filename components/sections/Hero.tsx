"use client"
import { motion, fadeInUp, fadeIn } from '@/components/fx/MotionPrimitives'
import Button from '@/components/ui/Button'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#EE3594_0%,#3FC1D1_100%)] opacity-95" aria-hidden />
      <div className="mx-auto max-w-screen-sm px-4 pt-16 pb-10 text-white">
        <motion.h1 variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow">Medicina Interna & Ecografías en Cali</motion.h1>
        <motion.p variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once:true }} className="mt-3 text-base sm:text-lg/7 opacity-95 drop-shadow">
          Metabolismo y enfermedades crónicas en adultos. Ecografía Doppler, Obstétrica (tercer nivel) y más.
        </motion.p>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="mt-6 flex gap-3">
          <Button as="a" href="https://wa.me/57XXXXXXXXXX" className="bg-white text-navy">Agendar cita</Button>
          <Button as="a" href="/servicios/consulta-medica" variant="outline" className="bg-white/10 text-white border-white/40">Ver servicios</Button>
        </motion.div>
      </div>
    </section>
  )
}
