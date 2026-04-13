"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Users, Award, BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Leaf,
  ShieldCheck,
  Users,
  Award,
  BadgeCheck,
};

export function CertificationCards() {
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
            Our Certifications
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto text-lg">
            We maintain the highest international standards to ensure quality,
            safety, and ethical manufacturing across our entire supply chain.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATIONS.map((cert) => {
            const Icon = ICON_MAP[cert.icon];
            return (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                className="bg-white rounded-lg border-l-4 border-l-gold p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-gold" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-bold text-navy mb-1">
                      {cert.name}
                    </h3>
                    <p className="font-body text-sm text-gold-dark font-medium mb-2">
                      {cert.fullName}
                    </p>
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
