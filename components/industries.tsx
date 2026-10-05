"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const audiences = [
  "NRIs",
  "Apartment Owners",
  "Commercial Property Owners",
  "Investors",
  "Senior Citizens",
  "Outstation Owners",
  "Corporates",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-cream py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-lg"
        >
          <p className="eyebrow">Who we support</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Who We Serve
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-10 flex flex-wrap gap-3"
        >
          {audiences.map((audience) => (
            <motion.li
              key={audience}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-full border border-navy/15 bg-white px-5 py-2.5 font-body text-sm font-medium text-navy/80 transition-colors hover:border-gold hover:text-gold-dark"
            >
              {audience}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
