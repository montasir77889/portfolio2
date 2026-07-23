import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["montasir77889@gmail.com"], // Replace with your email
      replyTo: email,
      subject: "New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Sender:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}