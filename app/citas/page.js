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
        <p><strong>Teléfono:</strong> +57 311 123 4567</p>
        <p><strong>WhatsApp:</strong> +57 311 123 4567</p>
        <p><strong>Correo:</strong> citas@verasalud.com</p>
        <p><strong>Formulario web:</strong> Disponible pronto</p>
        <p>No espere más. ¡Hoy es su día para cuidar su salud!</p>
      </main>
    </>
  );
}
