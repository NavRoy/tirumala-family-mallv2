'use client'

import { X, Heart, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useWishlistStore, useCartStore } from '@/store'

export default function WishlistDrawer() {
  const { items, isOpen, closeWishlist, toggle } = useWishlistStore()
  const addToCart = useCartStore(s => s.addItem)
  const openCart = useCartStore(s => s.openCart)

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-[150] bg-black/40" onClick={closeWishlist} />
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[160] flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-gray-700" />
            <h2 className="text-sm font-semibold text-gray-900 tracking-wide">Wishlist</h2>
            {items.length > 0 && (
              <span className="w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center">{items.length}</span>
            )}
          </div>
          <button onClick={closeWishlist} className="p-1.5 hover:bg-gray-50 rounded-full transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <Heart size={40} className="text-gray-200" />
              <p className="text-sm text-gray-400">Your wishlist is empty</p>
              <button
                onClick={closeWishlist}
                className="text-xs tracking-[0.15em] uppercase text-gray-500 border-b border-gray-300 hover:text-black hover:border-black pb-0.5 transition-colors"
              >
                Discover Products
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 py-3 border-b border-gray-50">
                <div className="w-16 h-20 bg-gray-100 rounded flex items-center justify-center shrink-0">
                  <span className="text-2xl opacity-30">👗</span>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={item.href} onClick={closeWishlist} className="text-sm font-medium text-gray-900 hover:text-black line-clamp-2 leading-snug block">{item.name}</Link>
                  <p className="text-sm font-semibold text-gray-900 mt-1.5">₹{item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <button
                      onClick={() => {
                        addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })
                        openCart()
                        closeWishlist()
                      }}
                      className="flex items-center gap-1.5 text-xs text-white bg-black px-3 py-1.5 rounded hover:bg-gray-700 transition-colors"
                    >
                      <ShoppingBag size={11} /> Add to Cart
                    </button>
                    <button onClick={() => toggle(item)} className="text-gray-300 hover:text-red-400 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
