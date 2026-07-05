import Image from 'next/image';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="bg-about py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* Left Column: Text Content */}
          <div className="flex-1 w-full">
            {/* Greeting */}
            <p
              className="text-sm font-medium text-brown mb-6"
              style={{
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Heya!
            </p>

            {/* Heading */}
            <h2
              className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900"
              style={{
                fontSize: 'clamp(48px, 10vw, 64px)',
              }}
            >
              I'm Marie.
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              I'm a business coach and digital entrepreneur on a mission to help
              you build a life and business you love. Through my programs,
              courses, and community, I empower ambitious people to create
              impact, earn more, and live fuller lives.
            </p>

            {/* Learn More Link */}
            <Link
              href="/about"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-square md:aspect-auto md:h-96 lg:h-full rounded overflow-hidden">
              <Image
                src="/images/marie-photo.jpg"
                alt="Marie Forleo"
                width={500}
                height={600}
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
