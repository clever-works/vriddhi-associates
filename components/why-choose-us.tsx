"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const points = [
  "One Point of Contact",
  "Local Chennai Presence",
  "Trusted Vendor Network",
  "Transparent Communication",
  "Regular Updates",
  "End-to-End Property Solutions",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="eyebrow">Why choose us</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              A partner who shows up like a teammate.
            </h2>
            <p className="mt-4 max-w-md font-body text-slate">
              We keep our client roster focused so every property gets
              hands-on attention, from the first enquiry to ongoing
              management.
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2"
          >
            {points.map((point) => (
              <motion.li
                key={point}
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
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
