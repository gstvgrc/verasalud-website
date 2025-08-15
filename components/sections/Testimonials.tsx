'use client'
import { motion, fadeInUp } from '@/components/fx/MotionPrimitives'
import { useEffect, useState } from 'react'
const DATA=[{q:'Excelente atención y diagnóstico claro.',a:'M., 52 años'},{q:'Agenda rápida y ecografía de calidad.',a:'L., 39 años'},{q:'Me explicó mi tratamiento con paciencia.',a:'J., 64 años'}]
export default function Testimonials(){
  const [i,setI]=useState(0)
  useEffect(()=>{ const m=window.matchMedia('(prefers-reduced-motion: reduce)'); if(m.matches) return; const id=setInterval(()=>setI(v=>(v+1)%DATA.length),4000); return ()=>clearInterval(id)},[])
  const t=DATA[i]
  return (
    <section className="mx-auto max-w-screen-sm px-4 py-10">
      <motion.h2 variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="text-2xl font-extrabold text-[color:#21396F]">Testimonios</motion.h2>
      <motion.figure variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once:true }} className="mt-4 rounded-2xl border border-[color:rgba(33,57,111,.12)] bg-[color:rgba(63,193,209,.1)] p-5 shadow-[0_2px_8px_rgba(0,0,0,.06)]">
        <blockquote className="text-[color:rgba(33,57,111,.9)]">&ldquo;{t.q}&rdquo;</blockquote>
        <figcaption className="mt-2 text-sm text-[color:rgba(33,57,111,.7)]">— {t.a}</figcaption>
      </motion.figure>
    </section>
  )
}
