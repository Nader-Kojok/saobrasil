import type { Metadata } from "next";
import { Inter, Playfair_Display, Permanent_Marker } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { StatusModal } from '@/components/restaurant-status/StatusModal';

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saobrasil.sn'),
  title: {
    default: "Sao Brasil - Pizza au Feu de Bois à Ngor, Dakar",
    template: "%s | Sao Brasil Restaurant"
  },
  description: "Un coin d'Italie à Dakar depuis 20 ans. Venez partager un moment convivial en famille ou entre amis autour de nos pizzas au feu de bois et nos plats de la mer.",
  keywords: ["restaurant italien", "pizza", "Dakar", "Ngor", "Almadies", "pizza feu de bois", "fruits de mer", "restaurant Dakar"],
  authors: [{ name: "Sao Brasil" }],
  creator: "Sao Brasil",
  publisher: "Sao Brasil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sao Brasil - Restaurant Italien aux Almadies",
    description: "Un coin d'Italie à Dakar depuis 20 ans. Pizzas au feu de bois et plats de la mer dans une ambiance chaleureuse.",
    url: 'https://saobrasil.sn',
    siteName: 'Sao Brasil Restaurant',
    locale: 'fr_FR',
    type: 'website',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Sao Brasil Restaurant - Pizza au feu de bois et cuisine italienne à Dakar',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sao Brasil - Restaurant Italien aux Almadies",
    description: "Un coin d'Italie à Dakar depuis 20 ans. Pizzas au feu de bois et plats de la mer dans une ambiance chaleureuse.",
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Sao Brasil Restaurant - Pizza au feu de bois et cuisine italienne à Dakar',
      type: 'image/jpeg',
    }],
    creator: "@saobrasil",
    site: "@saobrasil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-de-verification-google',
  },
  alternates: {
    canonical: 'https://saobrasil.sn',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} ${permanentMarker.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Sao Brasil",
              "image": "https://saobrasil.sn/og-image.jpg",
              "description": "Un coin d'Italie à Dakar depuis 20 ans. Pizzas au feu de bois et plats de la mer dans une ambiance chaleureuse.",
              "@id": "https://saobrasil.sn",
              "url": "https://saobrasil.sn",
              "telephone": "+221338204016",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Route de Ngor, Almadies",
                "addressLocality": "Dakar",
                "addressCountry": "SN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 14.7449,
                "longitude": -17.5126
              },
              "servesCuisine": ["Italian", "Pizza", "Seafood"],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "12:00",
                  "closes": "00:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "00:00"
                }
              ],
              "menu": "https://saobrasil.sn/menu",
              "acceptsReservations": "True"
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow pt-16 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <StatusModal />
      </body>
    </html>
  );
}
