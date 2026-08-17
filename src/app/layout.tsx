import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khai Guitar Lessons | Guitar, Ukulele & Electric Guitar in KL",
  description:
    "1-on-1 guitar, ukulele, and electric guitar lessons in KL Area, Sentral and online via Zoom. 10+ years professional experience, all ages welcome. Book a free intro call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-white pb-16 sm:pb-0">
        <LanguageProvider>
          <Nav />
          {children}
          <Footer />
          <StickyMobileCTA />
        </LanguageProvider>
      </body>
    </html>
  );
}
