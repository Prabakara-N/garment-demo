import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CertificationCards } from "@/components/certifications/CertificationCards";
import { QualityProcess } from "@/components/certifications/QualityProcess";
import { Sustainability } from "@/components/certifications/Sustainability";

export const metadata: Metadata = {
  title: "Quality & Certifications",
  description:
    "GOTS, Oeko-Tex, BSCI, Sedex certified garment manufacturer. Explore our quality process and sustainability commitments.",
  openGraph: {
    title: "Quality & Certifications - Sri Lakshmi Knit Exports",
    description:
      "GOTS, Oeko-Tex, BSCI, Sedex certified garment manufacturer. Explore our quality process and sustainability commitments.",
    url: "/certifications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality & Certifications - Sri Lakshmi Knit Exports",
    description:
      "GOTS, Oeko-Tex, BSCI, Sedex certified garment manufacturer.",
  },
  alternates: { canonical: "/certifications" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Quality & Certifications" },
] as const;

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Quality & Certifications"
        breadcrumbs={BREADCRUMBS}
      />
      <CertificationCards />
      <QualityProcess />
      <Sustainability />
    </>
  );
}
