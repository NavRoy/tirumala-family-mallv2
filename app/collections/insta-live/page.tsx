'use client'

import { Instagram, Play } from 'lucide-react'
import ProductCard, { Product } from '@/components/ProductCard'

const IMAGES = [
  'https://images.unsplash.com/photo-1520975922284-7b06c0f3c8e3?w=500',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
  'https://images.unsplash.com/photo-1521334884684-d80222895322?w=500',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500',
]

const PRODUCTS: Product[] = Array.from({ length: 12 }, (_, i) => ({
  id: `il${i}`,
  name: `Insta Live Special ${i + 1}`,
  price: 699 + i * 100,
  originalPrice: i % 2 === 0 ? 699 + i * 100 + 250 : undefined,
  image: IMAGES[i % IMAGES.length],
  href: `/products/insta-${i}`,
  badge: i < 3 ? 'Live' : undefined,
}))

export default function InstaLivePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-xs text-gray-400">Home / <span className="text-gray-700">Insta Live</span></p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-red-50 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-red-600 tracking-wide">LIVE NOW</span>
          </div>
          <h1 className="text-2xl font-light text-gray-900 mb-2">Insta Live Collection</h1>
          <p className="text-sm text-gray-400">Products from our latest Instagram Live sessions</p>
          <div className="w-10 h-px bg-gray-200 mx-auto mt-4" />
        </div>

        {/* Follow CTA */}
        <a
          href="https://instagram.com/tirumalafamilymall777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-xl p-5 mb-10 border border-pink-100 hover:shadow-md transition-shadow group max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
            <Instagram size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Follow us on Instagram</p>
            <p className="text-xs text-gray-500 mt-0.5">@tirumalafamilymall777 — Live sessions every week with exclusive deals</p>
          </div>
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Play size={14} className="text-gray-600 fill-gray-600 ml-0.5" />
          </div>
        </a>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="text-center mt-10">
          <button className="px-10 py-3 border border-gray-200 text-sm tracking-[0.1em] uppercase text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}
