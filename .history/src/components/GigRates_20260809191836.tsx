"use client";

import Image from "next/image";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { whatsappLink, GIG_MESSAGE, GIG_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const rates = [
  { sets: { en: "2 Sets", zh: "2 个 Set" }, price: "RM300" },
  { sets: { en: "3 Sets", zh: "3 个 Set" }, price: "RM400" },
];

const copy = {
  en: {
    heading: "Book Me For Your Event",
    body: "Standard gig rates for solo or band performances in KL.",
    travel: "Travel fee applies for locations outside Sentral — contact for a quote.",
    cta: "💬 Are You Available for a Gig?",
  },
  zh: {
    heading: "预约我为你的活动演出",
    body: "吉隆坡地区个人或乐团演出的标准价目。",
    travel: "Sentral 以外地区需另加车马费 — 请联系询价。",
    cta: "💬 你有空表演吗？",
  },
};

export default function GigRates() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const gigMessage = lang === "en" ? GIG_MESSAGE : GIG_MESSAGE_ZH;

  return (
    <section id="gigs" className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 sm:py-24 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {c.heading}
            </h2>
            <p className="mt-4 text-lg text-white/70">{c.body}</p>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-4">
            {rates.map((rate) => (
              <StaggerItem
                key={rate.sets.en}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-white/60">{rate.sets[lang]}</p>
                <p className="mt-1 text-3xl font-bold text-white">{rate.price}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm text-white/50">{c.travel}</p>
            <a
              href={whatsappLink(gigMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
            >
              {c.cta}
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03]">
            <Image
              src="/images/gig photoo.jpg"
              alt="Band performance photo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
