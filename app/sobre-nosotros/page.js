import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Sobre Nosotros | VeraSalud Cali",
  description: "Conozca al equipo médico de VeraSalud. Médicos especialistas con más de 20 años de experiencia en Medicina Interna, Ecografía y atención clínica de alta calidad en Cali.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/sobre-nosotros" />
      </Head>
      <main>
        <h1>Sobre Nosotros</h1>
        <p>En VeraSalud, brindamos atención médica integral con calidad humana. Nuestro equipo está conformado por especialistas en Medicina Interna, Ecografía Diagnóstica y Medicina Preventiva, todos formados en la Universidad del Valle con más de 20 años de experiencia clínica.</p>
        <p>Ofrecemos un enfoque cálido, profesional y sin demoras. Creemos en una medicina centrada en la persona, combinando tecnología diagnóstica de alta precisión con el trato humano que cada paciente merece.</p>
        <p>Confíe en nosotros para cuidar su salud con responsabilidad, empatía y excelencia médica.</p>
      </main>
    </>
  );
}
