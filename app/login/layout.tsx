import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | Nano Signs',
  description: 'Log in to your Nano Signs account.',
  alternates: {
    canonical: '/login',
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
