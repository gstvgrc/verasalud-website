'use client'

import { useState } from 'react'
import styles from '../Home.module.css'

export default function ContactForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className={styles.contactForm}>
      <h3>Agenda tu Cita Médica</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo</label>
        <input id="name" name="name" type="text" placeholder="Nombre completo" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" required />

        <label htmlFor="phone">Teléfono</label>
        <input id="phone" name="phone" type="tel" placeholder="Teléfono" required />

        <label htmlFor="service">Servicio</label>
        <select id="service" name="service" required>
          <option value="">Selecciona el servicio</option>
          <option value="medicina-interna">Medicina Interna</option>
          <option value="electrocardiograma">Electrocardiograma</option>
          <option value="ecografias">Ecografías</option>
        </select>

        <label htmlFor="message">Describe tu consulta médica</label>
        <textarea id="message" name="message" placeholder="Describe tu consulta médica" rows="4" required></textarea>

        <button type="submit" className={styles.btnPrimary}>Solicitar Cita</button>
      </form>
      {status === 'success' && (
        <p role="status" className={styles.successMessage}>
          Mensaje enviado correctamente. Te contactaremos pronto.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className={styles.errorMessage}>
          Ocurrió un error al enviar tu mensaje. Inténtalo nuevamente.
        </p>
      )}
    </div>
  )
}
