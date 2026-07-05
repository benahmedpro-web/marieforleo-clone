'use client';

import Image from 'next/image';

export function TimeGeniusSection() {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-center">
          {/* Left Column: Text Content */}
          <div className="flex-1 w-full">
            {/* Main Heading */}
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900"
              style={{
                fontSize: 'clamp(32px, 8vw, 48px)',
              }}
            >
              Time Genius
            </h2>

            {/* Subheading */}
            <h3
              className="font-serif text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-800"
              style={{
                fontSize: 'clamp(28px, 6vw, 40px)',
                fontWeight: 400,
              }}
            >
              Take Back Your Time. Get Back Your Life.
            </h3>

            {/* Description Paragraph */}
            <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed" style={{ lineHeight: '1.8', maxWidth: '600px' }}>
              In this comprehensive course, you'll discover proven strategies to reclaim your time,
              eliminate overwhelm, and design a life that truly reflects your values and priorities.
              Learn how to work smarter, not harder, and create space for what matters most.
            </p>

            {/* Get the Course Button */}
            <button
              className="inline-block px-8 md:px-10 py-3 md:py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #00CED1 0%, #0099CC 100%)',
              }}
              aria-label="Get the Time Genius course"
            >
              Get the Course
            </button>
          </div>

          {/* Right Column: Image with Badge */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square md:aspect-auto rounded-lg overflow-hidden">
              {/* Badge - Absolute positioned */}
              <div
                className="absolute top-4 right-4 z-10 px-3 py-2 rounded-full text-xs font-bold text-white uppercase"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(4px)',
                  fontSize: '12px',
                  letterSpacing: '1px',
                }}
              >
                Time Genius
              </div>

              {/* Image */}
              <Image
                src="/images/marie-desk-laptop.jpg"
                alt="Marie Forleo at desk with laptop - Time Genius course"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <style jsx>{`
        section {
          background: linear-gradient(135deg, #E8DDD0 0%, #F5F5F5 100%);
        }
      `}</style>
    </section>
  );
}
