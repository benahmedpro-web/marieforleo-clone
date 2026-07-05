import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lena Ben Ahmed | Formatrice, Autrice, Consultante en études de genre",
  description: "Formatrice spécialisée en études de genre. Découvrez mes formations, mon essai 'Libre d'être misandre' et mes engagements féministes contre les violences et discriminations.",
  keywords: ["études de genre", "féminisme", "formations", "autrice", "consultante", "violences", "discriminations"],
  openGraph: {
    title: "Lena Ben Ahmed | Formatrice, Autrice, Consultante en études de genre",
    description: "Formatrice spécialisée en études de genre. Découvrez mes formations, mon essai 'Libre d'être misandre' et mes engagements féministes contre les violences et discriminations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
