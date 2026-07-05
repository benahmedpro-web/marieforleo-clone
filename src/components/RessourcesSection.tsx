const CATEGORIES = [
  { type: 'Vidéo', count: 2 },
  { type: 'Article', count: 2 },
  { type: 'Post', count: 2 },
];

export function RessourcesSection() {
  const cards = CATEGORIES.flatMap((category) =>
    Array.from({ length: category.count }, (_, i) => ({
      type: category.type,
      key: `${category.type}-${i}`,
    }))
  );

  return (
    <section className="bg-[#faf7f3] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <p
          className="text-xs md:text-sm font-medium text-gray-500 mb-6"
          style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Ressources
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4 leading-tight max-w-2xl">
          Vidéos, articles et posts pour s&apos;outiller
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl">
          Cette bibliothèque de ressources s&apos;enrichit progressivement. Revenez bientôt pour découvrir les premières publications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="border border-gray-200 bg-white p-6 flex flex-col justify-between min-h-[160px]"
            >
              <span
                className="text-xs font-semibold text-gray-500"
                style={{ letterSpacing: '1.5px', textTransform: 'uppercase' }}
              >
                {card.type}
              </span>
              <div>
                <p className="font-serif text-xl text-gray-400 mb-1">À venir</p>
                <p className="text-sm text-gray-400">Bientôt disponible</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
