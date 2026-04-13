import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CertificationsBar from "@/components/home/CertificationsBar";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sri Lakshmi Knit Exports - Premium Knitwear Manufacturer in Tiruppur",
          description:
            "Leading knitwear manufacturer and exporter from Tiruppur, India. GOTS & Oeko-Tex certified. T-shirts, Polo, Hoodies. MOQ 500 pcs.",
          url: "https://www.srilakshmiknit.com",
        }}
      />
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
      <CertificationsBar />
      <Testimonials />
      <CTABanner />
    </>
  );
}
