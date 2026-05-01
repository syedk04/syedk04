import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Flamin' Frost — North York's favourite South-Asian and Mexican fusion restaurant. Our story, mission, and two locations.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px] opacity-20 bg-[#FF4500] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-[80px] opacity-20 bg-[#00D4FF] pointer-events-none" />
        <div className="relative z-10">
          <div className="text-6xl mb-6">🌶️❄️</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-both">Our Story</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Born from a love of bold flavours and vibrant cultures
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-black mb-6 text-gradient-flame">How It All Started</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Flamin&apos; Frost was born from a simple idea: what if the bold, aromatic spices of
                South Asia met the vibrant, zesty flavours of Mexico? The result? Something
                extraordinary — a fusion that nobody expected but everyone loves.
              </p>
              <p>
                Started as a passion project in the heart of North York, we&apos;ve grown from a
                small stand to a beloved staple of the Victoria Van Horne Plaza community. Our
                4.9-star Google rating isn&apos;t just a number — it&apos;s a reflection of the
                love and care we put into every single dish.
              </p>
              <p>
                We believe great food shouldn&apos;t cost a fortune. With prices starting at just
                $1, we&apos;ve made sure that everyone can experience the joy of authentic fusion
                cuisine. Because flavour has no price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-gradient-frost">Our Mission</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🌶️',
                title: 'Authentic Flavours',
                desc: 'We use traditional South-Asian spices and authentic Mexican techniques in every dish, refusing to compromise on taste.',
              },
              {
                emoji: '💰',
                title: 'Affordable Excellence',
                desc: "Great food for everyone. We keep prices between $1-$10 so that everyone in our community can enjoy a delicious meal.",
              },
              {
                emoji: '🤝',
                title: 'Community First',
                desc: "We're not just a restaurant — we're part of the North York community. From Victoria Park to 404 & Steeles, we bring people together.",
              },
            ].map((item) => (
              <div key={item.title} className="glassmorphism rounded-2xl p-6 card-hover text-center">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="text-gradient-both">Two Locations, One Love</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism-flame rounded-3xl p-8 card-hover">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-2xl font-black text-gradient-flame mb-2">
                Victoria Van Horne Plaza
              </h3>
              <p className="text-gray-300 font-semibold mb-2">Our Main Location</p>
              <p className="text-gray-400 mb-4">
                2830 Victoria Park Ave<br />
                North York, ON M2J 4A8
              </p>
              <div className="space-y-2 text-gray-400 text-sm mb-6">
                <p>📅 Monday – Friday: 11 AM – 9 PM</p>
                <p>📅 Saturday – Sunday: 10 AM – 9 PM</p>
              </div>
              <p className="text-green-400 font-bold text-sm">�� Open Daily</p>
            </div>
            <div className="glassmorphism-frost rounded-3xl p-8 card-hover">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-2xl font-black text-gradient-frost mb-2">
                404 &amp; Steeles Flea Market
              </h3>
              <p className="text-gray-300 font-semibold mb-2">Weekend Pop-Up</p>
              <p className="text-gray-400 mb-4">
                404 &amp; Steeles Ave<br />
                Toronto, ON
              </p>
              <div className="space-y-2 text-gray-400 text-sm mb-6">
                <p>📅 Saturday: 9 AM – 6 PM</p>
                <p>📅 Sunday: 9 AM – 6 PM</p>
              </div>
              <p className="text-yellow-400 font-bold text-sm">🟡 Weekends Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#111] text-center">
        <h2 className="text-3xl font-black mb-4">
          <span className="text-gradient-flame">Come Visit Us!</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Experience the fusion magic for yourself. We promise it&apos;ll be worth the trip.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="btn-flame px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2 justify-center">
            🍽️ View Menu
          </Link>
          <Link href="/contact" className="btn-frost px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2 justify-center">
            📍 Get Directions
          </Link>
        </div>
      </section>
    </div>
  )
}
