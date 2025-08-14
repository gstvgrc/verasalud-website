'use client'
import Button from './Button'
import { useEffect, useState } from 'react'

export default function MobileActionBar(){
  const [visible, setVisible] = useState(true)
  useEffect(()=>{ 
    const onScroll=()=> setVisible(true) 
    window.addEventListener('scroll', onScroll); 
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <div aria-label="Acciones rápidas" className={`fixed bottom-0 inset-x-0 z-50 border-t border-navy/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 ${visible?'':'translate-y-full'} transition-transform`}>
      <div className="mx-auto max-w-screen-sm px-4 py-2 grid grid-cols-2 gap-3">
        <Button as="a" href="https://wa.me/57XXXXXXXXXX?text=Hola%20VeraSalud%2C%20quiero%20agendar%20una%20cita" aria-label="Agendar por WhatsApp" variant="secondary">WhatsApp</Button>
        <Button as="a" href="tel:+57XXXXXXXXXX" aria-label="Llamar a VeraSalud" variant="primary">Llamar</Button>
      </div>
    </div>
  )
}
