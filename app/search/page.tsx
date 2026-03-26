'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import ProductCard, { Product } from '@/components/ProductCard'

const SAMPLE: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: `s${i}`,
  name: ['Printed Saree', 'Kurti Set', 'Anarkali Suit', '3 Piece Set', 'Nighty Set', 'Men Shirt', 'Girls Frock', 'Coord Set'][i],
  price: [999, 699, 1099, 1049, 449, 549, 499, 799][i],
  originalPrice: i % 3 === 0 ? [999, 699, 1099, 1049, 449, 549, 499, 799][i] + 200 : undefined,
  image: '', href: `/products/search-${i}`,
  badge: i === 0 ? 'Popular' : undefined,
}))

const SUGGESTIONS = ['Sarees', 'Kurtis', 'Nighties', 'Leggings', 'Men Shirts', 'Kids Frocks', 'Sherwani', 'Palazzo', 'Anarkali']

function SearchContent() {
  const params = useSearchParams()
  const q = params.get('q') ?? ''

  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3">
          <p className="text-[11px] text-gray-400">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-600">Search</span>
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8">
        {q ? (
          <>
            <div className="flex items-baseline gap-3 mb-8">
              <h1 className="text-[22px] font-light text-gray-900">
                Results for <span className="font-medium">"{q}"</span>
              </h1>
              <p className="text-[12px] text-gray-400">{SAMPLE.length} products found</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              {SAMPLE.map((p, i) => <ProductCard key={p.id} product={p} idx={i} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-16 max-w-sm mx-auto">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-5">
              <Search size={22} className="text-gray-300" />
            </div>
            <p className="text-[14px] text-gray-500 mb-7">Search for sarees, kurtis, shirts and more</p>
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-3">Popular searches</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map(s => (
                <Link key={s} href={`/search?q=${s}`}
                  className="text-[12px] text-gray-500 border border-gray-200 px-3.5 py-1.5 rounded-full hover:border-gray-700 hover:text-gray-900 transition-all"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
