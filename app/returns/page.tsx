'use client'

export default function ReturnsPage() {
  const sections = [
    {
      heading: 'Return Window',
      content:
        'You can request a return or exchange within 7 days of delivery. After this period, returns are not accepted unless there is a manufacturing defect.',
    },
    {
      heading: 'Eligible for Return',
      content:
        'Items must be unused, unwashed, and in original condition with all tags intact. Products damaged due to misuse are not eligible.',
    },
    {
      heading: 'Non-Returnable Items',
      content:
        'Innerwear, lingerie, and certain personal care items cannot be returned for hygiene reasons. Items marked as "Final Sale" are also non-returnable.',
    },
    {
      heading: 'How to Initiate a Return',
      content:
        'Contact us on WhatsApp at +91 99662 48223 with your order details. Our team will assist you within 24 hours.',
    },
    {
      heading: 'Refund Process',
      content:
        'Once we receive and inspect the product, refunds are processed within 3–5 business days via the original payment method.',
    },
    {
      heading: 'Exchange Policy',
      content:
        'Exchanges for size or colour are subject to availability. If unavailable, we offer a refund or store credit.',
    },
  ]

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="bg-[#fafafa] py-20 text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Returns & Exchange
        </p>

        <h1 className="heading-serif text-4xl md:text-5xl italic mb-3">
          Easy Returns & Exchanges
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
              <h2 className="text-[#CC0000] font-semibold text-sm mb-3">
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
          Need Help With Returns?
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our support team is here to assist you.
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