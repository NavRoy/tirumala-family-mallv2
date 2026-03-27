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
    <section className="py-24 bg-[#fafafa] overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center mb-16">

          <p className="text-[10px] tracking-[0.5em] uppercase text-gray-400 mb-3">
            Instagram
          </p>

          <h2 className="heading-serif italic text-[26px] sm:text-[32px] md:text-[40px] tracking-[0.06em] px-4 sm:px-0 text-center leading-[1.3]">
            @tirumalafamilymall777
          </h2>

          <div className="w-16 h-[2px] bg-[#CC0000] mt-4 mx-auto"></div>

        </div>

        {/* 🔥 REELS GRID */}
       <div className="
  flex gap-4 overflow-x-auto pb-4

  sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible
">

          {REELS.map((reel, i) => (
            <a
              key={reel.id}
              href="https://instagram.com/tirumalafamilymall777"
              target="_blank"
             className={`group relative min-w-[160px] sm:min-w-0 ${
  i === 2 ? 'lg:scale-[1.1]' : ''
}`}
            >

              {/* 🔥 CARD */}
              <div className="
                relative aspect-[9/16] rounded-3xl overflow-hidden

                bg-black

                shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                group-hover:shadow-[0_35px_100px_rgba(0,0,0,0.2)]

                group-hover:-translate-y-3
                transition-all duration-500
              ">

                <video
                  src={reel.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-700"
                />

                {/* 🔥 DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* 🔥 PLAY ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="
                    w-12 h-12 rounded-full bg-white/90 backdrop-blur

                    flex items-center justify-center text-black text-lg

                    opacity-0 group-hover:opacity-100
                    scale-90 group-hover:scale-100

                    transition-all duration-300
                  ">
                    ▶
                  </div>
                </div>

                {/* 🔥 CAPTION */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="
                    text-white text-[12px] font-medium

                    opacity-0 group-hover:opacity-100
                    translate-y-3 group-hover:translate-y-0

                    transition-all duration-300
                  ">
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