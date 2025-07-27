export const metadata = {
  title: "Agenda tu cita | VeraSalud Cali",
  description:
    "Solicita tu cita médica fácilmente en VeraSalud. Medicina interna, ecografías y electrocardiogramas en Cali sin demoras. Contáctanos por WhatsApp o llena el formulario.",
  alternates: { canonical: "https://verasalud.com/citas" },
  openGraph: {
    title: "Agenda tu cita | VeraSalud Cali",
    description:
      "Solicita tu cita médica fácilmente en VeraSalud. Medicina interna, ecografías y electrocardiogramas en Cali sin demoras.",
    url: "https://verasalud.com/citas",
    siteName: "VeraSalud",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VeraSalud Cali cita médica",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda tu cita | VeraSalud Cali",
    description:
      "Solicita tu cita médica fácilmente en VeraSalud. Medicina interna, ecografías y electrocardiogramas sin filas en Cali.",
  },
};

export default function CitasPage() {
  return (
    <main>
      <section>
        <h1>Agenda tu cita</h1>
        <p>
          En VeraSalud queremos que tu experiencia médica sea rápida, cómoda y sin
          barreras. Agenda tu cita con nuestros especialistas en medicina interna,
          ecografías y electrocardiogramas de forma sencilla:
        </p>

        <h2>Opciones para agendar</h2>
        <ul>
          <li>📞 Llama al <a href="tel:+576023942289">(602) 394 2289</a></li>
          <li>
            💬 Escribe al
            <a href="https://wa.me/573150633005" target="_blank" rel="noopener noreferrer">WhatsApp 315 063 3005</a>
          </li>
          <li>
            ✉️ Envía un correo a
            <a href="mailto:info@verasalud.com">info@verasalud.com</a>
          </li>
          <li>📝 Llena el formulario a continuación</li>
        </ul>

        <h2>Formulario de solicitud</h2>
        <form>
          <label htmlFor="nombre">Nombre completo:</label>
          <br />
          <input type="text" id="nombre" name="nombre" required />
          <br />
          <br />

          <label htmlFor="telefono">Teléfono de contacto:</label>
          <br />
          <input type="tel" id="telefono" name="telefono" required />
          <br />
          <br />

          <label htmlFor="servicio">Servicio que deseas:</label>
          <br />
          <select id="servicio" name="servicio">
            <option value="medicina">Consulta de medicina interna</option>
            <option value="ecografia">Ecografía</option>
            <option value="electro">Electrocardiograma</option>
            <option value="otro">Otro</option>
          </select>
          <br />
          <br />

          <label htmlFor="mensaje">Mensaje adicional:</label>
          <br />
          <textarea id="mensaje" name="mensaje" rows="4"></textarea>
          <br />
          <br />

          <button type="submit">Solicitar cita</button>
        </form>

        <p>Uno de nuestros asesores se pondrá en contacto contigo para confirmar la fecha y hora.</p>

        <h2>Ubicación y horario</h2>
        <p>
          Dirección: Carrera 77A 3D-05, Barrio Nápoles, Cali, Colombia
          <br />
          Atrás del Hospital Psiquiátrico del Valle
        </p>
        <p>
          Horario de atención:
          <br />
          Lunes a viernes: 8:00 a.m. – 5:00 p.m.
          <br />
          Sábados: 8:00 a.m. – 12:00 m.
        </p>
      </section>
    </main>
  );
}
