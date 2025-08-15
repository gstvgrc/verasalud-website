'use client'
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

export const fadeInUp: Variants = {
  hidden:{opacity:0,y:14},
  show:{opacity:1,y:0,transition:{duration:.35,ease:[0.22,0.94,0.36,1] as [number,number,number,number]}}
}
export const fadeIn: Variants = {
  hidden:{opacity:0},
  show:{opacity:1,transition:{duration:.3}}
}

export function useParallax(){ const {scrollY} = useScroll(); return {
  y: useTransform(scrollY, [0,400],[0,120]),
  o: useTransform(scrollY, [0,400],[1,.85])
}}

export function PageTransition({ children }: PropsWithChildren){
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.main key={pathname}
        initial={{opacity:0,y:6}}
        animate={{opacity:1,y:0,transition:{duration:.25}}}
        exit={{opacity:0,y:-6,transition:{duration:.18}}}
        className="mx-auto max-w-screen-sm px-4"
      >{children}</motion.main>
    </AnimatePresence>
  )
}
export { motion }
