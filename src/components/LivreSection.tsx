'use client';

import { useState } from 'react';
import Image from 'next/image';

const EXTRACTS = [
  "« Parce que la misandrie, de près ou de loin, s'est peut-être déjà présentée à vous. Parce qu'elle questionne, dérange ou intrigue, mais aussi parce qu'elle peut offrir une autre manière de lire le monde, de s'y situer et d'y résister. Parce que les mots, à la fois outils de compréhension, d'identification et de transformation, possèdent ce pouvoir de dévoiler, d'apaiser et de guérir. J'ai écrit ce livre avant tout pour nous : pour que nous puissions nous emparer de nos propres récits. »",
  "« Adopter une posture misandre, c'est aussi une manière de rappeler aux hommes cisgenres la médiocrité dont ils font humainement preuve, et la violence de leurs contributions au maintien du système de domination. [...] La misandrie pousse à une responsabilisation des hommes cisgenres, une scission nécessaire pour provoquer une prise de conscience des privilèges sociaux dont ils bénéficient et une remise en question des comportements qui en découlent. »",
  "« En centralisant les récits et les réflexions autour de la misandrie, nous créons un corpus commun qui permet à chacun·e de se reconnaître dans les expériences des autres. Chaque prise de conscience personnelle enrichit la compréhension collective et aide à tracer un chemin vers une société nouvelle. »",
];

export function LivreSection() {
  const [showExtracts, setShowExtracts] = useState(false);

  return (
    <section className="bg-[#e8ddd0] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Book Cover */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-sm" style={{ transform: 'rotate(-4deg)' }}>
              <Image
                src="/images/livre-cover.png"
                alt="Libre d'être misandre — Lena Ben Ahmed"
                width={520}
                height={520}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2">
            <p
              className="text-xs md:text-sm font-medium text-gray-500 mb-6"
              style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              Essai sociologique · 2025
            </p>

            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Libre d&apos;être misandre
            </h2>

            <p className="font-serif italic text-lg text-gray-800 mb-8 pl-4 border-l-2 border-gray-900">
              « L&apos;écrire m&apos;a permis de déposer une colère sans cesse ravivée. »
            </p>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              De Tanaland aux procès de Mazan, en passant par des théoriciennes féministes emblématiques, <em>Libre d&apos;être misandre</em> explore la montée en puissance d&apos;un phénomène qui bouscule les masculinistes et pas que. Comment la misandrie s&apos;est-elle imposée dans le débat public ? Cet essai interroge la manière dont elle transforme les rapports de force et redéfinit la place de la colère dans les luttes féministes contemporaines.
            </p>

            <p className="text-base text-gray-900 font-semibold mb-10 leading-relaxed">
              En mêlant sociologie, pop culture et faits d&apos;actualité, Lena Ben Ahmed analyse les usages, significations, réceptions et effets de la misandrie. Entre les discours médiatiques qui la diabolisent et les féministes qui la revendiquent, <em>Libre d&apos;être misandre</em> plonge au cœur d&apos;une colère qui ne s&apos;excuse plus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="#optin"
                className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors duration-300 text-center"
              >
                Commander le livre
              </a>
              <button
                type="button"
                onClick={() => setShowExtracts((prev) => !prev)}
                className="inline-block px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 text-sm font-semibold uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-colors duration-300 text-center"
              >
                {showExtracts ? 'Masquer les extraits' : 'Lire des extraits'}
              </button>
            </div>

            {showExtracts && (
              <div className="mt-8 space-y-6 border-t border-gray-400/40 pt-8">
                {EXTRACTS.map((extract, index) => (
                  <p key={index} className="font-serif italic text-base text-gray-800 leading-relaxed">
                    {extract}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
