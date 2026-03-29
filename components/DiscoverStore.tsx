'use client'

const OCCASIONS = [
  {
    title: 'Florals',
    image: 'https://images.unsplash.com/photo-1583391733956-6c77a0e9a6c5',
    link: '/collections/florals',
  },
  {
    title: 'Wedding Wear',
    image: 'https://images.unsplash.com/photo-1602810319428-019690571b5b',
    link: '/collections/wedding',
  },
  {
    title: 'Festival Collection',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c',
    link: '/collections/festive',
  },
  {
    title: 'party Wear',
    image: 'https://images.unsplash.com/photo-1593032465171-8a7c5b63c6c2',
    link: '/collections/party',
  },
]

export default function OccasionSection() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-white">

      <div className="max-w-[1240px] mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20">

          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
            Collections
          </p>

          <h2 className="heading-serif italic text-[28px] sm:text-[32px] md:text-[38px] leading-tight">
            Shop by Occasion
          </h2>

          {/* 🔴 RED LINE FIX */}
          <div className="w-10 h-[2px] bg-[#8b1e1e] mt-4 mx-auto rounded-full"></div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">

          {OCCASIONS.map((item, i) => (
            <a key={i} href={item.link} className="group block">

              <div className="relative overflow-hidden rounded-xl
                transition-all duration-500 ease-out
                shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]
                group-hover:-translate-y-[4px]">

                {/* IMAGE */}
                <img
                  src={`${item.image}?auto=format&fit=crop&w=900&q=90`}
                  alt={item.title}
                  className="w-full h-[240px] sm:h-[280px] md:h-[340px] object-cover
                  transition duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 text-center">

                 <div className="inline-block px-3 py-1 rounded-md bg-black/40 
  group-hover:bg-black/60 backdrop-blur-sm transition duration-300">

                   <h3
  className="text-white text-[14px] sm:text-[15px] tracking-wide font-medium"
  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
>
  {item.title}
</h3>
<div className="w-0 h-[2px] bg-[#8b1e1e] mx-auto mt-2 
  transition-all duration-300 group-hover:w-10"></div>

                  </div>

                </div>

                {/* SUBTLE GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition duration-500 bg-white/5" />

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  )
}