'use client'

import Link from 'next/link'
import { Heart, Eye } from 'lucide-react'
import { useState } from 'react'

/* Pastel placeholder colors per index */
const PLACEHOLDER_COLORS = [
  '#f5ede4','#e8eff7','#f5e4ea','#e4f5ec','#f0e8f5','#f5f0e4','#e4edf5','#f5e9e4',
]

export interface Product {
  id: string; name: string; price: number; originalPrice?: number
  image: string; href: string; badge?: string; sold?: boolean; colorIdx?: number
}

export default function ProductCard({ product, idx = 0 }: { product: Product; idx?: number }) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null
  const placeholderBg = PLACEHOLDER_COLORS[idx % PLACEHOLDER_COLORS.length]

  return (
    <div className="group rounded-lg overflow-hidden bg-white 
shadow-[0_10px_30px_rgba(0,0,0,0.05)]
hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
hover:-translate-y-1 transition-all duration-300">
      {/* Image area */}
      <div
  className="relative overflow-hidden rounded-md mb-3"
  style={{ aspectRatio: '3/4' }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
        {/* Placeholder — replace with next/image */}
        <Link href={product.href} className="block w-full h-full">
  <img
    src={product.image || 'https://via.placeholder.com/400x500'}
    alt={product.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</Link>

        {/* Hover actions */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-2.5 flex items-center justify-center gap-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <Link href={product.href} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 hover:text-gray-900 tracking-wide">
            <Eye size={12} /> Quick View
          </Link>
        </div>

        {/* Top badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.sold && <span className="text-[9.5px] font-semibold tracking-[0.12em] uppercase bg-gray-800 text-white px-2 py-0.5 rounded">Sold Out</span>}
          {!product.sold && product.badge && <span className="text-[9.5px] font-semibold tracking-[0.12em] uppercase bg-white text-gray-800 border border-gray-200 px-2 py-0.5 rounded">{product.badge}</span>}
          {discount && !product.sold && <span className="text-[9.5px] font-semibold bg-red-600 text-white px-2 py-0.5 rounded">-{discount}%</span>}
        </div>

        {/* Wishlist */}
       <button
  onClick={(e) => {
    e.preventDefault()
    e.stopPropagation()
    setWished(!wished)
  }}
          className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${wished ? 'bg-red-50 border border-red-200' : 'bg-white/80 border border-gray-200 opacity-0 group-hover:opacity-100'}`}
          aria-label="Wishlist"
        >
          <Heart size={12} className={wished ? 'fill-red-500 text-red-500' : 'text-gray-500'} />
        </button>
      </div>

      {/* Info */}
      <Link href={product.href} className="block">
       <p className="text-[13px] text-gray-900 font-medium leading-snug line-clamp-2 mt-2 hover:text-gray-900 transition-colors">{product.name}</p>
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && <span className="text-[12px] text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>}
        </div>
      </Link>
    </div>
  )
}
