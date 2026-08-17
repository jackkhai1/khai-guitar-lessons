"use client";

import Reveal from "./motion/Reveal";
import { whatsappLink, TRIAL_MESSAGE, TRIAL_MESSAGE_ZH, INSTAGRAM_URL } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    heading: "Ready to Start?",
    body: "Book a free intro call — for you, your child, or your next event.",
    cta: "💬 Book Your Free Intro Call on WhatsApp",
    slots: "I currently teach 10+ regular students and limit weekly free trial slots so every lesson gets full attention. Lock in your trial slot today.",
    instagram: "Follow along on Instagram for clips from lessons, gigs, and everything in between.",
    instagramCta: "@jackkhaii on Instagram",
  },
  zh: {
    heading: "准备好开始了吗？",
    body: "预约一通免费的初次咨询电话 — 无论是为了你自己、你的孩子，还是你的下一场活动。",
    cta: "💬 在 WhatsApp 上预约免费初次咨询",
    slots: "我目前教授 10 多位固定学生，并限制每周免费试听课的名额，确保每一堂课都能获得充分关注。立即预约你的试听名额。",
    instagram: "追踪 Instagram 获取课程花絮、演出片段，还有更多幕后点滴。",
    instagramCta: "@jackkhaii on Instagram",
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

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mx-auto max-w-md text-sm text-white/60">{c.instagram}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {c.instagramCta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
