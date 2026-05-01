import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    "Explore Flamin' Frost's full menu featuring South-Asian classics and Mexican favourites. Samosas, tacos, burritos, golgappa, biryani, and more from $1-$10.",
}

const southAsianItems = [
  { name: 'Samosas (2 pcs)', price: '$3.00', description: 'Crispy pastry filled with spiced potatoes and peas. A classic street snack.', emoji: '🥟', tag: 'Popular' },
  { name: 'Channa Chat', price: '$5.00', description: 'Tangy chickpea salad with tamarind chutney, yogurt, and spices. Explosion of flavour.', emoji: '🫘', tag: 'Must Try' },
  { name: 'Golgappa / Pani Puri (6 pcs)', price: '$4.00', description: 'Hollow crispy puri filled with spiced water, chickpeas, and chutney.', emoji: '🫧', tag: 'Popular' },
  { name: 'Spring Rolls (3 pcs)', price: '$4.00', description: 'Crispy rolls stuffed with seasoned vegetables and herbs.', emoji: '🌯', tag: null },
  { name: 'Mango Smoothie', price: '$4.00', description: 'Fresh mango blended with yogurt and a hint of cardamom. Refreshing and creamy.', emoji: '🥭', tag: 'Fan Fav' },
  { name: 'Biryani Bowl', price: '$8.00', description: 'Fragrant basmati rice cooked with aromatic spices and vegetables. Generous portion.', emoji: '🍚', tag: 'Bestseller' },
  { name: 'Aloo Tikki (2 pcs)', price: '$4.00', description: 'Spiced potato patties, pan-fried to golden perfection. Served with chutney.', emoji: '🥔', tag: null },
  { name: 'Dahi Puri (6 pcs)', price: '$5.00', description: 'Crispy puris topped with yogurt, chutneys, and spiced chickpeas.', emoji: '🫧', tag: null },
  { name: 'Masala Chai', price: '$2.00', description: 'Traditional spiced milk tea with ginger, cardamom, and cinnamon.', emoji: '☕', tag: null },
  { name: 'Lassi (Sweet/Salty)', price: '$3.50', description: 'Traditional yogurt-based drink, available sweet or salty.', emoji: '🥛', tag: null },
]

const mexicanItems = [
  { name: 'Burrito (Veg)', price: '$7.00', description: 'Large flour tortilla filled with rice, beans, cheese, salsa, and sour cream.', emoji: '🌯', tag: 'Bestseller' },
  { name: 'Burrito (Chicken)', price: '$8.00', description: 'Grilled chicken with rice, beans, cheese, and our signature sauces.', emoji: '🌯', tag: 'Popular' },
  { name: 'Tacos (2 pcs)', price: '$6.00', description: 'Soft corn tortillas with your choice of filling, topped with pico de gallo and lime.', emoji: '🌮', tag: 'Must Try' },
  { name: 'Quesadilla', price: '$6.00', description: 'Grilled flour tortilla filled with melted cheese, peppers, and onions.', emoji: '🧀', tag: null },
  { name: 'Nachos', price: '$7.00', description: 'Crispy tortilla chips loaded with cheese, jalapeños, salsa, guacamole, and sour cream.', emoji: '🫔', tag: 'Popular' },
  { name: 'Burrito Bowl', price: '$8.00', description: 'All the burrito goodness in a bowl — perfect for big appetites.', emoji: '🥗', tag: null },
  { name: 'Churros (3 pcs)', price: '$4.00', description: 'Crispy fried dough sticks dusted with cinnamon sugar. Served with dipping sauce.', emoji: '🍩', tag: 'Fan Fav' },
  { name: 'Horchata', price: '$3.50', description: 'Sweet rice milk drink with cinnamon and vanilla. Refreshing and unique.', emoji: '🥛', tag: null },
  { name: 'Mexican Street Corn', price: '$4.00', description: 'Grilled corn topped with cotija cheese, lime, chili, and mayo.', emoji: '��', tag: null },
  { name: 'Salsa & Chips', price: '$3.00', description: 'House-made salsa with crispy tortilla chips. Perfect starter.', emoji: '🥣', tag: null },
]

const fusionItems = [
  { name: 'Masala Fries', price: '$4.00', description: 'Crispy fries tossed in our secret masala spice blend. Indo-Mexican magic.', emoji: '🍟', tag: 'Unique' },
  { name: 'Samosa Taco', price: '$5.00', description: 'Samosa filling in a crispy taco shell. The ultimate fusion bite.', emoji: '🥟', tag: 'Signature' },
  { name: 'Mango Salsa Bowl', price: '$6.00', description: 'Fresh mango salsa with spiced rice and crispy chickpeas. Sweet, spicy, fresh.', emoji: '🥭', tag: 'New' },
]

function MenuSection({
  title,
  subtitle,
  items,
  gradientClass,
  borderClass,
  glassClass,
}: {
  title: string
  subtitle: string
  items: { name: string; price: string; description: string; emoji: string; tag: string | null }[]
  gradientClass: string
  borderClass: string
  glassClass: string
}) {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className={`text-3xl md:text-4xl font-black mb-2 ${gradientClass}`}>{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className={`${glassClass} rounded-2xl p-5 card-hover border ${borderClass}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white text-base">{item.name}</h3>
                    {item.tag && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        item.tag === 'Popular' || item.tag === 'Bestseller'
                          ? 'bg-[#FF4500]/20 text-[#FF6B35]'
                          : item.tag === 'Must Try' || item.tag === 'Signature'
                          ? 'bg-[#00D4FF]/20 text-[#00D4FF]'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
              <span className="font-bold text-lg text-white flex-shrink-0">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#FF4500] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[80px] opacity-15 bg-[#00D4FF] pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-gradient-both">Our Menu</span>
          </h1>
          <p className="text-gray-400 text-xl mb-6">Fresh, bold, and always delicious · $1–$10</p>
          <a
            href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flame px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2"
          >
            🛵 Order on Uber Eats
          </a>
        </div>
      </section>

      {/* Menu Content */}
      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-20">
        <MenuSection
          title="🌶️ South-Asian Delights"
          subtitle="Authentic flavours from the Indian subcontinent"
          items={southAsianItems}
          gradientClass="text-gradient-flame"
          borderClass="border-[#FF4500]/20"
          glassClass="glassmorphism-flame"
        />
        <MenuSection
          title="🌮 Mexican Favourites"
          subtitle="Bold and vibrant Mexican classics done right"
          items={mexicanItems}
          gradientClass="text-gradient-frost"
          borderClass="border-[#00D4FF]/20"
          glassClass="glassmorphism-frost"
        />
        <MenuSection
          title="✨ Fusion Specials"
          subtitle="Where both worlds collide — our signature creations"
          items={fusionItems}
          gradientClass="text-gradient-both"
          borderClass="border-white/10"
          glassClass="glassmorphism"
        />

        {/* Order CTA */}
        <div className="glassmorphism rounded-3xl p-10 text-center">
          <h3 className="text-3xl font-black mb-3">
            <span className="text-gradient-flame">Ready to Order?</span>
          </h3>
          <p className="text-gray-400 mb-6">Order online or visit us at one of our two locations!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/ca/store/flamin-frost-2830-victoria-park-ave/uniYPqMuQKipL7VUDOYY1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2 justify-center"
            >
              🛵 Order Now on Uber Eats
            </a>
            <Link
              href="/contact"
              className="btn-frost px-8 py-4 rounded-full text-white font-bold text-lg inline-flex items-center gap-2 justify-center"
            >
              📍 Visit Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
