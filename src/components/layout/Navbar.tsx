"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { COMPANY } from "@/lib/data";

const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
  "Hi, I visited your website and I'm interested in your products."
)}`;

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 20;

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  function isActiveLink(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 isolate transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl font-bold tracking-tight text-[#1B2A4A] sm:text-2xl transition-colors group-hover:text-[#C9A84C]">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium font-body transition-colors ${
                    isActiveLink(link.href)
                      ? "text-[#C9A84C]"
                      : "text-[#1B2A4A]/70 hover:text-[#1B2A4A]"
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#C9A84C]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Phone */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[#1B2A4A]/70 transition-colors hover:text-[#1B2A4A] font-body"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{COMPANY.phone}</span>
            </a>
            <Link
              href="/quote"
              className="rounded-lg bg-[#C9A84C] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#b8963f] hover:shadow-lg active:scale-[0.97] font-body"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A]/5 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(80vw,320px)] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <span className="font-heading text-lg font-bold text-[#1B2A4A]">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[#1B2A4A]/60 transition-colors hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex rounded-lg px-4 py-3 text-base font-medium transition-colors font-body ${
                            isActiveLink(link.href)
                              ? "bg-[#C9A84C]/10 text-[#C9A84C]"
                              : "text-[#1B2A4A]/80 hover:bg-gray-50 hover:text-[#1B2A4A]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Drawer Footer */}
                <div className="border-t border-gray-100 px-5 py-5 space-y-3">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-2 text-sm text-[#1B2A4A]/70 font-body"
                  >
                    <Phone className="h-4 w-4" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    href="/quote"
                    className="flex w-full items-center justify-center rounded-lg bg-[#C9A84C] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#b8963f] font-body"
                  >
                    Request Quote
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 font-body"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-[60px]" />
    </>
  );
}
