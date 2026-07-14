import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// ── SMTP Config (hardcoded so it survives Hostinger deployments) ──────────
const SMTP = {
  host:         process.env.SMTP_HOST         || 'smtp.hostinger.com',
  port:         Number(process.env.SMTP_PORT)  || 465,
  user:         process.env.SMTP_USER         || 'info@led-signs.us',
  pass:         process.env.SMTP_PASS         || '1359hhhH??',
  contactEmail: process.env.CONTACT_EMAIL     || 'citylightsign@gmail.com',
}
// ─────────────────────────────────────────────────────────────────────────

// In-memory store for demo (replace with database)
const quoteRequests: any[] = []

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const isAdmin = authHeader?.includes("admin")

    if (isAdmin) {
      return NextResponse.json({
        quotes: quoteRequests,
        total: quoteRequests.length,
      })
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, productType, quantity, budget } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const quote = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone,
      message,
      productType,
      quantity,
      budget,
      status: "PENDING",
      createdAt: new Date(),
      replies: [],
    }

    quoteRequests.push(quote)

    // ── Send email via SMTP ────────────────────────────────────────────────
    console.log(`[EMAIL] Sending via ${SMTP.host}:${SMTP.port} user=${SMTP.user} to=${SMTP.contactEmail}`)

    try {
      const transporter = nodemailer.createTransport({
        host: SMTP.host,
        port: SMTP.port,
        secure: SMTP.port === 465,
        auth: { user: SMTP.user, pass: SMTP.pass },
        tls: { rejectUnauthorized: false },
      })

      const info = await transporter.sendMail({
        from: `"Nano Signs" <${SMTP.user}>`,
        to: SMTP.contactEmail,
        replyTo: email,
        subject: `New Quote Request from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#1a1a2e;color:#fff;padding:20px;border-radius:8px 8px 0 0;">
              <h2 style="margin:0;color:#f0a500;">📋 New Quote Request</h2>
            </div>
            <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;border-radius:0 0 8px 8px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;font-weight:bold;width:140px;color:#555;">Name:</td><td>${name}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Company:</td><td>${company || "N/A"}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Phone:</td><td>${phone || "N/A"}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#555;">Product:</td><td>${productType || "N/A"}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#555;vertical-align:top;">Message:</td><td>${message}</td></tr>
              </table>
              <hr style="margin:16px 0;border:none;border-top:1px solid #e0e0e0;"/>
              <p style="margin:0;font-size:12px;color:#999;">Sent from led-signs.us • ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      })
      console.log("[EMAIL] ✅ Sent! MessageId:", info.messageId)
    } catch (emailError: any) {
      console.error("[EMAIL] ❌ Error:", emailError?.message)
    }
    // ───────────────────────────────────────────────────────────────────

    return NextResponse.json({
      message: "Quote request submitted successfully",
      quoteId: quote.id,
    })
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
