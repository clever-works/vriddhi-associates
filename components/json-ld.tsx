export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vriddhi Associates",
    alternateName: "Vriddhi",
    description:
      "Vriddhi Associates is a one-stop Property Solutions company in Chennai offering end-to-end real estate, property management, property maintenance, NRI property care, branding & marketing, and business solutions.",
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
          name: "Property Solutions",
          description:
            "Buying & selling, residential & commercial leasing, built-to-suit projects, and investment advisory.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Management & Maintenance",
          description:
            "Regular inspection, photo & video reports, vacant property care, key holding, and full maintenance coordination.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "NRI Property Care",
          description:
            "Inspection, maintenance, repair coordination, statutory dues payment, and tenant management for NRI property owners.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tenant Management",
          description:
            "Tenant search, rental agreement assistance, move-in/move-out inspection, and rent collection follow-up.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Marketing",
          description:
            "Branding, digital marketing, social media marketing, creative design, and website development.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Solutions",
          description:
            "Business consulting, franchise support, project coordination, and strategic partnerships.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
