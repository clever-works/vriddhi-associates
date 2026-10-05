import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.vriddhiassociates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vriddhi Associates | End-to-End Property Solutions in Chennai",
    template: "%s | Vriddhi Associates",
  },
  description:
    "Vriddhi Associates is your trusted property partner in Chennai — buying, selling, leasing, property management, maintenance, NRI property care, branding & marketing, and business solutions under one roof.",
  keywords: [
    "Vriddhi Associates",
    "property solutions Chennai",
    "property management Chennai",
    "NRI property care Chennai",
    "property maintenance Chennai",
    "tenant management Chennai",
    "real estate consultants Chennai",
    "residential and commercial property Chennai",
    "branding and marketing agency Chennai",
    "business solutions consulting",
  ],
  applicationName: "Vriddhi Associates",
  authors: [{ name: "Vriddhi Associates" }],
  category: "business",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Vriddhi Associates",
    title: "Vriddhi Associates | Your Trusted Property Partner in Chennai",
    description:
      "End-to-end property solutions, property management, maintenance, and NRI property care — plus branding & marketing and business solutions, all under one roof.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vriddhi Associates — Property Solutions | Branding & Marketing | Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vriddhi Associates | Your Trusted Property Partner in Chennai",
    description:
      "End-to-end property solutions, property management, maintenance, and NRI property care under one roof.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#14213D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${inter.variable} font-body bg-cream text-navy antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
