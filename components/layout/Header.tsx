'use client'
import BrandLogo from '@/components/brand/BrandLogo'
import Link from 'next/link'
import { motion } from '@/components/fx/MotionPrimitives'

export default function Header(){
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur border-b border-[color:rgba(33,57,111,.12)]">
      <div className="mx-auto max-w-screen-sm h-14 flex items-center justify-between px-4">
        <Link href="/" aria-label="Inicio VeraSalud" className="shrink-0"><BrandLogo className="w-32 h-10"/></Link>
        <nav className="hidden sm:flex gap-4 text-sm font-semibold text-[color:#21396F]">
          <Link className="hover:text-[color:#EE3594]" href="/servicios/consulta-medica">Consulta</Link>
          <Link className="hover:text-[color:#EE3594]" href="/servicios/ecografias">Ecografías</Link>
          <Link className="hover:text-[color:#EE3594]" href="/contacto">Contacto</Link>
        </nav>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.25}} className="sm:hidden text-[color:#EE3594] font-bold">☰</motion.div>
      </div>
    </header>
  )
}
