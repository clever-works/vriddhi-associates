"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const steps = [
  {
    n: "01",
    title: "Enquiry",
    body: "Reach out to us and tell us about your property and what you need.",
  },
  {
    n: "02",
    title: "Property Assessment",
    body: "We visit and assess the property, its condition, and your specific requirements.",
  },
  {
    n: "03",
    title: "Service Plan",
    body: "We put together a tailored plan covering management, maintenance, or leasing needs.",
  },
  {
    n: "04",
    title: "Agreement",
    body: "A clear, transparent agreement so you know exactly what's covered.",
  },
  {
    n: "05",
    title: "Regular Updates",
    body: "Ongoing inspections, photo and video reports, and prompt communication.",
  },
  {
    n: "06",
    title: "Peace of Mind",
    body: "Your property is protected and well managed, wherever you are.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-lg"
        >
          <p className="eyebrow-light">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-cream sm:text-4xl">
            How It Works
          </h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
          />
          {steps.map((step) => (
            <motion.li key={step.n} variants={fadeUp} className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-navy-soft font-display text-lg font-bold text-gold">
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-cream">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream/60">
                {step.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
