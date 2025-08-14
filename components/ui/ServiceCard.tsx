import Link from 'next/link'

export default function ServiceCard({
  title, summary, href
}: { title: string; summary: string; href: string }){
  return (
    <article className="rounded-2xl border border-navy/10 p-4 shadow-elev-1 hover:shadow-elev-2 transition-[transform,box-shadow] hover:-translate-y-0.5 will-change-transform">
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-navy/80">{summary}</p>
      <Link href={href} className="inline-flex mt-3 text-primary font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal">
        Ver estudio →
      </Link>
    </article>
  )
}
