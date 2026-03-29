'use client'

export default function TermsPage() {
  const sections = [
    {
      heading: 'Acceptance of Terms',
      content:
        'By shopping at Tirumala Family Mall — online or in-store — you agree to these terms. Please read them carefully before making a purchase.',
    },
    {
      heading: 'Products & Pricing',
      content:
        'All prices are listed in Indian Rupees (INR) and include applicable taxes. Prices may change without prior notice, but confirmed orders will not be affected.',
    },
    {
      heading: 'Order Placement',
      content:
        'Orders can be placed through our website or via WhatsApp. An order is confirmed only after you receive a confirmation message from us.',
    },
    {
      heading: 'Payment',
      content:
        'We accept Cash on Delivery, UPI, and bank transfers. Full payment is required before dispatch (except for COD orders).',
    },
    {
      heading: 'Cancellation Policy',
      content:
        'Orders can be cancelled before dispatch. Once shipped, cancellation is not possible. Please refer to our returns policy for further options.',
    },
    {
      heading: 'Limitation of Liability',
      content:
        'Tirumala Family Mall is not liable for indirect or consequential losses. Liability is limited to the value of the purchased product.',
    },
  ]

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="bg-[#fafafa] py-20 text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Terms & Conditions
        </p>

        <h1 className="heading-serif text-4xl md:text-5xl italic mb-3">
          Terms of Service
        </h1>

        <p className="text-gray-500 text-sm">
          Last updated: January 2026
        </p>

        <div className="w-10 h-[2px] bg-[#CC0000] mx-auto mt-4"></div>
      </section>

      {/* 🔥 CONTENT */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto space-y-6">

          {sections.map((s, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 md:p-8 hover:shadow-md transition"
            >
              <h2 className="font-semibold text-[#CC0000] text-sm mb-3">
                {s.heading}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {s.content}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-[#fafafa] py-20 text-center">

        <h2 className="heading-serif text-3xl italic mb-4">
          Have Questions?
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our team is here to help you anytime.
        </p>

        <a
          href="https://wa.me/919966248223"
          target="_blank"
          className="bg-[#CC0000] text-white px-8 py-3 rounded-full text-sm hover:scale-105 transition"
        >
          Contact on WhatsApp →
        </a>

      </section>

    </main>
  )
}