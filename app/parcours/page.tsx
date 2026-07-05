import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { ParcoursSection } from '@/components/ParcoursSection';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Parcours | Lena Ben Ahmed',
  description: "Le parcours de Lena Ben Ahmed : engagement associatif, formations universitaires et expertise en études de genre.",
};

export default function ParcoursPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ParcoursSection />
      <Footer />
    </main>
  );
}
