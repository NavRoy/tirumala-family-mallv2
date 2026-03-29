'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleWhatsApp = () => {
    const text = `Hi Tirumala Family Mall! 👋

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`

    const url = `https://wa.me/919966248223?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSent(true)
  }

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="py-24 bg-[#fafafa] text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Contact Our Store
        </p>

        <h1 className="heading-serif text-5xl italic">
          Visit Tirumala Family Mall
        </h1>

        <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
          Opp. Police Station, Old NH5 Road, Tekkali — Experience fashion for every generation.
        </p>
      </section>

      {/* 🔥 STORE IMAGE SECTION */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "photo-1610030469983-98e550d6193c",
              "photo-1603252109303-2751441dd157",
              "photo-1583391733956-6c77a90c2c59"
            ].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl group">
                <img
                  src={`https://images.unsplash.com/${img}?w=600`}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 MAIN GRID */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div className="space-y-6">

            {[
              {
                title: 'Our Store',
                desc: 'Opp. Police Station, Old NH5 Road, Tekkali, Andhra Pradesh',
              },
              {
                title: 'Call / WhatsApp',
                desc: '+91 99662 48223',
              },
              {
                title: 'Store Hours',
                desc: 'Open Daily: 9AM – 9PM',
              },
              {
                title: 'Established',
                desc: 'Serving families since 2014',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-6 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}

            <a
              href="https://wa.me/919966248223"
              target="_blank"
              className="block text-center bg-[#CC0000] text-white py-3 rounded-full text-sm hover:scale-105 transition"
            >
              Chat on WhatsApp →
            </a>

          </div>

          {/* RIGHT FORM */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-[#CC0000]/10 blur-[100px]" />

            <div className="border rounded-3xl p-8 shadow-sm bg-white relative z-10">

              {sent ? (
                <div className="text-center py-10">
                  <p className="text-3xl mb-3">✅</p>
                  <h3 className="font-semibold mb-2">Message Sent</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    WhatsApp opened successfully
                  </p>

                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition"
                  >
                    Send Again
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="heading-serif text-2xl italic mb-6">
                    Send a Message
                  </h2>

                  <div className="space-y-5">

                    <input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full border px-4 py-3 text-sm rounded-lg"
                    />

                    <input
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full border px-4 py-3 text-sm rounded-lg"
                    />

                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full border px-4 py-3 text-sm rounded-lg"
                    />

                    <button
                      onClick={handleWhatsApp}
                      disabled={!form.name || !form.message}
                      className={`w-full py-3 rounded-full text-sm ${
                        form.name && form.message
                          ? 'bg-[#CC0000] text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      Send via WhatsApp →
                    </button>

                  </div>
                </>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 🔥 REAL GOOGLE MAP */}
      <section className="px-6 md:px-16 pb-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="heading-serif text-3xl italic mb-8 text-center">
            Find Us on Map
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-lg border">

            <iframe
              src="https://www.google.com/maps?q=18.6022141,84.2291593&z=17&output=embed"
              width="100%"
              height="400"
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

    </main>
  )
}