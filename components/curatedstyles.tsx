import Link from 'next/link'

const ITEMS = [
  {
    title: 'Kurti Pants',
    desc: 'Effortless everyday comfort',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90',
    className: 'row-span-2',
  },
  {
    title: 'Printed Kurtis',
    img: 'https://images.unsplash.com/photo-1622339442030-9c0cdbaff342?w=800&q=90',
  },
  {
    title: 'Leggings',
    img: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?w=800&q=90',
  },
  {
    title: 'Track Pants',
    img: 'https://images.unsplash.com/photo-1593032465171-8c6b3b5e0d64?w=800&q=90',
  },
  {
    title: 'Cotton Pants',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=90',
  },
]

export default function CategoryHighlight() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6 lg:px-12">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-[26px] font-medium text-gray-900">
              Indian Flower Picks
            </h2>
            <div className="w-12 h-[2px] bg-gray-300 mt-2" />
          </div>

          <Link
            href="/collections"
            className="text-[13px] px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-gray-400 transition"
          >
            View All
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[160px]">

          {ITEMS.map((item, i) => (
            <Link
              key={i}
              href="#"
              className={`group relative overflow-hidden rounded-xl ${item.className || ''}`}
            >

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

              {/* TEXT */}
              {item.title && (
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-[16px] font-medium">{item.title}</h3>
                  {item.desc && (
                    <p className="text-[12px] opacity-80 mt-1">{item.desc}</p>
                  )}
                </div>
              )}

            </Link>
          ))}

        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mt-8">
          {['T-Shirts', 'Casual Shirt', 'Viscose Leggings', 'Cotton Kurti'].map(tag => (
            <span
              key={tag}
              className="text-[12px] px-4 py-1.5 rounded-full border border-gray-200 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}