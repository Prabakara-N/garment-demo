"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: readonly Breadcrumb[];
  backgroundImage?: string;
}

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=600&fit=crop";

export function PageHeader({
  title,
  breadcrumbs,
  backgroundImage = DEFAULT_BG,
}: PageHeaderProps) {
  return (
    <section
      className="relative h-[300px] md:h-[360px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        <motion.nav
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-sm text-white/80"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gold" />
                )}
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-gold font-medium" : ""}>
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </motion.nav>
      </div>
    </section>
  );
}
