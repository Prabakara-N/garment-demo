"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Users,
  Award,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const ICON_MAP: Record<string, LucideIcon> = {
  Leaf,
  ShieldCheck,
  Users,
  Award,
  BadgeCheck,
};

export default function CertificationsBar() {
  return (
    <section className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Certified for{" "}
            <span className="text-gold">Global Standards</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            Our certifications reflect our commitment to quality, sustainability,
            and ethical manufacturing practices.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {CERTIFICATIONS.map((cert) => {
            const Icon = ICON_MAP[cert.icon];
            return (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-sm font-bold text-gray-400 group-hover:text-navy transition-colors duration-300 mb-1">
                  {cert.name}
                </h3>
                <p className="font-body text-xs text-gray-400 group-hover:text-text-secondary transition-colors duration-300 hidden sm:block">
                  {cert.fullName}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
