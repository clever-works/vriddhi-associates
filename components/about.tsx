"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const values = ["Transparency", "Professionalism", "Reliability", "Trust", "Growth", "Long-Term Relationships"];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="grid max-w-6xl gap-x-16 gap-y-5 lg:grid-cols-[0.8fr,1.2fr] lg:items-start"
        >
          <div className="lg:row-span-3">
            <p className="eyebrow">About us</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Welcome to Vriddhi Associates
            </h2>
          </div>
          <p className="font-body text-lg leading-relaxed text-slate">
            Vriddhi Associates brings together property, marketing, business
            consulting and parking solutions under one platform.
          </p>
          <p className="font-body text-lg leading-relaxed text-slate">
            We work with property owners, businesses, MSMEs, developers and
            organisations, connecting them with the right opportunities,
            services and professional support.
          </p>
          <p className="font-body text-lg leading-relaxed text-slate">
            Our expertise combines real estate solutions, branding &amp;
            marketing, MSME business consulting, and multi-level car parking
            solutions through our associated networks and industry partners.
          </p>
          <p className="font-display text-xl font-bold text-navy lg:col-start-2">
            One platform. Multiple solutions &mdash; property, marketing, MSME
            consulting and smart parking.
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
              To build a trusted and professionally connected platform that
              helps individuals, businesses and organisations discover the
              right opportunities and solutions for growth.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-navy/10 bg-white p-8 shadow-sm"
          >
            <p className="eyebrow">Mission</p>
            <p className="mt-3 font-body text-navy/80">
              To deliver practical, reliable and transparent solutions across
              property, marketing, MSME consulting and parking, while creating
              long-term relationships with clients and business partners.
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
