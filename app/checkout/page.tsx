'use client'


import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useCartStore } from '@/store'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore()
  const router = useRouter()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'cod'
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // ✅ FIX TYPE ERROR
 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      setError('Please fill all details')
      return
    }

    if (items.length === 0) {
      setError('Your cart is empty')
      return
    }

    setError('')
    setLoading(true)

    // 👉 fake delay (simulate order)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      

      setTimeout(() => {
        router.push('/')
      }, 2000)
    }, 1200)
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen pb-20">

      <div className="max-w-[1200px] mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">

        {/* 🔥 LEFT: FORM */}
        <div>

          <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">
            Secure Checkout
          </p>

          <h2 className="heading-serif italic text-[32px] mb-8">
            Shipping Details
          </h2>

          <div className="space-y-5">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-lg bg-white 
              focus:outline-none focus:border-black transition"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-lg bg-white 
              focus:outline-none focus:border-black transition"
            />

            <textarea
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
              className="w-full border border-gray-200 p-3 rounded-lg bg-white 
              focus:outline-none focus:border-black transition"
            />

            {/* PAYMENT */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                Payment Method
              </p>

              <select
                name="payment"
                onChange={handleChange}
                className="w-full border border-gray-200 p-3 rounded-lg bg-white"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Card</option>
              </select>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-[13px]">{error}</p>
            )}

            {/* SUCCESS */}
            {success && (
              <p className="text-green-600 text-[13px]">
                Order placed successfully 🎉 Redirecting...
              </p>
            )}

          </div>

        </div>

        {/* 🔥 RIGHT: SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] h-fit">

          <h3 className="heading-serif text-[20px] mb-6">
            Order Summary
          </h3>

          <div className="space-y-5 max-h-[300px] overflow-y-auto pr-2">

            {items.length === 0 ? (
              <p className="text-gray-400 text-sm">
                Your cart is empty
              </p>
            ) : (
              items.map(item => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex justify-between items-start text-[14px]"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-[12px] text-gray-400">
                      {item.size && `Size: ${item.size}`} × {item.qty}
                    </p>
                  </div>

                  <span className="font-semibold">
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))
            )}

          </div>

          <div className="border-t my-6"></div>

          <div className="flex justify-between text-[16px] mb-2">
            <span>Subtotal</span>
            <span>₹{totalPrice()}</span>
          </div>

          <div className="flex justify-between font-semibold text-[18px]">
            <span>Total</span>
            <span>₹{totalPrice()}</span>
          </div>

          {/* CTA */}
          <button
            onClick={handleOrder}
            disabled={loading}
            className="w-full mt-6 py-4 bg-black text-white rounded-full text-[12px] tracking-[0.25em] uppercase
            shadow-[0_10px_25px_rgba(0,0,0,0.2)]
            hover:bg-[#CC0000] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]
            active:scale-95 transition-all duration-300"
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>

        </div>

      </div>

    </div>
  )
}