import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Naekyoung Kwak - Design Lead',
  description:
    'Portfolio of Naekyoung Kwak, VP Lead Experience Designer at J.P. Morgan. 18+ years of experience in UX design, product design, and design leadership at companies including HSBC, Samsung, and Philips.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
