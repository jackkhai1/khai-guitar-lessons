"use client";

import Reveal from "./motion/Reveal";
import { whatsappLink, TRIAL_MESSAGE, TRIAL_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    heading: "Ready to Start?",
    body: "Book a free intro call — for you, your child, or your next event.",
    cta: "💬 Book Your Free Intro Call on WhatsApp",
    slots: "I currently teach 10+ regular students and limit weekly free trial slots so every lesson gets full attention. Lock in your trial slot today.",
  },
  zh: {
    heading: "准备好开始了吗？",
    body: "预约一通免费的初次咨询电话 — 无论是为了你自己、你的孩子，还是你的下一场活动。",
    cta: "💬 在 WhatsApp 上预约免费初次咨询",
    slots: "我目前教授 10 多位固定学生，并限制每周免费试听课的名额，确保每一堂课都能获得充分关注。立即预约你的试听名额。",
  },
};

export default function FinalCTA() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const trialMessage = lang === "en" ? TRIAL_MESSAGE : TRIAL_MESSAGE_ZH;

  return (
    <section id="contact" className="border-t border-white/10">
      <Reveal className="mx-auto max-w-3xl px-6 py-12 text-center sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {c.heading}
        </h2>
        <p className="mt-4 text-lg text-white/70">{c.body}</p>
        <a
          href={whatsappLink(trialMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-amber-400"
        >
          {c.cta}
        </a>
        <p className="mt-4 text-sm text-white/50">{c.slots}</p>
      </Reveal>
    </section>
  );
}
