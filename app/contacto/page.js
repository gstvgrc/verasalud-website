export const metadata = {
  title: "Contáctanos | VeraSalud Cali",
  description: "Agenda tu cita médica en VeraSalud. Atención especializada en medicina interna, ecografías y electrocardiogramas en Cali, sin demoras. Llama o escríbenos.",
};

export default function ContactoPage() {
  return (
    <main>
      <section>
        <h1>Contáctanos</h1>
        <p>En VeraSalud estamos listos para atenderte con calidad, amabilidad y sin filas. Puedes comunicarte con nosotros para agendar tu cita, resolver dudas o pedir información sobre nuestros servicios de medicina interna, ecografías y electrocardiogramas.</p>

        <h2>Datos de contacto</h2>
        <ul>
          <li>Teléfono fijo: (602) 394 2289</li>
          <li>WhatsApp: 315 063 3005</li>
          <li>Correo electrónico: info@verasalud.com</li>
          <li>Dirección: Carrera 77A 3D-05, Barrio Nápoles, Cali, Colombia. Atrás del Hospital Psiquiátrico del Valle.</li>
        </ul>

        <h2>Horario de atención</h2>
        <p>Lunes a viernes: 8:00 a.m. – 5:00 p.m.<br />Sábados: 8:00 a.m. – 12:00 m.</p>

        <h2>Formulario de contacto</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label><br />
          <input type="text" id="nombre" name="nombre" required /><br /><br />

          <label htmlFor="correo">Correo electrónico:</label><br />
          <input type="email" id="correo" name="correo" required /><br /><br />

          <label htmlFor="mensaje">Mensaje:</label><br />
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea><br /><br />

          <button type="submit">Enviar mensaje</button>
        </form>

        <p>Uno de nuestros asesores se pondrá en contacto contigo lo antes posible.</p>
      </section>

      <footer>
        <p>Tel: (602) 394 2289 | WhatsApp: 315 063 3005 | Email: info@verasalud.com</p>
        <p>Ubicación: Carrera 77A 3D-05, Barrio Nápoles, Cali, Colombia</p>
      </footer>
    </main>
  );
}
