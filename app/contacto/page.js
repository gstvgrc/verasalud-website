export const metadata = {
  title: "Contacto | VeraSalud Cali",
  description:
    "Ubícanos en el Barrio Nápoles, Cali. Agenda tu consulta de medicina interna o ecografía sin filas. Escríbenos o llámanos directamente.",
  alternates: { canonical: "https://verasalud.com/contacto" },
  openGraph: {
    title: "Contacto | VeraSalud Cali",
    description: "Contáctanos para agendar tu consulta médica, ecografía o electrocardiograma en VeraSalud Cali. Atención sin demoras y con calidez humana.",
    url: "https://verasalud.com/contacto",
    siteName: "VeraSalud",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Logotipo de VeraSalud sobre fondo azul",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | VeraSalud Cali",
    description: "Contáctanos para agendar tu consulta médica, ecografía o electrocardiograma en VeraSalud Cali. Atención sin demoras y con calidez humana.",
    images: ["/twitter-image"],
  },
};

export default function ContactoPage() {
  return (
    <main>
      <section>
        <h1>Contáctanos</h1>

        <p>En VeraSalud estamos listos para atenderte con profesionalismo, calidez y sin esperas. Puedes comunicarte con nosotros por los siguientes medios:</p>

        <h2>Datos de contacto</h2>
        <ul>
          <li>📞 Teléfono: (602) 394 2289</li>
          <li>💬 WhatsApp: 315 063 3005</li>
          <li>✉️ Correo: info@verasalud.com</li>
          <li>📍 Dirección: Carrera 77A #3D-05, Barrio Nápoles. Cali, Colombia. <br /> Estamos justo cerca al Hospital Psiquiátrico del Valle.</li>
        </ul>

        <h2>Horarios de atención</h2>
        <p>Lunes a viernes: 8:00 a.m. a 5:00 p.m.<br />
        Sábados: 8:00 a.m. a 12:00 m.</p>

        <h2>¿Cómo llegar?</h2>
        <p>Estamos ubicados en el barrio Nápoles, cerca al Hospital Psiquiátrico del Valle. Puedes llegar fácilmente en vehículo particular o en transporte público.</p>

        <h2>Agenda tu cita</h2>
        <p>Contáctanos por WhatsApp o llámanos para agendar tu consulta con medicina interna, ecografía o electrocardiograma.</p>
      </section>
    </main>
  );
}
