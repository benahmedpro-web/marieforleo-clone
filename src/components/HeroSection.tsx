'use client';

import { PlayIcon, ChevronDownIcon } from './icons';

export function HeroSection() {
  const handleFormationsClick = () => {
    // Scroll to formations section
    const formationsSection = document.getElementById('formations');
    if (formationsSection) {
      formationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        {/* Large heading */}
        <h1 className="text-3xl md:text-6xl font-serif font-normal text-white mb-8 md:mb-12 max-w-4xl leading-tight">
          Une expertise en genre pour penser, agir et{' '}
          <span className="text-coral italic">transmettre</span>
        </h1>

        {/* Formations button */}
        <button
          onClick={handleFormationsClick}
          className="flex items-center gap-3 px-6 py-3 rounded-full hover:opacity-80 transition-opacity duration-300 group"
          aria-label="Voir les formations"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Gray circle background */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-500"></div>
            {/* Play icon */}
            <div className="text-gray-500 group-hover:text-gray-400 transition-colors">
              <PlayIcon />
            </div>
          </div>
          <span className="text-white text-sm md:text-base">Voir les formations</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce-vertical text-gray-500 hover:text-gray-400 transition-colors cursor-pointer">
          <ChevronDownIcon />
        </div>
      </div>
    </section>
  );
}
