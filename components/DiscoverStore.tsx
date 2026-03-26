'use client'

import Link from 'next/link'

export default function DiscoverStore() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fafafa] to-[#f5f5f5] border-t border-gray-100">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* 🔥 LEFT IMAGES */}
          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5">

            {/* MOBILE: SINGLE HERO IMAGE */}
            <div className="lg:hidden rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=800&q=90"
                className="w-full h-[220px] object-cover"
              />
            </div>

            {/* DESKTOP GRID */}
            <>

              {/* BIG IMAGE */}
              <div className="hidden lg:block row-span-2 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=800&q=90"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TOP */}
              <div className="hidden lg:block rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=90"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BOTTOM */}
              <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=90"
                  className="w-full h-full object-cover"
                />

                {/* BADGE */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-5 py-3 rounded-2xl shadow">
                  <p className="text-lg font-semibold text-black">100+</p>
                  <p className="text-[11px] text-gray-500">Categories</p>
                </div>
              </div>

            </>

          </div>

          {/* 🔥 RIGHT CONTENT */}
          <div>

            {/* TITLE */}
            <div className="mb-8 text-center lg:text-left">
              <p className="text-[10px] tracking-[0.45em] uppercase text-gray-400 mb-2">
                Visit Us
              </p>

              <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-semibold text-black tracking-[0.04em]">
                Discover Our Store
              </h2>

              <div className="w-12 h-[2px] bg-[#CC0000] mt-3 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* DESC */}
            <p className="text-[14px] text-gray-600 leading-relaxed mb-8 text-center lg:text-left">
              Visit Tirumala Family Mall at Tekkali, Srikakulam — your one-stop destination for fashion & accessories.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4 mb-8">

              {[
                { icon: '📍', title: 'Address', text: 'Tekkali, Srikakulam' },
                { icon: '📞', title: 'WhatsApp', text: '+91 99662 48223' },
                { icon: '⏰', title: 'Store Hours', text: '9AM – 9PM' },
              ].map((item, i) => (
                <div key={i}
                  className="flex items-center gap-4 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm">
                  
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#CC0000]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-gray-700">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

              <a
                href="https://wa.me/919966248223"
                target="_blank"
                className="px-6 py-3 rounded-full bg-[#CC0000] text-white text-[13px] font-medium text-center shadow hover:bg-[#a80000] transition"
              >
                WhatsApp Order →
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full border border-gray-300 text-[13px] text-gray-700 text-center hover:border-[#CC0000] hover:text-[#CC0000] transition"
              >
                Contact Us →
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}