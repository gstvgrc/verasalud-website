'use client'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: .35, ease: [0.22,0.94,0.36,1] as [number,number,number,number] } }
}
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: .3 } }
}

// Parallax sutil de fondo enlazado al scroll
export function useParallax(range=[0, 200]){
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, range[1]])
  const o = useTransform(scrollY, [0, 400], [1, .85])
  return { y, o }
}

// Proveedor de transiciones entre páginas (header queda fijo)
export function PageTransition({ children }: PropsWithChildren){
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0, transition: { duration: .25 } }}
        exit={{ opacity: 0, y: -6, transition: { duration: .18 } }}
        className="mx-auto max-w-screen-sm px-4"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export { motion }
