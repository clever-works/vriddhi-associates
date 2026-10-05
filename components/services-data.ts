export type ServicePillar = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
};

export const services: ServicePillar[] = [
  {
    id: "property-solutions",
    title: "Property Solutions",
    blurb:
      "Helping owners, investors, and businesses buy, sell, lease, and build the right property with confidence.",
    items: [
      "Buying & Selling",
      "Residential & Commercial Leasing",
      "Built-to-Suit (BTS) Projects",
      "Investment Advisory",
    ],
  },
  {
    id: "property-management",
    title: "Property Management",
    blurb:
      "Keeping your property inspected, cared for, and secure, whether you're across town or across the world.",
    items: [
      "Regular Property Inspection",
      "Photo & Video Reports",
      "Vacant Property Care",
      "Key Holding",
      "House Opening Service",
    ],
  },
  {
    id: "property-maintenance",
    title: "Property Maintenance",
    blurb:
      "A trusted vendor network for every maintenance need, coordinated end-to-end so you don't have to chase anyone.",
    items: [
      "Plumbing",
      "Electrical",
      "Painting",
      "Carpentry",
      "House Cleaning",
      "Pest Control",
      "Gardening",
      "AC Maintenance",
    ],
  },
  {
    id: "property-administration",
    title: "Property Administration",
    blurb:
      "Handling the recurring paperwork and payments that keep your property compliant and dues up to date.",
    items: [
      "Property Tax Payment",
      "Water Tax Payment",
      "Electricity Bill Assistance",
      "Documentation Support",
    ],
  },
  {
    id: "tenant-management",
    title: "Tenant Management",
    blurb:
      "Finding the right tenant and managing the relationship from move-in to rent collection.",
    items: [
      "Tenant Search",
      "Rental Agreement Assistance",
      "Move-in / Move-out Inspection",
      "Rent Collection Follow-up",
    ],
  },
  {
    id: "renovation-repair",
    title: "Renovation & Repair Coordination",
    blurb:
      "Site supervision and vendor coordination that keeps renovation projects on track.",
    items: ["Vendor Coordination", "Site Supervision", "Renovation Support"],
  },
  {
    id: "branding-marketing",
    title: "Branding & Marketing Solutions",
    blurb:
      "Creating impactful brand identities and marketing strategies that enhance visibility and generate quality leads.",
    items: [
      "Branding",
      "Digital Marketing",
      "Social Media Marketing",
      "Creative Design",
      "Website Development",
    ],
  },
  {
    id: "business-solutions",
    title: "Business Solutions",
    blurb:
      "Supporting businesses with consulting, franchise support, and strategic project coordination.",
    items: [
      "Business Consulting",
      "Franchise Support",
      "Project Coordination",
      "Strategic Partnerships",
    ],
  },
];
