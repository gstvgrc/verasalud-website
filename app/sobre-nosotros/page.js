import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Sobre Nosotros | VeraSalud Cali",
  description: "Conozca el equipo médico de VeraSalud: especialistas en medicina interna, ecografías y diagnóstico clínico con más de 20 años de experiencia.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/sobre-nosotros" />
      </Head>
      <main>
        <h1>Sobre Nosotros</h1>
        <p>En VeraSalud trabajamos con excelencia médica, calidez humana y tecnología diagnóstica de alta precisión.</p>
        <p>Somos un equipo de médicos especialistas liderado por el Dr. Juan García, internista graduado de la Universidad del Valle, con más de 20 años de experiencia en el manejo de enfermedades crónicas.</p>
        <p>Ofrecemos servicios como medicina interna, ecografías diagnósticas, electrocardiogramas, monitoreo metabólico y atención sin filas ni demoras.</p>
        <p>Nuestra misión es brindarle una atención profesional, clara y oportuna para mejorar su calidad de vida.</p>
      </main>
    </>
  );
}
