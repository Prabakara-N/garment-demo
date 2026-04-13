"use client";

import { motion } from "framer-motion";

interface FilterTab {
  label: string;
  slug: string;
}

const FILTER_TABS: readonly FilterTab[] = [
  { label: "All", slug: "all" },
  { label: "T-Shirts", slug: "t-shirts" },
  { label: "Polo", slug: "polo" },
  { label: "Hoodies", slug: "hoodies" },
  { label: "Joggers", slug: "joggers" },
  { label: "Kids", slug: "kids" },
  { label: "Women's", slug: "womens" },
] as const;

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export function ProductFilter({
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {FILTER_TABS.map((tab) => {
        const isActive = activeCategory === tab.slug;
        return (
          <button
            key={tab.slug}
            onClick={() => onCategoryChange(tab.slug)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-white"
                : "text-text-secondary hover:text-navy bg-white border border-gray-200 hover:border-gold/50"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gold rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
