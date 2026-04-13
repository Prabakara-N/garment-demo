import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sri Lakshmi Knit Exports. Visit our factory in Tiruppur, India or send us your inquiry.",
  openGraph: {
    title: "Contact Us - Sri Lakshmi Knit Exports",
    description:
      "Get in touch with Sri Lakshmi Knit Exports. Visit our factory in Tiruppur, India or send us your inquiry.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Sri Lakshmi Knit Exports",
    description:
      "Get in touch with Sri Lakshmi Knit Exports in Tiruppur, India.",
  },
  alternates: { canonical: "/contact" },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact Us" },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={BREADCRUMBS} />

      <section className="py-16 lg:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.!2d77.35!3d11.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTiruppur!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sri Lakshmi Knit Exports - Factory Location"
          className="w-full h-full"
        />
      </section>
    </>
  );
}
