"use client";

import { useState } from "react";
import { CALENDLY_URL, INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const links = [
  { href: "#about", mobileHref: "#faq", label: { en: "About", zh: "关于我" } },
  { href: "/guitars", label: { en: "No Instrument?", zh: "没有乐器？" } },
  { href: "#lessons", label: { en: "Lessons", zh: "课程" } },
  { href: "#gigs", label: { en: "Gigs", zh: "演出" } },
  { href: "#contact", label: { en: "Contact", zh: "联系" } },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const bookNow = lang === "en" ? "Book Now" : "立即预约";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-tight text-white">
          {SITE_NAME}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label[lang]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="hidden rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-white/40 hover:text-white sm:block"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden text-white/60 transition hover:text-white sm:block"
          >
            <InstagramIcon className="h-5 w-5" />
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
              href={link.mobileHref ?? link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 hover:bg-white/5 hover:text-white"
            >
              {link.label[lang]}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
          >
            {bookNow}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-lg px-2 py-3 text-white/70 hover:bg-white/5 hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
          <button
            type="button"
            onClick={() => {
              toggleLang();
              setOpen(false);
            }}
            className="mt-1 flex items-center gap-2 rounded-lg px-2 py-3 text-left text-white/70 hover:bg-white/5 hover:text-white"
          >
            🌐 {lang === "en" ? "中文" : "English"}
          </button>
        </nav>
      )}
    </header>
  );
}
