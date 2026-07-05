'use client';

export function HeroSection() {
  const handleFormationsClick = () => {
    const formationsSection = document.getElementById('formations');
    if (formationsSection) {
      formationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#FBDFDB] flex flex-col items-center justify-center py-24 md:py-32">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        {/* Eyebrow tag */}
        <p
          className="text-xs md:text-sm font-medium mb-6"
          style={{
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#8B7355',
          }}
        >
          Formatrice · Autrice · Consultante
        </p>

        {/* Large heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] mb-10 max-w-3xl leading-tight">
          Une expertise en genre pour penser, agir et transmettre
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleFormationsClick}
            className="px-8 py-3 bg-[#1A1A1A] text-white text-sm font-semibold uppercase tracking-wide hover:bg-black transition-colors duration-300"
            aria-label="Voir les formations"
          >
            Voir les formations
          </button>
          <button
            onClick={handleAboutClick}
            className="px-8 py-3 bg-white text-[#1A1A1A] text-sm font-semibold uppercase tracking-wide border border-[#1A1A1A] hover:bg-gray-50 transition-colors duration-300"
            aria-label="En savoir plus"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
