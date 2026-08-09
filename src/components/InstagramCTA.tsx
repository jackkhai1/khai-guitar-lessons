"use client";

import Reveal from "./motion/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    heading: "Follow Along on Instagram",
    body: "Clips from lessons, gigs, and everything in between.",
  },
  zh: {
    heading: "追踪 Instagram 获取最新动态",
    body: "课程花絮、演出片段，还有更多幕后点滴。",
  },
};

export default function InstagramCTA() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="border-t border-white/10 bg-neutral-900/40">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-white">{c.heading}</h2>
        <p className="max-w-md text-sm text-white/60">{c.body}</p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          @jackkhaii on Instagram
        </a>
      </Reveal>
    </section>
  );
}
