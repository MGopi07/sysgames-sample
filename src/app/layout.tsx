import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "iGaming Software Development Company | iGaming Solutions Provider",
  description: "Leading iGaming software development company offering casino, sportsbook, sweepstakes, and prediction market solutions with 100% platform ownership and zero GGR share.",
  keywords: "iGaming software development company, iGaming solutions provider, iGaming software, casino software development, online casino software, sportsbook software development",
  alternates: {
    canonical: "https://www.yourdomain.com",
  },
  openGraph: {
    title: "iGaming Software Development Company",
    description: "Leading iGaming software development company offering casino, sportsbook, sweepstakes, and prediction market solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iGaming Software Development Company",
    description: "Leading iGaming software development company offering casino, sportsbook, sweepstakes, and prediction market solutions.",
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
