'use client'

import { useRef } from 'react'

const REELS = [
  { id: 'r1', caption: 'New Saree Collection', video: '/reels/reel1.mp4' },
  { id: 'r2', caption: "Men's Ethnic Wear", video: '/reels/reel1.mp4' },
  { id: 'r3', caption: 'Kids Special', video: '/reels/reel1.mp4' },
  { id: 'r4', caption: 'Live Highlights', video: '/reels/reel1.mp4' },
  { id: 'r5', caption: 'Festival Collection', video: '/reels/reel1.mp4' },
]

export default function InstagramReels() {
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

        {/* 🔥 HEADER */}
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

        {/* 🔥 DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-5 gap-6">

          {REELS.map((reel, i) => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${i === 2 ? 'scale-[1.08] z-10' : ''}`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >

              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-black text-sm
                    opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    ▶
                  </div>
                </div>

                {/* CAPTION */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-[12px] font-medium
                    opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0
                    transition-all duration-300">
                    {reel.caption}
                  </p>
                </div>

              </div>

            </a>
          ))}

        </div>

        {/* 🔥 MOBILE SCROLL */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 no-scrollbar">

          {REELS.map((reel) => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[140px] group relative"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3">
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