import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="" className="h-10 w-auto brightness-0 invert opacity-60" />
              <div>
                <p className="text-white text-[13px] font-bold tracking-[0.12em] uppercase leading-none">Tirumala</p>
                <p className="text-red-400 text-[9.5px] tracking-[0.2em] uppercase leading-none mt-0.5">Family Mall</p>
              </div>
            </div>
            <p className="text-[12.5px] text-gray-500 leading-relaxed mb-5 max-w-[240px]">
              Your complete fashion destination in Tekkali, Srikakulam. Premium clothing for the entire family.
            </p>
            <a href="https://instagram.com/tirumalafamilymall777" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-gray-500 hover:text-white transition-colors flex items-center gap-1.5"
            >📸 @tirumalafamilymall777</a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {[['Home', '/'], ['Women', '/collections/women'], ['Men', '/collections/men'], ['Kids', '/collections/kids'], ['Insta Live', '/collections/insta-live'], ['Sale', '/collections/sale']].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-[12.5px] text-gray-500 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Categories</p>
            <ul className="space-y-2.5">
              {[['Sarees', '/collections/sarees'], ['Kurtis', '/collections/kurtis'], ['Dress Materials', '/collections/dress-materials'], ['Nighties', '/collections/nightwear'], ['Men Shirts', '/collections/shirts'], ['Kids Frocks', '/collections/girls-frocks']].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-[12.5px] text-gray-500 hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
            <div className="space-y-3 mb-5">
              <p className="text-[12.5px] text-gray-500 leading-relaxed">Tekkali, Srikakulam District,<br />Andhra Pradesh</p>
              <a href="https://wa.me/919966248223" className="flex items-center gap-1.5 text-[12.5px] text-gray-500 hover:text-white transition-colors">📱 +91 99662 48223</a>
            </div>
            <a href="https://wa.me/919966248223" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-[11.5px] font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">© {new Date().getFullYear()} Tirumala Family Mall. All rights reserved.</p>
          <div className="flex gap-5">
            {[['Privacy Policy', '/privacy'], ['Terms', '/terms'], ['Shipping', '/shipping'], ['Returns', '/returns']].map(([l, h]) => (
              <Link key={l} href={h} className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
