import type { Metadata } from 'next'
import { Poppins, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import WishlistDrawer from '@/components/WishlistDrawer'
import BottomNav from '@/components/BottomNav'

/* BODY FONT */
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})


export const metadata: Metadata = {
  title: 'Tirumala Family Mall — Tekkali, Srikakulam',
  description:
    'Premium fashion for Women, Men & Kids. Shop Sarees, Kurtis, Nighties, Shirts, Jeans and more. Free shipping above ₹999. Cash on delivery available.',
  keywords:
    'sarees, kurtis, dress materials, nighties, men shirts, kids wear, Tekkali, Srikakulam, Andhra Pradesh',
  openGraph: {
    title: 'Tirumala Family Mall',
    description: 'Complete fashion destination for the entire family',
    siteName: 'Tirumala Family Mall',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-white text-[#111] antialiased font-sans">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">{children}</main>

        {/* MOBILE NAV */}
        <BottomNav />

        {/* FOOTER */}
        <Footer />

        {/* DRAWERS */}
        <CartDrawer />
        <WishlistDrawer />

      </body>
    </html>
  )
}