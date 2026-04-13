"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Layers,
  Scissors,
  Gauge,
  Users,
  ShieldCheck,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { INFRASTRUCTURE } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  "Factory Area": Factory,
  "Knitting Machines": Layers,
  "Stitching Machines": Scissors,
  "Daily Capacity": Gauge,
  Workers: Users,
  "Quality Checkers": ShieldCheck,
};

export function InfrastructureStats() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Built for Scale
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">
            Our Infrastructure
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INFRASTRUCTURE.map((stat) => {
            const Icon = ICON_MAP[stat.label] ?? Factory;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-white font-heading">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
