export const metadata = {
  title: "Telemedicina | VeraSalud Cali",
  description: "Consulta médica desde casa con nuestros internistas en VeraSalud. Telemedicina segura, fácil y sin demoras en Cali. Agenda tu cita virtual hoy mismo.",
  alternates: { canonical: "https://verasalud.com/servicios/telemedicina" },
  openGraph: {
    title: "Telemedicina | VeraSalud Cali",
    description: "Consulta médica desde casa con internistas de VeraSalud. Sin filas ni demoras.",
    url: "https://verasalud.com/servicios/telemedicina",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Logotipo de VeraSalud sobre fondo azul",
      }
    ],
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telemedicina en Cali - VeraSalud",
    description: "Atención médica virtual confiable con nuestros internistas.",
    images: [
      {
        url: "/twitter-image",
        alt: "Logotipo de VeraSalud sobre fondo azul",
      },
    ],
  },
};

export default function TelemedicinaPage() {
  return (
    <main>
      <section>
        <h1>Consulta médica por Telemedicina</h1>
        <p>La telemedicina te permite acceder a atención médica desde cualquier lugar, sin necesidad de desplazarte. En VeraSalud contamos con internistas capacitados que te atenderán de forma segura, cálida y profesional.</p>

        <h2>¿Cuándo es útil la telemedicina?</h2>
        <ul>
          <li>Control de enfermedades crónicas (hipertensión, diabetes, dislipidemia)</li>
          <li>Revisión de exámenes y resultados</li>
          <li>Orientación médica para síntomas leves o dudas frecuentes</li>
          <li>Seguimiento de tratamientos</li>
        </ul>

        <h2>¿Cómo funciona?</h2>
        <ol>
          <li>Agenda tu cita llamando al (602) 394 2289 o por WhatsApp al 315 063 3005</li>
          <li>Recibirás un enlace para conectarte por videollamada desde tu celular o computador</li>
          <li>Durante la consulta podrás compartir tus síntomas, dudas y exámenes con el médico</li>
        </ol>

        <h2>Beneficios de la telemedicina</h2>
        <ul>
          <li>Evita traslados y filas</li>
          <li>Ideal para adultos mayores o pacientes con movilidad limitada</li>
          <li>Confidencialidad y calidad médica garantizada</li>
        </ul>

        <h2>Agenda tu consulta virtual</h2>
        <p>📞 (602) 394 2289<br />
        💌 WhatsApp 315 063 3005<br />
        ✉️ info@verasalud.com</p>

        <p>Atendemos de lunes a viernes de 8:00 a.m. a 5:00 p.m. y sábados hasta las 12:00 m.</p>
      </section>
    </main>
  );
}
