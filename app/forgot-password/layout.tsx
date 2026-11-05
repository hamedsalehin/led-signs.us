import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password | Nano Signs',
  description: 'Reset your Nano Signs account password.',
  alternates: {
    canonical: '/forgot-password',
  },
}

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
