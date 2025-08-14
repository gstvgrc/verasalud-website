export const metadata = {
  title: "Videoconsulta Médica | VeraSalud Cali",
  description: "Agenda tu videoconsulta con un médico internista desde cualquier lugar. Atención segura, sin filas ni desplazamientos.",
  alternates: { canonical: "https://verasalud.com/videoconsulta" },
  openGraph: {
    title: "Videoconsulta Médica | VeraSalud Cali",
    description: "Consulta en línea con nuestros internistas sin filas ni desplazamientos. Atención segura y cómoda desde donde estés.",
    url: "https://verasalud.com/videoconsulta",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Logotipo de VeraSalud sobre fondo azul",
      },
    ],
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Videoconsulta Médica en Cali - VeraSalud",
    description: "Atención médica virtual confiable y segura con nuestros especialistas.",
    images: [
      {
        url: "/twitter-image",
        alt: "Logotipo de VeraSalud sobre fondo azul",
      },
    ],
  },
};

export default function VideoconsultaPage() {
  return (
    <main>
      <section>
        <h1>Videoconsulta con Especialista</h1>

        <p>¿No puedes asistir presencialmente? Con nuestra opción de videoconsulta, puedes recibir atención médica desde la comodidad de tu hogar, oficina o ciudad.</p>

        <h2>¿Cómo funciona?</h2>
        <ul>
          <li>Agendas tu cita llamando o por WhatsApp</li>
          <li>Recibes el enlace seguro para conectarte desde tu celular o computador</li>
          <li>Te atiende un médico internista con más de 20 años de experiencia</li>
          <li>Recibes tu fórmula médica y recomendaciones en el mismo momento</li>
        </ul>

        <h2>Ideal para:</h2>
        <ul>
          <li>Control de enfermedades crónicas</li>
          <li>Interpretación de resultados de exámenes</li>
          <li>Consultas generales o segundas opiniones</li>
        </ul>

        <p>Evita desplazamientos y demoras. Estamos listos para atenderte desde donde estés.</p>

        <p><strong>Agenda tu videoconsulta hoy mismo:</strong></p>
        <ul>
          <li>Teléfono: (602) 394 2289</li>
          <li>WhatsApp: 315 063 3005</li>
          <li>Email: info@verasalud.com</li>
        </ul>
      </section>
    </main>
  );
}
