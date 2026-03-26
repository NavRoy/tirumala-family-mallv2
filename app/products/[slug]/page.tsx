'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Share2, ShieldCheck, Truck, RefreshCw, ChevronDown, Star } from 'lucide-react'
import ProductCard, { Product } from '@/components/ProductCard'
import { useRouter } from 'next/navigation'
import { useCartStore, useWishlistStore } from '@/store'

/* 🔥 IMAGES */
const IMAGES = [
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80',
  'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
  'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
]

/* 🔥 RELATED */
const RELATED: Product[] = [
  { id: 'r1', name: 'Georgette Printed Saree', price: 1099, originalPrice: 1399, image: IMAGES[1], href: '/products/r1', badge: 'Popular' },
  { id: 'r2', name: 'Embroidered Kurti Set', price: 749, image: IMAGES[2], href: '/products/r2' },
  { id: 'r3', name: 'Silk Blend Saree', price: 1499, originalPrice: 1899, image: IMAGES[0], href: '/products/r3', badge: 'New' },
  { id: 'r4', name: 'Cotton Anarkali Set', price: 899, image: IMAGES[3], href: '/products/r4' },
]

const DETAILS = [
  { q: 'Description', a: 'Beautiful handcrafted saree with intricate embroidery. Perfect for festive occasions and weddings.' },
  { q: 'Fabric & Care', a: 'Premium Silk Blend · Dry clean recommended · Store in cool place' },
  { q: 'Shipping & Returns', a: 'Free shipping above ₹999 · 7-day easy returns · COD available' },
]

export default function ProductPage() {
  const router = useRouter()
  const [size, setSize] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [imgIdx, setImgIdx] = useState(0)
  const [openQ, setOpenQ] = useState<string | null>('Description')

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const { addItem, openCart } = useCartStore()
  const { toggle, has } = useWishlistStore()

  /* 🔥 PRODUCT OBJECT (FIXED) */
  const product = {
    id: 'p1',
    name: 'Silk Blend Designer Saree',
    price: 1299,
    image: IMAGES[imgIdx],
    href: '/products/p1',
  }

  return (
    <div className="bg-white min-h-screen">

      {/* BREADCRUMB */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 py-3 text-[11px] text-gray-400">
          Home / Women / Sarees / <span className="text-gray-600">Silk Saree</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* IMAGE SECTION */}
          <div className="flex gap-4">

            <div className="hidden sm:flex flex-col gap-3">
              {IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-[70px] h-[90px] rounded-lg overflow-hidden border ${
                    imgIdx === i ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden bg-[#f5f5f5] 
shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
             <img
  src={IMAGES[imgIdx]}
  className="w-full h-full object-cover hover:scale-110 transition duration-700 ease-out"
/>
            </div>

          </div>

          {/* PRODUCT INFO */}
          <div>

            <h1 className="text-[34px] lg:text-[44px] font-semibold tracking-[0.05em] leading-tight">
              Silk Blend Designer Saree
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="text-[12px] text-gray-400">(28 reviews)</span>
            </div>

            {/* PRICE */}
           <div className="flex items-center gap-4 mt-6 pb-6 border-b border-gray-100">
              <span className="text-[30px] font-semibold">₹1,299</span>
              <span className="line-through text-gray-400">₹1,599</span>
              <span className="text-[#CC0000] text-[12px]">19% OFF</span>
            </div>

            {/* SIZE */}
            <div className="mt-6">
              <p className="text-[12px] uppercase tracking-[0.2em] mb-3">Select Size</p>
              <div className="flex gap-3 flex-wrap">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-12 h-12 rounded-full border transition ${
  size === s
    ? 'bg-black text-white shadow-md'
    : 'border-gray-300 hover:border-black'
}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-6">
              <p className="text-[12px] uppercase tracking-[0.2em] mb-2">Quantity</p>
              <div className="flex items-center border rounded-full w-fit">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4">-</button>
                <span className="px-4">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="px-4">+</button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-3">

              {/* ADD TO CART */}
              <button
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: size || undefined,
                  })
                  openCart()
                }}
                className="flex-1 h-[52px] bg-black text-white rounded-full 
tracking-[0.2em] text-[12px] uppercase
shadow-[0_15px_40px_rgba(0,0,0,0.2)]
hover:bg-[#CC0000] transition-all duration-300"
              >
                Add to Cart
              </button>

              {/* WISHLIST */}
              <button
                onClick={() => toggle(product)}
                className="w-[50px] h-[50px] border rounded-full flex items-center justify-center 
hover:shadow-md transition"
              >
                <Heart
                  className={`transition ${
                    has(product.id)
                      ? 'fill-red-500 text-red-500 scale-110'
                      : 'text-gray-600'
                  }`}
                />
              </button>

              {/* SHARE */}
              <button className="w-[50px] h-[50px] border rounded-full flex items-center justify-center">
                <Share2 />
              </button>

            </div>

            <button className="w-full mt-4 h-[52px] border border-black rounded-full 
tracking-[0.2em] text-[12px] uppercase
hover:bg-black hover:text-white transition-all duration-300">
              Buy Now
            </button>

            {/* TRUST */}
            <div className="grid grid-cols-3 gap-6 mt-10 text-center text-[12px] text-gray-600">
              <div><Truck size={18}/> Free Shipping</div>
              <div><RefreshCw size={18}/> Easy Returns</div>
              <div><ShieldCheck size={18}/> Authentic</div>
            </div>

            {/* ACCORDION */}
            <div className="mt-10 border-t">
              {DETAILS.map(({ q, a }) => (
                <div key={q} className="border-b">
                  <button onClick={() => setOpenQ(openQ === q ? null : q)} className="w-full flex justify-between py-5 text-[14px]">
                    {q}
                    <ChevronDown className={`${openQ === q ? 'rotate-180' : ''}`} />
                  </button>
                  {openQ === q && <p className="pb-4 text-gray-500">{a}</p>}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* RELATED */}
        <div className="mt-16">
          <h2 className="text-[24px] font-semibold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {RELATED.map((p, i) => <ProductCard key={p.id} product={p} idx={i} />)}
          </div>
        </div>

      </div>
    </div>
  )
}