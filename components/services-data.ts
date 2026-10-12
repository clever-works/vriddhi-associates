export type ServicePillar = {
  id: string;
  title: string;
  subtitle?: string;
  blurb: string;
  details?: string;
  listHeading?: string;
  items: string[];
  closing?: string;
};

export const services: ServicePillar[] = [
  {
    id: "property-solutions",
    title: "End-to-End Property Solutions",
    subtitle: "Trusted Property Support, Wherever You Are",
    blurb:
      "Helping owners, investors, and businesses buy, sell, lease, and build the right property with confidence.",
    details:
      "Own a property in Chennai but live elsewhere? We inspect, maintain, coordinate repairs, pay statutory dues, manage tenants and provide regular updates with photos and videos, giving you complete peace of mind.",
    items: [
      "Buying & Selling",
      "Residential & Commercial Leasing",
      "Built-to-Suit (BTS) Projects",
      "Investment Advisory",
    ],
  },
  {
    id: "branding-marketing",
    title: "Branding & Marketing Services",
    subtitle: "Build Your Brand & Grow Your Reach",
    blurb:
      "Creating impactful brand identities and marketing strategies that enhance visibility and generate quality leads.",
    details:
      "From shaping your brand identity to building a consistent digital presence, we help your business connect with the right audience, communicate its value and grow with confidence.",
    items: [
      "Branding",
      "Digital Marketing",
      "Social Media Marketing",
      "Creative Design",
      "Website Development",
    ],
  },
  {
    id: "business-consultant-msme",
    title: "Business Consultant – MSME",
    subtitle: "Empowering MSMEs with the Right Guidance & Government Schemes",
    blurb:
      "Through our association with Lumen Network, we support MSMEs in identifying suitable Government schemes, incentives and business support opportunities.",
    details:
      "We help business owners understand the schemes relevant to their business, assess eligibility and navigate the process with the right guidance and support.",
    listHeading: "Our MSME Support Includes:",
    items: [
      "Government Scheme Identification",
      "MSME Growth & Business Support",
      "Scheme Eligibility Guidance",
      "Funding & Incentive Opportunities",
      "Business Documentation Support",
      "Strategic Business Guidance",
    ],
    closing:
      "Our goal is simple — to help MSMEs identify the right opportunities and access the support available for their growth.",
  },
  {
    id: "multi-level-car-parking",
    title: "Multi-Level Car Parking Solutions",
    subtitle: "Smart Parking Solutions for Chennai & Tamil Nadu",
    blurb:
      "We represent YES Car Parking Systems, headquartered in Bangalore, with its own manufacturing unit, and handle the Chennai Region.",
    details:
      "We provide customised Multi-Level and Automated Car Parking Solutions to maximise parking capacity and make better use of available space.",
    listHeading: "Our Parking Solutions Include:",
    items: [
      "1+1 & 1+2 Stack Parking",
      "Puzzle Parking",
      "Tower Parking",
      "Shuttle Parking",
      "Multi-Level Car Parking Systems",
      "Automated Parking Solutions",
      "Project Installation & Support",
    ],
    closing:
      "Suitable for residential apartments, commercial buildings, hospitals, hotels, offices, malls and other projects.",
  },
];
