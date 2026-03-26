'use client'

import Link from 'next/link'
import { useState } from 'react'
import ProductCard, { Product } from './ProductCard'

/* 🔥 TABS */
const TABS = [
  { id: 'new', label: 'New Arrivals' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'kids', label: 'Kids' },
]

/* 🔥 DYNAMIC LINKS */
const TAB_LINKS: Record<string, string> = {
  new: '/collections/new',
  women: '/collections/women',
  men: '/collections/men',
  kids: '/collections/kids',
}

/* 🔥 PRODUCT GENERATOR */
const makeProducts = (
  prefix: string,
  names: string[],
  prices: number[]
): Product[] =>
  names.map((name, i) => ({
    id: `${prefix}${i}`,
    name,
    price: prices[i],
    originalPrice: i % 3 === 0 ? prices[i] + 200 : undefined,
    image: '',
    href: `/products/${prefix}-${i}`,
    badge:
      i === 0
        ? 'New'
        : i === 1
        ? 'Trending'
        : i === 3
        ? 'Popular'
        : undefined,
  }))

/* 🔥 PRODUCTS WITH IMAGES */
const PRODUCTS: Record<string, Product[]> = {
  new: makeProducts(
    'n',
    [
      'Silk Blend Saree',
      'Embroidered Kurti Set',
      'Cotton Anarkali',
      '3 Piece Coord Set',
      'Linen Shirt Men',
      'Girls Lehenga Set',
      'Palazzo Kurti Combo',
      'Boys Kurta Set',
    ],
    [1299, 699, 999, 1049, 599, 799, 849, 649]
  ).map((p, i) => ({
    ...p,
image: [
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
  'https://images.unsplash.com/photo-1583391733956-6c77a90c2c59?w=600&q=80',
  'https://images.unsplash.com/photo-1593032465171-8b6b5f3b5b0e?w=600&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
  'https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&q=80',
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
][i]
  })),

  women: makeProducts(
    'w',
    [
      'Georgette Saree',
      'Palazzo Kurti Set',
      'Nighty Full Length',
      'Western Crop Top',
      'Cotton Leggings',
      'Half Saree Set',
      'Printed Frock',
      'Blouse Readymade',
    ],
    [1199, 899, 449, 499, 249, 1499, 699, 299]
  ).map((p, i) => ({
    ...p,
image: [
  'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80',
  'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80',
  'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80',
  'https://images.unsplash.com/photo-1593032465171-8b6b5f3b5b0e?w=600&q=80',
][i]
  })),

  men: makeProducts(
    'm',
    [
      'Full Sleeve Shirt',
      'Cotton Trouser',
      'Ethnic Kurtha',
      'Ramraj Dhoti',
      'Formal Blazer',
      'Sports T-Shirt',
      'Slim Fit Jeans',
      'Sherwani Set',
    ],
    [549, 649, 749, 399, 1499, 349, 799, 2499]
  ).map((p, i) => ({
    ...p,
image: [
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80',
  'https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80',
  'https://images.unsplash.com/photo-1583391733956-6c77a90c2c59?w=600&q=80',
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
  'https://images.unsplash.com/photo-1593032465171-8b6b5f3b5b0e?w=600&q=80',
][i]
  })),

  kids: makeProducts(
    'k',
    [
      'Girls Frock',
      'Boys Kurta Set',
      'Girls Lehenga',
      'Boys Denim Set',
      'Girls Dress',
      'Boys Sherwani',
      'Girls Co-ord Set',
      'Kids Night Suit',
    ],
    [499, 599, 799, 549, 449, 899, 649, 399]
  ).map((p, i) => ({
    ...p,
image: [
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
  'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80',
  'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',
  'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&q=80',
  'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80',
  'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600&q=80',
][i]
  })),
}

export default function FeaturedProducts() {
  const [tab, setTab] = useState('new')

  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">

          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
              Explore
            </p>

            <h2 className="text-[28px] sm:text-[30px] font-semibold text-black tracking-[0.06em]">
              Our Collection
            </h2>

            <div className="w-12 h-[2px] bg-[#CC0000] mt-4 rounded-full"></div>
          </div>

          {/* 🔥 TABS */}
          <div className="flex gap-6 border-b border-gray-200">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`pb-2 text-[13px] font-medium tracking-wide border-b-2 transition-all duration-300
                ${
                  tab === t.id
                    ? 'border-[#CC0000] text-black'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

        </div>

        {/* 🔥 PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS[tab].map((p, i) => (
            <ProductCard key={p.id} product={p} idx={i} />
          ))}
        </div>

        {/* 💎 DYNAMIC CTA BUTTON */}
        <div className="text-center mt-14">
          <Link
            href={TAB_LINKS[tab]}
            className="
            inline-flex items-center gap-2
            px-8 py-3 rounded-full

            text-[12px] tracking-[0.25em] uppercase font-medium

            bg-black text-white

            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]

            hover:bg-[#CC0000]
            hover:-translate-y-1

            transition-all duration-300
            "
          >
            View All {TABS.find(t => t.id === tab)?.label} →
          </Link>
        </div>

      </div>
    </section>
  )
}