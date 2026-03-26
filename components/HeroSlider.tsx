'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const SLIDES = [
  { id: 1, img: '/banners/festival-wear-banner.png', alt: 'Saree Collection', href: '/collections/women' },
  { id: 2, img: '/banners/kids-banner.png', alt: 'New Arrivals', href: '/collections/kids' },
  { id: 3, img: '/banners/wome-banner2.png', alt: 'Festive Wear', href: '/collections/women' },
  { id: 4, img: '/banners/kids-banner.png', alt: 'Exclusive Deals', href: '/collections/kids' },
]

export default function HeroSlider() {
  const [curr, setCurr] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [dir, setDir] = useState<1 | -1>(1)
  const [drag, setDrag] = useState<number | null>(null)
const [isDragging, setIsDragging] = useState(false)

  const go = useCallback((next: number, direction: 1 | -1 = 1) => {
    setDir(direction)
    setPrev(curr)
    setCurr(next)
    setTimeout(() => setPrev(null), 600)
  }, [curr])

  const next = () => go((curr + 1) % SLIDES.length, 1)
  const goTo = (i: number) => go(i, i > curr ? 1 : -1)

  useEffect(() => {
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  })

  /* swipe */
const onTouchStart = (e: React.TouchEvent) => {
  setDrag(e.touches[0].clientX)
  setIsDragging(false)
}

const onTouchEnd = (e: React.TouchEvent) => {
  if (drag === null) return

  const d = drag - e.changedTouches[0].clientX

  if (Math.abs(d) > 50) {
    setIsDragging(true)
    d > 0 ? next() : go((curr - 1 + SLIDES.length) % SLIDES.length, -1)
  }

  setDrag(null)
}

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      style={{ height: 'clamp(260px, 52vw, 680px)' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === curr
        const isLeaving = i === prev

        return (
         <Link
  key={slide.id}
  href={slide.href}
  onClick={(e) => {
    if (isDragging) e.preventDefault()
  }}
            className="absolute inset-0 block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: isActive ? 1 : isLeaving ? 0 : 0,
              transform: isActive
                ? 'scale(1)'
                : isLeaving
                ? `scale(1.04) translateX(${dir * -3}%)`
                : `scale(0.96) translateX(${dir * 3}%)`,
              zIndex: isActive ? 2 : isLeaving ? 1 : 0,
            }}
          >
            {/* IMAGE */}
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover  scale-105 object-center transition-transform duration-[4000ms] ease-linear scale-[1.05]"
            />

            {/* PREMIUM OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </Link>
        )
      })}

      {/* ARROWS */}
   

  

      {/* DOTS */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === curr
                ? 'w-6 h-[2px] bg-black'
                : 'w-2 h-[2px] bg-gray-400/60 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}