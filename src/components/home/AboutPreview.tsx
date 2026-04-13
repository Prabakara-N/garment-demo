"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/data";
import { fadeIn, slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              About{" "}
              <span className="text-gold">{COMPANY.name}</span>
            </h2>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-4">
              Founded in {COMPANY.founded} in the heart of Tiruppur — India&apos;s
              knitwear capital — we have grown into a trusted manufacturer and
              exporter of premium knitted garments. With a {COMPANY.factoryArea}{" "}
              state-of-the-art facility and a dedicated team of {COMPANY.employees}{" "}
              professionals, we deliver excellence in every stitch.
            </p>
            <p className="font-body text-text-secondary text-lg leading-relaxed mb-8">
              Our annual capacity of {COMPANY.annualCapacity} serves 50+
              international brands across 15+ countries, backed by GOTS, Oeko-Tex,
              BSCI, and ISO certifications.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center font-heading font-semibold text-gold hover:text-gold-dark transition-colors duration-300 text-lg group"
            >
              Learn More About Us
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop"
                alt="Sri Lakshmi Knit Exports factory"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-xl p-5 shadow-lg hidden sm:block">
              <p className="font-heading text-3xl font-bold text-gold">
                {new Date().getFullYear() - COMPANY.founded}+
              </p>
              <p className="font-body text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
