'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { SlidersHorizontal, ChevronDown, X, Grid, LayoutGrid } from 'lucide-react'
import ProductCard, { Product } from '@/components/ProductCard'

const LABELS: Record<string, string> = {
  women: 'Women', men: 'Men', kids: 'Kids', sarees: 'Sarees', kurtis: 'Kurtis & Kurtas',
  'dress-materials': 'Dress Materials', '3-piece': '3 Piece Sets', '2-piece': '2 Piece Sets',
  frocks: 'Long Frocks', nightwear: 'Nightwear', leggings: 'Leggings', tops: 'Tops & Midis',
  shirts: 'Shirts', 'men-kurtas': 'Ethnic Kurtas', 'jeans-men': 'Men Jeans', trousers: 'Trousers',
  blazers: 'Blazers', sherwani: 'Sherwani', ramraj: 'Ramraj Collection', 'jeans-women': 'Women Jeans',
  coord: 'Coord Sets', plazo: 'Plazo Pants', innerwear: 'Inner Wear', blouses: 'Blouses',
  'girls-frocks': 'Girls Frocks', 'girls-lehenga': 'Girls Lehenga', 'girls-kurtas': 'Girls Kurta Sets',
  'girls-dresses': 'Girls Dresses', 'boys-kurtas': 'Boys Kurta Sets', 'boys-sherwani': 'Boys Sherwani',
  'boys-tshirts': 'Boys T-Shirts', 'boys-bottoms': 'Boys Pants & Jeans', anarkali: 'Anarkali Sets',
  lehenga: 'Lehenga', 'half-sarees': 'Half Sarees', 'insta-live': 'Insta Live', sale: 'Sale',
  all: 'All Products',
}

const PRICE_RANGES = ['Under ₹500', '₹500 – ₹1,000', '₹1,000 – ₹1,500', 'Above ₹1,500']
const SORT_OPTIONS = ['Newest First', 'Price: Low to High', 'Price: High to Low', 'Best Selling', 'Name A–Z']

const PRODUCTS: Product[] = Array.from({ length: 16 }, (_, i) => ({
  id: `p${i}`,
  name: ['Silk Blend Saree', 'Printed Kurti Set', 'Cotton Anarkali', '3 Piece Coord Set', 'Palazzo Kurti Combo', 'Embroidered Suit', 'Georgette Saree', 'Long Frock Design', 'Nightie Full Length', 'Western Crop Top', 'Lehenga Choli Set', 'Dress Material', 'Nightwear Set', 'Kurti with Belt', 'Straight Fit Kurti', 'Half Saree Set'][i],
  price: [1299, 699, 999, 1049, 849, 1199, 1099, 649, 449, 499, 1499, 549, 399, 779, 599, 1699][i],
  originalPrice: i % 3 === 0 ? [1299, 699, 999, 1049, 849, 1199, 1099, 649, 449, 499, 1499, 549, 399, 779, 599, 1699][i] + 250 : undefined,
  image: '',
  href: `/products/product-${i}`,
  badge: i === 0 ? 'New' : i === 2 ? 'Trending' : i === 5 ? 'Popular' : undefined,
}))

export default function CollectionPage() {
  const params = useParams()
  const slug   = (params?.slug as string) ?? 'all'
  const label  = LABELS[slug] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  const [sort,        setSort]        = useState('Newest First')
  const [prices,      setPrices]      = useState<string[]>([])
  const [mobileFilter, setMobileFilter] = useState(false)
  const [cols,        setCols]        = useState<2 | 3>(2)
  const [openFilter,  setOpenFilter]  = useState<string | null>('price')

  const togglePrice = (r: string) =>
    setPrices(ps => ps.includes(r) ? ps.filter(p => p !== r) : [...ps, r])

  const FilterContent = () => (
    <div className="space-y-0 divide-y divide-gray-100">
      {/* Price */}
      <div>
        <button
          onClick={() => setOpenFilter(openFilter === 'price' ? null : 'price')}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-[12px] font-semibold text-gray-700 tracking-[0.08em] uppercase">Price</span>
          <ChevronDown size={13} className={`text-gray-400 transition-transform ${openFilter === 'price' ? 'rotate-180' : ''}`} />
        </button>
        {openFilter === 'price' && (
          <div className="pb-4 space-y-2.5">
            {PRICE_RANGES.map(r => (
              <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  onClick={() => togglePrice(r)}
                  className={`w-4 h-4 rounded border-[1.5px] flex items-center justify-center transition-all cursor-pointer
                    ${prices.includes(r) ? 'bg-gray-900 border-gray-900' : 'border-gray-300 group-hover:border-gray-500'}`}
                >
                  {prices.includes(r) && <span className="text-white text-[10px] leading-none">✓</span>}
                </div>
                <span className="text-[12.5px] text-gray-600 group-hover:text-gray-900 transition-colors">{r}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div>
        <button
          onClick={() => setOpenFilter(openFilter === 'avail' ? null : 'avail')}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-[12px] font-semibold text-gray-700 tracking-[0.08em] uppercase">Availability</span>
          <ChevronDown size={13} className={`text-gray-400 transition-transform ${openFilter === 'avail' ? 'rotate-180' : ''}`} />
        </button>
        {openFilter === 'avail' && (
          <div className="pb-4 space-y-2.5">
            {['In Stock', 'Out of Stock'].map(r => (
              <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
                <div className="w-4 h-4 rounded border-[1.5px] border-gray-300 group-hover:border-gray-500 transition-colors" />
                <span className="text-[12.5px] text-gray-600 group-hover:text-gray-900 transition-colors">{r}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3">
          <p className="text-[11px] text-gray-400 tracking-wide">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-600">{label}</span>
          </p>
        </div>
      </div>

      {/* Page header */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-6 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[24px] font-light text-gray-900 tracking-wide">{label}</h1>
            <p className="text-[12px] text-gray-400 mt-1">{PRODUCTS.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile filter */}
            <button
              onClick={() => setMobileFilter(true)}
              className="lg:hidden flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-[12.5px] text-gray-600 hover:border-gray-400 transition-colors"
            >
              <SlidersHorizontal size={13} />
              Filter
              {prices.length > 0 && <span className="w-4 h-4 bg-gray-900 text-white text-[9px] rounded-full flex items-center justify-center">{prices.length}</span>}
            </button>

            {/* Grid toggle */}
            <div className="hidden sm:flex gap-1 border border-gray-200 rounded-lg overflow-hidden">
              {([2, 3] as const).map(n => (
                <button key={n} onClick={() => setCols(n)}
                  className={`w-8 h-8 flex items-center justify-center transition-colors
                    ${cols === n ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-50'}`}
                >
                  {n === 2 ? <Grid size={13} /> : <LayoutGrid size={13} />}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none pl-3.5 pr-8 h-9 border border-gray-200 rounded-lg text-[12.5px] text-gray-600 bg-white cursor-pointer outline-none hover:border-gray-400 transition-colors"
              >
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
              <ChevronDown size={11} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Active filters */}
      {prices.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3 flex items-center gap-2 flex-wrap border-b border-gray-50">
          <span className="text-[11px] text-gray-400">Filters:</span>
          {prices.map(p => (
            <button key={p} onClick={() => togglePrice(p)}
              className="flex items-center gap-1.5 text-[11px] bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-600 transition-colors"
            >
              {p} <X size={10} />
            </button>
          ))}
          <button onClick={() => setPrices([])} className="text-[11px] text-red-500 hover:text-red-700 transition-colors ml-1">
            Clear all
          </button>
        </div>
      )}

      {/* Main layout */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-28">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 mb-4">Filter</p>
            <FilterContent />
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className={`grid gap-x-4 gap-y-8 ${cols === 3 ? 'grid-cols-3' : 'grid-cols-2'} lg:grid-cols-${cols === 3 ? '4' : '3'}`}>
            {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} idx={i} />)}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <button className="px-10 py-3 border border-gray-300 text-[12px] tracking-[0.15em] uppercase font-medium text-gray-600 rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilter && (
        <>
          <div className="fixed inset-0 z-[80] bg-black/30" onClick={() => setMobileFilter(false)} />
          <div className="fixed bottom-0 left-0 right-0 z-[90] bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto px-5 pt-5 pb-8" style={{ boxShadow: '0 -8px 40px rgba(0,0,0,0.10)' }}>
            <div className="flex items-center justify-between mb-5">
              <p className="text-[14px] font-semibold text-gray-900">Filter Products</p>
              <button onClick={() => setMobileFilter(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                <X size={16} className="text-gray-500" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilter(false)}
              className="w-full mt-5 py-3.5 bg-gray-900 text-white text-[13px] font-medium rounded-xl hover:bg-gray-800 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  )
}
