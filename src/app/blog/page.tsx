import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert articles on knitwear manufacturing, textile trends, certifications, and sourcing from Tiruppur, India.",
  openGraph: {
    title: "Blog - Sri Lakshmi Knit Exports",
    description:
      "Expert articles on knitwear manufacturing, textile trends, certifications, and sourcing from Tiruppur, India.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Sri Lakshmi Knit Exports",
    description:
      "Expert articles on knitwear manufacturing, textile trends, and sourcing.",
  },
  alternates: { canonical: "/blog" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Blog" },
] as const;

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Blog" breadcrumbs={BREADCRUMBS} />

      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Industry Insights
            </h2>
            <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
              Expert articles on knitwear manufacturing, textile trends,
              certifications, and sourcing from India.
            </p>
          </div>

          <BlogGrid />
        </div>
      </section>
    </>
  );
}
