import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    template: "%s | Bevcon Solutions",
  },
  description: "Australian provider of entrance automation, industrial doors, loading bay equipment, and bulk material handling solutions. Extending the expertise of Spareng and Bevcon Zentry from India to serve Australian industrial sectors.",
  keywords: ["industrial doors", "entrance automation", "loading bay equipment", "material handling", "conveyor systems", "dock levelers", "high-speed doors"],
  authors: [{ name: "Bevcon Solutions" }],
  creator: "Bevcon Solutions",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.bevconsolutions.com",
    siteName: "Bevcon Solutions",
    title: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    description: "Leading provider of entrance automation, industrial doors, loading bay equipment, and bulk material handling solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bevcon Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    description: "Leading provider of entrance automation, industrial doors, loading bay equipment, and bulk material handling solutions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
