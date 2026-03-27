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

<h2 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[38px] font-normal tracking-[0.06em] leading-[1.1] text-black">
  Discover Your Style
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
                className="w-full h-[260px] sm:h-[300px] object-cover group-hover:scale-[1.05] transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/70 transition" />

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                  New Arrivals
                </p>

                <h3 className="heading-serif text-[28px] md:text-[32px] mb-2">
                  Women's Edit
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
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=90"
                alt="Men Collection"
                className="w-full h-[260px] sm:h-[300px] object-cover group-hover:scale-[1.05] transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                  MODERN CLASSICS
                </p>

                <h3 className="heading-serif text-[26px] md:text-[30px] mb-2">
                  Men's Edit
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
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-[1.05] transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:bg-black/35 transition" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-[10px] tracking-[0.4em] uppercase opacity-80 mb-2">
                PLAYFUL PICKS
              </p>

              <h3 className="heading-serif text-[26px] md:text-[30px] mb-2">
                Kids Edit
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