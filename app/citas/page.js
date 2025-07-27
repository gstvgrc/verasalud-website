import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Agende su Cita Médica | VeraSalud Cali",
  description: "Programe fácilmente su consulta, ecografía o electrocardiograma en VeraSalud. Atención rápida, sin filas ni demoras, en Cali.",
};

export default function CitasPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/citas" />
      </Head>
      <main>
        <h1>Agende su Cita Médica</h1>
        <p>En VeraSalud facilitamos su acceso a la salud. Reserve ahora su cita médica con nuestro equipo especializado.</p>
        <h2>Servicios disponibles:</h2>
        <ul>
          <li>Consulta de medicina interna</li>
          <li>Ecografías diagnósticas</li>
          <li>Electrocardiograma</li>
          <li>Teleconsulta</li>
        </ul>
        <h2>Formas de agendar:</h2>
        <p>
          <strong>Teléfono fijo:</strong>
          <a href="tel:+576023942289">(602) 394 2289</a>
        </p>
        <p>
          <strong>WhatsApp:</strong>
          <a href="https://wa.me/573150633005" target="_blank" rel="noopener noreferrer">315 063 3005</a>
        </p>
        <p>
          <strong>Correo electrónico:</strong>
          <a href="mailto:info@verasalud.com">info@verasalud.com</a>
        </p>
        <p><strong>Formulario web:</strong> Disponible pronto</p>
        <p>No espere más. ¡Hoy es su día para cuidar su salud!</p>
      </main>
    </>
  );
}
