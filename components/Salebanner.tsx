import Link from 'next/link'

export default function FlashSaleBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

        <Link
          href="/collections/sale"
          className="group relative block overflow-hidden rounded-[14px] lg:rounded-[16px] shadow-[0_6px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_45px_rgba(0,0,0,0.1)] transition duration-300"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1400&q=90"
            alt="Flash Sale Banner"
            className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover object-center group-hover:scale-[1.04] transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />

          {/* CONTENT */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">

            <p className="text-[11px] tracking-[0.4em] uppercase opacity-80 mb-2">
              Limited Time
            </p>

            <h2 className="text-[26px] sm:text-[30px] font-semibold leading-tight mb-2">
              Flash Sale
            </h2>

            <p className="text-sm opacity-90 mb-4">
              Up to 50% Off
            </p>

            {/* CTA */}
            <span className="inline-block text-[12px] tracking-[0.25em] uppercase border-b border-white pb-1 group-hover:text-[#ff4d4d] group-hover:border-[#ff4d4d] transition">
              Shop Now
            </span>

          </div>

        </Link>

      </div>
    </section>
  )
}