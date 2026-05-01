import { NextResponse } from 'next/server'

const STATIC_REVIEWS = [
  {
    author_name: 'Priya S.',
    rating: 5,
    text: 'The samosas are incredible! Perfect crispy texture with amazing spiced filling. Best fusion spot in North York by far! Prices are unbeatable.',
    time: Date.now() / 1000 - 86400 * 3,
    profile_photo_url: null,
  },
  {
    author_name: 'Carlos M.',
    rating: 5,
    text: 'Burritos here are huge and super flavourful. The spice level is absolutely perfect. Prices are unbelievable for this quality. Coming back every week!',
    time: Date.now() / 1000 - 86400 * 7,
    profile_photo_url: null,
  },
  {
    author_name: 'Aisha K.',
    rating: 5,
    text: "Golgappa AND tacos in the same meal? Only at Flamin' Frost! Such a unique and delicious experience. Loved the mango smoothie too. 10/10!",
    time: Date.now() / 1000 - 86400 * 14,
    profile_photo_url: null,
  },
  {
    author_name: 'David L.',
    rating: 5,
    text: "Hidden gem in North York! The channa chat is out of this world. The fusion concept really works here. Staff is super friendly and portions are generous.",
    time: Date.now() / 1000 - 86400 * 21,
    profile_photo_url: null,
  },
  {
    author_name: 'Sarah T.',
    rating: 5,
    text: "Discovered this place at the Steeles Flea Market and immediately made the trip to the main location. The quesadillas and biryani are my new obsession!",
    time: Date.now() / 1000 - 86400 * 30,
    profile_photo_url: null,
  },
  {
    author_name: 'Raj P.',
    rating: 5,
    text: "Authentic South-Asian flavours combined with Mexican classics — who knew this would work so well? The masala fries are genius. Highly recommend!",
    time: Date.now() / 1000 - 86400 * 45,
    profile_photo_url: null,
  },
  {
    author_name: 'Maria G.',
    rating: 4,
    text: "Really good food at amazing prices. The samosa taco is a must-try — so creative! Wait time can be a bit long on weekends but totally worth it.",
    time: Date.now() / 1000 - 86400 * 60,
    profile_photo_url: null,
  },
  {
    author_name: 'Kevin W.',
    rating: 5,
    text: "Best $10 meal I've ever had. The biryani bowl is massive and absolutely delicious. The staff is always welcoming. This place deserves more recognition!",
    time: Date.now() / 1000 - 86400 * 75,
    profile_photo_url: null,
  },
]

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = 'ChIJMRldU9fTK4gRk9B5rAEJQhI'

  if (!apiKey) {
    return NextResponse.json({
      result: {
        name: "Flamin' Frost",
        rating: 4.9,
        user_ratings_total: 108,
        reviews: STATIC_REVIEWS,
        formatted_address: '2830 Victoria Park Ave, North York, ON M2J 4A8',
      },
      source: 'static',
    })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.status === 'OK') {
      return NextResponse.json({ result: data.result, source: 'google' })
    }

    return NextResponse.json({
      result: {
        name: "Flamin' Frost",
        rating: 4.9,
        user_ratings_total: 108,
        reviews: STATIC_REVIEWS,
      },
      source: 'static',
    })
  } catch {
    return NextResponse.json({
      result: {
        name: "Flamin' Frost",
        rating: 4.9,
        user_ratings_total: 108,
        reviews: STATIC_REVIEWS,
      },
      source: 'static',
    })
  }
}
