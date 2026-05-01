import Link from 'next/link'
import MenuPreview from '@/components/MenuPreview'
import RatingBadges from '@/components/RatingBadges'

export default function HomePage() {
  return (
    <>
      {/* Promo Banner */}
      <div className="gradient-flame-frost text-white text-center text-sm font-semibold py-2 px-4">
        🌶️ Two Locations! Daily at Victoria Park · Weekends at 404 &amp; Steeles Flea Market ❄️
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#FF4500] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#00D4FF] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo/Name */}
          <div className="mb-6 animate-float inline-block">
            <span className="text-6xl">🌶️</span>
            <span className="text-6xl">❄️</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="text-gradient-flame">Flamin&apos;</span>{' '}
            <span className="text-gradient-frost">Frost</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-3">
            Where <span className="text-gradient-flame font-semibold">Heat</span> Meets{' '}
            <span className="text-gradient-frost font-semibold">Cool</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            South-Asian &amp; Mexican Food Fusion · North York, Toronto
          </p>

          {/* Rating Badges */}
          <RatingBadges />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg inline-flex items-center gap-2 justify-center"
            >
              🛵 Order on Uber Eats
            </a>
            <Link
              href="/menu"
              className="btn-frost px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg inline-flex items-center gap-2 justify-center"
            >
              🍽️ View Menu
            </Link>
            <a
              href="tel:+14164950464"
              className="glassmorphism px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2 justify-center"
            >
              📞 Call Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient-both">Fan Favourites</span>
            </h2>
            <p className="text-gray-400 text-lg">The dishes everyone keeps coming back for</p>
          </div>
          <MenuPreview />
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="btn-flame px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2"
            >
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            <span className="text-gradient-flame">South-Asian</span> &amp;{' '}
            <span className="text-gradient-frost">Mexican</span> Fusion
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At Flamin&apos; Frost, we bring together the bold spices of South Asia with the vibrant
            flavours of Mexico. From crispy samosas to loaded burritos, every bite is an adventure.
            Affordable, delicious, and made with love right here in North York.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="glassmorphism-flame rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-3">🌶️</div>
              <h3 className="font-bold text-xl mb-2 text-gradient-flame">Fiery Flavours</h3>
              <p className="text-gray-400">Authentic South-Asian spices in every dish</p>
            </div>
            <div className="glassmorphism-frost rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-3">🌮</div>
              <h3 className="font-bold text-xl mb-2 text-gradient-frost">Mexican Classics</h3>
              <p className="text-gray-400">Burritos, tacos, quesadillas done right</p>
            </div>
            <div className="glassmorphism rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2 text-white">Unbeatable Value</h3>
              <p className="text-gray-400">Huge portions from just $1–$10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-gradient-both">Find Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism rounded-2xl p-8 card-hover border border-[#FF4500]/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-2 text-gradient-flame">Victoria Park</h3>
              <p className="text-gray-300 mb-1 font-semibold">Victoria Van Horne Plaza</p>
              <p className="text-gray-400 mb-4">2830 Victoria Park Ave, North York, ON M2J 4A8</p>
              <p className="text-green-400 font-semibold mb-4">🟢 Open Daily · Closes 9 PM</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://maps.google.com/?q=2830+Victoria+Park+Ave,+North+York,+ON+M2J+4A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-flame px-4 py-2 rounded-full text-white text-sm font-semibold"
                >
                  📍 Get Directions
                </a>
                <a
                  href="tel:+14164950464"
                  className="btn-frost px-4 py-2 rounded-full text-white text-sm font-semibold"
                >
                  📞 Call
                </a>
              </div>
            </div>
            <div className="glassmorphism rounded-2xl p-8 card-hover border border-[#00D4FF]/20">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-2 text-gradient-frost">404 &amp; Steeles Flea Market</h3>
              <p className="text-gray-300 mb-1 font-semibold">Weekends Only</p>
              <p className="text-gray-400 mb-4">404 &amp; Steeles Ave, Toronto, ON</p>
              <p className="text-yellow-400 font-semibold mb-4">🟡 Sat &amp; Sun Only</p>
              <a
                href="https://maps.google.com/?q=404+Steeles+Ave+Flea+Market+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-frost px-4 py-2 rounded-full text-white text-sm font-semibold inline-block"
              >
                📍 Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 px-4 bg-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">
            <span className="text-gradient-both">What People Say</span>
          </h2>
          <p className="text-gray-400 mb-10">Rated 4.9★ on Google from 108 reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Priya S.', review: 'The samosas are incredible! Perfect crispy texture with amazing filling. Best fusion spot in North York by far!', rating: 5 },
              { name: 'Carlos M.', review: 'Burritos here are huge and super flavourful. The spice level is perfect. Prices are unbelievable for this quality!', rating: 5 },
              { name: 'Aisha K.', review: "Golgappa + tacos in the same meal? Only at Flamin' Frost! Such a unique and delicious experience. 10/10!", rating: 5 },
            ].map((r) => (
              <div key={r.name} className="glassmorphism rounded-2xl p-6 card-hover text-left">
                <div className="flex text-yellow-400 mb-3">
                  {'★'.repeat(r.rating)}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">&ldquo;{r.review}&rdquo;</p>
                <p className="text-white font-bold">— {r.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/reviews"
              className="btn-frost px-8 py-3 rounded-full text-white font-bold inline-flex items-center gap-2"
            >
              See All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">
            <span className="text-gradient-flame">Stay in the Loop</span>
          </h2>
          <p className="text-gray-400 mb-8">Get notified about specials, new items, and events!</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500] transition-colors"
            />
            <button className="btn-flame px-6 py-3 rounded-full text-white font-bold whitespace-nowrap">
              Subscribe 🌶️
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
