'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Un bouquin qui va faire trembler les virilistes fragiles et respirer celles qui n\'ont plus envie de s\'excuser d\'exister. "Libre d\'être misandre", c\'est pas une punchline, c\'est un droit de réponse. Un cri politique et intime.',
    author: 'Une lectrice',
  },
  {
    quote: 'Enfin, quelqu\'un qui nomme les choses sans culpabilité. Ce livre m\'a libérée d\'une charge mentale que je traînais depuis trop longtemps. Radical, intelligent, nécessaire.',
    author: 'Marie K.',
  },
  {
    quote: 'C\'est un manifeste pour toutes celles qui en avaient marre de sourire poliment face à l\'inacceptable. Lena parle notre langue et nos frustrations deviennent des lignes de force.',
    author: 'Sophie B.',
  },
  {
    quote: 'Un livre que je recommande à ma fille, à ma mère et à toutes mes amies. Parce que refuser de placer les hommes au centre, c\'est un acte de résistance que j\'assume entièrement.',
    author: 'Ambre T.',
  },
];

export function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading and Subheading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900"
            style={{
              fontSize: 'clamp(36px, 8vw, 56px)',
            }}
          >
            Vos retours
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Libre d'être misandre
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex flex-col items-center">
          {/* Testimonial Slide */}
          <div
            className="w-full max-w-3xl transition-opacity duration-300 ease-in-out"
            style={{
              opacity: 1,
            }}
          >
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <p className="text-gray-900 font-semibold mb-6">
                {currentTestimonial.author}
              </p>

              {/* Read More Link */}
              <Link
                href="/testimonials"
                className="inline-block text-sm font-semibold text-gray-900 border-b-2 border-gray-900 hover:text-gray-700 hover:border-gray-700 transition-colors duration-200"
              >
                Lire plus de retours
              </Link>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mt-12 md:mt-16">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white text-gray-900 transition-colors duration-200"
            >
              <ArrowLeftIcon />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={currentSlide === index ? 'page' : undefined}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-gray-900 w-3'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white text-gray-900 transition-colors duration-200"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gray-50 {
          background-color: #f5f5f5;
        }
      `}</style>
    </section>
  );
}
