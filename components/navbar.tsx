"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#nri-care", label: "NRI Property Care" },
  { href: "#process", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(20,33,61,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-px mx-auto flex max-w-7xl items-center justify-between py-3"
      >
        <a href="#top" className="focus-ring flex items-center gap-2 rounded-md">
          <Image
            src="/logo.png"
            alt="Vriddhi Associates logo"
            width={160}
            height={107}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </a>

        <ul className="hidden gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring rounded-sm font-body text-sm font-medium text-navy/80 transition-colors hover:text-gold-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-md bg-navy px-5 py-2.5 font-body text-sm font-semibold text-cream transition-transform hover:scale-[1.03] hover:bg-navy-soft lg:inline-block"
        >
          Enquire Now
        </a>

        <button
          type="button"
          className="focus-ring rounded-sm p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream/98 backdrop-blur-md lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 pb-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-sm py-3 font-body text-base text-navy/85 hover:text-gold-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-2 inline-block rounded-md bg-navy px-5 py-2.5 font-body text-sm font-semibold text-cream"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
