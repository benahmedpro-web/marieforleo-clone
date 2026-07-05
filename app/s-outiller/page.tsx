import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { HashScrollHandler } from '@/components/HashScrollHandler';
import { SOutillerSection } from '@/components/SOutillerSection';
import { RessourcesSection } from '@/components/RessourcesSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "S'outiller | Lena Ben Ahmed",
  description: "Vidéos, analyses et décryptages pour comprendre les rapports de domination et s'outiller collectivement pour lutter contre eux.",
};

export default function SOutillerPage() {
  return (
    <main className="min-h-screen">
      <HashScrollHandler />
      <Header />
      <SOutillerSection />
      <section id="ressources">
        <RessourcesSection />
      </section>
      <Footer />
    </main>
  );
}
