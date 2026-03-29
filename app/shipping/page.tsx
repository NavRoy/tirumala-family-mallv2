'use client'

export default function ShippingPage() {
  const sections = [
    {
      heading: 'Delivery Areas',
      content:
        'We deliver across Srikakulam district and surrounding areas. For deliveries outside this region, please contact us to confirm availability.',
    },
    {
      heading: 'Delivery Time',
      content:
        'Local deliveries within Tekkali are usually completed same-day or next-day. Other areas typically take 1–3 business days.',
    },
    {
      heading: 'Shipping Charges',
      content:
        'Free delivery is available for orders above ₹999 within Tekkali. Charges for other areas will be shared at order confirmation.',
    },
    {
      heading: 'Order Processing',
      content:
        'Orders are processed after payment confirmation (or COD agreement). Processing usually takes 2–4 hours during store hours.',
    },
    {
      heading: 'Packaging',
      content:
        'All products are carefully packed to ensure safe delivery. Delicate items receive extra protective packaging.',
    },
    {
      heading: 'Delivery Issues',
      content:
        'If your order is delayed or missing, contact us on WhatsApp at +91 99662 48223. We will resolve it quickly.',
    },
  ]

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="bg-[#fafafa] py-20 text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Shipping Policy
        </p>

        <h1 className="heading-serif text-4xl md:text-5xl italic mb-3">
          Delivery & Shipping
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
          Need Help With Delivery?
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our team is ready to assist you with your order.
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