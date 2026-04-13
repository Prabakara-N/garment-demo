"use client";

import { motion } from "framer-motion";
import { Droplets, Sun, Leaf, Recycle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const SUSTAINABILITY_ITEMS = [
  {
    icon: Droplets,
    title: "Zero Liquid Discharge Plant",
    description:
      "Our ZLD plant ensures 100% wastewater is treated and recycled, leaving zero environmental discharge from our dyeing processes.",
  },
  {
    icon: Sun,
    title: "Solar Powered Operations",
    description:
      "Over 40% of our factory energy comes from rooftop solar panels, reducing our carbon footprint significantly.",
  },
  {
    icon: Leaf,
    title: "Organic Cotton Sourcing",
    description:
      "We source GOTS-certified organic cotton directly from trusted farms, ensuring a fully traceable and sustainable supply chain.",
  },
  {
    icon: Recycle,
    title: "Water Recycling System",
    description:
      "Advanced water recycling systems recover up to 95% of water used in our manufacturing processes for reuse.",
  },
] as const;

export function Sustainability() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Commitment to Sustainable Manufacturing
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto text-lg">
            Sustainability is at the core of our operations. We invest in
            green technologies to protect the environment while delivering
            world-class products.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SUSTAINABILITY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-emerald-100"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
