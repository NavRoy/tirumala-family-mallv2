'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const ALL_PRODUCTS = [
  { id: 'n-0', name: 'Silk Blend Saree', price: 1299, mrp: 1499, category: 'Women', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { id: 'n-1', name: 'Embroidered Kurti Set', price: 699, mrp: null, category: 'Women', img: 'https://images.unsplash.com/photo-1583391733956-6c77a90c2c59?w=600&q=80' },
  { id: 'n-4', name: 'Linen Shirt Men', price: 599, mrp: null, category: 'Men', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80' },
  { id: 'n-5', name: 'Girls Lehenga Set', price: 799, mrp: null, category: 'Kids', img: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80' },
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
      <section className="py-20 bg-[#fafafa] text-center">
        <h1 className="heading-serif text-4xl md:text-5xl italic">
          Shop Collection
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          Style for Every Generation
        </p>
      </section>

      {/* CONTROLS */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10">

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

    </main>
  )
}

function ProductCard({ product }: any) {
  const discount = product.mrp
    ? Math.round((1 - product.price / product.mrp) * 100)
    : null

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={product.img}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

          {discount && (
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        <div className="mt-3">
          <p className="text-sm font-medium">{product.name}</p>

          <div className="flex gap-2 items-center mt-1">
            <span className="font-semibold">₹{product.price}</span>
            {product.mrp && (
              <span className="text-gray-400 line-through text-xs">
                ₹{product.mrp}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  )
}