"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface GalleryItem {
  caption: string;
  image: string;
}

const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    caption: "Knitting Section",
    image:
      "https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=600&h=400&fit=crop",
  },
  {
    caption: "Dyeing Unit",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop",
  },
  {
    caption: "Cutting Section",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&h=400&fit=crop",
  },
  {
    caption: "Stitching Floor",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
  },
  {
    caption: "Quality Check",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    caption: "Packing & Dispatch",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
] as const;

export function FactoryGallery() {
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
            Manufacturing Excellence
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2">
            Our Factory
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.caption}
              variants={fadeInUp}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.caption}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-heading text-lg font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.caption}
                </span>
              </div>
              {/* Always-visible caption on mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4 md:hidden">
                <span className="text-white font-medium text-sm">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
