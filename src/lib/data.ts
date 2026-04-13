export const COMPANY = {
  name: "Sri Lakshmi Knit Exports",
  tagline: "Premium Knitwear Manufacturer & Exporter Since 1998",
  shortName: "SLK Exports",
  phone: "+91-98765-43210",
  email: "info@srilakshmiknit.com",
  whatsapp: "918072354657",
  address: "SIPCOT Industrial Area, Tiruppur, Tamil Nadu 641604, India",
  founded: 1998,
  employees: "350+",
  factoryArea: "50,000 sq ft",
  annualCapacity: "2 Million pieces",
  website: "www.srilakshmiknit.com",
  socialMedia: {
    linkedin: "https://linkedin.com/company/srilakshmiknit",
    instagram: "https://instagram.com/srilakshmiknit",
    facebook: "https://facebook.com/srilakshmiknit",
  },
} as const;

export const STATS = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Export Countries" },
  { value: 2, suffix: "M+", label: "Pieces Per Year" },
] as const;

export const EXPORT_COUNTRIES = [
  "Germany", "UK", "France", "Spain", "Netherlands", "USA", "Australia",
] as const;

export const CERTIFICATIONS = [
  {
    name: "GOTS",
    fullName: "Global Organic Textile Standard",
    description:
      "Certified for organic fiber processing. Our entire supply chain meets GOTS requirements for organic textiles.",
    icon: "Leaf",
  },
  {
    name: "Oeko-Tex Standard 100",
    fullName: "Oeko-Tex Standard 100",
    description:
      "Tested for harmful substances. Every product we ship is certified safe for human use, including baby wear.",
    icon: "ShieldCheck",
  },
  {
    name: "BSCI",
    fullName: "Business Social Compliance Initiative",
    description:
      "Audited for fair labor practices, safe working conditions, and ethical business operations.",
    icon: "Users",
  },
  {
    name: "Sedex/SMETA",
    fullName: "Sedex Members Ethical Trade Audit",
    description:
      "Member of Sedex with SMETA 4-pillar audit covering labor, health & safety, environment, and business ethics.",
    icon: "Award",
  },
  {
    name: "ISO 9001:2015",
    fullName: "Quality Management System",
    description:
      "Quality management system certification ensuring consistent product quality and continuous improvement.",
    icon: "BadgeCheck",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  { name: "T-Shirts & Round Necks", slug: "t-shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop" },
  { name: "Polo Shirts", slug: "polo", image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=400&fit=crop" },
  { name: "Hoodies & Sweatshirts", slug: "hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop" },
  { name: "Joggers & Track Pants", slug: "joggers", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=400&fit=crop" },
  { name: "Kids Wear", slug: "kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=400&fit=crop" },
  { name: "Women's Wear", slug: "womens", image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=400&fit=crop" },
] as const;

export interface Product {
  id: number;
  name: string;
  fabric: string;
  gsm: string;
  moq: string;
  category: string;
  colors: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Cotton Crew Neck T-Shirt",
    fabric: "100% Cotton",
    gsm: "180 GSM",
    moq: "1,000 pieces",
    category: "t-shirts",
    colors: ["#FFFFFF", "#000000", "#1B2A4A", "#6B7280", "#DC2626"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Classic Polo Shirt",
    fabric: "CVC 60/40",
    gsm: "220 GSM",
    moq: "1,000 pieces",
    category: "polo",
    colors: ["#FFFFFF", "#000000", "#1B2A4A", "#14532D"],
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Heavyweight Hoodie",
    fabric: "100% Cotton Fleece",
    gsm: "320 GSM",
    moq: "500 pieces",
    category: "hoodies",
    colors: ["#000000", "#6B7280", "#1B2A4A", "#7C2D12"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Slim Fit Jogger",
    fabric: "Cotton Lycra",
    gsm: "240 GSM",
    moq: "1,000 pieces",
    category: "joggers",
    colors: ["#000000", "#6B7280", "#1B2A4A"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Kids Basic Tee",
    fabric: "100% Cotton",
    gsm: "140 GSM",
    moq: "2,000 pieces",
    category: "kids",
    colors: ["#FFFFFF", "#FBBF24", "#60A5FA", "#F472B6", "#34D399"],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    name: "Women's V-Neck Tee",
    fabric: "Cotton Modal",
    gsm: "160 GSM",
    moq: "1,000 pieces",
    category: "womens",
    colors: ["#FFFFFF", "#000000", "#F472B6", "#A78BFA"],
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Oversized Drop Shoulder Tee",
    fabric: "100% Cotton",
    gsm: "200 GSM",
    moq: "1,000 pieces",
    category: "t-shirts",
    colors: ["#FFFFFF", "#000000", "#F5F5DC", "#D4B896"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Full Zip Sweatshirt",
    fabric: "Cotton Fleece",
    gsm: "280 GSM",
    moq: "500 pieces",
    category: "hoodies",
    colors: ["#000000", "#6B7280", "#1B2A4A", "#14532D"],
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500&h=500&fit=crop",
  },
  {
    id: 9,
    name: "Contrast Collar Polo",
    fabric: "100% Cotton Pique",
    gsm: "240 GSM",
    moq: "1,000 pieces",
    category: "polo",
    colors: ["#FFFFFF", "#1B2A4A", "#14532D", "#7C2D12"],
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&h=500&fit=crop",
  },
  {
    id: 10,
    name: "French Terry Shorts",
    fabric: "Cotton",
    gsm: "260 GSM",
    moq: "1,000 pieces",
    category: "joggers",
    colors: ["#000000", "#6B7280", "#1B2A4A", "#F5F5DC"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
  },
  {
    id: 11,
    name: "Henley Neck T-Shirt",
    fabric: "Slub Cotton",
    gsm: "170 GSM",
    moq: "1,000 pieces",
    category: "t-shirts",
    colors: ["#FFFFFF", "#D4B896", "#6B7280", "#14532D"],
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop",
  },
  {
    id: 12,
    name: "Kids Hoodie",
    fabric: "Cotton Fleece",
    gsm: "280 GSM",
    moq: "1,000 pieces",
    category: "kids",
    colors: ["#60A5FA", "#F472B6", "#FBBF24", "#34D399"],
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&h=500&fit=crop",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sri Lakshmi has been our reliable supplier for 8 years. Consistent quality and excellent communication.",
    author: "Thomas Weber",
    role: "Procurement Head",
    company: "Weber GmbH",
    country: "Germany",
  },
  {
    quote:
      "Best price-to-quality ratio we've found in India. Their GOTS certification was a key factor for us.",
    author: "Sarah Mitchell",
    role: "Sourcing Manager",
    company: "GreenThreads UK",
    country: "United Kingdom",
  },
  {
    quote:
      "From sampling to bulk delivery, the team is professional and responsive. Highly recommended.",
    author: "Marc Dupont",
    role: "Director",
    company: "ModeActive",
    country: "France",
  },
] as const;

export const TEAM = [
  {
    name: "K. Lakshmi Narayanan",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "R. Senthil Kumar",
    role: "Head of Production",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "P. Meenakshi",
    role: "Quality Assurance Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "S. Arjun",
    role: "Export & Logistics Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
] as const;

export const TIMELINE = [
  { year: "1998", event: "Founded in Tiruppur" },
  { year: "2003", event: "First export order to Germany" },
  { year: "2008", event: "GOTS & Oeko-Tex certification" },
  { year: "2012", event: "New SIPCOT factory, 50,000 sq ft" },
  { year: "2018", event: "Crossed 1 Million pieces annual capacity" },
  { year: "2023", event: "Expanded to 15+ export countries" },
  { year: "2026", event: "2 Million+ annual capacity" },
] as const;

export const INFRASTRUCTURE = [
  { label: "Factory Area", value: "50,000 sq ft" },
  { label: "Knitting Machines", value: "40+" },
  { label: "Stitching Machines", value: "200+" },
  { label: "Daily Capacity", value: "8,000 pieces" },
  { label: "Workers", value: "350+" },
  { label: "Quality Checkers", value: "25+" },
] as const;

export const QUALITY_PROCESS = [
  { step: "Yarn Inspection", description: "Incoming raw material quality check" },
  { step: "Knitting QC", description: "Fabric quality and GSM verification" },
  { step: "Dyeing Lab Test", description: "Color matching and fastness testing" },
  { step: "Cutting Check", description: "Pattern accuracy and fabric utilization" },
  { step: "Inline Inspection", description: "Real-time stitching quality monitoring" },
  { step: "Final Audit", description: "Complete garment inspection" },
  { step: "AQL Check", description: "Statistical quality sampling" },
  { step: "Ship", description: "Packed and dispatched to destination" },
] as const;

export const BLOG_CATEGORIES = [
  "All",
  "Industry",
  "Buying Guide",
  "Certifications",
  "Sourcing",
  "Sustainability",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: string;
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "tiruppur-knitwear-capital",
    title: "Why Tiruppur is the World's Knitwear Capital",
    excerpt:
      "Discover how this small city in Tamil Nadu became the backbone of India's knitwear export industry, contributing over 50% of the country's total knitwear exports.",
    content: `Tiruppur, a bustling city in Tamil Nadu, India, has earned the title of "Knitwear Capital of the World" — and for good reason. This city contributes over 50% of India's total knitwear exports and supplies garments to some of the biggest fashion brands globally.

## The Rise of Tiruppur

In the 1970s, Tiruppur was a small town known for its cotton farming. Local entrepreneurs began setting up small-scale knitting units, taking advantage of the abundant cotton supply and skilled labor. By the 1990s, Tiruppur had transformed into a major manufacturing hub.

## Why Tiruppur Stands Out

### Vertically Integrated Supply Chain
From yarn spinning to finished garments — everything happens within a 50 km radius. This means faster production, better quality control, and competitive pricing.

### Skilled Workforce
Generations of families have worked in the textile industry. The skill and expertise passed down make Tiruppur's workforce unmatched in knitwear production.

### Infrastructure
The city has dedicated industrial zones like SIPCOT, Common Effluent Treatment Plants (CETPs), and excellent logistics connectivity to ports in Chennai and Tuticorin.

### Certifications
Most Tiruppur manufacturers hold international certifications like GOTS, Oeko-Tex, BSCI, and Sedex — making them preferred partners for European and American brands.

## Key Statistics

- **Annual Export Value**: Over $4 billion USD
- **Number of Units**: 6,000+ manufacturing units
- **Employment**: Over 600,000 people
- **Top Export Markets**: Germany, UK, France, USA, Spain, Netherlands

## The Future

With growing demand for sustainable and organic textiles, Tiruppur is well-positioned for the future. Many manufacturers have invested in Zero Liquid Discharge (ZLD) plants, solar energy, and organic cotton sourcing.

Sri Lakshmi Knit Exports, based in SIPCOT Industrial Area, Tiruppur, has been part of this story since 1998 — delivering premium knitwear to 15+ countries with GOTS and Oeko-Tex certification.`,
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=400&fit=crop",
    category: "Industry",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "understanding-gsm-buyers-guide",
    title: "Understanding GSM: A Buyer's Guide to Fabric Weight",
    excerpt:
      "GSM (Grams per Square Meter) is the most important metric for fabric quality. Learn how to choose the right GSM for different garment types and seasons.",
    content: `When sourcing knitwear from manufacturers, one of the first questions you'll encounter is: "What GSM do you need?" GSM stands for Grams per Square Meter, and it's the universal measure of fabric weight and density.

## What is GSM?

GSM measures how heavy a fabric is per square meter. A higher GSM means a thicker, heavier fabric. A lower GSM means a lighter, thinner fabric. It directly affects the feel, durability, and suitability of a garment.

## GSM Ranges and Their Uses

### Lightweight (120–160 GSM)
- **Best for**: Summer t-shirts, innerwear, promotional tees
- **Feel**: Thin, breathable, soft
- **Common fabrics**: Single jersey cotton, cotton-modal blends
- **Typical products**: Kids' basic tees, women's fashion tees, undershirts

### Medium Weight (160–200 GSM)
- **Best for**: Premium t-shirts, everyday wear, retail brands
- **Feel**: Substantial, comfortable, good drape
- **Common fabrics**: Combed cotton, organic cotton, CVC blends
- **Typical products**: Crew necks, V-necks, Henley shirts

### Heavyweight (200–280 GSM)
- **Best for**: Polo shirts, structured garments, workwear
- **Feel**: Thick, durable, premium
- **Common fabrics**: Cotton pique, interlock, cotton-lycra
- **Typical products**: Polo shirts, joggers, track pants

### Super Heavy (280–320+ GSM)
- **Best for**: Hoodies, sweatshirts, winter wear
- **Feel**: Very thick, warm, cozy
- **Common fabrics**: Fleece, french terry, brushed cotton
- **Typical products**: Hoodies, sweatshirts, zip-ups

## How to Choose the Right GSM

1. **Consider the season**: Summer = 140-180 GSM, Winter = 240-320 GSM
2. **Consider the end use**: Casual wear vs. workwear vs. fashion
3. **Consider your market**: European buyers often prefer heavier GSM; tropical markets prefer lighter
4. **Request fabric swatches**: Always request physical samples before placing bulk orders

## GSM Testing

At Sri Lakshmi Knit Exports, every fabric batch undergoes GSM testing using a GSM cutter and precision scale. We maintain a tolerance of ±5% to ensure consistency across production runs.

Need help choosing the right GSM for your products? Contact our team for expert guidance and free fabric swatches.`,
    date: "February 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&h=400&fit=crop",
    category: "Buying Guide",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "gots-vs-oeko-tex",
    title: "GOTS vs Oeko-Tex: Which Certification Do You Need?",
    excerpt:
      "Both certifications ensure product safety, but they serve different purposes. Here's a detailed comparison to help you decide which one your brand needs.",
    content: `If you're sourcing garments for the European or American market, you've likely encountered two major certifications: GOTS (Global Organic Textile Standard) and Oeko-Tex Standard 100. While both relate to textile safety and quality, they serve very different purposes.

## GOTS — Global Organic Textile Standard

### What it certifies
GOTS certifies the **entire supply chain** of organic textiles — from raw fiber harvesting to manufacturing, packaging, and labeling.

### Key requirements
- Minimum 70% organic fiber content (95% for "organic" label)
- No toxic chemicals in processing
- Fair labor practices throughout the supply chain
- Environmental management systems
- Annual on-site inspections

### Who needs it
- Brands marketing "organic" clothing
- Retailers with sustainability commitments
- Anyone selling organic cotton products in the EU

## Oeko-Tex Standard 100

### What it certifies
Oeko-Tex tests the **final product** for harmful substances — it doesn't certify the production process or whether fibers are organic.

### Key requirements
- Tested for over 100 harmful substances
- Covers pH levels, formaldehyde, heavy metals, pesticides
- Different product classes based on skin contact and age group
- Product Class I (baby products) has the strictest limits

### Who needs it
- Any brand that wants to guarantee product safety
- Brands selling children's or baby wear
- Brands entering markets that require safety certification

## Head-to-Head Comparison

| Feature | GOTS | Oeko-Tex 100 |
|---------|------|--------------|
| Focus | Organic supply chain | Product safety |
| Fiber requirement | 70%+ organic | Any fiber |
| Process certification | Yes | No |
| Chemical testing | Yes | Yes (more extensive) |
| Labor standards | Yes | No |
| Environmental | Yes | No |
| Cost | Higher | Lower |
| Recognition | High in EU/US | Universal |

## Which One Should You Choose?

### Choose GOTS if:
- Your brand positioning is around organic and sustainability
- Your customers specifically ask for organic certification
- You want to market products as "certified organic"

### Choose Oeko-Tex if:
- You need to guarantee product safety for all skin types
- You're producing children's and baby wear
- You want a cost-effective certification that's globally recognized

### Choose Both if:
- You want the strongest possible certification portfolio
- You're targeting premium European retailers
- You want to demonstrate both organic sourcing AND product safety

## Sri Lakshmi Knit Exports — Certified for Both

At Sri Lakshmi Knit Exports, we hold both GOTS and Oeko-Tex Standard 100 certifications, along with BSCI, Sedex, and ISO 9001:2015. This means our clients get the best of both worlds — verified organic processes and guaranteed product safety.

Contact us to learn more about our certified manufacturing capabilities.`,
    date: "January 20, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=400&fit=crop",
    category: "Certifications",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "how-to-choose-knitwear-manufacturer-india",
    title: "How to Choose a Knitwear Manufacturer in India",
    excerpt:
      "A step-by-step guide for international buyers on evaluating Indian knitwear manufacturers — from certifications and MOQs to factory audits and sampling.",
    content: `Choosing the right knitwear manufacturer in India can make or break your apparel brand. With thousands of factories in Tiruppur alone, here's how to find the right partner.

## 1. Check Certifications First

Look for GOTS, Oeko-Tex, BSCI, and Sedex certifications. These are non-negotiable for exporting to Europe and North America. A certified manufacturer demonstrates commitment to quality, safety, and ethical production.

## 2. Evaluate the Product Range

A good manufacturer should offer a wide range of knitwear — t-shirts, polos, hoodies, joggers, and kids wear. Ask for their product catalog and check if they can handle your specific requirements.

## 3. Understand MOQ and Lead Times

Most Indian knitwear manufacturers have a Minimum Order Quantity (MOQ) of 500–2,000 pieces per style. Lead times typically range from 45–60 days from order confirmation to shipment.

## 4. Request Samples

Always request development samples before placing a bulk order. Evaluate the fabric quality, stitching, print or embroidery finish, and overall construction.

## 5. Visit the Factory

If possible, visit the factory in person or request a virtual tour. Check the production floor, quality control setup, and working conditions.

## 6. Communication and Responsiveness

A reliable manufacturer responds promptly, provides clear timelines, and keeps you updated throughout production. This is often the best indicator of a good long-term partnership.

At Sri Lakshmi Knit Exports, we welcome factory visits and offer free development samples to serious buyers. Contact us to start a conversation.`,
    date: "April 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
    category: "Sourcing",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "cotton-vs-polyester-vs-blended-fabrics",
    title: "Cotton vs Polyester vs Blended Fabrics: Which is Right?",
    excerpt:
      "Compare the pros, cons, and best uses of cotton, polyester, and blended fabrics to make informed sourcing decisions for your knitwear brand.",
    content: `Fabric choice is the foundation of any garment. Understanding the differences between cotton, polyester, and blends helps you choose the right material for your product line.

## 100% Cotton

### Pros
- Naturally breathable and soft against skin
- Hypoallergenic — ideal for sensitive skin and baby wear
- Excellent moisture absorption
- Biodegradable and sustainable (especially organic cotton)

### Cons
- Shrinks after washing if not pre-treated
- Wrinkles easily
- Slower drying time

### Best for
Summer t-shirts, kids wear, organic clothing lines, innerwear

## Polyester

### Pros
- Highly durable and wrinkle-resistant
- Quick drying and moisture-wicking
- Retains color well, resists fading
- Lower cost per unit

### Cons
- Not breathable — traps heat
- Derived from petroleum (less sustainable)
- Can feel synthetic against skin

### Best for
Activewear, sportswear, sublimation printing, budget lines

## Blended Fabrics (CVC, TC, Cotton-Lycra)

### Pros
- Combines benefits of both fibers
- Better shape retention than pure cotton
- More comfortable than pure polyester
- Good balance of cost and quality

### Cons
- Recycling is harder with mixed fibers
- Quality varies by blend ratio

### Best for
Polo shirts, everyday casual wear, workwear, retail brands

## Choosing the Right Fabric

Consider your target market, price point, and end use. At Sri Lakshmi Knit Exports, we work with all major fabric types and can recommend the best option for your specific needs.`,
    date: "March 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop",
    category: "Buying Guide",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "sustainable-organic-cotton-knitwear",
    title: "Sustainable Fashion: The Rise of Organic Cotton Knitwear",
    excerpt:
      "Organic cotton knitwear is booming as brands and consumers demand eco-friendly fashion. Learn why organic cotton matters and how Tiruppur leads the way.",
    content: `The global organic cotton market is growing at over 20% annually, driven by consumer demand for sustainable fashion. Tiruppur, India's knitwear capital, is at the forefront of this movement.

## Why Organic Cotton?

Organic cotton is grown without synthetic pesticides, fertilizers, or genetically modified seeds. It uses 91% less water than conventional cotton and produces 46% less CO2. For fashion brands committed to sustainability, it's the obvious choice.

## GOTS Certification — The Gold Standard

The Global Organic Textile Standard (GOTS) ensures the entire supply chain — from farm to finished garment — meets strict environmental and social criteria. A GOTS-certified garment guarantees organic integrity at every step.

## Tiruppur's Organic Cotton Ecosystem

Tiruppur has built a robust organic cotton supply chain. Tamil Nadu and neighboring states produce significant organic cotton, and Tiruppur's manufacturers have invested heavily in GOTS certification. Today, hundreds of factories in the region are GOTS-certified.

## Consumer Demand is Real

Studies show that 73% of millennials are willing to pay more for sustainable products. European retailers like H&M, C&A, and Primark have set ambitious organic cotton targets. Brands that source organic knitwear now are ahead of the curve.

## How We Contribute

Sri Lakshmi Knit Exports has been GOTS-certified since 2008. We source organic cotton from verified farms and process it in our certified facility with Zero Liquid Discharge systems. Every organic garment we produce is fully traceable from farm to finished product.`,
    date: "March 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop",
    category: "Sustainability",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "moq-explained-garment-buyers",
    title: "MOQ Explained: What Garment Buyers Need to Know",
    excerpt:
      "Minimum Order Quantities can be confusing for first-time buyers. Learn how MOQs work in garment manufacturing and how to negotiate better terms.",
    content: `If you're new to garment sourcing, one of the first terms you'll encounter is MOQ — Minimum Order Quantity. Understanding MOQs helps you plan inventory, budget, and supplier negotiations effectively.

## What is MOQ?

MOQ is the smallest number of units a manufacturer will produce per order. In knitwear manufacturing, MOQs are typically set per style, per color. This means if a factory has a 1,000-piece MOQ and you want 3 colors, you'll need to order 3,000 pieces total.

## Why Do Manufacturers Set MOQs?

### Fabric minimums
Fabric mills have their own MOQs — usually 300–500 kg per color. A manufacturer needs enough orders to meet these fabric minimums.

### Production efficiency
Setting up knitting machines, dyeing, cutting, and stitching for a style takes time. Small runs are inefficient and cost-prohibitive.

### Cost control
Fixed costs like sampling, pattern making, and quality inspection are spread across the order. Larger orders mean lower per-unit costs.

## Typical MOQs in Indian Knitwear

- **Basic t-shirts**: 1,000–2,000 pieces per color
- **Polo shirts**: 1,000 pieces per color
- **Hoodies & sweatshirts**: 500 pieces per color
- **Kids wear**: 1,500–2,000 pieces per color

## Tips for First-Time Buyers

1. **Start with stock fabrics** — manufacturers often have lower MOQs for fabrics they already stock
2. **Combine colors in one fabric** — reduces fabric MOQ pressure
3. **Build a relationship first** — manufacturers may offer flexibility to long-term partners
4. **Consider sampling first** — order development samples before committing to bulk

At Sri Lakshmi Knit Exports, our MOQs start at 500 pieces for hoodies and 1,000 pieces for t-shirts and polos. We offer flexibility for first-time buyers looking to test the market.`,
    date: "February 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=400&fit=crop",
    category: "Buying Guide",
    author: "Sri Lakshmi Knit Exports Team",
  },
  {
    slug: "private-label-knitwear-manufacturing",
    title: "Private Label Knitwear Manufacturing: A Complete Guide",
    excerpt:
      "Everything you need to know about starting your own knitwear brand with a private label manufacturer — from design to delivery.",
    content: `Private label manufacturing allows you to sell garments under your own brand name without owning a factory. It's how most fashion brands operate, from startups to global retailers.

## What is Private Label Manufacturing?

In private label manufacturing, you design the product (or choose from existing templates), and the manufacturer produces it with your branding — labels, tags, packaging, and custom details.

## The Process

### Step 1: Design Brief
Share your design requirements — sketches, tech packs, reference images, or simply describe what you want. A good manufacturer can work from minimal input.

### Step 2: Sampling
The manufacturer creates development samples for your approval. This typically takes 10–15 days and includes fabric swatches, size sets, and fit samples.

### Step 3: Bulk Production
Once you approve the sample, bulk production begins. Typical lead time is 45–60 days depending on order quantity and complexity.

### Step 4: Quality Control
Multiple inspection points ensure the final product matches the approved sample. AQL (Acceptable Quality Level) checks are standard.

### Step 5: Shipping
The manufacturer handles packing and can arrange FOB or CIF shipping to your destination.

## What You Need to Provide

- Brand labels (woven or printed)
- Hang tags and care labels
- Packaging specifications
- Size chart and fit preferences

## Why Choose India for Private Label?

India offers competitive pricing, high-quality cotton, certified manufacturing, and experienced teams who understand international brand requirements. Tiruppur alone serves thousands of private label brands worldwide.

Sri Lakshmi Knit Exports offers end-to-end private label services. From design consultation to doorstep delivery, we handle everything so you can focus on building your brand.`,
    date: "January 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=400&fit=crop",
    category: "Sourcing",
    author: "Sri Lakshmi Knit Exports Team",
  },
];

export const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia",
  "Czech Republic", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece",
  "Hong Kong", "Hungary", "India", "Indonesia", "Ireland", "Israel", "Italy",
  "Japan", "Kenya", "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand",
  "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa",
  "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Taiwan",
  "Thailand", "Turkey", "UAE", "UK", "USA", "Vietnam",
] as const;
