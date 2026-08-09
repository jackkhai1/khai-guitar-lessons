"use client";

import Reveal from "./motion/Reveal";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    eyebrow: "🗣️ Bilingual Lessons",
    heading: "Lessons Taught in English & Chinese",
    body: "Whether you're more comfortable in English or Mandarin, lessons are taught in whichever language works best for you or your child.",
  },
  zh: {
    eyebrow: "🗣️ 双语教学",
    heading: "英语与中文皆可授课",
    body: "无论你更习惯用英语还是华语沟通，课程都会以最适合你或你孩子的语言进行。",
  },
};

export default function Languages() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-12 text-center sm:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {c.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-base text-white/60">{c.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
