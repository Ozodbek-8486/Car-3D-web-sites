import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Premium Motors - Luxury Car Dealership",
  description: "Experience luxury redefined with our premium collection of the world's finest automobiles.",
    generator: 'next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
