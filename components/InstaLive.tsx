'use client'

import Link from 'next/link'
import ProductCard, { Product } from './ProductCard'

const PRODUCTS: Product[] = [
  {
    id: 'il1',
    name: '3 Piece Set – Special Edition',
    price: 1049,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=90',
    href: '/products/il1',
    badge: 'Live',
  },
  {
    id: 'il2',
    name: 'Silk Blend Saree',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=90',
    href: '/products/il2',
    badge: 'New',
  },
  {
    id: 'il3',
    name: '2 Piece Coord Set',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=90',
    href: '/products/il3',
  },
  {
    id: 'il4',
    name: 'Anarkali Set – Premium',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=90',
    href: '/products/il4',
    badge: 'Trending',
  },
  {
    id: 'il5',
    name: 'Long Frock Design',
    price: 699,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=90',
    href: '/products/il5',
  },
  {
    id: 'il6',
    name: 'Kurti with Plazo',
    price: 899,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=90',
    href: '/products/il6',
  },
  {
    id: 'il7',
    name: 'Cotton Dress Material',
    price: 549,
    originalPrice: 749,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=90',
    href: '/products/il7',
    badge: 'Popular',
  },
  {
    id: 'il8',
    name: 'Lehenga Choli Set',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=90',
    href: '/products/il8',
  },
]

export default function InstaLive() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
  Live Shopping
</p>

<h2 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px]">
  Insta Live
</h2>

            {/* RED ACCENT */}
            <div className="w-10 h-[2px] bg-[#CC0000] mt-3 rounded-full" />
          </div>

          <Link
            href="/collections/insta-live"
            className="px-5 py-2.5 rounded-full 

bg-gray-50
text-gray-800
text-[12px] font-medium tracking-[0.18em]

border border-gray-200

hover:bg-white
hover:border-[#CC0000]
hover:text-[#CC0000]

shadow-[0_6px_20px_rgba(0,0,0,0.05)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]

transition-all duration-300"
          >
            View All
          </Link>

        </div>

        {/* CLEAN CTA STRIP */}
        <a
          href="https://instagram.com/tirumalafamilymall777"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl border border-gray-200 px-6 py-4 mb-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition"
        >
          <div>
            <p className="text-[13px] font-medium text-gray-900 flex items-center gap-2">
              Watch Live Sessions
              <span className="text-[9px] bg-[#CC0000] text-white px-2 py-0.5 rounded-full tracking-wide animate-pulse">
                LIVE
              </span>
            </p>
            <p className="text-[12px] text-gray-400 mt-1">
              New arrivals showcased daily — @tirumalafamilymall777
            </p>
          </div>

          <span className="text-gray-400 text-lg">→</span>
        </a>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} idx={i} />
          ))}
        </div>

      </div>
    </section>
  )
}