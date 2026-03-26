'use client'

import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totalItems, totalPrice } = useCartStore()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[150] bg-black/40" onClick={closeCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[160] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gray-700" />
            <h2 className="text-sm font-semibold text-gray-900 tracking-wide">Your Cart</h2>
            {totalItems() > 0 && (
              <span className="w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center">{totalItems()}</span>
            )}
          </div>
          <button onClick={closeCart} className="p-1.5 hover:bg-gray-50 rounded-full transition-colors">
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <ShoppingBag size={40} className="text-gray-200" />
              <p className="text-sm text-gray-400">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="text-xs tracking-[0.15em] uppercase text-gray-500 border-b border-gray-300 hover:text-black hover:border-black pb-0.5 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 py-3 border-b border-gray-50">
                {/* Image placeholder */}
                <div className="w-16 h-20 bg-gray-100 rounded flex items-center justify-center shrink-0">
                  <span className="text-2xl opacity-30">👗</span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{item.name}</p>
                  {item.size && <p className="text-xs text-gray-400 mt-0.5">Size: {item.size}</p>}
                  <p className="text-sm font-semibold text-gray-900 mt-1.5">₹{item.price.toLocaleString()}</p>

                  <div className="flex items-center justify-between mt-2">
                    {/* Qty controls */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded w-fit">
                      <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-sm">
                        <Minus size={11} />
                      </button>
                      <span className="text-xs font-medium w-5 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-sm">
                        <Plus size={11} />
                      </button>
                    </div>

                    <button onClick={() => removeItem(item.id, item.size)} className="text-gray-300 hover:text-red-400 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-base font-semibold text-gray-900">₹{totalPrice().toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 text-center">Shipping calculated at checkout</p>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full text-center py-3.5 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors rounded"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center py-3 border border-gray-200 text-sm text-gray-600 hover:border-gray-400 transition-colors rounded"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
