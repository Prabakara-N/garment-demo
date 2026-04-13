"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInLeft, fadeIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
        alt="Garment manufacturing facility"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Premium Knitwear
            <br />
            <span className="text-gold">Manufacturer & Exporter</span>
          </h1>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="font-body text-lg sm:text-xl text-white/85 mb-10 max-w-2xl mx-auto"
        >
          Trusted by 50+ international brands across 15+ countries
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold text-navy font-heading font-semibold text-lg hover:bg-gold-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-heading font-semibold text-lg hover:bg-white hover:text-navy transition-colors duration-300"
          >
            View Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
