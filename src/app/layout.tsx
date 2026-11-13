import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sysgames Software Development Company | Sysgames Solutions Provider",
  description: "Leading Sysgames software development company offering casino, sportsbook, sweepstakes, and prediction market solutions with 100% platform ownership and zero GGR share.",
  keywords: "Sysgames software development company, Sysgames solutions provider, Sysgames software, casino software development, online casino software, sportsbook software development",
  alternates: {
    canonical: "https://www.yourdomain.com",
  },
  openGraph: {
    title: "Sysgames Software Development Company",
    description: "Leading Sysgames software development company offering casino, sportsbook, sweepstakes, and prediction market solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sysgames Software Development Company",
    description: "Leading Sysgames software development company offering casino, sportsbook, sweepstakes, and prediction market solutions.",
  }
};



import AnimationProvider from "@/components/AnimationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        <AnimationProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
