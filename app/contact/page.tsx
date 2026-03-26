'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Instagram, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3">
          <p className="text-[11px] text-gray-400">
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-600">Contact</span>
          </p>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-5 lg:px-10 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-gray-400 mb-2">We're here to help</p>
          <h1 className="text-[28px] font-light text-gray-900 tracking-wide mb-3">Get In Touch</h1>
          <div className="w-8 h-px bg-gray-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="space-y-7">
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                lines: ['Tirumala Family Mall', 'Tekkali, Srikakulam District', 'Andhra Pradesh — 532 201'],
              },
              {
                icon: Phone,
                title: 'Call / WhatsApp',
                lines: ['+91 99662 48223'],
                link: 'https://wa.me/919966248223',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                lines: ['@tirumalafamilymall777'],
                link: 'https://instagram.com/tirumalafamilymall777',
              },
              {
                icon: Clock,
                title: 'Store Hours',
                lines: ['Mon – Sat: 9:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 6:00 PM'],
              },
            ].map(({ icon: Icon, title, lines, link }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-gray-700 tracking-[0.06em] uppercase mb-1.5">{title}</p>
                  {lines.map(l => (
                    link ? (
                      <a key={l} href={link} target="_blank" rel="noopener noreferrer"
                        className="block text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                      >{l}</a>
                    ) : (
                      <p key={l} className="text-[13px] text-gray-500 leading-relaxed">{l}</p>
                    )
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919966248223?text=Hi%2C%20I%20have%20a%20query%20about%20your%20products"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#25D366] text-white text-[12.5px] font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-2xl">
                  ✅
                </div>
                <p className="text-[15px] font-medium text-gray-800">Message sent!</p>
                <p className="text-[13px] text-gray-400">We'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="text-[12px] text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
                <p className="text-[14px] font-semibold text-gray-800 mb-6">Send a Message</p>
                <div className="space-y-4">
                  {[
                    { label: 'Your Name', type: 'text', placeholder: 'Enter your full name' },
                    { label: 'Phone / WhatsApp', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                    { label: 'Email (optional)', type: 'email', placeholder: 'your@email.com' },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="block text-[10.5px] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-[13px] outline-none focus:border-gray-400 transition-colors placeholder:text-gray-300"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10.5px] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-[13px] outline-none focus:border-gray-400 transition-colors resize-none placeholder:text-gray-300"
                    />
                  </div>
                  <button
                    onClick={() => setSent(true)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white text-[13px] font-medium tracking-[0.06em] rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Send size={14} /> Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
