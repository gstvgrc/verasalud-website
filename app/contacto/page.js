import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Contáctenos | VeraSalud Cali",
  description: "Agende su cita médica en VeraSalud. Estamos ubicados en Cali. Comuníquese con nosotros para consultas, ecografías y electrocardiogramas.",
};

export default function ContactoPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/contacto" />
      </Head>
      <main>
        <h1>Contáctenos</h1>
        <p>¿Desea programar una consulta médica o realizarse una ecografía?</p>
        <p>Estamos aquí para atenderlo con calidez y eficiencia.</p>
        <ul>
          <li><strong>Dirección:</strong> Cali, Valle del Cauca, Colombia</li>
          <li><strong>Teléfono:</strong> +57 311 123 4567</li>
          <li><strong>Correo:</strong> contacto@verasalud.com</li>
        </ul>
        <p>Horario de atención: Lunes a sábado de 8:00 a.m. a 6:00 p.m.</p>
        <p>¡Reserve su cita hoy y reciba atención médica confiable y sin demoras!</p>
      </main>
    </>
  );
}
