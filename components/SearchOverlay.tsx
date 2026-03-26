'use client'

import { X, Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/* 🔥 SAMPLE PRODUCTS (you can replace later with API) */
const PRODUCTS = [
  {
    id: 'p1',
    name: 'Silk Saree',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200',
    href: '/products/p1',
  },
  {
    id: 'p2',
    name: 'Kurti Set',
    price: 699,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=200',
    href: '/products/p2',
  },
  {
    id: 'p3',
    name: 'Anarkali Dress',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200',
    href: '/products/p3',
  },
  {
    id: 'p4',
    name: 'Mens Shirt',
    price: 549,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200',
    href: '/products/p4',
  },
]

export default function SearchOverlay({ open, onClose }: any) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleSearch = () => {
    if (!query.trim()) return
    router.push(`/search?q=${query}`)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-[999] bg-white transition-all duration-300 ${
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >

      {/* 🔥 TOP BAR */}
      <div className="flex items-center gap-3 px-6 py-4 border-b">

        <Search className="text-gray-400" />

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for products..."
          className="flex-1 outline-none text-[16px]"
        />

        <button onClick={onClose}>
          <X />
        </button>

      </div>

      {/* 🔥 LIVE RESULTS */}
      <div className="px-6 py-6">

        {query ? (
          filtered.length > 0 ? (
            <div className="space-y-3">

              {filtered.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <img
                    src={item.image}
                    className="w-12 h-14 object-cover rounded"
                  />

                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500">₹{item.price}</p>
                  </div>
                </Link>
              ))}

            </div>
          ) : (
            <p className="text-sm text-gray-400">No results found</p>
          )
        ) : (
          <>
            {/* TRENDING */}
            <p className="text-[11px] tracking-[0.3em] uppercase text-gray-400 mb-4">
              Trending Searches
            </p>

            <div className="flex flex-wrap gap-3">
              {['Sarees','Kurtis','Nighties','Men Shirts','Kids Wear'].map(item => (
                <button
                  key={item}
                  onClick={() => {
                    router.push(`/search?q=${item}`)
                    onClose()
                  }}
                  className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  )
}