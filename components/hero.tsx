"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: reduce ? 0 : 2, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy pt-28"
    >
      <div
        className="absolute inset-0 bg-grow-grid bg-grid opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep/60"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-16 top-1/2 hidden w-[520px] -translate-y-1/2 lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <motion.path
            d="M20 340 L120 260 L200 300 L300 140 L380 190 L460 40"
            stroke="#C9A227"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate="visible"
            variants={draw}
          />
          <motion.path
            d="M400 40 L460 40 L460 100"
            stroke="#C9A227"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate="visible"
            variants={draw}
            transition={{ delay: reduce ? 0 : 1.8, duration: reduce ? 0 : 0.4 }}
          />
          {[
            [20, 340],
            [120, 260],
            [200, 300],
            [300, 140],
            [380, 190],
            [460, 40],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#E4C158"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reduce ? 0 : 0.3 + i * 0.3, duration: 0.3 }}
            />
          ))}
        </svg>
      </div>

      <div className="container-px relative mx-auto grid max-w-7xl gap-10 py-16 lg:grid-cols-[1.15fr,0.85fr] lg:py-0">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-light"
          >
            Property Solutions &middot; Property Management &middot; Branding &amp; Business Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] text-cream sm:text-5xl lg:text-6xl"
          >
            End-to-End <span className="text-gold">Property Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-xl font-display text-xl font-semibold text-gold/90"
          >
            Your Trusted Property Partner in Chennai
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-xl font-body text-lg leading-relaxed text-cream/70"
          >
            We help property owners, investors, NRIs and businesses with
            buying, selling, leasing, property management and maintenance
            &mdash; all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="focus-ring rounded-md bg-gold px-7 py-3.5 font-body text-sm font-bold text-navy transition-transform hover:scale-[1.03] hover:bg-gold-light"
            >
              Enquire Now
            </a>
            <a
              href="https://wa.me/919840197891?text=Hi%20Vriddhi%20Associates%2C%20I%27d%20like%20to%20know%20more%20about%20your%20property%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-md border border-cream/25 px-7 py-3.5 font-body text-sm font-semibold text-cream/90 transition-colors hover:border-gold hover:text-gold"
            >
              WhatsApp Us
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 max-w-md border-t border-cream/10 pt-6 font-display text-sm font-semibold italic text-gold/90"
          >
            &ldquo;Vriddhi&rdquo; means Growth &mdash; we protect and grow
            every property we manage as if it were our own.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
