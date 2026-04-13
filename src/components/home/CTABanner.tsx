"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to start your{" "}
            <span className="text-gold">next order?</span>
          </h2>
          <p className="font-body text-lg text-white/75 mb-10 max-w-2xl mx-auto">
            Get a free quote within 24 hours. Our team is ready to help you
            bring your designs to life with premium quality knitwear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold text-navy font-heading font-semibold text-lg hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20knitwear%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-whatsapp text-white font-heading font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
