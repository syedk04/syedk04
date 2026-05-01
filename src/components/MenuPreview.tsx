const featured = [
  { name: 'Samosas', price: '$3', emoji: '🥟', desc: 'Crispy, perfectly spiced', tag: 'South Asian' },
  { name: 'Channa Chat', price: '$5', emoji: '🫘', desc: 'Tangy chickpea delight', tag: 'South Asian' },
  { name: 'Beef Burrito', price: '$8', emoji: '🌯', desc: 'Loaded and delicious', tag: 'Mexican' },
  { name: 'Tacos', price: '$6', emoji: '🌮', desc: 'Fresh, vibrant flavours', tag: 'Mexican' },
  { name: 'Golgappa', price: '$4', emoji: '🫧', desc: 'Exploding with flavour', tag: 'South Asian' },
  { name: 'Nachos', price: '$7', emoji: '🫔', desc: 'Loaded to the max', tag: 'Mexican' },
]

export default function MenuPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {featured.map((item) => (
        <div key={item.name} className="glassmorphism rounded-2xl p-5 card-hover text-center group">
          <div className="text-4xl mb-3 group-hover:animate-float inline-block">{item.emoji}</div>
          <h3 className="font-bold text-white text-base">{item.name}</h3>
          <p className="text-gray-500 text-xs mt-1 mb-2">{item.desc}</p>
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              item.tag === 'South Asian'
                ? 'bg-[#FF4500]/20 text-[#FF6B35]'
                : 'bg-[#00D4FF]/20 text-[#00D4FF]'
            }`}>
              {item.tag}
            </span>
            <span className="font-black text-white">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
