import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Contact Flamin' Frost or visit us at 2830 Victoria Park Ave, North York. Call (416) 495-0464 or order on Uber Eats.",
}

const hours = [
  { day: 'Monday', time: '11:00 AM – 9:00 PM' },
  { day: 'Tuesday', time: '11:00 AM – 9:00 PM' },
  { day: 'Wednesday', time: '11:00 AM – 9:00 PM' },
  { day: 'Thursday', time: '11:00 AM – 9:00 PM' },
  { day: 'Friday', time: '11:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
]

export default function ContactPage() {
  const today = new Date().getDay()
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      {/* Hero */}
      <section className="relative py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#FF4500] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#00D4FF] pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-both">Contact Us</span>
          </h1>
          <p className="text-gray-400 text-xl">We&apos;d love to hear from you!</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Main Location */}
            <div className="glassmorphism-flame rounded-2xl p-6">
              <h2 className="text-xl font-black text-gradient-flame mb-4">📍 Main Location</h2>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold">Victoria Van Horne Plaza</p>
                <p>2830 Victoria Park Ave<br />North York, ON M2J 4A8</p>
                <div className="flex flex-col gap-2 mt-4">
                  <a
                    href="tel:+14164950464"
                    className="btn-flame px-5 py-2.5 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 w-fit"
                  >
                    📞 (416) 495-0464
                  </a>
                  <a
                    href="https://maps.google.com/?q=2830+Victoria+Park+Ave,+North+York,+ON+M2J+4A8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-frost px-5 py-2.5 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 w-fit"
                  >
                    📍 Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Second Location */}
            <div className="glassmorphism-frost rounded-2xl p-6">
              <h2 className="text-xl font-black text-gradient-frost mb-4">🛒 Flea Market Location</h2>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold">404 &amp; Steeles Flea Market</p>
                <p>404 &amp; Steeles Ave, Toronto, ON</p>
                <p className="text-yellow-400 font-semibold text-sm">⚠️ Weekends Only (Sat &amp; Sun)</p>
                <a
                  href="https://maps.google.com/?q=404+Steeles+Ave+Flea+Market+Toronto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-frost px-5 py-2.5 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 w-fit mt-2"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="glassmorphism rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-4">🕐 Hours (Victoria Park)</h2>
              <div className="space-y-2">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex justify-between py-1.5 px-3 rounded-lg text-sm ${
                      i === todayIndex
                        ? 'bg-[#FF4500]/20 border border-[#FF4500]/30'
                        : 'text-gray-400'
                    }`}
                  >
                    <span className={i === todayIndex ? 'text-white font-bold' : ''}>
                      {h.day}
                      {i === todayIndex && ' (Today)'}
                    </span>
                    <span className={i === todayIndex ? 'text-[#FF6B35] font-bold' : ''}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Online */}
            <div className="glassmorphism rounded-2xl p-6 text-center">
              <h2 className="text-xl font-black text-white mb-3">🛵 Order Online</h2>
              <p className="text-gray-400 text-sm mb-4">Order ahead and skip the line!</p>
              <a
                href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flame px-6 py-3 rounded-full text-white font-bold inline-flex items-center gap-2 justify-center w-full"
              >
                Order on Uber Eats →
              </a>
            </div>
          </div>

          {/* Contact Form + Map */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="glassmorphism rounded-2xl p-6">
              <h2 className="text-xl font-black text-white mb-4">✉️ Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Phone (optional)</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500] transition-colors"
                    placeholder="(416) 555-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF4500] transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-flame w-full py-3 rounded-xl text-white font-bold text-lg"
                >
                  Send Message 🌶️
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="glassmorphism rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7!2d-79.3369!3d43.7765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7d3541d99311%3A0x12424201ac79d093!2s2830%20Victoria%20Park%20Ave%2C%20North%20York%2C%20ON%20M2J%204A8!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Flamin' Frost Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
