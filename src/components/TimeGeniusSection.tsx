'use client';

import Link from 'next/link';

export function TimeGeniusSection() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-center">
          {/* Left Column: Placeholder Visual */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] bg-[#1a1a1a] flex items-center justify-center">
              <span className="font-serif italic text-3xl md:text-4xl text-gray-400">
                Formation
              </span>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex-1 w-full">
            <p
              className="text-xs md:text-sm font-medium text-gray-500 mb-6"
              style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              Formations
            </p>

            {/* Main Heading */}
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight"
            >
              Violences de genre en milieu professionnel
            </h2>

            {/* Subheading */}
            <p className="font-serif italic text-xl md:text-2xl text-gray-800 mb-8">
              Comprendre. Nommer. Agir
            </p>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed" style={{ maxWidth: '600px' }}>
              Une formation d&apos;une journée (ou demi-journée) pour donner à vos équipes les outils pour identifier les violences de genre, comprendre les mécanismes de domination, et construire des pratiques professionnelles plus justes.
            </p>

            {/* View All Formations Button */}
            <Link
              href="/formations"
              className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors duration-300"
            >
              Voir toutes les formations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
