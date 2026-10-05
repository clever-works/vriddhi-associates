import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep py-10">
      <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-6 border-t border-cream/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vriddhi Associates logo"
            width={140}
            height={93}
            className="h-10 w-auto rounded bg-cream/95 p-1"
          />
          <a
            href="https://www.facebook.com/profile.php?id=100063951946019"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vriddhi Associates on Facebook"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
            </svg>
          </a>
        </div>
        <p className="font-body text-sm text-cream/60">
          Property Solutions | Branding &amp; Marketing | Business Solutions
        </p>
        <p className="font-display text-sm italic text-gold/80">
          &ldquo;Your Trusted Property Partner in Chennai.&rdquo;
        </p>
      </div>
      <p className="mt-6 text-center font-body text-xs text-cream/30">
        &copy; {new Date().getFullYear()} Vriddhi Associates. All rights
        reserved.
      </p>
      <div
        aria-label="Website built by Clever Works"
        className="mx-auto mt-5 flex w-fit flex-col items-center justify-center gap-1 rounded-sm bg-cream/95 px-4 py-2"
      >
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/55">
          Developed by
        </span>
        <a
          href="https://example.com"
          aria-label="Visit Clever Works website"
          className="focus-ring rounded-sm"
        >
          <Image
            src="/clever-works-logo.svg"
            alt="Clever Works — Building Ideas. Creating Impact."
            width={1983}
            height={470}
            className="h-auto w-56 sm:w-64"
          />
        </a>
      </div>
    </footer>
  );
}
