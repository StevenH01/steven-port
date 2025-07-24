import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message, botField } = await req.json()

  // Honeypot spam protection
  if (botField) {
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  }

  // Basic validation
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), { status: 400 })
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['your@email.com'], // Replace this with your actual email
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    })

    return new Response(JSON.stringify({ success: true, data }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 })
  }
}
