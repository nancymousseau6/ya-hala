import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ya-Hala – Restaurant Libanais & Pizza à Cotonou",
  description:
    "Ya-Hala : restaurant libanais et pizzeria à Cotonou, Bénin. Mezze authentiques, pizzas artisanales et salades fraîches par le Chef Ramzi. Rue 108, Avenue Steinmetz.",
  keywords: "restaurant libanais Cotonou, Ya-Hala, pizza Cotonou, mezze, Chef Ramzi, Bénin",
  openGraph: {
    title: "Ya-Hala – Restaurant Libanais & Pizza à Cotonou",
    description: "Cuisine libanaise authentique et pizzas artisanales à Cotonou par le Chef Ramzi.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-inter`}>
        {children}
      </body>
    </html>
  );
}
