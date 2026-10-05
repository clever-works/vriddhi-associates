"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const values = ["Transparency", "Professionalism", "Reliability", "Trust", "Long-Term Partnership"];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">About us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Welcome to Vriddhi Associates
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-slate">
            Vriddhi Associates delivers reliable property solutions with a
            focus on transparency, professionalism and long-term
            relationships. Whether you own a single apartment or multiple
            investment properties, we become your trusted local
            representative and ensure your assets are protected and well
            managed.
          </p>
          <p className="mt-4 font-display text-xl font-bold text-navy">
            One-stop Property Solutions &mdash; real estate, property
            management, branding &amp; marketing, and business solutions,
            all under one roof.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-navy/10 bg-white p-8 shadow-sm"
          >
            <p className="eyebrow">Vision</p>
            <p className="mt-3 font-body text-navy/80">
              To become the most trusted property partner for owners,
              investors, and NRIs across Chennai.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-navy/10 bg-white p-8 shadow-sm"
          >
            <p className="eyebrow">Mission</p>
            <p className="mt-3 font-body text-navy/80">
              To protect and grow every property we manage through
              transparent communication, regular updates, and dependable
              on-ground service.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-navy/10 bg-white p-8 shadow-sm"
          >
            <p className="eyebrow">Core values</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {values.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-navy/5 px-3 py-1 font-body text-sm text-navy/75"
                >
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
