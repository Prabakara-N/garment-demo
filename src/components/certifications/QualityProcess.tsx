"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { QUALITY_PROCESS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function QualityProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Quality Process
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto text-lg">
            Every garment passes through 8 rigorous quality checkpoints before
            reaching our customers.
          </p>
        </motion.div>

        {/* Desktop: Horizontal flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="hidden lg:flex items-start justify-between gap-2"
        >
          {QUALITY_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="flex items-start"
            >
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className="w-12 h-12 rounded-full bg-gold text-navy font-heading font-bold text-lg flex items-center justify-center mb-3 shadow-md">
                  {index + 1}
                </div>
                <h3 className="font-heading text-sm font-bold text-navy mb-1 leading-tight">
                  {item.step}
                </h3>
                <p className="font-body text-xs text-text-secondary leading-snug max-w-[130px]">
                  {item.description}
                </p>
              </div>
              {index < QUALITY_PROCESS.length - 1 && (
                <div className="flex items-center pt-5 px-1">
                  <ArrowRight className="w-5 h-5 text-gold flex-shrink-0" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet: 2-column grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="hidden md:grid lg:hidden grid-cols-2 gap-6"
        >
          {QUALITY_PROCESS.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="flex items-start gap-4 bg-bg-light rounded-lg p-4"
            >
              <div className="w-10 h-10 rounded-full bg-gold text-navy font-heading font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                {index + 1}
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-navy mb-1">
                  {item.step}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Vertical flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="md:hidden space-y-2"
        >
          {QUALITY_PROCESS.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp}>
              <div className="flex items-start gap-4 bg-bg-light rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-gold text-navy font-heading font-bold text-base flex items-center justify-center flex-shrink-0 shadow-md">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-navy mb-1">
                    {item.step}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < QUALITY_PROCESS.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-5 h-5 text-gold" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
