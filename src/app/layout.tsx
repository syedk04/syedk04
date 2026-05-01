import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://flaminfrost.ca'),
  title: {
    default: "Flamin' Frost | South-Asian & Mexican Fusion | North York, Toronto",
    template: "%s | Flamin' Frost",
  },
  description:
    "Experience the best South-Asian and Mexican food fusion in North York, Toronto. Samosas, tacos, burritos, channa chat, golgappa, and more. 4.9★ on Google. Located at 2830 Victoria Park Ave.",
  keywords: [
    "Flamin' Frost",
    'South Asian Mexican fusion',
    'fusion restaurant North York',
    'restaurant Toronto',
    'samosas tacos North York',
    'Victoria Park restaurant',
    'best fusion food Toronto',
    'affordable restaurant North York',
    'channa chat golgappa Toronto',
    '404 Steeles Flea Market food',
  ],
  authors: [{ name: "Flamin' Frost Restaurant" }],
  creator: "Flamin' Frost",
  publisher: "Flamin' Frost",
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://flaminfrost.ca',
    siteName: "Flamin' Frost",
    title: "Flamin' Frost | South-Asian & Mexican Fusion Restaurant",
    description:
      'Where Heat Meets Cool. South-Asian and Mexican food fusion in North York, Toronto. 4.9★ Google rating.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Flamin' Frost Restaurant",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Flamin' Frost | South-Asian & Mexican Fusion",
    description:
      'Where Heat Meets Cool. Best fusion food in North York, Toronto.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://flaminfrost.ca',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Flamin' Frost",
  image: 'https://flaminfrost.ca/og-image.jpg',
  '@id': 'https://flaminfrost.ca',
  url: 'https://flaminfrost.ca',
  telephone: '(416) 495-0464',
  priceRange: '$',
  servesCuisine: ['South Asian', 'Mexican', 'Fusion'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2830 Victoria Park Ave',
    addressLocality: 'North York',
    addressRegion: 'ON',
    postalCode: 'M2J 4A8',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.7765,
    longitude: -79.3347,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '108',
    bestRating: '5',
    worstRating: '1',
  },
  menu: 'https://flaminfrost.ca/menu',
  hasMenu: 'https://flaminfrost.ca/menu',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="font-sans bg-[#0D0D0D] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
