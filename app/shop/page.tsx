'use client'

import { useState, useMemo } from 'react'
import ProductCard from '@/components/ProductCard'

const ALL_PRODUCTS = [
  { id: 'n-0', name: 'Silk Blend Saree', price: 1299, mrp: 1499, category: 'Women', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90' },
  { id: 'n-1', name: 'Embroidered Kurti Set', price: 699, mrp: null, category: 'Women', img: 'https://images.unsplash.com/photo-1583391733956-6c77a90c2c59?w=800&q=90' },
  { id: 'n-4', name: 'Linen Shirt Men', price: 599, mrp: null, category: 'Men', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=90' },
  { id: 'n-5', name: 'Girls Lehenga Set', price: 799, mrp: null, category: 'Kids', img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=90' },
]

const CATEGORIES = ['All', 'Women', 'Men', 'Kids']

export default function ShopPage() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('new')

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS.filter(p => {
      const matchCat = category === 'All' || p.category === category
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })

    if (sort === 'low') list.sort((a, b) => a.price - b.price)
    if (sort === 'high') list.sort((a, b) => b.price - a.price)

    return list
  }, [category, search, sort])

  return (
    <main className="bg-white text-[#111] min-h-screen">

      {/* HERO */}
      <section className="relative py-14 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-8 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-2xl h-[240px] sm:h-[280px] md:h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1520975922284-9c0cddfd2dcd?w=1400&q=100"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/20" />
            <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
          </div>

          {/* TEXT */}
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
              Collection
            </p>

            <h1 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[40px] leading-tight">
              Shop Collection
            </h1>

            <p className="mt-4 text-gray-600 text-[14px] md:text-[15px] font-medium tracking-wide leading-relaxed max-w-[420px]">
              Discover timeless styles curated for every generation with elegance and comfort.
            </p>

            <div className="w-10 h-[2px] bg-[#8b1e1e] mt-5 rounded-full"></div>
          </div>

        </div>
      </section>

      {/* CONTROLS */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-10">

        <div className="flex flex-wrap gap-4 justify-between items-center mb-8">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 text-sm w-full md:w-64 focus:outline-none"
          />

          {/* CATEGORY */}
          <div className="flex gap-3 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-sm border rounded-full transition ${
                  category === cat
                    ? 'bg-black text-white'
                    : 'hover:bg-black hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SORT */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 text-sm"
          >
            <option value="new">Sort</option>
            <option value="low">Price Low → High</option>
            <option value="high">Price High → Low</option>
          </select>

        </div>

        {/* COUNT */}
        <p className="text-gray-400 text-sm mb-6">
          Showing {filtered.length} products
        </p>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No products found
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                idx={i}
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                originalPrice: product.mrp || undefined,
                  image: product.img,
                  href: `/product/${product.id}`,
                }}
              />
            ))}
          </div>
        )}

      </div>

    </main>
  )
}