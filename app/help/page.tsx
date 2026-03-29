'use client'

import { useState } from 'react'

const FAQS = [
  { q: 'How do I place an order?', a: 'You can place an order directly via WhatsApp by sending product name, size, and your address.' },
  { q: 'Do you offer delivery?', a: 'Yes, we provide delivery across Tekkali and nearby areas.' },
  { q: 'How long does delivery take?', a: 'Same-day delivery in Tekkali and 1–3 days for nearby locations.' },
  { q: 'What payment methods are accepted?', a: 'We accept Cash, UPI (GPay, PhonePe, Paytm), and bank transfer.' },
  { q: 'Can I return products?', a: 'Yes, returns are accepted within 7 days if unused and in original condition.' },
  { q: 'Where is your store located?', a: 'We are located in Tekkali, Srikakulam district.' },
]

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="py-24 bg-[#fafafa] text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Help Center
        </p>

        <h1 className="heading-serif text-5xl italic mb-4">
          Need Help?
        </h1>

        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Find quick answers or contact us directly for support.
        </p>

        {/* 🔥 DIRECT CTA (BEST FOR YOUR BUSINESS) */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/919966248223"
            className="bg-[#CC0000] text-white px-6 py-2 rounded-full text-sm"
          >
            WhatsApp Us
          </a>

          <a
            href="/contact"
            className="border px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            Visit Store
          </a>
        </div>

      </section>

      {/* 🔥 QUICK INFO (REPLACE FAKE LINKS) */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

{[
  { icon: '🛍️', title: 'Browse Products', desc: 'Explore latest collections' },
  { icon: '💳', title: 'Secure Checkout', desc: 'Easy and safe payments' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Quick delivery nearby' },
].map((item) => (
  <div
    key={item.title}
    className="border rounded-2xl p-6 text-center hover:shadow-xl transition hover:scale-[1.03]"
  >
    <div className="text-2xl mb-2">{item.icon}</div>
    <p className="font-medium text-sm mb-1">{item.title}</p>
    <p className="text-gray-500 text-xs">{item.desc}</p>
  </div>
))}

        </div>
      </section>

      {/* 🔥 FAQ */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">

          <h2 className="heading-serif text-4xl italic text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-2xl transition ${
                  open === i ? 'shadow-lg' : 'hover:shadow-md'
                }`}
              >

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-sm font-medium">
                    {faq.q}
                  </span>

                  <span
                    className={`text-xl transition ${
                      open === i ? 'rotate-45 text-[#CC0000]' : 'text-gray-400'
                    }`}
                  >
                    +
                  </span>
                </button>

                {open === i && (
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="py-24 text-center bg-[#fafafa]">

        <h2 className="heading-serif text-4xl italic mb-4">
          Still Need Help?
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our team is ready to assist you instantly.
        </p>

        <a
          href="https://wa.me/919966248223"
          target="_blank"
          className="bg-[#CC0000] text-white px-8 py-3 rounded-full text-sm hover:scale-105 transition"
        >
          Chat on WhatsApp →
        </a>

      </section>

    </main>
  )
}