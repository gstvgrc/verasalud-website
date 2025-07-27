import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Sobre Nosotros | VeraSalud Cali",
  description: "Conozca a VeraSalud, su centro médico de confianza en Cali. Atención cálida, tecnología diagnóstica y más de 20 años de experiencia en medicina interna y ecografías.",
};

export default function SobreNosotrosPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/sobre-nosotros" />
      </Head>
      <main>
        <h1>Sobre Nosotros</h1>
        <p>En VeraSalud ofrecemos atención médica integral, cálida y oportuna, con énfasis en medicina interna, diagnóstico por imágenes y promoción de la salud.</p>
        <p>Contamos con más de 20 años de experiencia clínica, profesionales egresados de la Universidad del Valle y tecnología de alta resolución para ecografías y electrocardiogramas.</p>
        <p>Nuestra misión es brindar servicios de salud humanizados, sin filas ni demoras, en un entorno profesional y confiable.</p>
        <p>Confíe su salud en manos expertas. VeraSalud, calidad y calidez en cada consulta.</p>
      </main>
    </>
  );
}
