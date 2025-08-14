export const metadata = {
  title: "Blog Médico | VeraSalud Cali",
  description: "Lee artículos sobre salud, prevención y bienestar escritos por especialistas en medicina interna. Aprende a cuidar tu cuerpo y mente con evidencia médica.",
  alternates: { canonical: "https://verasalud.com/blog" },
  openGraph: {
    title: "Blog Médico | VeraSalud Cali",
    description: "Lecturas confiables sobre salud y bienestar respaldadas por la ciencia.",
    url: "https://verasalud.com/blog",
    siteName: "VeraSalud",
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
    title: "Blog Médico | VeraSalud Cali",
    description: "Consejos y novedades médicas explicadas de manera accesible.",
    images: [
      {
        url: "/twitter-image",
        alt: "Logotipo de VeraSalud sobre fondo azul",
      },
    ],
  },
}

export default function BlogPage() {
  return (
    <main>
      <section>
        <h1>Blog de Salud VeraSalud</h1>

        <p>Bienvenido a nuestro espacio informativo. Aquí compartimos contenidos médicos confiables y actualizados, redactados por nuestro equipo de especialistas.</p>

        <p>Encontrarás consejos de prevención, explicaciones sencillas sobre enfermedades comunes y novedades en tratamientos, todo en un lenguaje accesible y basado en la ciencia.</p>

        <h2>Temas que abordamos</h2>
        <ul>
          <li>Control del colesterol y la presión arterial</li>
          <li>Prevención del infarto y accidentes cerebrovasculares</li>
          <li>Salud digestiva, renal y tiroidea</li>
          <li>Ecografías y diagnósticos oportunos</li>
          <li>Estilos de vida saludables y alimentación</li>
        </ul>

        <p>Pronto publicaremos nuestros primeros artículos. ¡Síguenos en redes sociales para no perderte ninguna entrada!</p>

        {/* Placeholder para futuras entradas de blog dinámicas */}
      </section>
    </main>
  );
}
