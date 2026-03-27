'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, Heart, ShoppingBag, User, X } from 'lucide-react'
import SearchOverlay from '@/components/SearchOverlay'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const open = () => setSearchOpen(true)
    window.addEventListener('openSearch', open)
    return () => window.removeEventListener('openSearch', open)
  }, [])

  return (
    <>
      {/* 🔥 PREMIUM HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#f1f1f1] shadow-[0_8px_30px_rgba(0,0,0,0.05)]">

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative">

          <div className="flex items-center justify-between h-[75px] lg:h-[95px]">

            {/* LEFT */}
            <div className="flex items-center gap-3 pl-2 lg:pl-0 w-[120px] lg:w-auto">

              {/* MOBILE MENU */}
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden translate-x-[3px] w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <div className="grid grid-cols-3 gap-[3px]">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-[4px] h-[4px] bg-gray-700 rounded-full" />
                  ))}
                </div>
              </button>

              {/* NAV */}
              <nav className="hidden lg:flex items-center gap-12 text-[13px] tracking-[0.16em] font-medium text-gray-600">
                {['Women','Men','Kids','Insta Live'].map((item) => (
                  <Link
                    key={item}
                    href={`/collections/${item.toLowerCase().replace(' ', '-')}`}
                    className="group relative"
                  >
                    <span className="group-hover:text-black transition">
                      {item}
                    </span>

                    {/* PREMIUM UNDERLINE */}
                    <span className="absolute left-0 -bottom-[8px] h-[2px] w-0 bg-gradient-to-r from-[#CC0000] to-transparent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}

                <Link href="/collections/sale" className="text-[#CC0000] font-semibold">
                  Sale
                </Link>
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              {/* ICON STYLE */}
              {[
  { icon: User, link: '/account', hideMobile: true },
  { icon: Search, action: () => setSearchOpen(true), hideMobile: true },
  { icon: Heart, link: '/wishlist' },
  { icon: ShoppingBag, link: '/cart' }
].map((item, i) => {
  const Icon = item.icon

  const baseClass =
    "w-[40px] h-[40px] items-center justify-center rounded-full bg-white border border-gray-100 shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300"

  const mobileHide = item.hideMobile ? "hidden lg:flex" : "flex"

  if (item.action) {
    return (
      <button
        key={i}
        onClick={item.action}
        className={`${mobileHide} ${baseClass}`}
      >
        <Icon className="w-[18px] h-[18px] text-gray-600" />
      </button>
    )
  }

  return (
    <Link
      key={i}
      href={item.link}
      className={`${mobileHide} ${baseClass}`}
    >
      <Icon className="w-[18px] h-[18px] text-gray-600" />
    </Link>
  )
})}

            </div>

          </div>

          {/* 🔥 LOGO (UPGRADED) */}
          <Link href="/" className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

            <img src="/logo1.png" className="h-[38px] lg:h-[52px]" />

            <span className="text-[13px] lg:text-[18px] tracking-[0.35em] font-semibold uppercase">
              Tirumala
            </span>

            <span className="text-[10px] tracking-[0.45em] text-[#CC0000] uppercase">
              Family Mall
            </span>

          </Link>

        </div>
      </header>

      {/* SEARCH */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* MOBILE DRAWER (UNCHANGED — already good) */}
      {/* 🔥 MOBILE DRAWER */}
<>
  {/* OVERLAY */}
  <div
    className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
      menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    onClick={() => setMenuOpen(false)}
  />

  {/* DRAWER */}
  <div
    className={`fixed inset-0 w-[85%] max-w-[320px] bg-white z-[999] p-6 h-[93dvh] 
    transition-transform duration-300 ease-in-out
    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
  >

    {/* TOP */}
    <div className="flex items-center justify-between mb-8">

      <div>
        <img src="/logo1.png" className="h-[40px]" />
        <span className="text-[12px] tracking-[0.4em] font-semibold uppercase">
          Tirumala
        </span>
        <p className="text-[10px] tracking-[0.4em] text-[#CC0000] mt-1">
          FAMILY MALL
        </p>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="w-[36px] h-[36px] rounded-full bg-gray-100 flex items-center justify-center"
      >
        <X size={18} />
      </button>

    </div>

    {/* MENU */}
    <nav className="flex flex-col gap-6 text-[15px] font-medium">

      <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link href="/collections/women" onClick={() => setMenuOpen(false)}>Women</Link>
      <Link href="/collections/men" onClick={() => setMenuOpen(false)}>Men</Link>
      <Link href="/collections/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
<Link href="/collections/insta-live" onClick={() => setMenuOpen(false)}>
  Insta Live
</Link>
      <Link
        href="/collections/sale"
        className="text-[#CC0000] font-semibold"
        onClick={() => setMenuOpen(false)}
      >
        Sale
      </Link>

    </nav>

    {/* CTA */}
    <div className="absolute bottom-6 left-6 right-6">
      <Link
        href="/collections/new"
        className="block text-center py-3 rounded-full bg-black text-white text-[12px] tracking-[0.2em] uppercase"
      >
        Shop New Arrivals
      </Link>
    </div>

  </div>
</>
    </>
  )
}