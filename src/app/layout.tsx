import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://80calculator.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexora Calculators - Fast, Free Online Calculators",
    template: "%s | Nexora Calculators",
  },
  description:
    "Free online calculators for work, money, health, and home projects. 80+ calculators with instant results — no signup required.",
  keywords: [
    "online calculator", "free calculator", "BMI calculator", "loan calculator",
    "mortgage calculator", "calorie calculator", "construction calculator",
    "investment calculator", "financial calculator", "health calculator",
  ],
  authors: [{ name: "Nexora Creation" }],
  creator: "Nexora Creation",
  publisher: "Nexora Creation",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nexora Calculators",
    description:
      "Fast, free online calculators for work, money, health, and home projects. 80+ calculators with instant results.",
    url: siteUrl,
    siteName: "Nexora Calculators",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Nexora Calculators" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Calculators",
    description:
      "Fast, free online calculators for work, money, health, and home projects.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: { canonical: siteUrl },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexora Creation",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Provider of free online calculators and tools.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nexora Calculators",
    url: siteUrl,
    description: "Free online calculators for work, money, health, and home projects.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${outfit.className} min-h-full flex flex-col bg-brand-dark text-white antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-white/[0.04] glass">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-gold text-black font-bold text-sm">
                N
              </div>
              <span className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                Nexora
              </span>
              <span className="text-xl font-light text-white/50">Calculators</span>
            </Link>
            <nav className="hidden items-center gap-6 sm:flex">
              <Link
                href="/"
                className="text-sm text-white/50 transition-colors hover:text-brand"
              >
                All Calculators
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-white/[0.04] mt-16">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <Link href="/" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-gold text-black font-bold text-xs">
                    N
                  </div>
                  <span className="text-lg font-bold text-white">Nexora</span>
                  <span className="text-lg font-light text-white/40">Calculators</span>
                </Link>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  Fast, free online calculators for work, money, health, and home projects.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Calculators</h4>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/bmi-calculator" className="text-sm text-white/40 hover:text-brand transition-colors">BMI Calculator</Link></li>
                  <li><Link href="/loan-payment-calculator" className="text-sm text-white/40 hover:text-brand transition-colors">Loan Calculator</Link></li>
                  <li><Link href="/calorie-calculator" className="text-sm text-white/40 hover:text-brand transition-colors">Calorie Calculator</Link></li>
                  <li><Link href="/compound-interest-calculator" className="text-sm text-white/40 hover:text-brand transition-colors">Compound Interest</Link></li>
                  <li><Link href="/mortgage-calculator" className="text-sm text-white/40 hover:text-brand transition-colors">Mortgage Calculator</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Categories</h4>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/category/construction-calculators" className="text-sm text-white/40 hover:text-brand transition-colors">Construction & Home</Link></li>
                  <li><Link href="/category/business-calculators" className="text-sm text-white/40 hover:text-brand transition-colors">Business & Profit</Link></li>
                  <li><Link href="/category/finance-calculators" className="text-sm text-white/40 hover:text-brand transition-colors">Finance & Loan</Link></li>
                  <li><Link href="/category/health-calculators" className="text-sm text-white/40 hover:text-brand transition-colors">Health & Fitness</Link></li>
                  <li><Link href="/category/work-time-calculators" className="text-sm text-white/40 hover:text-brand transition-colors">Work & Time</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Company</h4>
                <ul className="mt-3 space-y-2">
                  <li><Link href="/" className="text-sm text-white/40 hover:text-brand transition-colors">Home</Link></li>
                  <li><span className="text-sm text-white/40">Nexora Creation</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
              <p className="text-sm text-white/30">
                Calculators provide estimates only. Results are for informational purposes.
              </p>
              <p className="text-sm text-white/30">
                &copy; {new Date().getFullYear()} Nexora Creation. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
