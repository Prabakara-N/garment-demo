"use client";

import { motion } from "framer-motion";
import { Award, Leaf, Handshake } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

const VALUES: readonly Value[] = [
  {
    icon: Award,
    title: "Quality",
    description:
      "Every garment undergoes rigorous quality checks at 7 stages of production. We maintain AQL 2.5 standards across all orders, ensuring consistent excellence in every shipment.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "From GOTS-certified organic cotton to water-efficient dyeing processes, we are committed to reducing our environmental footprint while delivering premium products.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Transparent pricing, honest lead times, and proactive communication. We believe lasting business relationships are built on mutual trust and reliability.",
  },
] as const;

export function Values() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            What We Stand For
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
            Our Core Values
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="group bg-bg-light rounded-2xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
