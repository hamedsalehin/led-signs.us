import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart | Nano Signs',
  description: 'View your Nano Signs shopping cart.',
  alternates: {
    canonical: '/shop/cart',
  },
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
