'use client'
import Button from './Button'
export default function MobileActionBar(){
  return (
    <div aria-label="Acciones rápidas" className="fixed bottom-0 inset-x-0 z-50 border-t border-[color:rgba(33,57,111,.12)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-screen-sm px-4 py-2 grid grid-cols-2 gap-3">
        <Button as="a" href="https://wa.me/57XXXXXXXXXX" aria-label="Agendar por WhatsApp" variant="secondary">WhatsApp</Button>
        <Button as="a" href="tel:+57XXXXXXXXXX" aria-label="Llamar a VeraSalud" variant="primary">Llamar</Button>
      </div>
    </div>
  )
}
