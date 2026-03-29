'use client'

import Link from 'next/link'

const CATEGORIES = [
  {
    name: 'TOPS',
    img: 'https://images.unsplash.com/photo-1520975922284-7b06c0f3c8e3?w=800&q=85',
    slug: 'tops',
  },
  {
    name: 'SHIRTS',
    img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=85',
    slug: 'shirts',
  },
  {
    name: 'DRESSES',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=85',
    slug: 'frocks', // 👈 mapped to frocks
  },
  {
    name: 'SHORTS & SETS',
    img: 'https://images.unsplash.com/photo-1593032457869-38fcaec1b3d5?w=800&q=85',
    slug: 'coord', // 👈 using coord for sets
  },
]


export default function SummerEditSection() {
  return (
    <section className="bg-[#fafafa] py-20">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
            Summer Edit
          </p>

          <h2 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px]">
           summer picks
          </h2>

          <div className="w-12 h-[2px] bg-[#c47a5a] mx-auto mt-4 rounded-full"></div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

          {CATEGORIES.map((item, i) => (
            <Link key={i} href={`/collections/${item.slug}`} className="group">

              <div className="relative rounded-2xl overflow-hidden bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]
                transition-all duration-500">

                <img
                  src={item.img}
                  className="w-full h-[260px] md:h-[320px] object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-0 left-0 w-full bg-white/85 backdrop-blur-md py-4 text-center">

                  <h3 className="text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-gray-800 font-medium">
                    {item.name}
                  </h3>

                </div>

              </div>

            </Link>
          ))}

        </div>



      </div>

    </section>
  )
}