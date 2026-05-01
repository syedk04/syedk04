'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-black text-xl">
            <span>🌶️❄️</span>
            <span className="text-gradient-flame">Flamin&apos;</span>
            <span className="text-gradient-frost">Frost</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? 'bg-[#FF4500]/20 text-[#FF6B35]'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-flame px-5 py-2 rounded-full text-white text-sm font-bold"
            >
              Order Now 🛵
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glassmorphism rounded-2xl mb-4 p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    pathname === link.href
                      ? 'bg-[#FF4500]/20 text-[#FF6B35]'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame px-4 py-3 rounded-xl text-white text-sm font-bold text-center mt-2"
              >
                🛵 Order on Uber Eats
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
