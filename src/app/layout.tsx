import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://easycalculatornex.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Easy Calculator Nex - Fast, Free Online Calculators",
    template: "%s | Easy Calculator Nex",
  },
  description:
    "Free online calculators for work, money, health, and home projects. 90+ calculators with instant results — no signup required.",
  keywords: [
    "online calculator", "free calculator", "BMI calculator", "loan calculator",
    "mortgage calculator", "calorie calculator", "construction calculator",
    "investment calculator", "financial calculator", "health calculator",
    "age calculator", "percentage calculator", "unit converter", "salary calculator",
    "compound interest", "concrete calculator", "body fat calculator", "ovulation calculator",
  ],
  authors: [{ name: "Easy Calculator Nex" }],
  creator: "Easy Calculator Nex",
  publisher: "Easy Calculator Nex",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Easy Calculator Nex",
    description:
      "Fast, free online calculators for work, money, health, and home projects. 90+ calculators with instant results.",
    url: siteUrl,
    siteName: "Easy Calculator Nex",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/og-image.svg`, width: 1200, height: 630, alt: "Easy Calculator Nex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Calculator Nex",
    description:
      "Fast, free online calculators for work, money, health, and home projects.",
    images: [`${siteUrl}/og-image.svg`],
  },
  alternates: { canonical: siteUrl },
  category: "technology",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Easy Calculator Nex",
    url: siteUrl,
    description: "Provider of free online calculators and tools.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Easy Calculator Nex",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="Easy Calculator Nex" />
        <meta name="google-site-verification" content="VkF8mI-MiJ5pBGYyMqFrHFqE5A4ZIOgx3xlsZ_qR1bc" />
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
        className={`${outfit.className} min-h-full flex flex-col bg-black text-white antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <Image src="/logo.png" alt="Easy Calculator Nex" width={180} height={35} className="h-auto w-[180px] rounded-xl" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              <Link href="/" className="px-3 py-2 text-sm text-white/60 hover:text-brand rounded-lg hover:bg-white/5 transition-all">
                Home
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-sm text-white/60 hover:text-brand rounded-lg hover:bg-white/5 transition-all flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
                  Categories
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full right-0 mt-1 w-64 rounded-xl border border-white/[0.06] bg-black p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu">
                  {categories.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all"
                      role="menuitem"
                    >
                      <span className="text-base" aria-hidden="true">{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/#all-calculators" className="px-3 py-2 text-sm text-white/60 hover:text-brand rounded-lg hover:bg-white/5 transition-all">
                All Calculators
              </Link>
              <Link href="/faq" className="px-3 py-2 text-sm text-white/60 hover:text-brand rounded-lg hover:bg-white/5 transition-all">
                FAQ
              </Link>
              <Link href="/blog" className="px-3 py-2 text-sm text-white/60 hover:text-brand rounded-lg hover:bg-white/5 transition-all">
                Blog
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-light px-4 py-2 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-95"
              >
                Get Started
              </Link>

              {/* Mobile hamburger */}
              <details className="md:hidden relative group">
                <summary className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-brand hover:border-brand/30 transition-all cursor-pointer list-none [&::-webkit-details-marker]:hidden" aria-label="Toggle menu">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </summary>
                <div className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-white/[0.06] bg-black p-2 shadow-2xl z-50" role="menu">
                  <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all" role="menuitem">Home</Link>
                  <Link href="/blog" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all" role="menuitem">Blog</Link>
                  <Link href="/faq" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all" role="menuitem">FAQ</Link>
                  <div className="h-px bg-white/[0.06] my-1" />
                  <p className="px-3 py-1.5 text-xs text-white/30 uppercase tracking-wider">Categories</p>
                  {categories.map(cat => (
                    <Link key={cat.slug} href={`/category/${cat.slug}`} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all" role="menuitem">
                      <span className="text-base" aria-hidden="true">{cat.icon}</span>
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-white/[0.06] mt-20" role="contentinfo">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <Link href="/" className="flex items-center gap-2.5">
                  <Image src="/logo.png" alt="Easy Calculator Nex" width={180} height={35} className="h-auto w-[180px] rounded-lg" />
                </Link>
                <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
                  Fast, free online calculators for work, money, health, and home projects. 90+ tools, instant results.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest">Calculators</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/bmi-calculator" className="text-sm text-white/50 hover:text-brand transition-colors">BMI Calculator</Link></li>
                  <li><Link href="/loan-payment-calculator" className="text-sm text-white/50 hover:text-brand transition-colors">Loan Payment</Link></li>
                  <li><Link href="/calorie-calculator" className="text-sm text-white/50 hover:text-brand transition-colors">Calorie Calculator</Link></li>
                  <li><Link href="/compound-interest-calculator" className="text-sm text-white/50 hover:text-brand transition-colors">Compound Interest</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest">Categories</h4>
                <ul className="mt-4 space-y-2.5">
                  {categories.slice(0, 5).map(cat => (
                    <li key={cat.slug}>
                      <Link href={`/category/${cat.slug}`} className="text-sm text-white/50 hover:text-brand transition-colors">
                        {cat.icon} {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest">Company</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/" className="text-sm text-white/50 hover:text-brand transition-colors">Home</Link></li>
                  <li><Link href="/blog" className="text-sm text-white/50 hover:text-brand transition-colors">Blog</Link></li>
                  <li><Link href="/faq" className="text-sm text-white/50 hover:text-brand transition-colors">FAQ</Link></li>
                  <li><span className="text-sm text-white/50">Easy Calculator Nex</span></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
              <p className="text-xs text-white/30">Calculators provide estimates only. Results are for informational purposes.</p>
              <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Easy Calculator Nex. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
