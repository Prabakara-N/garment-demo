"use client";

import { COMPANY } from "@/lib/data";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I visited your website and I'm interested in your products."
);

const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${WHATSAPP_MESSAGE}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <span className="absolute inset-0 animate-pulse rounded-full bg-[#25D366] opacity-20" />

      {/* Icon */}
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  );
}
