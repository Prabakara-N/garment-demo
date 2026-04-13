import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CustomizationSection } from "@/components/products/CustomizationSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our range of premium knitwear products - T-Shirts, Polo Shirts, Hoodies, Joggers, Kids Wear & Women's Wear. Custom manufacturing available.",
  openGraph: {
    title: "Our Products - Sri Lakshmi Knit Exports",
    description:
      "Browse our range of premium knitwear products - T-Shirts, Polo Shirts, Hoodies, Joggers, Kids Wear & Women's Wear. Custom manufacturing available.",
    url: "/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products - Sri Lakshmi Knit Exports",
    description:
      "Premium knitwear products - T-Shirts, Polo Shirts, Hoodies, Joggers, Kids Wear & Women's Wear.",
  },
  alternates: { canonical: "/products" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Products" },
] as const;

export default function ProductsPage() {
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
              name: "Products",
              item: "https://www.srilakshmiknit.com/products",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Knitwear Products",
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: product.name,
              image: product.image,
              description: `${product.fabric}, ${product.gsm}. MOQ: ${product.moq}`,
              brand: {
                "@type": "Brand",
                name: "Sri Lakshmi Knit Exports",
              },
              manufacturer: {
                "@type": "Organization",
                name: "Sri Lakshmi Knit Exports",
              },
            },
          })),
        }}
      />
      <PageHeader
        title="Our Products"
        breadcrumbs={BREADCRUMBS}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=600&fit=crop"
      />
      <ProductGrid />
      <CustomizationSection />
    </>
  );
}
