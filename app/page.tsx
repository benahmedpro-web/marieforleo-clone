'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PressSection } from '@/components/PressSection';
import { OptInSection } from '@/components/OptInSection';
import { TimeGeniusSection } from '@/components/TimeGeniusSection';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="bg-white py-16 md:py-24">
        {/* Money Sprint CTA Section - Coming Soon */}
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Money Sprint Section - Placeholder</p>
        </div>
      </div>
      <AboutSection />
      <PressSection />
      <OptInSection />
      <TimeGeniusSection />
      <div className="bg-white py-16 md:py-24">
        {/* MarieTV Section - Coming Soon */}
        <div className="container mx-auto text-center">
          <p className="text-gray-400">MarieTV Section - Placeholder</p>
        </div>
      </div>
      <div className="bg-white py-16 md:py-24">
        {/* Book Section - Coming Soon */}
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Book Section - Placeholder</p>
        </div>
      </div>
      <div className="bg-white py-16 md:py-24">
        {/* Podcast Section - Coming Soon */}
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Podcast Section - Placeholder</p>
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="bg-white py-16 md:py-24">
        {/* Featured Guests Section - Coming Soon */}
        <div className="container mx-auto text-center">
          <p className="text-gray-400">Featured Guests Section - Placeholder</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
