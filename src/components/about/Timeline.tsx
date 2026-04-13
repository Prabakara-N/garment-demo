"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { TIMELINE } from "@/lib/data";

export function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">
            Our Journey
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
            Milestones That Define Us
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 md:-translate-x-px" />

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className={`relative flex items-center mb-10 last:mb-0 ${
                  isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-gold font-heading text-2xl font-bold">
                      {item.year}
                    </span>
                    <p className="text-text-secondary mt-1">{item.event}</p>
                  </div>
                </div>

                {/* Gold dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
