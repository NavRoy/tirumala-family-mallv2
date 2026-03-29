'use client'

export default function PrivacyPage() {
  const sections = [
    {
      heading: 'Information We Collect',
      content:
        'We collect your name, phone number, and delivery address when you place an order. We may also collect product preferences and order history to improve your experience.',
    },
    {
      heading: 'How We Use Your Information',
      content:
        'Your information is used to process orders, deliver products, and communicate with you. We do not sell or share your personal data.',
    },
    {
      heading: 'WhatsApp Communication',
      content:
        "When you contact us via WhatsApp, your data is subject to WhatsApp's privacy policy. We use it only for order-related communication.",
    },
    {
      heading: 'Data Security',
      content:
        'We take reasonable steps to protect your data. Your information is kept secure and used only to serve you better.',
    },
    {
      heading: 'Cookies',
      content:
        'We may use cookies to improve your browsing experience. These do not collect personal information and can be disabled anytime.',
    },
    {
      heading: 'Contact Us',
      content:
        'For any privacy concerns, contact us on WhatsApp at +91 99662 48223 or visit our store in Tekkali.',
    },
  ]

  return (
    <main className="bg-white text-[#111]">

      {/* 🔥 HERO */}
      <section className="bg-[#fafafa] py-20 text-center px-6">
        <p className="text-xs tracking-[4px] uppercase text-[#CC0000] mb-3">
          Privacy Policy
        </p>

        <h1 className="heading-serif text-4xl md:text-5xl italic mb-3">
          Your Privacy Matters
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
              <h2 className="font-semibold mb-3 text-[#CC0000] text-sm">
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
          Need More Information?
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Our team is happy to assist you anytime.
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