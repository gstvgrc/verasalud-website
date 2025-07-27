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
          <li>
            <strong>Dirección:</strong> Carrera 77A #3D-05, Barrio Nápoles. Atrás
            del Hospital Psiquiátrico del Valle. Cali, Colombia.
          </li>
          <li>
            <strong>Teléfono fijo:</strong>
            <a href="tel:+576023942289">(602) 394 2289</a>
          </li>
          <li>
            <strong>WhatsApp:</strong>
            <a href="https://wa.me/573150633005" target="_blank" rel="noopener noreferrer">315 063 3005</a>
          </li>
          <li>
            <strong>Correo electrónico:</strong>
            <a href="mailto:info@verasalud.com">info@verasalud.com</a>
          </li>
        </ul>
        <p>Horario de atención: Lunes a sábado de 8:00 a.m. a 6:00 p.m.</p>
        <p>¡Reserve su cita hoy y reciba atención médica confiable y sin demoras!</p>
      </main>
    </>
  );
}
