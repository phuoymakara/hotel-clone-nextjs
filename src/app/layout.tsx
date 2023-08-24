//import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../styles/main.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hotel App',
  description: 'Power by Mark bee',
  icons:[
    {
      rel: "icon",
      sizes: '16x16',
      type:"image/png",
      url : "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} h-[110vh]`}>{children}</body>
    </html>
  )
}
