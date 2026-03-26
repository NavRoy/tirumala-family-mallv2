'use client'

import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/store'

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQty,
    totalItems,
    totalPrice
  } = useCartStore()

  return (
    <>
      {/* 🔥 BACKDROP */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/40 z-[150] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* 🔥 DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[160]
        flex flex-col shadow-2xl
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="text-sm font-semibold tracking-wide">Your Cart</h2>

            {totalItems() > 0 && (
              <span className="w-5 h-5 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
                {totalItems()}
              </span>
            )}
          </div>

          <button onClick={closeCart} className="p-1.5 hover:bg-gray-50 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto py-4 px-5 space-y-4">

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <ShoppingBag size={40} className="text-gray-200" />
              <p className="text-sm text-gray-400">Your cart is empty</p>
            </div>
          ) : (
            items.map(item => (
              <div key={`${item.id}-${item.size}`} className="flex gap-3 py-3 border-b">

                {/* 🔥 IMAGE FIX */}
                <img
                  src={item.image}
                  className="w-16 h-20 object-cover rounded"
                />

                <div className="flex-1">

                  <p className="text-sm font-medium line-clamp-2">{item.name}</p>

                  {item.size && (
                    <p className="text-xs text-gray-400">Size: {item.size}</p>
                  )}

                  <p className="text-sm font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center justify-between mt-2">

                    <div className="flex items-center gap-2 border rounded">
                      <button
                        onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center"
                      >
                        <Minus size={12} />
                      </button>

                      <span className="text-xs">{item.qty}</span>

                      <button
                        onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>

                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="border-t px-5 py-5 space-y-4">

            <div className="flex justify-between">
              <span className="text-sm">Subtotal</span>
              <span className="font-semibold">₹{totalPrice()}</span>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="block text-center py-3 bg-black text-white rounded-full hover:bg-[#CC0000] transition"
            >
              Checkout
            </Link>

            <Link
              href="/cart"
              onClick={closeCart}
              className="block text-center py-3 border rounded-full"
            >
              View Cart
            </Link>

          </div>
        )}
      </div>
    </>
  )
}