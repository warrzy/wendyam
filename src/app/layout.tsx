import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WENDYAM FINANCE | Conseil & accompagnement financier à Ouagadougou",
    template: "%s | WENDYAM FINANCE",
  },
  description:
    "Cabinet de conseil et d’accompagnement financier (non bancaire) à Ouagadougou. Structuration d’entreprises, projets d’investissement, mobilisation de financement. Confidentialité, transparence, rigueur.",
  metadataBase: new URL("https://wendyam-finance.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden="true" className="wf-animated-bg" />
        <div aria-hidden="true" className="wf-bg-overlay" />
        <TopBar />
        <Header />
        <div className="min-h-[calc(100vh-1px)]">
          <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
