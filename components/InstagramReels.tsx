'use client'

import { useRef } from 'react'

const REELS = [
  {
    id: 'r1',
    caption: 'New Saree Collection',
    video: '/reels/reel1.mp4',
    category: 'Sarees',
    link: '/collections/sarees',
  },
  {
    id: 'r2',
    caption: "Men's Ethnic Wear",
    video: '/reels/reel1.mp4',
    category: 'Men',
    link: '/collections/mens',
  },
  {
    id: 'r3',
    caption: 'Kids Special',
    video: '/reels/reel1.mp4',
    category: 'Kids',
    link: '/collections/kids',
  },
  {
    id: 'r4',
    caption: 'Festival Collection',
    video: '/reels/reel1.mp4',
    category: 'Festive',
    link: '/collections/festive',
  },
  {
    id: 'r5',
    caption: 'Live Highlights',
    video: '/reels/reel1.mp4',
    category: 'Trending',
    link: '/collections/trending',
  },
]

export default function PremiumReels() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (video) video.play()
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <section className="py-24 bg-white">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
            Instagram
          </p>

          <h2 className="heading-serif italic text-[30px] sm:text-[34px] md:text-[38px] lg:text-[44px]">
            Follow Our Style Stories
          </h2>

          <p className="text-gray-500 text-sm mt-4">
            @tirumalafamilymall777
          </p>

          <div className="w-12 h-[2px] bg-[#c47a5a] mt-5 mx-auto rounded-full"></div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-5 gap-6">

          {REELS.map((reel, i) => (
            <a
              key={reel.id}
            href="https://instagram.com/tirumalafamilymall777"
target="_blank"
rel="noopener noreferrer"
              className={`group relative ${
                i === 2
                  ? 'scale-[1.12] z-20'
                  : 'scale-[0.92] opacity-70'
              } hover:scale-[1.05] hover:opacity-100 transition-all duration-500`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >

              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.25)]
                transition-all duration-500">

                <video
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  src={reel.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* PREMIUM OVERLAY */}
                <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-md bg-white/5 border-t border-white/10">

                  <span className="text-[10px] tracking-widest uppercase text-gray-300">
                    {reel.category}
                  </span>

                  <h3 className="text-white text-sm font-semibold mt-1">
                    {reel.caption}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="text-xs text-gray-400">
                      Explore Now →
                    </span>

                    <button className="px-3 py-1 text-[11px] rounded-full bg-white text-black font-medium
                      hover:bg-[#c47a5a] hover:text-white transition">
                      Shop
                    </button>

                  </div>

                </div>

              </div>

            </a>
          ))}

        </div>

        {/* MOBILE */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">

          {REELS.map((reel) => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
target="_blank"
rel="noopener noreferrer"
              className="min-w-[150px] group relative snap-center"
            >

              <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-md">

                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] text-gray-300 uppercase">
                    {reel.category}
                  </span>

                  <p className="text-white text-[11px] font-medium">
                    {reel.caption}
                  </p>
                </div>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  )
}