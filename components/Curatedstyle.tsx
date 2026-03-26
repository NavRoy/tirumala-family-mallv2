'use client'

import Link from 'next/link'

const ITEMS = [
  {
    title: 'Anarkali Sets',
    desc: 'Timeless ethnic elegance',
    href: '/women/anarkali',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90',
    big: true,
  },
  {
    title: 'Printed Kurtis',
    href: '/kurtis',
    img: 'https://images.unsplash.com/photo-1622339442030-9c0cdbaff342?w=800&q=90',
  },
  {
    title: 'Cotton Trousers',
    href: '/women/leggings',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=90',
  },
  {
    title: 'Leggings',
    href: '/women/leggings',
    img: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=800&q=90',
  },
  {
    title: 'Dress Materials',
    href: '/dress-materials',
    img: 'https://images.unsplash.com/photo-1593032465171-8c6b3b5e0d64?w=800&q=90',
  },
]

export default function CategoryHighlight() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* 💎 HEADER */}
        <div className="flex items-end justify-between mb-10">

          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
              Trending
            </p>

            <h2 className="text-[30px] sm:text-[34px] font-semibold text-[#0f172a] tracking-[0.04em]">
              New Season Picks
            </h2>

            <div className="w-12 h-[2px] bg-[#CC0000] mt-4 rounded-full"></div>
          </div>

          {/* 💎 PREMIUM VIEW ALL BUTTON */}
          <Link
            href="/collections/women"
            className="
            hidden sm:inline-flex items-center gap-2

            px-6 py-2.5 rounded-full

            text-[11px] tracking-[0.25em] uppercase font-medium

            border border-gray-300 text-gray-700

            hover:border-[#CC0000] hover:text-[#CC0000]

            hover:shadow-md

            transition-all duration-300
            "
          >
            View All →
          </Link>

        </div>

        {/* 🔥 MOBILE SLIDER */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2">

          {ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="
              snap-start shrink-0 w-[230px]

              relative rounded-[14px] overflow-hidden

              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              "
            >
              <div className="h-[190px]">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-4 left-5">
                <h3 className="text-[15px] font-medium text-white">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-[11px] text-white/80">
                    {item.desc}
                  </p>
                )}
              </div>
            </Link>
          ))}

        </div>

        {/* 🖥 DESKTOP GRID */}
        <div
          className="hidden sm:grid gap-5"
          style={{
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '200px 200px',
          }}
        >
          {ITEMS.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`
              group relative overflow-hidden

              rounded-[14px]

              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]

              transition-all duration-300

              ${item.big ? 'row-span-2' : ''}
              `}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
              />

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

              <div className="absolute bottom-5 left-6">
                <h3 className="text-[17px] font-medium text-white">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="text-[12px] text-white/80 mt-1">
                    {item.desc}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* 💎 MOBILE VIEW ALL */}
        <div className="text-center mt-10 sm:hidden">
          <Link
            href="/collections/women"
            className="
            inline-flex items-center gap-2

            px-7 py-3 rounded-full

            text-[12px] tracking-[0.25em] uppercase font-medium

            bg-black text-white

            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            hover:bg-[#CC0000]

            transition-all duration-300
            "
          >
            View All →
          </Link>
        </div>

      </div>

      {/* HIDE SCROLLBAR */}
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}