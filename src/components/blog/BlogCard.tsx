"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  category,
  slug,
}: BlogCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-gold text-navy font-body text-xs font-semibold rounded-full uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs font-body text-text-secondary mb-3">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{readTime}</span>
          </div>

          <h3 className="font-heading text-lg font-bold text-navy mb-2 line-clamp-2 group-hover:text-gold-dark transition-colors">
            {title}
          </h3>

          <p className="font-body text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gold-dark group-hover:text-gold transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
