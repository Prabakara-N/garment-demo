import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srilakshmiknit.com"),
  title: {
    default: "Sri Lakshmi Knit Exports | Premium Knitwear Manufacturer in Tiruppur",
    template: "%s | Sri Lakshmi Knit Exports",
  },
  description:
    "Leading knitwear manufacturer and exporter from Tiruppur, India. GOTS & Oeko-Tex certified. T-shirts, Polo, Hoodies. MOQ 500 pcs.",
  keywords: [
    "knitwear manufacturer",
    "garment exporter",
    "Tiruppur",
    "t-shirt manufacturer",
    "organic cotton",
    "GOTS certified",
    "Oeko-Tex",
    "bulk garment supplier",
    "India textile exporter",
    "knitwear exporter India",
    "private label garments",
    "OEM garment manufacturer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sri Lakshmi Knit Exports",
    title: "Sri Lakshmi Knit Exports | Premium Knitwear Manufacturer in Tiruppur",
    description:
      "Leading knitwear manufacturer and exporter from Tiruppur, India. GOTS & Oeko-Tex certified.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lakshmi Knit Exports | Premium Knitwear Manufacturer in Tiruppur",
    description:
      "Leading knitwear manufacturer and exporter from Tiruppur, India. GOTS & Oeko-Tex certified.",
  },
  alternates: {
    canonical: "/",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Sri Lakshmi Knit Exports",
            alternateName: "SLK Exports",
            url: "https://www.srilakshmiknit.com",
            logo: "https://www.srilakshmiknit.com/logo.png",
            description:
              "Leading knitwear manufacturer and exporter from Tiruppur, India. GOTS & Oeko-Tex certified.",
            foundingDate: "1998",
            numberOfEmployees: { "@type": "QuantitativeValue", minValue: 350 },
            address: {
              "@type": "PostalAddress",
              streetAddress: "SIPCOT Industrial Area",
              addressLocality: "Tiruppur",
              addressRegion: "Tamil Nadu",
              postalCode: "641604",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-98765-43210",
              contactType: "sales",
              email: "info@srilakshmiknit.com",
              availableLanguage: ["English", "Tamil"],
            },
            sameAs: [
              "https://linkedin.com/company/srilakshmiknit",
              "https://instagram.com/srilakshmiknit",
              "https://facebook.com/srilakshmiknit",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.srilakshmiknit.com/#localbusiness",
            name: "Sri Lakshmi Knit Exports",
            image: "https://www.srilakshmiknit.com/logo.png",
            telephone: "+91-98765-43210",
            email: "info@srilakshmiknit.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SIPCOT Industrial Area",
              addressLocality: "Tiruppur",
              addressRegion: "Tamil Nadu",
              postalCode: "641604",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.1085,
              longitude: 77.3411,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$$",
          }}
        />
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
