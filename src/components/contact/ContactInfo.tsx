"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Factory Address",
    value: COMPANY.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 6:00 PM IST",
    href: undefined,
  },
] as const;

export function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">
          Get in Touch
        </h2>
        <p className="font-body text-text-secondary mb-8">
          We would love to hear from you. Reach out to discuss your
          requirements or schedule a factory visit.
        </p>
      </motion.div>

      {CONTACT_ITEMS.map((item) => {
        const Icon = item.icon;
        const content = (
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-navy" />
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-wider text-text-secondary mb-1">
                {item.label}
              </p>
              <p className="font-body text-text-primary font-medium">
                {item.value}
              </p>
            </div>
          </div>
        );

        return (
          <motion.div key={item.label} variants={fadeInUp}>
            {item.href ? (
              <a
                href={item.href}
                className="block hover:bg-bg-light rounded-lg p-3 -m-3 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div className="p-3 -m-3">{content}</div>
            )}
          </motion.div>
        );
      })}

      <motion.div variants={fadeInUp} className="pt-4">
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in your garment export services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 bg-whatsapp text-white font-body font-semibold rounded-lg hover:brightness-110 transition-all shadow-md hover:shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
      </motion.div>
    </motion.div>
  );
}
