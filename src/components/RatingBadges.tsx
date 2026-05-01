export default function RatingBadges() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <div className="glassmorphism-flame rounded-2xl px-6 py-3 flex items-center gap-3">
        <div>
          <div className="flex text-yellow-400 text-lg leading-none">★★★★★</div>
          <div className="text-xs text-gray-400 mt-0.5">108 Google Reviews</div>
        </div>
        <div className="text-3xl font-black text-gradient-flame">4.9</div>
      </div>
      <div className="glassmorphism-frost rounded-2xl px-6 py-3 flex items-center gap-3">
        <div>
          <div className="flex text-yellow-400 text-lg leading-none">★★★★½</div>
          <div className="text-xs text-gray-400 mt-0.5">11 Uber Eats Reviews</div>
        </div>
        <div className="text-3xl font-black text-gradient-frost">4.4</div>
      </div>
      <div className="glassmorphism rounded-2xl px-6 py-3 flex items-center gap-3">
        <div className="text-2xl font-black text-[#FF6B35]">$1–$10</div>
        <div className="text-xs text-gray-400">Price Range</div>
      </div>
    </div>
  )
}
