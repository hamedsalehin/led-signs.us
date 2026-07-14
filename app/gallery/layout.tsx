import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Portfolio Gallery | Nano Signs',
  description: 'Explore our vast portfolio of previous custom LED displays and neon sign installations.',
  alternates: {
    canonical: '/gallery',
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
