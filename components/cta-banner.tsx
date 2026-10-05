"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion-utils";

export default function CtaBanner() {
  return (
    <section className="bg-navy py-20">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-8 rounded-xl border border-gold/25 bg-navy-soft p-10 sm:flex-row sm:items-center sm:p-14"
        >
          <div>
            <p className="eyebrow-light">Let&rsquo;s build growth together</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-extrabold text-cream sm:text-4xl">
              Whatever you&rsquo;re building, we&rsquo;re ready to support it.
            </h2>
            <p className="mt-3 max-w-md font-body text-sm text-cream/60">
              Whether you&rsquo;re launching a project, expanding your
              business, or searching for the right property, Vriddhi
              Associates is here to support you every step of the way.
            </p>
          </div>
          <a
            href="#contact"
            className="focus-ring shrink-0 rounded-md bg-gold px-8 py-3.5 font-body text-sm font-bold text-navy transition-transform hover:scale-[1.03]"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
