import Button from '@/components/ui/Button'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#EE3594_0%,#3FC1D1_100%)]" aria-hidden />
      <div className="mx-auto max-w-screen-sm px-4 py-16 sm:py-20 text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow">Medicina Interna & Ecografías en Cali</h1>
        <p className="mt-3 text-base sm:text-lg/7 opacity-95 drop-shadow">
          Metabolismo y enfermedades crónicas en adultos. Ecografía Doppler, Obstétrica (tercer nivel) y más.
        </p>
        <div className="mt-6 flex gap-3">
          <Button as="a" href="https://wa.me/57XXXXXXXXXX" className="bg-white text-navy">Agendar cita</Button>
          <Button as="a" href="/servicios/consulta-medica" variant="outline" className="bg-white/10 text-white border-white/40">Ver servicios</Button>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-white/90">
          <li className="bg-white/10 rounded-xl px-3 py-2">✔ Atención personalizada</li>
          <li className="bg-white/10 rounded-xl px-3 py-2">✔ Ecografías de alta precisión</li>
          <li className="bg-white/10 rounded-xl px-3 py-2">✔ Agenda rápida por WhatsApp</li>
          <li className="bg-white/10 rounded-xl px-3 py-2">✔ Ubicación central en Cali</li>
        </ul>
      </div>
    </section>
  )
}
