'use client'

import Link from 'next/link'
import { Home, Heart, ShoppingBag, Headphones, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">

      <div className="flex justify-around items-center h-[60px] text-[11px]">

        <Link href="/" className="flex flex-col items-center text-[#a85c42]">
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link href="/wishlist" className="flex flex-col items-center text-gray-600">
          <Heart size={20} />
          <span>Wishlist</span>
        </Link>

        <Link href="/shop" className="flex flex-col items-center text-gray-600">
          <ShoppingBag size={20} />
          <span>Shop</span>
        </Link>

        <Link href="/help" className="flex flex-col items-center text-gray-600">
          <Headphones size={20} />
          <span>Help</span>
        </Link>

        <Link href="/account" className="flex flex-col items-center text-gray-600">
          <User size={20} />
          <span>Account</span>
        </Link>

      </div>

    </div>
  )
}