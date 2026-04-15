"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { COUNTRIES } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";
import { CustomDropdown } from "@/components/ui/CustomDropdown";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  subject: "",
  message: "",
};

const SUBJECTS = [
  "General Inquiry",
  "Product Query",
  "Sample Request",
  "Visit Request",
  "Other",
] as const;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.phone.trim()) errors.phone = "Phone is required";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all";

const LABEL_CLASS =
  "block font-body text-sm font-medium text-text-primary mb-1.5";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        if (prev[field as keyof FormErrors]) {
          const { [field as keyof FormErrors]: _, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setIsSubmitted(true);
    },
    [formData]
  );

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">
          Message Sent!
        </h3>
        <p className="font-body text-text-secondary">
          Thank you for reaching out. Our team will get back to you within
          24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-5"
      noValidate
    >
      <h2 className="font-heading text-2xl font-bold text-navy mb-2">
        Send Us a Message
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your full name"
            className={INPUT_CLASS}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-company" className={LABEL_CLASS}>
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Company name"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASS}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="your@email.com"
            className={INPUT_CLASS}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-phone" className={LABEL_CLASS}>
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91-98765-43210"
            className={INPUT_CLASS}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-country" className={LABEL_CLASS}>
            Country
          </label>
          <CustomDropdown
            id="contact-country"
            value={formData.country}
            onChange={(val) => handleChange("country", val)}
            options={COUNTRIES}
            placeholder="Select country"
            searchable
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className={LABEL_CLASS}>
            Subject
          </label>
          <CustomDropdown
            id="contact-subject"
            value={formData.subject}
            onChange={(val) => handleChange("subject", val)}
            options={SUBJECTS}
            placeholder="Select subject"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASS}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your requirements..."
          className={INPUT_CLASS + " resize-none"}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-heading font-semibold rounded-lg hover:bg-gold-dark transition-colors shadow-md hover:shadow-lg"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </motion.form>
  );
}
