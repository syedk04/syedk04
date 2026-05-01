'use client'

import { useEffect, useState } from 'react'

interface Review {
  author_name: string
  rating: number
  text: string
  time: number
  profile_photo_url?: string | null
}

interface ReviewsData {
  result: {
    name: string
    rating: number
    user_ratings_total: number
    reviews: Review[]
  }
  source: 'google' | 'static'
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? 'text-yellow-400' : 'text-gray-600'}>
          ★
        </span>
      ))}
    </div>
  )
}

function timeAgo(timestamp: number): string {
  const now = Date.now() / 1000
  const diff = now - timestamp
  if (diff < 86400) return 'Today'
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`
  if (diff < 2592000) return `${Math.floor(diff / 604800)} weeks ago`
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`
  return `${Math.floor(diff / 31536000)} years ago`
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.author_name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="glassmorphism rounded-2xl p-6 card-hover">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm"
          style={{ background: 'linear-gradient(135deg, #FF4500, #FF6B35)' }}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white truncate">{review.author_name}</p>
          <StarRating rating={review.rating} />
          <p className="text-gray-500 text-xs mt-0.5">{timeAgo(review.time)}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
    </div>
  )
}

export default function ReviewsClient() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block w-8 h-8 border-2 border-[#FF4500] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 mt-4">Loading reviews...</p>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="py-20 text-center text-gray-500">
        <p>Unable to load reviews right now. Please try again later.</p>
      </div>
    )
  }

  return (
    <section className="py-10 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        {data.source === 'static' && (
          <div className="glassmorphism-frost rounded-xl p-4 mb-8 text-center text-sm text-[#00D4FF]">
            ⭐ Showing curated customer reviews
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.result.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* Write a Review CTA */}
        <div className="mt-12 glassmorphism rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-black mb-3 text-white">Love Flamin&apos; Frost?</h3>
          <p className="text-gray-400 mb-6">Share your experience and help others discover us!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJMRldU9fTK4gRk9B5rAEJQhI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame px-6 py-3 rounded-full text-white font-bold inline-flex items-center gap-2 justify-center"
            >
              ⭐ Write a Google Review
            </a>
            <a
              href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-frost px-6 py-3 rounded-full text-white font-bold inline-flex items-center gap-2 justify-center"
            >
              🛵 Order on Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
