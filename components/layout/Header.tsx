'use client'
import BrandLogo from '@/components/brand/BrandLogo'
import { motion } from '@/components/fx/MotionPrimitives'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-navy/10">
      <div className="mx-auto max-w-screen-sm h-14 flex items-center justify-between px-4">
        <Link href="/" aria-label="Inicio VeraSalud" className="shrink-0">
          <BrandLogo className="w-32 h-10" />
        </Link>
        <nav className="hidden sm:flex gap-4 text-sm font-semibold text-navy">
          <Link className="hover:text-primary" href="/servicios/consulta-medica">Consulta</Link>
          <Link className="hover:text-primary" href="/servicios/ecografias">Ecografías</Link>
          <Link className="hover:text-primary" href="/contacto">Contacto</Link>
        </nav>
        <motion.div
          initial={{ opacity: 0, scale:.95 }} animate={{ opacity: 1, scale:1 }}
          transition={{ duration:.25 }} className="sm:hidden text-primary font-bold"
        >☰</motion.div>
      </div>
    </header>
  )
}
