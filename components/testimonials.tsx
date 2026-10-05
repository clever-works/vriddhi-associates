"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "./testimonials-data";
import { fadeUp, viewportOnce } from "./motion-utils";

export default function Testimonials() {
  const reduce = useReducedMotion();
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="overflow-hidden bg-cream py-24"
    >
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">In their words</p>
          <h2
            id="stories-heading"
            className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl"
          >
            Clients who&rsquo;ve worked with us
          </h2>
        </motion.div>
      </div>

      <div className="mt-14 flex overflow-hidden">
        <div
          className={`flex shrink-0 gap-6 pl-6 ${
            reduce ? "" : "animate-marquee"
          }`}
        >
          {loop.map((t, i) => (
            <figure
              key={i}
              aria-hidden={i >= testimonials.length ? "true" : undefined}
              className="w-[320px] shrink-0 rounded-xl border border-navy/10 bg-white p-8 shadow-sm sm:w-[380px]"
            >
              <div aria-hidden="true" className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0.7l2.09 4.24 4.68.68-3.39 3.3.8 4.66L8 11.35l-4.18 2.2.8-4.66-3.39-3.3 4.68-.68z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-navy">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-body text-sm font-semibold text-navy/80">
                {t.name}
                <span className="mt-0.5 block font-body text-xs font-normal uppercase tracking-wide text-slate">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
