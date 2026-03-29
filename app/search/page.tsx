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

      {/* HEADER */}
      <div className="bg-[#fafafa] border-b">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 text-center">

          <p className="text-[10px] tracking-[0.4em] uppercase text-[#CC0000] mb-3">
            Search
          </p>
<div className="w-10 h-[2px] bg-[#CC0000] mx-auto mt-4"></div>
          <h1 className="heading-serif text-4xl md:text-5xl italic leading-tight tracking-wide">
            {q ? `Results for "${q}"` : 'Search Products'}
          </h1>

          <p className="text-gray-500 text-sm mt-3">
            {q
              ? `${SAMPLE.length} products found`
              : 'Find sarees, kurtis, shirts and more'}
          </p>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 md:py-16">

        {q ? (
          <>
            {/* RESULT COUNT */}
          <p className="text-[13px] text-gray-500 mb-8">
  Showing <span className="text-black font-medium">{SAMPLE.length}</span> results
</p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {SAMPLE.map((p, i) => (
                <ProductCard key={p.id} product={p} idx={i} />
              ))}
            </div>
          </>
        ) : (

          <div className="text-center py-20 max-w-md mx-auto">

            <div className="w-16 h-16 rounded-full bg-[#fafafa] shadow-sm flex items-center justify-center mx-auto mb-5">
              <Search size={22} className="text-gray-400" />
            </div>

            <p className="text-sm text-gray-500 mb-8">
              Start searching for products
            </p>

            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-4">
              Popular Searches
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <Link
                  key={s}
                  href={`/search?q=${s}`}
                  className="text-[12px] text-gray-600 border border-gray-200 px-5 py-2 rounded-full hover:border-black hover:text-black hover:scale-[1.03] transition-all"
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
