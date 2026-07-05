import Image from 'next/image';

export function PresseMediasSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <p
          className="text-xs md:text-sm font-medium text-gray-500 mb-6"
          style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Presse & Médias
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 leading-tight max-w-2xl">
          Une voix relayée dans les médias nationaux
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-12 md:mb-16 max-w-2xl leading-relaxed">
          Militante de terrain depuis mes 19 ans, mes prises de parole lors des mobilisations #NousToutes ont été reprises par plusieurs médias nationaux.
        </p>

        {/* Le Monde citation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[9/16] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/presse-le-monde.jpg"
              alt="Citation de Lena Ben Ahmed dans Le Monde lors d'une manifestation #NousToutes"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span
              className="inline-block text-xs font-semibold text-gray-500 mb-4"
              style={{ letterSpacing: '1.5px', textTransform: 'uppercase' }}
            >
              Le Monde
            </span>
            <blockquote className="font-serif italic text-2xl md:text-3xl text-gray-900 leading-snug mb-4 pl-4 border-l-2 border-gray-900">
              « Je veux vivre dans un monde où je n&apos;ai pas peur, un monde où la violence n&apos;est pas impunie. Cette société, je la veux maintenant, pas pour les filles du XXII<sup>e</sup> siècle, je la veux pour moi et pour nous toutes. »
            </blockquote>
            <p className="text-sm text-gray-600">
              Propos recueillis lors d&apos;une mobilisation #NousToutes, place de la Nation, Paris.
            </p>
          </div>
        </div>

        {/* Instagram callout */}
        <div className="bg-[#faf7f3] border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">
              Retrouvez mes prises de parole médiatiques
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Interviews, reportages et interventions sont archivés dans mes stories Instagram à la une &laquo;&nbsp;presse&nbsp;&raquo;.
            </p>
          </div>
          <a
            href="https://www.instagram.com/benahmed.lena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors duration-300 text-center whitespace-nowrap"
          >
            @benahmed.lena
          </a>
        </div>
      </div>
    </section>
  );
}
