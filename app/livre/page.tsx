import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { LivreSection } from '@/components/LivreSection';
import { OptInSection } from '@/components/OptInSection';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Libre d'être misandre | Lena Ben Ahmed",
  description: "Libre d'être misandre — un essai sociologique de Lena Ben Ahmed sur la montée en puissance de la misandrie dans le débat public.",
};

export default function LivrePage() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Header />
      <LivreSection />
      <TestimonialsCarousel />
      <section id="optin">
        <OptInSection />
      </section>
      <Footer />
    </main>
  );
}
