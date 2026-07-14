import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Account | Nano Signs',
  alternates: {
    canonical: '/account',
  },
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {children}
      </main>
      <Footer />
    </>
  )
}
