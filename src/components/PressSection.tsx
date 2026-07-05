export function PressSection() {
  const partnerships = [
    {
      name: '#NousToutes',
      description: 'Coordination nationale',
      url: 'https://noustoutes.org',
    },
    {
      name: 'Lyon 2',
      description: 'Master 2 Sociologie — Genre',
      url: 'https://www.univ-lyon2.fr',
    },
    {
      name: 'CIDFF Aude',
      description: 'Interventions scolaires',
      url: 'https://www.cidff.fr',
    },
    {
      name: 'Empow\'Her',
      description: 'Événements & ateliers',
      url: '#',
    },
    {
      name: 'Les Liens Qui Libèrent',
      description: 'Co-autrice',
      url: 'https://www.editionsliensquilibèrent.fr',
    },
    {
      name: 'Réseau VIF',
      description: 'Violences Intrafamiliales',
      url: '#',
    },
    {
      name: 'Papeete',
      description: 'Occitanie Formation régionale',
      url: '#',
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-center mb-12 md:mb-16 lg:mb-20">
          RÉSEAUX & ENGAGEMENTS
        </h2>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {partnerships.map((partnership, index) => (
            <a
              key={index}
              href={partnership.url}
              target={partnership.url !== '#' ? '_blank' : undefined}
              rel={partnership.url !== '#' ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-start justify-start p-6 md:p-8 border border-gray-600 rounded-lg hover:border-white transition-all duration-300 hover:bg-gray-900 cursor-pointer"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                {partnership.name}
              </h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {partnership.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-dark {
          background-color: #1a1a1a;
        }
      `}</style>
    </section>
  );
}
