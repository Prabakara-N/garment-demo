"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { TEAM } from "@/lib/data";

export function TeamSection() {
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
            The People Behind the Brand
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
            Our Leadership
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-transparent group-hover:ring-gold/40 transition-all duration-300" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">
                {member.name}
              </h3>
              <p className="text-text-secondary text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
