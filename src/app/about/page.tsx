import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CompanyStory } from "@/components/about/CompanyStory";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { FactoryGallery } from "@/components/about/FactoryGallery";
import { TeamSection } from "@/components/about/TeamSection";
import { InfrastructureStats } from "@/components/about/InfrastructureStats";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sri Lakshmi Knit Exports - a leading knitwear manufacturer and exporter from Tiruppur, India since 1998.",
  openGraph: {
    title: "About Us - Sri Lakshmi Knit Exports",
    description:
      "Learn about Sri Lakshmi Knit Exports - a leading knitwear manufacturer and exporter from Tiruppur, India since 1998.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Sri Lakshmi Knit Exports",
    description:
      "Learn about Sri Lakshmi Knit Exports - a leading knitwear manufacturer and exporter from Tiruppur, India since 1998.",
  },
  alternates: { canonical: "/about" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About Us" },
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.srilakshmiknit.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About Us",
              item: "https://www.srilakshmiknit.com/about",
            },
          ],
        }}
      />
      <PageHeader title="About Us" breadcrumbs={BREADCRUMBS} />
      <CompanyStory />
      <Timeline />
      <Values />
      <FactoryGallery />
      <TeamSection />
      <InfrastructureStats />
    </>
  );
}
