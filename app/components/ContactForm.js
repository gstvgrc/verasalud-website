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
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Teléfono" required />
        <select required>
          <option value="">Selecciona el servicio</option>
          <option value="medicina-interna">Medicina Interna</option>
          <option value="electrocardiograma">Electrocardiograma</option>
          <option value="ecografias">Ecografías</option>
        </select>
        <textarea placeholder="Describe tu consulta médica" rows="4" required></textarea>
        <button type="submit" className={styles.btnPrimary}>Solicitar Cita</button>
      </form>
    </div>
  )
}