"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  User,
  Package,
  FileText,
  Eye,
  Pencil,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { COUNTRIES, COMPANY } from "@/lib/data";
import { fadeInUp } from "@/lib/animations";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

interface StepOneData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  website: string;
}

interface StepTwoData {
  productType: string;
  fabric: string;
  gsmRange: string;
  colors: string[];
  sizes: string[];
  quantity: string;
  printType: string;
}

interface StepThreeData {
  targetPrice: string;
  deliveryTimeline: string;
  certifications: string[];
  sampleRequired: string;
  notes: string;
}

interface FormData {
  stepOne: StepOneData;
  stepTwo: StepTwoData;
  stepThree: StepThreeData;
}

type StepErrors = Record<string, string>;

// ──────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────

const STEPS = [
  { label: "Your Details", icon: User },
  { label: "Product Requirements", icon: Package },
  { label: "Additional Details", icon: FileText },
  { label: "Review & Submit", icon: Eye },
] as const;

const PRODUCT_TYPES = [
  "T-Shirt",
  "Polo",
  "Hoodie",
  "Sweatshirt",
  "Jogger",
  "Shorts",
  "Kids Wear",
  "Women's Wear",
  "Other",
] as const;

const FABRICS = [
  "100% Cotton",
  "CVC",
  "Polyester",
  "Cotton-Lycra",
  "Organic Cotton",
  "Cotton-Modal",
  "Other",
] as const;

const GSM_RANGES = [
  "120-140",
  "140-160",
  "160-180",
  "180-200",
  "200-240",
  "240-280",
  "280-320",
  "320+",
] as const;

const COLOR_OPTIONS = [
  "White",
  "Black",
  "Navy",
  "Grey",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Custom",
] as const;

const SIZE_OPTIONS = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "Custom",
] as const;

const PRINT_TYPES = [
  "None",
  "Screen Print",
  "Embroidery",
  "DTG Print",
  "Sublimation",
  "Heat Transfer",
] as const;

const DELIVERY_TIMELINES = [
  "30 days",
  "45 days",
  "60 days",
  "90 days",
  "Flexible",
] as const;

const CERT_OPTIONS = ["GOTS", "Oeko-Tex", "BSCI", "None"] as const;

const INITIAL_DATA: FormData = {
  stepOne: {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    website: "",
  },
  stepTwo: {
    productType: "",
    fabric: "",
    gsmRange: "",
    colors: [],
    sizes: [],
    quantity: "",
    printType: "",
  },
  stepThree: {
    targetPrice: "",
    deliveryTimeline: "",
    certifications: [],
    sampleRequired: "",
    notes: "",
  },
};

// ──────────────────────────────────────────────
// Validation
// ──────────────────────────────────────────────

function validateStepOne(data: StepOneData): StepErrors {
  const errors: StepErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required";
  if (!data.companyName.trim()) errors.companyName = "Company name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.phone.trim()) errors.phone = "Phone/WhatsApp is required";
  if (!data.country) errors.country = "Country is required";
  return errors;
}

function validateStepTwo(data: StepTwoData): StepErrors {
  const errors: StepErrors = {};
  if (!data.productType) errors.productType = "Product type is required";
  if (!data.fabric) errors.fabric = "Fabric is required";
  if (!data.gsmRange) errors.gsmRange = "GSM range is required";
  if (data.colors.length === 0) errors.colors = "Select at least one color";
  if (data.sizes.length === 0) errors.sizes = "Select at least one size";
  if (!data.quantity.trim()) {
    errors.quantity = "Quantity is required";
  } else if (parseInt(data.quantity, 10) < 500) {
    errors.quantity = "Minimum order quantity is 500 pieces";
  }
  return errors;
}

function validateStepThree(_data: StepThreeData): StepErrors {
  return {};
}

// ──────────────────────────────────────────────
// Shared Styles
// ──────────────────────────────────────────────

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all";

const LABEL_CLASS =
  "block font-body text-sm font-medium text-text-primary mb-1.5";

const CHECKBOX_LABEL =
  "flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border border-gray-200 hover:border-gold/50 transition-colors text-sm font-body select-none";

const CHECKBOX_LABEL_ACTIVE =
  "flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border-2 border-gold bg-gold/5 transition-colors text-sm font-body font-medium select-none";

// ──────────────────────────────────────────────
// Custom Select
// ──────────────────────────────────────────────

interface CustomSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  renderOption?: (option: string) => string;
}

function CustomSelect({
  id,
  value,
  onChange,
  options,
  placeholder,
  renderOption,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue = value
    ? renderOption
      ? renderOption(value)
      : value
    : placeholder;

  return (
    <div ref={ref} className="relative" id={id}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${INPUT_CLASS} flex items-center justify-between text-left ${
          !value ? "text-gray-400" : "text-text-primary"
        }`}
      >
        <span className="truncate">{displayValue}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg py-1"
          >
            {options.map((option) => {
              const isSelected = value === option;
              return (
                <li
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-body cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-gold/10 text-navy font-medium"
                      : "text-text-primary hover:bg-gray-50"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-gold shrink-0" />}
                  <span className={isSelected ? "" : "pl-6"}>
                    {renderOption ? renderOption(option) : option}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

// ──────────────────────────────────────────────
// Sub-Components
// ──────────────────────────────────────────────

function ProgressBar({
  currentStep,
  onStepClick,
}: {
  currentStep: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div className="mb-10">
      {/* Desktop */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-gold transition-all duration-500"
          style={{
            width: `${(Math.max(0, currentStep - 1) / (STEPS.length - 1)) * 100}%`,
          }}
        />

        {STEPS.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = index < currentStep;

          return (
            <button
              key={step.label}
              type="button"
              onClick={() => isClickable && onStepClick(index)}
              disabled={!isClickable}
              className={`relative flex flex-col items-center z-10 ${
                isClickable ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-gold text-navy shadow-md"
                    : isCurrent
                      ? "bg-navy text-white shadow-lg ring-4 ring-gold/20"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <StepIcon className="w-5 h-5" />
                )}
              </div>
              <span
                className={`mt-2 text-xs font-body font-medium ${
                  isCurrent
                    ? "text-navy"
                    : isCompleted
                      ? "text-gold-dark"
                      : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="font-body text-sm font-medium text-navy">
            Step {currentStep + 1} of {STEPS.length}
          </span>
          <span className="font-body text-sm text-text-secondary">
            {STEPS[currentStep].label}
          </span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gold rounded-full transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / STEPS.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function CheckboxGroup({
  options,
  selected,
  onChange,
}: {
  options: readonly string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const handleToggle = useCallback(
    (option: string) => {
      const newSelected = selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option];
      onChange(newSelected);
    },
    [selected, onChange]
  );

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = selected.includes(option);
        return (
          <label
            key={option}
            className={isActive ? CHECKBOX_LABEL_ACTIVE : CHECKBOX_LABEL}
          >
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => handleToggle(option)}
              className="sr-only"
            />
            {isActive && <Check className="w-3.5 h-3.5 text-gold" />}
            {option}
          </label>
        );
      })}
    </div>
  );
}

function ReviewSection({
  title,
  items,
  onEdit,
}: {
  title: string;
  items: { label: string; value: string }[];
  onEdit: () => void;
}) {
  return (
    <div className="bg-bg-light rounded-xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 text-sm font-body text-gold-dark hover:text-gold font-medium transition-colors"
        >
          <Pencil className="w-3.5 h-3.5" />
          Edit
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-body text-xs uppercase tracking-wider text-text-secondary mb-0.5">
              {item.label}
            </p>
            <p className="font-body text-sm text-text-primary font-medium">
              {item.value || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Step Components
// ──────────────────────────────────────────────

function StepOne({
  data,
  errors,
  onChange,
}: {
  data: StepOneData;
  errors: StepErrors;
  onChange: (field: keyof StepOneData, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-fullName" className={LABEL_CLASS}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="q-fullName"
            type="text"
            value={data.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="John Smith"
            className={INPUT_CLASS}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-companyName" className={LABEL_CLASS}>
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="q-companyName"
            type="text"
            value={data.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            placeholder="Your company"
            className={INPUT_CLASS}
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-email" className={LABEL_CLASS}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="q-email"
            type="email"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="you@company.com"
            className={INPUT_CLASS}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-phone" className={LABEL_CLASS}>
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="q-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+1-234-567-8900"
            className={INPUT_CLASS}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-country" className={LABEL_CLASS}>
            Country <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            id="q-country"
            value={data.country}
            onChange={(val) => onChange("country", val)}
            options={COUNTRIES}
            placeholder="Select country"
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-website" className={LABEL_CLASS}>
            Website <span className="text-text-secondary">(optional)</span>
          </label>
          <input
            id="q-website"
            type="url"
            value={data.website}
            onChange={(e) => onChange("website", e.target.value)}
            placeholder="https://yourcompany.com"
            className={INPUT_CLASS}
          />
        </div>
      </div>
    </div>
  );
}

function StepTwo({
  data,
  errors,
  onChange,
  onMultiChange,
}: {
  data: StepTwoData;
  errors: StepErrors;
  onChange: (field: keyof StepTwoData, value: string) => void;
  onMultiChange: (field: "colors" | "sizes", values: string[]) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="q-productType" className={LABEL_CLASS}>
            Product Type <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            id="q-productType"
            value={data.productType}
            onChange={(val) => onChange("productType", val)}
            options={PRODUCT_TYPES}
            placeholder="Select product"
          />
          {errors.productType && (
            <p className="text-red-500 text-xs mt-1">{errors.productType}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-fabric" className={LABEL_CLASS}>
            Fabric <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            id="q-fabric"
            value={data.fabric}
            onChange={(val) => onChange("fabric", val)}
            options={FABRICS}
            placeholder="Select fabric"
          />
          {errors.fabric && (
            <p className="text-red-500 text-xs mt-1">{errors.fabric}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-gsm" className={LABEL_CLASS}>
            GSM Range <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            id="q-gsm"
            value={data.gsmRange}
            onChange={(val) => onChange("gsmRange", val)}
            options={GSM_RANGES}
            placeholder="Select GSM"
            renderOption={(g) => `${g} GSM`}
          />
          {errors.gsmRange && (
            <p className="text-red-500 text-xs mt-1">{errors.gsmRange}</p>
          )}
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS}>
          Colors <span className="text-red-500">*</span>
        </label>
        <CheckboxGroup
          options={COLOR_OPTIONS}
          selected={data.colors}
          onChange={(values) => onMultiChange("colors", values)}
        />
        {errors.colors && (
          <p className="text-red-500 text-xs mt-1">{errors.colors}</p>
        )}
      </div>

      <div>
        <label className={LABEL_CLASS}>
          Sizes <span className="text-red-500">*</span>
        </label>
        <CheckboxGroup
          options={SIZE_OPTIONS}
          selected={data.sizes}
          onChange={(values) => onMultiChange("sizes", values)}
        />
        {errors.sizes && (
          <p className="text-red-500 text-xs mt-1">{errors.sizes}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-quantity" className={LABEL_CLASS}>
            Quantity (pieces) <span className="text-red-500">*</span>
          </label>
          <input
            id="q-quantity"
            type="number"
            min={500}
            value={data.quantity}
            onChange={(e) => onChange("quantity", e.target.value)}
            placeholder="Min 500"
            className={INPUT_CLASS}
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
          )}
        </div>
        <div>
          <label htmlFor="q-printType" className={LABEL_CLASS}>
            Print / Embroidery
          </label>
          <CustomSelect
            id="q-printType"
            value={data.printType}
            onChange={(val) => onChange("printType", val)}
            options={PRINT_TYPES}
            placeholder="Select option"
          />
        </div>
      </div>
    </div>
  );
}

function StepThree({
  data,
  errors,
  onChange,
  onMultiChange,
}: {
  data: StepThreeData;
  errors: StepErrors;
  onChange: (field: keyof StepThreeData, value: string) => void;
  onMultiChange: (field: "certifications", values: string[]) => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="q-targetPrice" className={LABEL_CLASS}>
            Target Price per Piece (USD){" "}
            <span className="text-text-secondary">(optional)</span>
          </label>
          <input
            id="q-targetPrice"
            type="text"
            value={data.targetPrice}
            onChange={(e) => onChange("targetPrice", e.target.value)}
            placeholder="e.g. $3.50"
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="q-timeline" className={LABEL_CLASS}>
            Delivery Timeline
          </label>
          <CustomSelect
            id="q-timeline"
            value={data.deliveryTimeline}
            onChange={(val) => onChange("deliveryTimeline", val)}
            options={DELIVERY_TIMELINES}
            placeholder="Select timeline"
          />
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS}>Certifications Needed</label>
        <CheckboxGroup
          options={CERT_OPTIONS}
          selected={data.certifications}
          onChange={(values) => onMultiChange("certifications", values)}
        />
      </div>

      <div>
        <label className={LABEL_CLASS}>Sample Required?</label>
        <div className="flex gap-4">
          {["Yes", "No"].map((option) => (
            <label
              key={option}
              className={`flex items-center gap-2 cursor-pointer px-5 py-2.5 rounded-lg border transition-colors text-sm font-body ${
                data.sampleRequired === option
                  ? "border-2 border-gold bg-gold/5 font-medium"
                  : "border-gray-200 hover:border-gold/50"
              }`}
            >
              <input
                type="radio"
                name="sampleRequired"
                value={option}
                checked={data.sampleRequired === option}
                onChange={() => onChange("sampleRequired", option)}
                className="sr-only"
              />
              {data.sampleRequired === option && (
                <Check className="w-3.5 h-3.5 text-gold" />
              )}
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="q-notes" className={LABEL_CLASS}>
          Additional Notes{" "}
          <span className="text-text-secondary">(optional)</span>
        </label>
        <textarea
          id="q-notes"
          rows={4}
          value={data.notes}
          onChange={(e) => onChange("notes", e.target.value)}
          placeholder="Any specific requirements, reference images, tech pack details..."
          className={INPUT_CLASS + " resize-none"}
        />
      </div>
    </div>
  );
}

function StepFour({
  data,
  goToStep,
}: {
  data: FormData;
  goToStep: (step: number) => void;
}) {
  const { stepOne, stepTwo, stepThree } = data;

  return (
    <div className="space-y-6">
      <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 md:p-5">
        <p className="font-body text-sm text-navy font-medium">
          Please review your inquiry details below. Click &quot;Edit&quot; to
          make changes to any section.
        </p>
      </div>

      <ReviewSection
        title="Your Details"
        onEdit={() => goToStep(0)}
        items={[
          { label: "Full Name", value: stepOne.fullName },
          { label: "Company", value: stepOne.companyName },
          { label: "Email", value: stepOne.email },
          { label: "Phone / WhatsApp", value: stepOne.phone },
          { label: "Country", value: stepOne.country },
          { label: "Website", value: stepOne.website },
        ]}
      />

      <ReviewSection
        title="Product Requirements"
        onEdit={() => goToStep(1)}
        items={[
          { label: "Product Type", value: stepTwo.productType },
          { label: "Fabric", value: stepTwo.fabric },
          { label: "GSM Range", value: stepTwo.gsmRange ? `${stepTwo.gsmRange} GSM` : "" },
          { label: "Colors", value: stepTwo.colors.join(", ") },
          { label: "Sizes", value: stepTwo.sizes.join(", ") },
          { label: "Quantity", value: stepTwo.quantity ? `${stepTwo.quantity} pieces` : "" },
          { label: "Print / Embroidery", value: stepTwo.printType },
        ]}
      />

      <ReviewSection
        title="Additional Details"
        onEdit={() => goToStep(2)}
        items={[
          { label: "Target Price", value: stepThree.targetPrice },
          { label: "Delivery Timeline", value: stepThree.deliveryTimeline },
          { label: "Certifications", value: stepThree.certifications.join(", ") },
          { label: "Sample Required", value: stepThree.sampleRequired },
          { label: "Additional Notes", value: stepThree.notes },
        ]}
      />
    </div>
  );
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center py-8 md:py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-10 h-10 text-emerald-500" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3"
      >
        Thank You!
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3 mb-8"
      >
        <p className="font-body text-text-secondary text-lg">
          Your inquiry{" "}
          <span className="font-semibold text-navy">#SLK-2026-001</span> has
          been received.
        </p>
        <p className="font-body text-text-secondary">
          Our export team will contact you within{" "}
          <span className="font-semibold">24 hours</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="inline-flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I just submitted inquiry %23SLK-2026-001. I'd like to follow up.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-body font-semibold rounded-lg hover:brightness-110 transition-all shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp: {COMPANY.phone}
        </a>
      </motion.div>
    </motion.div>
  );
}

// ──────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────

export function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<StepErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateStepOne = useCallback(
    (field: keyof StepOneData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        stepOne: { ...prev.stepOne, [field]: value },
      }));
      setErrors((prev) => {
        if (prev[field]) {
          const { [field]: _, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const updateStepTwo = useCallback(
    (field: keyof StepTwoData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        stepTwo: { ...prev.stepTwo, [field]: value },
      }));
      setErrors((prev) => {
        if (prev[field]) {
          const { [field]: _, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const updateStepTwoMulti = useCallback(
    (field: "colors" | "sizes", values: string[]) => {
      setFormData((prev) => ({
        ...prev,
        stepTwo: { ...prev.stepTwo, [field]: values },
      }));
      setErrors((prev) => {
        if (prev[field]) {
          const { [field]: _, ...rest } = prev;
          return rest;
        }
        return prev;
      });
    },
    []
  );

  const updateStepThree = useCallback(
    (field: keyof StepThreeData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        stepThree: { ...prev.stepThree, [field]: value },
      }));
    },
    []
  );

  const updateStepThreeMulti = useCallback(
    (field: "certifications", values: string[]) => {
      setFormData((prev) => ({
        ...prev,
        stepThree: { ...prev.stepThree, [field]: values },
      }));
    },
    []
  );

  const validateCurrentStep = useCallback((): boolean => {
    let stepErrors: StepErrors = {};
    if (currentStep === 0) stepErrors = validateStepOne(formData.stepOne);
    if (currentStep === 1) stepErrors = validateStepTwo(formData.stepTwo);
    if (currentStep === 2) stepErrors = validateStepThree(formData.stepThree);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }, [currentStep, formData]);

  const goNext = useCallback(() => {
    if (!validateCurrentStep()) return;
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
    setErrors({});
  }, [validateCurrentStep]);

  const goPrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setErrors({});
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(step);
    setErrors({});
  }, []);

  const handleSubmit = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <SuccessState />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <ProgressBar currentStep={currentStep} onStepClick={goToStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step heading */}
            <div className="mb-6">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-navy">
                {STEPS[currentStep].label}
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full mt-2" />
            </div>

            {currentStep === 0 && (
              <StepOne
                data={formData.stepOne}
                errors={errors}
                onChange={updateStepOne}
              />
            )}
            {currentStep === 1 && (
              <StepTwo
                data={formData.stepTwo}
                errors={errors}
                onChange={updateStepTwo}
                onMultiChange={updateStepTwoMulti}
              />
            )}
            {currentStep === 2 && (
              <StepThree
                data={formData.stepThree}
                errors={errors}
                onChange={updateStepThree}
                onMultiChange={updateStepThreeMulti}
              />
            )}
            {currentStep === 3 && (
              <StepFour data={formData} goToStep={goToStep} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentStep === 0}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-medium text-sm transition-all ${
              currentStep === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-navy hover:bg-navy/5"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {currentStep < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white font-body font-semibold text-sm rounded-lg hover:bg-navy-light transition-colors shadow-md hover:shadow-lg"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-heading font-bold text-base rounded-lg hover:bg-gold-dark transition-colors shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              Submit Inquiry
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
