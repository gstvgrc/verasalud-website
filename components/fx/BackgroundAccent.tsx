'use client'
import { motion, useParallax } from '@/components/fx/MotionPrimitives'

export default function BackgroundAccent(){
  const { y, o } = useParallax([0, 120])
  return (
    <motion.div
      aria-hidden
      style={{ y, opacity: o }}
      className="pointer-events-none fixed inset-0 -z-10 bg-accent"
    />
  )
}
