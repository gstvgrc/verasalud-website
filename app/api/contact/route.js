import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, message, service } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gaglozada@gmail.com',
      pass: 'gvex gwum wzrl orkh',
    },
  });

  const mailOptions = {
    from: '"VeraSalud Contacto" <gaglozada@gmail.com>',
    to: 'info@verasalud.com',
    subject: 'Nuevo mensaje desde VeraSalud.com',
    replyTo: email,
    text: `
Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}
Servicio solicitado: ${service}
Mensaje: ${message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Correo enviado correctamente', { status: 200 });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return new Response('Error al enviar el correo', { status: 500 });
  }
}
