export function ParcoursSection() {
  const milestones = [
    {
      year: '2026 →',
      title: 'Activité indépendante internationale',
      subtitle: 'Genève, Suisse · Polynésie française',
    },
    {
      year: '2025',
      title: 'Livre — « Libre d\'être misandre »',
      subtitle: 'Essai féministe auto-édité',
    },
    {
      year: '2024',
      title: 'Master Études sur le Genre',
      subtitle: 'Université Lumière Lyon 2',
    },
    {
      year: '2021 — 2024',
      title: 'Coordination nationale — #NousToutes',
      subtitle: 'Lutte contre les violences sexistes et sexuelles',
    },
  ];

  return (
    <section className="bg-[#e8ddd0] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <p
          className="text-xs md:text-sm font-medium text-gray-500 mb-6"
          style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Parcours
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-12 md:mb-16 leading-tight max-w-2xl">
          Un parcours entre engagement et expertise
        </h2>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 mb-10">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 ${
                index > 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-200' : ''
              }`}
            >
              <p className="font-serif italic text-lg text-gray-800 mb-4">
                {milestone.year}
              </p>
              <p className="font-semibold text-gray-900 mb-2 leading-snug">
                {milestone.title}
              </p>
              <p className="text-sm text-gray-500 leading-snug">
                {milestone.subtitle}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors duration-300"
        >
          Voir le parcours complet
        </a>
      </div>
    </section>
  );
}
