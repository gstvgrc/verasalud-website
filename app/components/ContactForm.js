'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Mensaje enviado correctamente. Te contactaremos pronto.');
        setFormData({ nombre: '', telefono: '', email: '', mensaje: '' });
      } else {
        setSubmitMessage('Error al enviar el mensaje. Intenta nuevamente.');
      }
    } catch (error) {
      setSubmitMessage('Error de conexión. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form">
      <h2>Agenda tu Consulta</h2>
      <p>Déjanos tus datos y te contactaremos para agendar tu cita médica.</p>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            placeholder="3XX XXX XXXX"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            placeholder="Cuéntanos sobre tu consulta o síntomas (opcional)"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Enviando...' : 'Solicitar Consulta'}
        </button>

        {submitMessage && (
          <div className={`message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
            {submitMessage}
          </div>
        )}
      </form>

      <div className="contact-info">
        <h3>Contacto directo</h3>
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a 
            href="https://wa.me/573150633005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            +57 315 063 3005
          </a>
        </p>
        <p>
          <strong>Teléfono:</strong> +57 (602) 394 2289
        </p>
      </div>

      <style jsx>{`
        .contact-form {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 12px;
        }
        
        .contact-form h2 {
          color: #21396f;
          margin-bottom: 0.5rem;
        }
        
        .form {
          margin-top: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e1e5e9;
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #21396f;
        }
        
        .submit-button {
          width: 100%;
          padding: 14px;
          background: #21396f;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .submit-button:hover:not(:disabled) {
          background: #1a2d5a;
        }
        
        .submit-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        
        .message {
          margin-top: 1rem;
          padding: 12px;
          border-radius: 6px;
          text-align: center;
        }
        
        .message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }
        
        .message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }
        
        .contact-info {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e1e5e9;
        }
        
        .contact-info h3 {
          color: #21396f;
          margin-bottom: 1rem;
        }
        
        .whatsapp-link {
          color: #25d366;
          text-decoration: none;
          font-weight: 600;
        }
        
        .whatsapp-link:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .contact-form {
            margin: 1rem;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
