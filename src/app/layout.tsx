import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nexora Calculators - Fast, Free Online Calculators",
    template: "%s | Nexora Calculators",
  },
  description: "Free online calculators for work, money, health, and home projects. 80+ calculators with instant results.",
  openGraph: {
    title: "Nexora Calculators",
    description: "Fast, free online calculators for work, money, health, and home projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${outfit.className} min-h-full flex flex-col bg-brand-dark text-white antialiased`}>
        <header className="border-b border-white/10">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-brand">Nexora</span>
              <span className="text-2xl font-light text-white">Calculators</span>
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/60 sm:px-6 lg:px-8">
            <p>Calculators provide estimates only. Results are for informational purposes.</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Nexora Creation. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
