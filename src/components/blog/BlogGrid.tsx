"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFilterBar } from "@/components/blog/BlogFilterBar";
import { BLOG_POSTS } from "@/lib/data";
import { staggerContainer } from "@/lib/animations";

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <>
      <BlogFilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))
          ) : (
            <p className="col-span-full text-center text-text-secondary font-body py-12">
              No posts found in this category.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
