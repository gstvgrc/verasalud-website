import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Contacto | VeraSalud Cali",
  description: "Contáctenos para agendar su cita médica en VeraSalud: especialistas en medicina interna y ecografías en Cali. Atención rápida y sin demoras.",
};

export default function ContactoPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/contacto" />
      </Head>
      <main>
        <h1>Contáctenos</h1>
        <p>¿Desea agendar una consulta médica o tiene preguntas sobre nuestros servicios?</p>
        <p>Estamos disponibles para atenderle de manera rápida y cordial.</p>
        <ul>
          <li>📍 Dirección: Calle 5 # 25-36, Cali, Colombia</li>
          <li>📞 Teléfono: (602) 345 6789</li>
          <li>📱 WhatsApp: +57 315 678 9012</li>
          <li>📧 Correo: contacto@verasalud.com</li>
        </ul>
        <p>Puede escribirnos directamente por WhatsApp o llenar nuestro formulario en la sección de citas.</p>
        <p>¡Estamos para servirle con calidad y calidez humana!</p>
      </main>
    </>
  );
}
