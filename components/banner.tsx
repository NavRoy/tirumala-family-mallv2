import Link from 'next/link'

export default function FlashSaleBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full px-6 lg:px-12">

        <div className="relative overflow-hidden rounded-2xl bg-[#f6f6f6] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            {/* LEFT TEXT */}
            <div className="px-8 lg:px-14 py-10 lg:py-16">

              <p className="text-[11px] tracking-[0.35em] uppercase text-gray-400 mb-3">
                Limited Time
              </p>

              <h2 className="text-[28px] lg:text-[36px] font-semibold text-[#CC0000] leading-tight mb-3">
                FLASH SALE! <br />
                UP TO 50% OFF
              </h2>

              <p className="text-[14px] text-gray-600 mb-6">
                Exclusive deals on latest collections
              </p>

              <Link
                href="/collections/sale"
                className="inline-block text-[12px] tracking-[0.2em] uppercase text-gray-700 border-b border-gray-400 pb-1 hover:text-black hover:border-black transition"
              >
                Shop Now
              </Link>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[260px] md:h-full">

              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&q=90"
                alt="Flash Sale"
                className="w-full h-full object-cover object-center"
              />

              {/* subtle overlay for blend */}
              <div className="absolute inset-0 bg-white/20" />

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}