/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ── Email config (survives Hostinger deployments) ─────────────────────
  // These are read by app/api/v1/quotes/route.ts at runtime.
  // Only edit the values below — do NOT add NEXT_PUBLIC_ prefix (keeps them server-only).
  env: {
    SMTP_HOST:      process.env.SMTP_HOST      || 'smtp.hostinger.com',
    SMTP_PORT:      process.env.SMTP_PORT      || '465',
    SMTP_USER:      process.env.SMTP_USER      || 'info@led-signs.us',
    SMTP_PASS:      process.env.SMTP_PASS      || '1359hhhH??',
    CONTACT_EMAIL:  process.env.CONTACT_EMAIL  || 'citylightsign@gmail.com',
  },
  // ─────────────────────────────────────────────────────────────────────

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.led-signs.us',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/led2.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ]
  },
}

export default nextConfig
