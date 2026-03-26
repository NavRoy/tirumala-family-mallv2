import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import WishlistDrawer from '@/components/WishlistDrawer'
import BottomNav from '@/components/BottomNav'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tirumala Family Mall — Tekkali, Srikakulam',
  description: 'Premium fashion for Women, Men & Kids. Shop Sarees, Kurtis, Nighties, Shirts, Jeans and more. Free shipping above ₹999. Cash on delivery available.',
  keywords: 'sarees, kurtis, dress materials, nighties, men shirts, kids wear, Tekkali, Srikakulam, Andhra Pradesh',
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
    <html lang="en" className={geist.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <BottomNav />
        <Footer />
        <CartDrawer />
        <WishlistDrawer />
      </body>
    </html>
  )
}
