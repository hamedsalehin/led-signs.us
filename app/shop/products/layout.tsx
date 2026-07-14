import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Premium LED Displays | Nano Signs',
  description: 'Purchase commercial-grade high performance LED displays directly from Nano Signs.',
  alternates: {
    canonical: '/shop/products',
  },
}

export default function ShopProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
