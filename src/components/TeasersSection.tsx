const TEASERS = [
  {
    label: "S'outiller",
    title: 'Des savoirs féministes accessibles à toutes et tous',
    description: "Vidéos, analyses et décryptages pour comprendre les rapports de domination et s'outiller collectivement.",
    href: '/s-outiller',
  },
  {
    label: 'Formations',
    title: 'Violences de genre en milieu professionnel',
    description: 'Des modules pour adultes, adolescent·es et enfants, pour agir concrètement contre les violences.',
    href: '#formations',
  },
  {
    label: 'Livre',
    title: "Libre d'être misandre",
    description: 'Un manifeste pour les femmes qui refusent les compromis.',
    href: '#livre',
  },
  {
    label: 'Presse & Médias',
    title: 'Réseaux & engagements',
    description: 'Mes collaborations et partenariats avec les acteurs de la lutte contre les violences de genre.',
    href: '#presse',
  },
];

export function TeasersSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">
          {TEASERS.map((teaser, index) => (
            <a
              key={teaser.label}
              href={teaser.href}
              className={`group flex flex-col p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300 ${
                index > 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-200' : ''
              }`}
            >
              <span
                className="text-xs font-semibold text-gray-500 mb-4"
                style={{ letterSpacing: '1.5px', textTransform: 'uppercase' }}
              >
                {teaser.label}
              </span>

              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-3 leading-snug flex-1">
                {teaser.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {teaser.description}
              </p>

              <span className="text-sm font-semibold text-gray-900 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                Découvrir →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
