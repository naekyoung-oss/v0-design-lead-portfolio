import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Naekyoung Kim',
  description:
    'Portfolio of Naekyoung Kim, VP Lead Experience Designer at J.P. Morgan. 18+ years of experience in UX design, product design, and design leadership at companies including HSBC, Samsung, and Philips.',
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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
