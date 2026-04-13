"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-navy mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="space-y-1 text-sm text-text-secondary mb-3">
          <p>
            <span className="font-medium text-text-primary">Fabric:</span>{" "}
            {product.fabric}
          </p>
          <p>
            <span className="font-medium text-text-primary">GSM:</span>{" "}
            {product.gsm}
          </p>
          <p>
            <span className="font-medium text-text-primary">MOQ:</span>{" "}
            {product.moq}
          </p>
        </div>

        {/* Color dots */}
        <div className="flex items-center gap-1.5 mb-4">
          {product.colors.map((color) => (
            <span
              key={color}
              className="w-5 h-5 rounded-full border border-gray-200 shadow-sm"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        <Link
          href="/quote"
          className="block w-full text-center bg-navy text-white py-2.5 rounded-lg font-medium text-sm hover:bg-navy-light transition-colors duration-200"
        >
          Request Quote
        </Link>
      </div>
    </motion.div>
  );
}
