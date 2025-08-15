'use client'
import Link from 'next/link'
import { motion, fadeInUp } from '@/components/fx/MotionPrimitives'
export default function ServiceCard({title,summary,href}:{title:string;summary:string;href:string}){
  return (
    <motion.article variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once:true }}
      className="rounded-2xl border border-[color:rgba(33,57,111,.12)] p-4 bg-white/90 shadow-[0_2px_8px_rgba(0,0,0,.06)] hover:shadow-[0_6px_18px_rgba(0,0,0,.12)] transition-[transform,box-shadow] hover:-translate-y-0.5">
      <h3 className="text-lg font-bold text-[color:#21396F]">{title}</h3>
      <p className="mt-1 text-sm text-[color:rgba(33,57,111,.8)]">{summary}</p>
      <Link href={href} className="inline-flex mt-3 text-[color:#EE3594] font-semibold underline underline-offset-4">Ver estudio →</Link>
    </motion.article>
  )
}
