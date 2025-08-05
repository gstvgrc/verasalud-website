import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, phone, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@verasalud.com',
      subject: 'Nuevo mensaje desde VeraSalud.com',
      text: `\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'No ingresado'}\nMensaje: ${message}\n      `
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 })
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405 })
}
