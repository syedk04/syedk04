import type { Metadata } from 'next'
import ReviewsClient from '@/components/ReviewsClient'

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    "See what customers love about Flamin' Frost. Rated 4.9/5 on Google with 108 reviews and 4.4/5 on Uber Eats.",
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#FF4500] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#00D4FF] pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-both">Reviews</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Hear from our amazing community of food lovers
          </p>
          {/* Rating summary */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="glassmorphism-flame rounded-2xl px-8 py-4 text-center">
              <div className="text-4xl font-black text-gradient-flame">4.9</div>
              <div className="text-yellow-400 text-xl mt-1">★★★★★</div>
              <div className="text-gray-400 text-sm mt-1">108 Google Reviews</div>
            </div>
            <div className="glassmorphism-frost rounded-2xl px-8 py-4 text-center">
              <div className="text-4xl font-black text-gradient-frost">4.4</div>
              <div className="text-yellow-400 text-xl mt-1">★★★★½</div>
              <div className="text-gray-400 text-sm mt-1">11 Uber Eats Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsClient />
    </div>
  )
}
