import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: 'Nano Signs | Premium LED Display Solutions',
  description: 'Industry-leading LED display technology and solutions. Outdoor, indoor, creative, rental, and custom neon LED displays for any application.',
  generator: 'Nano Signs Engine',
  keywords: ['Nano Signs', 'LED Display', 'Neon Signs', 'Digital Signage', 'Outdoor LED', 'Indoor LED', 'Rental LED'],
  authors: [{ name: 'Nano Signs Team' }],
  metadataBase: new URL('https://led-signs.us'),
  openGraph: {
    title: 'Nano Signs | Premium LED Display Solutions',
    description: 'Elevate your brand with high-impact LED displays and custom neon signage.',
    siteName: 'Nano Signs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nano Signs Portfolio Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Signs | Premium LED Display Solutions',
    description: 'Elevate your brand with high-impact LED displays and custom neon signage.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/webicon.png',
        sizes: 'any',
      },
      {
        url: '/webicon.png',
        type: 'image/png',
      },
    ],
    apple: '/webicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nano Signs",
  "image": "https://led-signs.us/webicon.png",
  "telephone": "+1 305 967 1005",
  "email": "info@led-signs.us",
  "url": "https://led-signs.us",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4567 Powerline Rd",
    "addressLocality": "Oakland Park",
    "addressRegion": "FL",
    "postalCode": "33309",
    "addressCountry": "US"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Preload hero LCP image — critical for Core Web Vitals */}
        <link
          rel="preload"
          as="image"
          href="/he4.png"
          // @ts-ignore
          fetchPriority="high"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJ30HE8KYQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJ30HE8KYQ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CartProvider>
            {children}
            <Analytics />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
