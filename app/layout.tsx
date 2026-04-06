import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Naekyoung Kwak — Design Lead',
  description:
    'Portfolio of Naekyoung Kwak, VP Lead Experience Designer at J.P. Morgan. 18+ years of experience in UX design, product design, and design leadership at companies including HSBC, Samsung, and Philips.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
