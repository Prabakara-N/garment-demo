"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";

const QUICK_LINKS = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/quote" },
] as const;

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-bg-light" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-navy) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="font-heading text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none text-navy/10">
            404
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 -mt-12"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-text-secondary text-lg md:text-xl mb-10 max-w-md mx-auto"
        >
          The page you are looking for might have been moved, renamed, or no
          longer exists.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-lg font-medium hover:bg-navy-dark transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-8 py-3.5 rounded-lg font-medium hover:bg-navy hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 text-text-secondary mb-5">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Quick Links
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <motion.div key={link.href} variants={fadeInUp}>
                <Link
                  href={link.href}
                  className="inline-block px-5 py-2.5 bg-white rounded-lg text-navy font-medium shadow-sm hover:shadow-md hover:text-gold transition-all"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
