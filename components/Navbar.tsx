import Link from 'next/link'

export function Navbar() {
  return (
    <nav aria-label="Menú principal">
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/servicios">Servicios</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

