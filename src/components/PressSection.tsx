import Image from 'next/image';

export function PressSection() {
  const logos = [
    {
      name: 'Forbes',
      src: '/images/logos/forbes.svg',
      alt: 'Forbes',
    },
    {
      name: 'NY Times',
      src: '/images/logos/nytimes.svg',
      alt: 'New York Times',
    },
    {
      name: 'goop',
      src: '/images/logos/goop.svg',
      alt: 'goop',
    },
    {
      name: 'Today Show',
      src: '/images/logos/today-show.svg',
      alt: 'Today Show',
    },
    {
      name: 'Oprah',
      src: '/images/logos/oprah.svg',
      alt: 'Oprah',
    },
    {
      name: "Harper's Bazaar",
      src: '/images/logos/harpers-bazaar.svg',
      alt: "Harper's Bazaar",
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-center mb-12 md:mb-16 lg:mb-20">
          You Might Have Seen Me On
        </h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-full flex items-center justify-center transition-opacity duration-300 hover:opacity-80 group"
            >
              <div className="relative w-full max-w-[120px] aspect-square flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={50}
                  className="w-auto h-auto max-h-[50px] object-contain filter brightness-0 invert group-hover:brightness-110 transition-all duration-300"
                  priority={index < 3}
                />
              </div>
            </div>
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
