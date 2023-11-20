import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans_Thai } from 'next/font/google'
import Gtag from '@/components/Gtag'

const inter = Inter({ subsets: ['latin'] })

const ibm_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ['latin'],
  variable: '--font-ibm_plex_sans_thai',
  display: 'swap',
  weight: "400"
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={`${ibm_plex_sans_thai.variable}`}>
      <body className={`${inter.className}`}>
        <Gtag />
        {children}
      </body>
    </html>
  )
}
