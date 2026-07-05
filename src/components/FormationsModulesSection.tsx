const MODULES = [
  {
    label: 'Module Adultes',
    subtitle: 'Sensibilisation en entreprise et institutions',
    description:
      "Une formation pour comprendre les mécanismes des violences de genre : chiffres, définitions et outils juridiques pour identifier, prévenir et réagir face à un signalement.",
    themes: [
      'Continuum des violences',
      'Culture du viol',
      'Violences dans le couple et au travail',
      'Traiter un signalement',
    ],
    takeaway: 'QR code ressources',
  },
  {
    label: 'Module Adolescent·es',
    subtitle: 'Prévention en milieu scolaire',
    description:
      "Apprendre à repérer une relation violente, le sexisme et les cyberviolences, à travers des mises en situation interactives (réseaux sociaux, films, musique).",
    themes: [
      'Consentement et red flags',
      'Slutshaming',
      'Micro-agressions racistes et queerphobes',
      'Nudes et cyberviolences',
    ],
    takeaway: 'Violentomètre, autocollants, QR code ressources',
  },
  {
    label: 'Module Enfants',
    subtitle: 'Ateliers ludiques dès le plus jeune âge',
    description:
      "Des activités bienveillantes et adaptées à l'âge pour apprendre à comprendre et respecter les limites des autres, tout en affirmant les leurs.",
    themes: [
      'Consentement par le jeu',
      'Atelier « licorne du genre »',
      'Jeu contre les stéréotypes de genre',
    ],
    takeaway: null,
  },
];

export function FormationsModulesSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <p
          className="text-xs md:text-sm font-medium text-gray-500 mb-6"
          style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Nos formations
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight max-w-3xl">
          Trois modules, un objectif commun : agir contre les violences
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-12 md:mb-16 max-w-3xl leading-relaxed">
          Mes formations ne se limitent pas à une simple sensibilisation à l&apos;égalité. Elles visent une transformation réelle des comportements en combinant études de cas, chiffres-clés, mises en situation interactives et approche juridique, pour repartir avec des clés d&apos;action concrètes et adaptées à chaque public.
        </p>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 mb-12">
          {MODULES.map((module, index) => (
            <div
              key={module.label}
              className={`bg-white p-6 md:p-8 flex flex-col ${
                index > 0 ? 'border-t md:border-t-0 md:border-l border-gray-200' : ''
              }`}
            >
              <span
                className="text-xs font-semibold text-gray-500 mb-3"
                style={{ letterSpacing: '1.5px', textTransform: 'uppercase' }}
              >
                {module.label}
              </span>

              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4 leading-snug">
                {module.subtitle}
              </h3>

              <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-1">
                {module.description}
              </p>

              <ul className="space-y-2 mb-4">
                {module.themes.map((theme) => (
                  <li key={theme} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-1">—</span>
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>

              {module.takeaway && (
                <p className="text-xs text-gray-500 italic mt-auto pt-4 border-t border-gray-100">
                  Repartir avec : {module.takeaway}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Violences Intrafamiliales Callout */}
        <div className="bg-[#1a1a1a] p-8 md:p-12">
          <p
            className="text-xs md:text-sm font-medium text-gray-500 mb-6"
            style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
          >
            Expertise spécifique
          </p>

          <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 leading-tight max-w-2xl">
            Violences intrafamiliales : un enjeu pour les employeurs et les institutions
          </h3>

          <p className="text-base text-gray-200 mb-6 leading-relaxed max-w-3xl">
            Décrochage scolaire, manque de confiance en soi, absentéisme, isolement professionnel : les violences intrafamiliales fragilisent durablement le parcours scolaire et professionnel des personnes qui les subissent. Mes formations donnent aux entreprises, structures éducatives et institutions les outils pour identifier ces signaux, adapter leurs pratiques sans stigmatiser, et mettre en place des dispositifs de protection adaptés.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-gray-600 pl-4 max-w-3xl">
            Les adultes recevant des témoignages de violences ont un devoir légal de signalement afin de protéger les victimes et prévenir de nouveaux actes. Ce devoir est encadré par l&apos;article 434-3 du Code pénal, qui impose à toute personne ayant connaissance de violences sur un mineur ou une personne vulnérable d&apos;en informer les autorités compétentes.
          </p>
        </div>
      </div>
    </section>
  );
}
