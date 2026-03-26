'use client'

const REELS = [
  { id: 'r1', caption: 'New Saree Collection', video: '/reels/reel1.mp4' },
  { id: 'r2', caption: "Men's Ethnic Wear", video: '/reels/reel1.mp4' },
  { id: 'r3', caption: 'Kids Special', video: '/reels/reel1.mp4' },
  { id: 'r4', caption: 'Live Highlights', video: '/reels/reel1.mp4' },
  { id: 'r5', caption: 'Festival Collection', video: '/reels/reel1.mp4' },
  { id: 'r6', caption: 'Trending Styles', video: '/reels/reel1.mp4' },
]

export default function InstagramReels() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-12">

          <div>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gray-400 mb-2">
              Follow Us
            </p>

            <h2 className="text-[24px] sm:text-[28px] font-semibold text-black tracking-[0.04em]">
              @tirumalafamilymall777
            </h2>

            <div className="w-12 h-[2px] bg-[#CC0000] mt-3 rounded-full"></div>
          </div>

          {/* SIDE FOLLOW */}
          <a
            href="https://instagram.com/tirumalafamilymall777"
            target="_blank"
            className="hidden sm:block px-5 py-2.5 rounded-full 

bg-gray-50
text-gray-800
text-[12px] font-medium tracking-[0.18em]

border border-gray-200

hover:bg-white
hover:border-[#CC0000]
hover:text-[#CC0000]

shadow-[0_6px_20px_rgba(0,0,0,0.05)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]

transition-all duration-300"
          >
            Follow
          </a>

        </div>

        {/* 🔥 MOBILE SLIDER */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2 tfm-noscroll">

          {REELS.map(reel => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
              target="_blank"
              className="snap-start shrink-0 w-[160px]"
            >

              <div className="
              aspect-[9/16] rounded-2xl overflow-hidden bg-black

              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]

              transition-all duration-300
              ">

                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

              </div>

            </a>
          ))}

        </div>

        {/* 🖥 DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-6">

          {REELS.map(reel => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
              target="_blank"
              className="group relative block"
            >

              <div className="
              aspect-[9/16] overflow-hidden rounded-2xl bg-black

              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]

              group-hover:-translate-y-2
              transition-all duration-300
              ">

                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-500"
                />

              </div>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition" />

              {/* play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-black text-sm opacity-0 group-hover:opacity-100 transition">
                  ▶
                </div>
              </div>

              {/* caption */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-[11px] font-medium">
                  {reel.caption}
                </p>
              </div>

            </a>
          ))}

        </div>

        {/* 🔥 PREMIUM CENTER BUTTON */}
        <div className="flex justify-center mt-16">

          <a
            href="https://instagram.com/tirumalafamilymall777"
            target="_blank"
            className="
              flex items-center gap-2 
              px-9 py-3.5 rounded-full 

              text-white text-[13px] font-medium tracking-wide

              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]

              hover:-translate-y-1.5
              transition-all duration-300
            "
            style={{
              background:
                'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
            }}
          >
            📸 Follow @tirumalafamilymall777
          </a>

        </div>

      </div>

    </section>
  )
}