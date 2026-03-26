'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Share2, ShieldCheck, Truck, RefreshCw, ChevronDown, Star } from 'lucide-react'
import ProductCard, { Product } from '@/components/ProductCard'

const PLACEHOLDER_COLORS = ['#f5ede4', '#f0ecf5', '#edf5ee', '#f5edf0']

const RELATED: Product[] = [
  { id: 'r1', name: 'Georgette Printed Saree', price: 1099, originalPrice: 1399, image: '', href: '/products/r1', badge: 'Popular' },
  { id: 'r2', name: 'Embroidered Kurti Set', price: 749, image: '', href: '/products/r2' },
  { id: 'r3', name: 'Silk Blend Saree', price: 1499, originalPrice: 1899, image: '', href: '/products/r3', badge: 'New' },
  { id: 'r4', name: 'Cotton Anarkali Set', price: 899, image: '', href: '/products/r4' },
]

const DETAILS = [
  { q: 'Description', a: 'Beautiful handcrafted saree with intricate embroidery. Perfect for festive occasions, weddings, and special events. Comes with matching blouse piece included. The rich fabric drapes elegantly and the vibrant colors add a royal touch.' },
  { q: 'Fabric & Care', a: 'Fabric: Premium Silk Blend · Blouse: Included · Dry clean recommended · Do not bleach · Store in a cool, dry place' },
  { q: 'Shipping & Returns', a: 'Free shipping on orders above ₹999 · Standard delivery 3–7 working days · Easy 7-day return & exchange policy · Cash on Delivery available' },
]

export default function ProductPage() {
  const [size,   setSize]   = useState<string | null>(null)
  const [qty,    setQty]    = useState(1)
  const [wished, setWished] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const [openQ,  setOpenQ]  = useState<string | null>('Description')

  const sizes  = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const images = [0, 1, 2, 3]

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3">
          <p className="text-[11px] text-gray-400 tracking-wide">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href="/collections/women" className="hover:text-gray-700 transition-colors">Women</Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link href="/collections/sarees" className="hover:text-gray-700 transition-colors">Sarees</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-600">Silk Blend Designer Saree</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ── Image Gallery ── */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="hidden sm:flex flex-col gap-2 w-[72px] shrink-0">
              {images.map(i => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`aspect-square rounded-lg overflow-hidden border-[1.5px] transition-all ${imgIdx === i ? 'border-gray-800' : 'border-transparent hover:border-gray-300'}`}
                  style={{ background: PLACEHOLDER_COLORS[i] }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl opacity-20">👗</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1">
              <div
                className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ aspectRatio: '3/4', background: PLACEHOLDER_COLORS[imgIdx] }}
              >
                {/*
                  REPLACE WITH:
                  <img src={images[imgIdx]} alt="Product" className="w-full h-full object-cover" />
                */}
                <span className="text-9xl opacity-10">👗</span>
              </div>
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="flex flex-col">
            {/* Badge + title */}
            <div className="mb-4">
              <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full mb-3">
                In Stock
              </span>
              <h1 className="text-[26px] font-light text-gray-900 leading-tight tracking-wide mb-2">
                Silk Blend Designer Saree
              </h1>
              <p className="text-[12px] text-gray-400 tracking-wider">SKU: TFM-SAR-001</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} className={s <= 4 ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'} />
                ))}
              </div>
              <span className="text-[12px] text-gray-400">4.0 (28 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-100">
              <span className="text-[28px] font-semibold text-gray-900 tracking-tight">₹1,299</span>
              <span className="text-[17px] text-gray-400 line-through font-light">₹1,599</span>
              <span className="text-[12px] font-semibold bg-red-50 text-red-600 border border-red-100 px-2.5 py-0.5 rounded-full">19% OFF</span>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[12px] font-semibold text-gray-700 tracking-[0.08em] uppercase">Select Size</p>
                <button className="text-[11px] text-gray-400 hover:text-gray-700 underline underline-offset-2 transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-11 h-11 text-[13px] font-medium rounded-lg border transition-all duration-150
                      ${size === s
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-200 text-gray-600 hover:border-gray-400 bg-white'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[12px] font-semibold text-gray-700 tracking-[0.08em] uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-gray-200 rounded-lg w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors rounded-l-lg text-lg leading-none"
                >
                  −
                </button>
                <span className="w-10 text-center text-[14px] font-medium text-gray-900">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors rounded-r-lg text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mb-4">
              <button className="flex-1 h-12 bg-gray-900 text-white text-[13px] font-medium tracking-[0.08em] rounded-xl hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
              <button
                onClick={() => setWished(!wished)}
                className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all
                  ${wished ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <Heart size={16} className={wished ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
              </button>
              <button className="w-12 h-12 rounded-xl border border-gray-200 hover:border-gray-400 flex items-center justify-center transition-colors">
                <Share2 size={16} className="text-gray-400" />
              </button>
            </div>

            <button className="w-full h-12 border-2 border-gray-900 text-gray-900 text-[13px] font-medium tracking-[0.08em] rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-200 mb-7">
              Buy Now
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {[
                { Icon: Truck, label: 'Free Shipping', sub: 'Above ₹999' },
                { Icon: RefreshCw, label: '7-Day Returns', sub: 'Easy exchange' },
                { Icon: ShieldCheck, label: '100% Authentic', sub: 'Quality assured' },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 bg-gray-50 rounded-xl p-3 text-center">
                  <Icon size={16} className="text-gray-500" />
                  <p className="text-[11px] font-semibold text-gray-700 leading-tight">{label}</p>
                  <p className="text-[10px] text-gray-400">{sub}</p>
                </div>
              ))}
            </div>

            {/* COD badge */}
            <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-7">
              <span className="text-lg">💳</span>
              <div>
                <p className="text-[12px] font-semibold text-green-700">Cash on Delivery Available</p>
                <p className="text-[11px] text-green-600 opacity-80">Pay when your order arrives</p>
              </div>
            </div>

            {/* Accordion details */}
            <div className="border-t border-gray-100 divide-y divide-gray-100">
              {DETAILS.map(({ q, a }) => (
                <div key={q}>
                  <button
                    onClick={() => setOpenQ(openQ === q ? null : q)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-[13px] font-medium text-gray-800 tracking-wide">{q}</span>
                    <ChevronDown
                      size={14}
                      className={`text-gray-400 transition-transform duration-200 shrink-0 ${openQ === q ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openQ === q && (
                    <p className="pb-4 text-[13px] text-gray-500 leading-relaxed">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-1.5">You may also like</p>
              <h2 className="text-[22px] font-light text-gray-900">Related Products</h2>
            </div>
            <Link href="/collections/sarees"
              className="text-[11px] tracking-[0.18em] uppercase text-gray-400 hover:text-gray-900 border-b border-gray-300 hover:border-gray-700 pb-0.5 transition-all"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
            {RELATED.map((p, i) => <ProductCard key={p.id} product={p} idx={i} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
