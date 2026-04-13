"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/data";
import { staggerContainer } from "@/lib/animations";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-text-secondary py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
