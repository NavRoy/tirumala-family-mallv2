'use client'

import Link from 'next/link'

const CATS = [
  { name: 'Ethnic Wear', href: '/collections/sarees', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=90' },
  { name: 'Kurtis', href: '/collections/kurtis', img: 'https://images.unsplash.com/photo-1583391733956-6c77a2a7d35d?w=600&q=90' },
  { name: 'Activewear', href: '/collections/tops', img: 'https://images.unsplash.com/photo-1520975922284-9f1d1f3a9c10?w=600&q=90' },
  { name: 'Western Wear', href: '/collections/dress-materials', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=90' },
  { name: 'Frocks', href: '/collections/frocks', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=90' },
  { name: 'Kids Wear', href: '/collections/kids', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=90' },

  { name: 'Nightwear', href: '/collections/nightwear', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=90' },
  { name: 'Innerwear', href: '/collections/innerwear', img: 'https://images.unsplash.com/photo-1593032465171-8c6b3b5e0d64?w=600&q=90' },
  { name: 'Lingerie', href: '/collections/lingerie', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=90' },
  { name: 'Accessories', href: '/collections/accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=90' },
  { name: 'Grooming', href: '/collections/grooming', img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=90' },
  { name: 'Beauty', href: '/collections/beauty', img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=90' },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-[1400px] mx-auto px-4 lg:px-10">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-black tracking-[0.04em]">
  Shop by Category
</h2>

<div className="w-12 h-[2px] bg-[#CC0000] mt-4 mx-auto rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {CATS.map(cat => (
            <Link key={cat.name} href={cat.href} className="group block">

              <div className="overflow-hidden border border-gray-100 
              shadow-[0_6px_20px_rgba(0,0,0,0.04)]
              group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
              transition">

                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-[180px] sm:h-[200px] object-cover group-hover:scale-[1.04] transition duration-500"
                  />

                  {/* BRAND RED STRIP */}
                  <div
                    className="absolute bottom-0 left-0 right-0 text-white text-center py-2"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(204,0,0,0.85), rgba(160,0,0,0.95))',
                    }}
                  >
                    <p className="text-[12px] font-medium tracking-wide">
                      {cat.name}
                    </p>

                    <p className="text-[13px] font-semibold tracking-wide">
                      Shop Now →
                    </p>
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}