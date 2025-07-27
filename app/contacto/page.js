import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Cont\u00e1ctenos | VeraSalud Cali",
  description: "Solicite su cita m\u00e9dica o haga sus consultas a trav\u00e9s de nuestros canales de contacto. Atenci\u00f3n r\u00e1pida, amable y sin filas en VeraSalud Cali.",
};

export default function ContactoPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/contacto" />
      </Head>
      <main>
        <h1>Cont\u00e1ctenos</h1>
        <p>\u00bfDesea agendar una cita m\u00e9dica, una ecograf\u00eda o teleconsulta? En VeraSalud le brindamos atenci\u00f3n inmediata y sin demoras.</p>
        <ul>
          <li><strong>WhatsApp:</strong> +57 316 000 0000</li>
          <li><strong>Correo electr\u00f3nico:</strong> contacto@verasalud.com</li>
          <li><strong>Direcci\u00f3n:</strong> Calle 00 #00-00, Cali, Colombia</li>
          <li><strong>Horario:</strong> Lunes a viernes, 7:00 a.\u00a0m. – 6:00 p.\u00a0m.</li>
        </ul>
        <p>\u00a1Escr\u00edbanos y reciba la atenci\u00f3n profesional que usted merece!</p>
      </main>
    </>
  );
}
