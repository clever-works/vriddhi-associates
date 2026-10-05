"use client";

import { motion } from "framer-motion";
import { services } from "./services-data";
import {
  PropertySolutionsIcon,
  PropertyManagementIcon,
  PropertyMaintenanceIcon,
  PropertyAdministrationIcon,
  TenantManagementIcon,
  RenovationIcon,
  BrandingIcon,
  BusinessIcon,
} from "./service-icons";
import { fadeUp, staggerContainer, viewportOnce } from "./motion-utils";

const icons = [
  PropertySolutionsIcon,
  PropertyManagementIcon,
  PropertyMaintenanceIcon,
  PropertyAdministrationIcon,
  TenantManagementIcon,
  RenovationIcon,
  BrandingIcon,
  BusinessIcon,
];

export default function Services() {
  return (
    <section id="services" className="bg-navy py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-xl"
        >
          <p className="eyebrow-light">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-cream sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-cream/60">
            One-stop Property Solutions &mdash; real estate, property
            management, branding &amp; marketing, and business solutions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col rounded-lg border border-cream/10 bg-navy-soft p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/60">
                  {service.blurb}
                </p>
                <ul className="mt-6 space-y-2 border-t border-cream/10 pt-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body text-sm text-cream/75"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
