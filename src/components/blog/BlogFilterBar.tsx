"use client";

import { BLOG_CATEGORIES } from "@/lib/data";

interface BlogFilterBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilterBar({
  activeCategory,
  onCategoryChange,
}: BlogFilterBarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {BLOG_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
            activeCategory === category
              ? "bg-navy text-white shadow-md"
              : "bg-white text-text-secondary hover:bg-navy/10 hover:text-navy border border-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
