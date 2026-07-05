import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { PresseMediasSection } from '@/components/PresseMediasSection';
import { PressSection } from '@/components/PressSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Presse & Médias | Lena Ben Ahmed',
  description: "Presse & Médias — les prises de parole de Lena Ben Ahmed dans les médias nationaux, ses réseaux et ses engagements.",
};

export default function PressePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PresseMediasSection />
      <PressSection />
      <Footer />
    </main>
  );
}
