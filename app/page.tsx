'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MaDemarcheSection } from '@/components/MaDemarcheSection';
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
      <AboutSection />
      <MaDemarcheSection />
      <PressSection />
      <OptInSection />
      <section id="formations" className="bg-white py-16 md:py-24">
        {/* S'outiller Section - Learning Resources & Videos */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">S'outiller</h2>
          <p className="text-gray-600">Ressources, vidéos et contenus pour progresser</p>
        </div>
      </section>
      <TimeGeniusSection />
      <section id="livre" className="bg-white py-16 md:py-24">
        {/* Livre Section - "Libre d'être misandre" */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Libre d'être misandre</h2>
          <p className="text-gray-600">Un manifeste pour les femmes qui refusent les compromis</p>
        </div>
      </section>
      <section id="parcours" className="bg-white py-16 md:py-24">
        {/* Parcours Section - Timeline/Journey */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours</h2>
          <p className="text-gray-600">Découvrez mon chemin et mon évolution</p>
        </div>
      </section>
      <section id="retours" className="bg-white py-16 md:py-24">
        {/* Retours Section - Testimonials */}
        <TestimonialsCarousel />
      </section>
      <section id="reseaux" className="bg-white py-16 md:py-24">
        {/* Réseaux & Engagements Section */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Réseaux & Engagements</h2>
          <p className="text-gray-600">Connectez-vous et découvrez mes collaborations</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
