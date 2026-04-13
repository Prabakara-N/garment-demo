"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProductCategories() {
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
            Our <span className="text-gold">Products</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            From classic essentials to custom designs, we manufacture a wide range
            of premium knitwear for global brands.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <motion.div key={category.slug} variants={fadeInUp}>
              <Link
                href="/products"
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white mb-1">
                      {category.name}
                    </h3>
                    <span className="font-body text-sm text-gold-light group-hover:text-gold transition-colors duration-300 inline-flex items-center">
                      View Collection
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
