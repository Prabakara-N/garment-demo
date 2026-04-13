import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a custom quote for bulk knitwear manufacturing. T-shirts, Polos, Hoodies, and more. MOQ 500 pieces. GOTS & Oeko-Tex certified.",
  openGraph: {
    title: "Request a Quote - Sri Lakshmi Knit Exports",
    description:
      "Get a custom quote for bulk knitwear manufacturing. T-shirts, Polos, Hoodies, and more. MOQ 500 pieces.",
    url: "/quote",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote - Sri Lakshmi Knit Exports",
    description:
      "Get a custom quote for bulk knitwear manufacturing. MOQ 500 pieces.",
  },
  alternates: { canonical: "/quote" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Request a Quote" },
] as const;

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        breadcrumbs={BREADCRUMBS}
      />

      <section className="py-12 lg:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
              Fill in your requirements and we will respond within 24 hours
              with pricing, lead times, and sample options.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
