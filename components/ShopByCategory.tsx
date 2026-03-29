'use client'

import Link from 'next/link'
import { useState } from 'react'

const CATS = [
  { name: 'Ethnic Wear', href: '/collections/sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=90' },
  { name: 'Kurtis', href: '/collections/kurtis', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=90' },
  { name: 'Activewear', href: '/collections/tops', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=90' },
  { name: 'Western Wear', href: '/collections/dress-materials', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=90' },
  { name: 'Frocks', href: '/collections/frocks', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=90' },
  { name: 'Kids Wear', href: '/collections/kids', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=90' },
  { name: 'Nightwear', href: '/collections/nightwear', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=90' },
  { name: 'Innerwear', href: '/collections/innerwear', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=90' },
  { name: 'Lingerie', href: '/collections/lingerie', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=90' },
  { name: 'Accessories', href: '/collections/accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=90' },
  { name: 'Grooming', href: '/collections/grooming', img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=90' },
  { name: 'Beauty', href: '/collections/beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=90' },
]

export default function ShopByCategory() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1400px] mx-auto px-4 lg:px-10">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px]">
            Shop by Category
          </h2>
          <div className="w-14 h-[3px] bg-[#CC0000] mt-4 mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {CATS.map((cat, i) => {
            // 👇 MOBILE: show only first 4 unless expanded
            if (!showAll && i >= 4) {
              return (
                <div key={i} className="hidden md:block">
                  <Link href={cat.href} className="group block">

                    <div className="overflow-hidden rounded-xl 
                      shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                      group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                      transition duration-300">

                      <div className="relative">
                        <img
                          src={cat.img}
                          alt={cat.name}
                          className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-[1.08] transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 text-white text-center py-3 
                          bg-gradient-to-t from-[#cc0000]/90 via-[#cc0000]/70 to-transparent">

                          <p className="text-[13px] font-semibold tracking-[0.06em]">
                            {cat.name}
                          </p>

                          <p className="text-[11px] tracking-[0.2em] uppercase opacity-90">
                            Shop Now →
                          </p>

                        </div>
                      </div>

                    </div>

                  </Link>
                </div>
              )
            }

            return (
              <Link key={cat.name} href={cat.href} className="group block">

                <div className="overflow-hidden rounded-xl 
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                  group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                  transition duration-300">

                  <div className="relative">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-[1.08] transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 text-white text-center py-3 
                      bg-gradient-to-t from-[#cc0000]/90 via-[#cc0000]/70 to-transparent">

                      <p className="text-[13px] font-semibold tracking-[0.06em]">
                        {cat.name}
                      </p>

                      <p className="text-[11px] tracking-[0.2em] uppercase opacity-90">
                        Shop Now →
                      </p>

                    </div>
                  </div>

                </div>

              </Link>
            )
          })}

        </div>

        {/* 👇 VIEW MORE (ONLY MOBILE) */}
        {!showAll && (
          <div className="text-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-[12px] tracking-[0.2em] uppercase text-[#cc0000] font-medium"
            >
              View More →
            </button>
          </div>
        )}

      </div>

    </section>
  )
}