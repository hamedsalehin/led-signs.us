import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout | Nano Signs',
  description: 'Complete your purchase securely.',
  alternates: {
    canonical: '/shop/checkout',
  },
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
