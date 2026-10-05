"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion-utils";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;
    setStatus("sending");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Let&rsquo;s talk about your project
          </h2>
          <p className="mt-4 max-w-md font-body text-slate">
            Tell us what you need and the right person on our team will get
            back to you.
          </p>

          <dl className="mt-10 space-y-4 font-body text-sm text-slate">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">
                Location
              </dt>
              <dd>Chennai, Tamil Nadu</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">Phone</dt>
              <dd className="space-x-2">
                <a href="tel:+919840197891" className="focus-ring rounded-sm hover:text-gold-dark">
                  +91 98401 97891
                </a>
                <span aria-hidden="true">|</span>
                <a href="tel:+919043012921" className="focus-ring rounded-sm hover:text-gold-dark">
                  +91 90430 12921
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">Email</dt>
              <dd className="space-y-1">
                <a
                  href="mailto:vriddhikanchana@gmail.com"
                  className="focus-ring block rounded-sm hover:text-gold-dark"
                >
                  vriddhikanchana@gmail.com
                </a>
                <a
                  href="mailto:svinanand@gmail.com"
                  className="focus-ring block rounded-sm hover:text-gold-dark"
                >
                  svinanand@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">
                Website
              </dt>
              <dd>www.vriddhiassociates.com</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0 font-semibold text-navy">
                Facebook
              </dt>
              <dd>
                <a
                  href="https://www.facebook.com/profile.php?id=100063951946019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm hover:text-gold-dark"
                >
                  Vriddhi Associates
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {status === "sent" ? (
            <div
              role="status"
              className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-xl border border-gold/30 bg-white p-10 text-center"
            >
              <p className="font-display text-2xl font-bold text-navy">
                Message sent.
              </p>
              <p className="mt-2 max-w-xs font-body text-sm text-slate">
                Thank you for reaching out. We&rsquo;ll get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm"
            >
              {/* Required so Netlify's build bot can detect this form in the static HTML */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field: hidden from real visitors, catches simple spam bots */}
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out if you&rsquo;re human:
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-xs font-semibold uppercase tracking-wide text-slate"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="focus-ring mt-2 w-full rounded-md border border-navy/15 bg-cream px-4 py-2.5 font-body text-sm text-navy placeholder:text-slate/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="font-body text-xs font-semibold uppercase tracking-wide text-slate"
                  >
                    Mobile number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="focus-ring mt-2 w-full rounded-md border border-navy/15 bg-cream px-4 py-2.5 font-body text-sm text-navy placeholder:text-slate/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-slate"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="focus-ring mt-2 w-full rounded-md border border-navy/15 bg-cream px-4 py-2.5 font-body text-sm text-navy placeholder:text-slate/50"
                  placeholder="you@email.com"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="service"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-slate"
                >
                  Service required
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="focus-ring mt-2 w-full rounded-md border border-navy/15 bg-cream px-4 py-2.5 font-body text-sm text-navy"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="property-solutions">Property Solutions</option>
                  <option value="property-management">Property Management</option>
                  <option value="property-maintenance">Property Maintenance</option>
                  <option value="property-administration">Property Administration</option>
                  <option value="tenant-management">Tenant Management</option>
                  <option value="renovation-repair">Renovation &amp; Repair Coordination</option>
                  <option value="branding-marketing">Branding &amp; Marketing</option>
                  <option value="business-solutions">Business Solutions</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="font-body text-xs font-semibold uppercase tracking-wide text-slate"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="focus-ring mt-2 w-full rounded-md border border-navy/15 bg-cream px-4 py-2.5 font-body text-sm text-navy placeholder:text-slate/50"
                  placeholder="Tell us a bit about what you're looking for..."
                />
              </div>

              {status === "error" && (
                <p role="alert" className="mt-4 font-body text-sm text-red-600">
                  Something went wrong sending your message. Please try again,
                  or email us directly at vriddhikanchana@gmail.com.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="focus-ring mt-6 w-full rounded-md bg-navy py-3.5 font-body text-sm font-bold text-cream transition-transform hover:scale-[1.01] hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
