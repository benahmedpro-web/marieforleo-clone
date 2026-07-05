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
  title: "Marie Forleo | #1 NYT Bestselling Author & Founder of B-School",
  description: "Create a business and life you love. Learn from Marie Forleo, #1 NYT bestselling author and founder of B-School.",
  keywords: ["entrepreneurship", "business", "personal development", "coaching"],
  openGraph: {
    title: "Marie Forleo | #1 NYT Bestselling Author & Founder of B-School",
    description: "Create a business and life you love.",
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
