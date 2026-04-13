"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Truck, Palette } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const REASONS = [
  {
    icon: Factory,
    title: "Own Manufacturing",
    description:
      "Vertically integrated facility with in-house knitting, dyeing, cutting, stitching, and finishing under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "GOTS, Oeko-Tex Standard 100, BSCI, Sedex, and ISO 9001 certified for the highest global standards.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Proven track record of meeting deadlines with efficient production planning and logistics management.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Full design-to-delivery support including custom patterns, fabrics, washes, prints, and embroidery.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Why <span className="text-gold">Choose Us</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            Decades of expertise, world-class certifications, and an unwavering
            commitment to quality set us apart.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group bg-bg-light rounded-2xl p-7 text-center hover:bg-navy transition-colors duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold text-navy mb-3 group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
