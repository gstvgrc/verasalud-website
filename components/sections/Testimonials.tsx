'use client'
import { useEffect, useState } from 'react'

const DATA = [
  { q: 'Excelente atención y diagnóstico claro.', a: 'M., 52 años' },
  { q: 'Agenda rápida y ecografía de calidad.', a: 'L., 39 años' },
  { q: 'Me explicó mi tratamiento con paciencia.', a: 'J., 64 años' }
]

export default function Testimonials(){
  const [i,setI]=useState(0)
  useEffect(()=>{
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const id = setInterval(()=>setI(v=>(v+1)%DATA.length), 4000)
    return ()=>clearInterval(id)
  },[])
  const t = DATA[i]
  return (
    <section className="mx-auto max-w-screen-sm px-4 py-10">
      <h2 className="text-2xl font-extrabold text-navy">Testimonios</h2>
      <figure className="mt-4 rounded-2xl border border-navy/10 bg-teal/10 p-5 shadow-elev-1">
        <blockquote className="text-navy/90">&ldquo;{t.q}&rdquo;</blockquote>
        <figcaption className="mt-2 text-sm text-navy/70">— {t.a}</figcaption>
      </figure>
    </section>
  )
}
