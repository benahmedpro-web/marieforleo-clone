import Image from 'next/image';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section id="about" className="bg-about py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center md:items-start">
          {/* Right Column: Text Content */}
          <div className="flex-1 w-full">
            {/* Greeting */}
            <p
              className="text-sm font-medium text-brown mb-6"
              style={{
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Formatrice · Autrice · Consultante
            </p>

            {/* Heading */}
            <h2
              className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900"
              style={{
                fontSize: 'clamp(48px, 10vw, 64px)',
              }}
            >
              Lena Ben Ahmed
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              J'accompagne les entreprises, les institutions, les associations et les établissements scolaires dans la prévention des violences sexistes et sexuelles, des discriminations racistes et LGBTQIA+phobes, à travers des formations, des ateliers et des accompagnements fondés sur les sciences sociales.
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Diplômée d'un master en Sciences Humaines et Sociales, spécialisée en études sur le genre, et d'une licence de psychologie, mon parcours conjugue recherche universitaire, expérience de terrain et transmission.
            </p>

            {/* Learn More Link */}
            <Link
              href="/parcours"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              EN SAVOIR PLUS
            </Link>
          </div>

          {/* Left Column: Image */}
          <div className="w-full md:w-96 md:flex-shrink-0">
            <div className="relative w-full aspect-square rounded overflow-hidden">
              <Image
                src="/images/lena-profile.jpg"
                alt="Lena Ben Ahmed"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-about {
          background-color: #e8ddd0;
        }

        .text-brown {
          color: #8b7355;
        }
      `}</style>
    </section>
  );
}
