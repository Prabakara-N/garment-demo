"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Tag, Package, Printer, Ruler } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface CustomizationOption {
  icon: React.ElementType;
  title: string;
  description: string;
}

const CUSTOMIZATIONS: readonly CustomizationOption[] = [
  {
    icon: Scissors,
    title: "Custom Fabric",
    description:
      "Choose from 100% cotton, CVC, polyester blends, organic cotton, or any custom fabric composition.",
  },
  {
    icon: Palette,
    title: "Custom Colors",
    description:
      "Pantone color matching with lab dip approval. We match any color reference with precision.",
  },
  {
    icon: Tag,
    title: "Your Label",
    description:
      "Woven labels, printed labels, heat transfer - your brand identity sewn into every garment.",
  },
  {
    icon: Package,
    title: "Your Packaging",
    description:
      "Custom poly bags, hang tags, tissue paper, carton printing - complete branded packaging solutions.",
  },
  {
    icon: Printer,
    title: "Custom Print/Embroidery",
    description:
      "Screen printing, DTG, sublimation, embroidery, applique - bring any design to life.",
  },
  {
    icon: Ruler,
    title: "Size Grading",
    description:
      "Custom size charts and grading to match your market. EU, US, UK, or custom size specifications.",
  },
] as const;

export function CustomizationSection() {
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
            OEM / Private Label
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            We Manufacture YOUR Brand
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From fabric to finished garment, every detail is customizable. We
            are your full-service manufacturing partner.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CUSTOMIZATIONS.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group bg-bg-light rounded-xl p-6 hover:bg-navy hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-white mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-text-secondary group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
