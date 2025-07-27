'use client'

import styles from '../Home.module.css'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado. Nos contactaremos contigo pronto.');
  }

  return (
    <div className={styles.contactForm}>
      <h3>Agenda tu Cita Médica</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo</label>
        <input id="name" type="text" placeholder="Nombre completo" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" required />

        <label htmlFor="phone">Teléfono</label>
        <input id="phone" type="tel" placeholder="Teléfono" required />

        <label htmlFor="service">Servicio</label>
        <select id="service" required>
          <option value="">Selecciona el servicio</option>
          <option value="medicina-interna">Medicina Interna</option>
          <option value="electrocardiograma">Electrocardiograma</option>
          <option value="ecografias">Ecografías</option>
        </select>

        <label htmlFor="message">Describe tu consulta médica</label>
        <textarea id="message" placeholder="Describe tu consulta médica" rows="4" required></textarea>

        <button type="submit" className={styles.btnPrimary}>Solicitar Cita</button>
      </form>
    </div>
  )
}
