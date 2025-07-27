export const metadata = {
  title: "Agendar Cita | VeraSalud Cali",
  description:
    "Agenda tu cita médica en VeraSalud Cali para consultas de medicina interna, electrocardiograma o ecografías. Atención sin filas ni demoras. Contáctanos por WhatsApp o teléfono.",
  keywords: [
    "agendar cita médica",
    "medicina interna Cali",
    "ecografías Cali",
    "electrocardiograma Cali",
    "cita médica WhatsApp"
  ],
  alternates: { canonical: "https://verasalud.com/citas" },
  openGraph: {
    title: "Agendar Cita | VeraSalud Cali",
    description:
      "Agenda tu cita médica en VeraSalud Cali para consultas de medicina interna, electrocardiograma o ecografías.",
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
    title: "Agendar Cita | VeraSalud Cali",
    description:
      "Agenda tu cita médica en VeraSalud Cali para consultas de medicina interna, electrocardiograma o ecografías.",
  },
};

export default function CitasPage() {
  return (
    <main>
      <section>
        <h1>Agenda tu Cita</h1>
        <p>
          En VeraSalud te lo ponemos fácil. Puedes agendar tu cita médica con tan
          solo un mensaje o una llamada. Sin filas, sin trámites complejos, y con
          atención humana.
        </p>

        <h2>Servicios disponibles para agendar</h2>
        <ul>
          <li>Consulta en Medicina Interna</li>
          <li>Electrocardiograma (ECG)</li>
          <li>Ecografías: abdominal, doppler, tiroides, renal, obstétrica y más</li>
        </ul>

        <h2>¿Cómo agendar?</h2>
        <p>
          Escríbenos directamente a nuestro{' '}
          <a href="https://wa.me/573150633005" target="_blank" rel="noopener noreferrer">
            WhatsApp 315 063 3005
          </a>{' '}
          o llama al <a href="tel:+576023942289">(602) 394 2289</a>.
        </p>
        <p>
          Nuestra auxiliar de recepción te brindará las opciones de horarios
          disponibles según tu preferencia.
        </p>

        <h2>Horarios de atención</h2>
        <p>
          Lunes a viernes: 8:00 a.m. a 5:00 p.m.
          <br />
          Sábados: 8:00 a.m. a 12:00 m.
        </p>

        <p>
          También puedes escribirnos al correo{' '}
          <a href="mailto:info@verasalud.com">info@verasalud.com</a> si deseas
          mayor información.
        </p>
      </section>
    </main>
  );
}
