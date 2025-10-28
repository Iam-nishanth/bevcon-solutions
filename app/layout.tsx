import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

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
  metadataBase: new URL("https://www.bevconsolutions.au"),
  title: {
    default: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    template: "%s | Bevcon Solutions",
  },
  description: "Australian provider of entrance automation, industrial doors, docking equipment, and bulk material handling solutions. Extending the expertise of Spareng and Bevcon Zentry from India to serve Australian industrial sectors.",
  keywords: ["industrial doors", "entrance automation", "docking equipment", "dock levelers", "material handling", "conveyor systems", "high-speed doors"],
  authors: [{ name: "Bevcon Solutions" }],
  creator: "Bevcon Solutions",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Bevcon-Solutions",
  },
  alternates: {
    canonical: "https://www.bevconsolutions.au",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.bevconsolutions.au",
    siteName: "Bevcon Solutions",
    title: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    description: "Leading provider of entrance automation, industrial doors, docking equipment, and bulk material handling solutions.",
    images: [
      {
        url: "/bevcon-solutions.png",
        width: 1024,
        height: 1024,
        alt: "Bevcon Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bevcon Solutions | Industrial Entrance & Bulk Material Handling Solutions",
    description: "Leading provider of entrance automation, industrial doors, docking equipment, and bulk material handling solutions.",
    images: ["/bevcon-solutions.png"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bevcon Solutions",
    "url": "https://www.bevconsolutions.au",
    "logo": "https://www.bevconsolutions.au/images/bevcon-solutions-logo.svg",
    "description": "Leading provider of industrial entrance automation, high-speed doors, docking equipment, and bulk material handling solutions. Serving Australian and international markets with expertise from Spareng and Bevcon Zentry.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      // Add social media URLs when available
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Speed Doors",
            "description": "Industrial high-speed doors for rapid access and energy efficiency"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Docking Equipment",
            "description": "Dock levelers for efficient material transfer"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Material Handling",
            "description": "Bulk material handling equipment and conveyor systems"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
