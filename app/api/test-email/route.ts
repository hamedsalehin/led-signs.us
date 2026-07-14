import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Same config as quotes/route.ts
const SMTP = {
  host:         process.env.SMTP_HOST         || 'smtp.hostinger.com',
  port:         Number(process.env.SMTP_PORT)  || 465,
  user:         process.env.SMTP_USER         || 'info@led-signs.us',
  pass:         process.env.SMTP_PASS         || '1359hhhH??',
  contactEmail: process.env.CONTACT_EMAIL     || 'citylightsign@gmail.com',
}

export async function GET() {
  const configDisplay = {
    SMTP_HOST: SMTP.host,
    SMTP_PORT: SMTP.port,
    SMTP_USER: SMTP.user,
    SMTP_PASS: SMTP.pass ? `✅ SET (${SMTP.pass.length} chars)` : "❌ MISSING",
    CONTACT_EMAIL: SMTP.contactEmail,
  }

  console.log("[TEST] Config:", configDisplay)

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP.host,
      port: SMTP.port,
      secure: SMTP.port === 465,
      auth: { user: SMTP.user, pass: SMTP.pass },
      tls: { rejectUnauthorized: false },
    })

    await transporter.verify()

    const info = await transporter.sendMail({
      from: `"Nano Signs Test" <${SMTP.user}>`,
      to: SMTP.contactEmail,
      subject: "✅ Test Email from led-signs.us",
      html: `<h2>Email is working!</h2><p>SMTP OK at ${new Date().toISOString()}</p>`,
    })

    return NextResponse.json({
      success: true,
      message: "✅ Email sent successfully!",
      messageId: info.messageId,
      config: configDisplay,
    })
  } catch (err: any) {
    console.error("[TEST] Error:", err)
    return NextResponse.json({
      success: false,
      error: err?.message || "Unknown error",
      code: err?.code,
      config: configDisplay,
    })
  }
}
