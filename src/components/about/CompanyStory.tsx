"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function CompanyStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
              A Legacy of Excellence in Knitwear
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                In 1998, K. Lakshmi Narayanan founded Sri Lakshmi Knit Exports
                in the heart of Tiruppur, India&apos;s knitwear capital. What
                began as a modest knitting unit with a handful of machines and a
                steadfast commitment to quality has grown into one of the
                region&apos;s most trusted garment export houses.
              </p>
              <p>
                Over two decades, we have built lasting relationships with
                fashion brands, retailers, and importers across 15+ countries.
                Our success is rooted in a simple philosophy: deliver consistent
                quality, maintain transparent communication, and treat every
                order - large or small - with the same dedication.
              </p>
              <p>
                Today, from our 50,000 sq ft SIPCOT factory, we produce over
                2 million pieces annually. We hold GOTS, Oeko-Tex, and BSCI
                certifications, ensuring that every garment we manufacture meets
                the highest standards of quality, safety, and ethical
                production.
              </p>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
                alt="K. Lakshmi Narayanan - Founder of Sri Lakshmi Knit Exports"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
