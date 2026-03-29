'use client'

import Link from 'next/link'
import { Home, Search, ShoppingBag, Headphones, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      
      <div className="flex justify-around items-center h-[60px] text-[11px]">
        
        {/* Home */}
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <Home size={20} />
          <span>Home</span>
        </Link>

        {/* Search */}
        <button 
          onClick={() => window.dispatchEvent(new Event('openSearch'))}
          className="flex flex-col items-center text-gray-600 hover:text-black transition"
        >
          <Search size={20} />
          <span>Search</span>
        </button>

        {/* Shop */}
        <Link href="/shop" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <ShoppingBag size={20} />
          <span>Shop</span>
        </Link>

        {/* Help */}
        <Link href="/help" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <Headphones size={20} />
          <span>Help</span>
        </Link>

        {/* Account */}
        <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <User size={20} />
          <span>Account</span>
        </Link>

      </div>

    </div>
  )
}