import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export const metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://verasalud.com/servicios/consulta-medica' },
}

export default function Page() {
  redirect('/servicios/consulta-medica')
}
