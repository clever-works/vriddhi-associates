export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vriddhi Associates",
    alternateName: "Vriddhi",
    description:
      "Vriddhi Associates offers end-to-end property solutions, branding and marketing services, MSME business consulting, and multi-level car parking solutions in Chennai and Tamil Nadu.",
    url: "https://www.vriddhiassociates.com",
    logo: "https://www.vriddhiassociates.com/logo.png",
    image: "https://www.vriddhiassociates.com/logo.png",
    telephone: "+91-98401-97891",
    email: "vriddhikanchana@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: "IN",
    slogan: "Your Trusted Property Partner in Chennai",
    priceRange: "$$",
    sameAs: ["https://www.facebook.com/profile.php?id=100063951946019"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "End-to-End Property Solutions",
          description:
            "Buying and selling, residential and commercial leasing, built-to-suit projects, and investment advisory.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Marketing Services",
          description:
            "Branding, digital and social media marketing, creative design, and website development.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Consultant – MSME",
          description:
            "Government scheme identification, MSME growth support, eligibility guidance, funding and incentive opportunities, documentation support, and strategic business guidance through association with Lumen Network.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Level Car Parking Solutions",
          description:
            "Customised stack, puzzle, tower, shuttle, multi-level, and automated parking solutions with project installation and support for Chennai and Tamil Nadu.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
