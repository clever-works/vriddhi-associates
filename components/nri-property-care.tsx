"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const highlights = [
  "Property Inspection",
  "Maintenance",
  "Repair Coordination",
  "Statutory Dues Payment",
  "Tenant Management",
  "Photo & Video Updates",
];

export default function NriPropertyCare() {
  return (
    <section id="nri-care" className="bg-cream py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="eyebrow">For NRIs</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              NRI Property Care
            </h2>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-slate">
              Own a property in Chennai but live elsewhere? We inspect,
              maintain, coordinate repairs, pay statutory dues, manage
              tenants and provide regular updates with photos and videos,
              giving you complete peace of mind.
            </p>
            <a
              href="#contact"
              className="focus-ring mt-8 inline-block rounded-md bg-navy px-7 py-3.5 font-body text-sm font-bold text-cream transition-transform hover:scale-[1.03] hover:bg-navy-soft"
            >
              Enquire Now
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-lg border border-navy/10 bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5 L6.5 12 L13 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-body text-sm font-medium text-navy/85">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
