'use client'

import { useState } from 'react'
import styles from '../Home.module.css'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className={styles.mobileMenuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        ☰
      </button>
      <nav className={`${styles.mobileNav} ${isOpen ? styles.active : ''}`}>
        <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="#convenios" onClick={() => setIsOpen(false)}>Convenios</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        <a 
          href="https://wa.me/573150633005" 
          className={styles.whatsappBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </nav>
    </>
  )
}
