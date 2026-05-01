import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-black mb-3">
              <span className="text-gradient-flame">Flamin&apos;</span>{' '}
              <span className="text-gradient-frost">Frost</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              South-Asian &amp; Mexican food fusion. Where Heat Meets Cool. North York&apos;s favourite affordable restaurant.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="text-2xl">🌶️</span>
              <span className="text-2xl">❄️</span>
              <span className="text-2xl">🍽️</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-white mb-4">Hours</h3>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>Mon–Fri: 11 AM – 9 PM</li>
              <li>Sat–Sun: 10 AM – 9 PM</li>
              <li className="mt-3 text-yellow-400 font-semibold">Flea Market:</li>
              <li>Sat–Sun: 9 AM – 6 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="tel:+14164950464" className="hover:text-[#FF6B35] transition-colors">
                  📞 (416) 495-0464
                </a>
              </li>
              <li>📍 2830 Victoria Park Ave</li>
              <li>North York, ON M2J 4A8</li>
              <li className="mt-2">
                <a
                  href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D4FF] transition-colors"
                >
                  🛵 Order on Uber Eats
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=2830+Victoria+Park+Ave,+North+York,+ON+M2J+4A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D4FF] transition-colors"
                >
                  🗺️ Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ratings Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-6 py-6 border-y border-white/5 mb-6 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-gray-500 text-sm">Google (108 reviews)</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-white font-bold">4.4/5</span>
            <span className="text-gray-500 text-sm">Uber Eats (11 reviews)</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-[#FF6B35] font-bold">$1–$10</span>
            <span className="text-gray-500 text-sm">Price Range</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Flamin&apos; Frost. All rights reserved.</p>
          <p className="mt-1">2830 Victoria Park Ave, North York, ON M2J 4A8</p>
        </div>
      </div>
    </footer>
  )
}
