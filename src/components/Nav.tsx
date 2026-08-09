"use client";

import { useState } from "react";
import { CALENDLY_URL, SITE_NAME } from "@/lib/constants";

const links = [
  { href: "#about", label: "About" },
  { href: "#lessons", label: "Lessons" },
  { href: "#gigs", label: "Gigs" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-white">
          {SITE_NAME}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 sm:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white sm:hidden"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-base text-white/80 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
