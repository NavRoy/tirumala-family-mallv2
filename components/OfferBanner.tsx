'use client'

import Link from 'next/link'

export default function OfferBanner() {
  return (
    <section className="py-20 bg-white">

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER (MATCHING YOUR SITE STYLE) */}
        <div className="text-center mb-14">

          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
            Collections
          </p>

          <h2 className="text-[30px] sm:text-[34px] font-semibold text-black tracking-[0.05em]">
            Explore Categories
          </h2>

          <div className="w-12 h-[2px] bg-[#CC0000] mt-4 mx-auto rounded-full"></div>

        </div>

        <div className="space-y-6">

          {/* TOP 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* WOMEN */}
            <Link
              href="/collections/women"
              className="group relative overflow-hidden rounded-xl 
              shadow-[0_10px_35px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=90"
                alt="Women Collection"
                className="w-full h-[190px] sm:h-[210px] object-cover group-hover:scale-[1.05] transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                  New Arrivals
                </p>

                <h3 className="text-[22px] font-semibold mb-2">
                  Women's Collection
                </h3>

                <span className="text-[12px] tracking-[0.2em] uppercase border-b border-white pb-1">
                  Shop Now
                </span>
              </div>
            </Link>

            {/* MEN */}
            <Link
              href="/collections/men"
              className="group relative overflow-hidden rounded-xl 
              shadow-[0_10px_35px_rgba(0,0,0,0.06)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1520975922284-9f1d1f3a9c10?w=1200&q=90"
                alt="Men Collection"
                className="w-full h-[190px] sm:h-[210px] object-cover group-hover:scale-[1.05] transition duration-700"
              />

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                  Classic Styles
                </p>

                <h3 className="text-[22px] font-semibold mb-2">
                  Men's Collection
                </h3>

                <span className="text-[12px] tracking-[0.2em] uppercase border-b border-white pb-1">
                  Shop Now
                </span>
              </div>
            </Link>

          </div>

          {/* FULL WIDTH */}
          <Link
            href="/collections/kids"
            className="group relative overflow-hidden rounded-xl 
            shadow-[0_10px_35px_rgba(0,0,0,0.06)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            transition-all duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=90"
              alt="Kids Collection"
              className="w-full h-[160px] sm:h-[180px] object-cover group-hover:scale-[1.05] transition duration-700"
            />

            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                Boys & Girls
              </p>

              <h3 className="text-[20px] font-semibold mb-2">
                Kids Collection
              </h3>

              <span className="text-[12px] tracking-[0.2em] uppercase border-b border-white pb-1">
                Shop Now
              </span>
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}