export const metadata = {
  title: "Quiénes Somos | VeraSalud Cali",
  description:
    "Somos un equipo médico con más de 20 años de experiencia en medicina interna, ecografías y electrocardiograma en Cali. Atención cálida y oportuna.",
  alternates: { canonical: "https://verasalud.com/sobre-nosotros" },
  openGraph: {
    title: "Quiénes Somos | VeraSalud Cali",
    description: "Conoce al equipo médico de VeraSalud: expertos en medicina interna, ecografías y electrocardiograma en Cali, con más de 20 años de experiencia.",
    url: "https://verasalud.com/sobre-nosotros",
    siteName: "VeraSalud",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | VeraSalud Cali",
    description: "Conoce al equipo médico de VeraSalud: expertos en medicina interna, ecografías y electrocardiograma en Cali, con más de 20 años de experiencia.",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main>
      <section>
        <h1>Sobre Nosotros</h1>

        <p>En VeraSalud creemos que la atención médica debe ser humana, oportuna y precisa. Somos un centro médico en Cali especializado en medicina interna, ecografías diagnósticas y electrocardiograma.</p>

        <h2>Equipo Médico</h2>
        <p>Contamos con un equipo conformado por:</p>
        <ul>
          <li>Médico internista con más de 20 años de experiencia</li>
          <li>3 radiólogos expertos en ecografías</li>
          <li>Auxiliar de ecografía capacitada</li>
          <li>Recepcionista amable y eficiente</li>
        </ul>

        <h2>Nuestra Misión</h2>
        <p>Brindar atención médica de alta calidad, sin filas ni demoras, con una experiencia cercana y profesional para cada paciente.</p>

        <h2>Ubicación</h2>
        <p>Carrera 77A #3D-05, Barrio Nápoles, Cali – cerca al Hospital Psiquiátrico del Valle.</p>

        <h2>Contáctanos</h2>
        <ul>
          <li>Teléfono: (602) 394 2289</li>
          <li>WhatsApp: 315 063 3005</li>
          <li>Email: info@verasalud.com</li>
        </ul>

        <p><strong>VeraSalud: experiencia clínica y calidez humana en cada consulta.</strong></p>
      </section>
    </main>
  );
}
