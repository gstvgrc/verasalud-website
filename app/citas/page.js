import { Metadata } from "next";
import Head from "next/head";

export const metadata = {
  title: "Agendar Cita | VeraSalud Cali",
  description: "Agende su cita médica en línea en VeraSalud. Atención sin filas, ecografías y medicina interna en Cali. ¡Reserve hoy mismo!",
};

export default function CitasPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://verasalud.com/citas" />
      </Head>
      <main>
        <h1>Agende su Cita</h1>
        <p>En VeraSalud facilitamos su acceso a la atención médica sin demoras. Puede programar su cita de manera sencilla y rápida.</p>
        <h2>Opciones de agenda:</h2>
        <ul>
          <li>Consulta en consultorio de medicina interna</li>
          <li>Electrocardiograma y valoración prequirúrgica</li>
          <li>Ecografías abdominales, hepáticas, de mama, y más</li>
        </ul>
        <p>Contáctenos por WhatsApp o a través del formulario para confirmar su disponibilidad.</p>
        <p>Atención con calidad, calidez y experiencia clínica. ¡Su salud es nuestra prioridad!</p>
      </main>
    </>
  );
}
