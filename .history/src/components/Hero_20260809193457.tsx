"use client";

import Image from "next/image";
import Reveal from "./motion/Reveal";
import {
  whatsappLink,
  TRIAL_MESSAGE,
  TRIAL_MESSAGE_ZH,
  GIG_MESSAGE,
  GIG_MESSAGE_ZH,
} from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    eyebrow: "Acoustic Guitar · Electric Guitar · Ukelele — KL Area, Sentral & Online",
    h1: "Play the Songs You Love — Without the Frustration.",
    sub: "Backed by 10+ years of electric and acoustic guitar experience and a psychology degree in how the human brain actually learns.",
    body: "Modern guitar, ukulele, and electric lessons designed around your goals. Whether you're an absolute beginner, a remote worker who wants to fill time, or a parent wanting a fun outlet for your child.",
    trialBtn: "💬 Claim Your Free Trial Lesson on WhatsApp",
    gigBtn: "💬 Are You Available to Gig?",
    slots: "I currently teach 10+ regular students and limit weekly free trial slots so every lesson gets full attention. Lock in your trial slot today.",
  },
  zh: {
    eyebrow: "木吉他 · 电吉他 · 尤克里里 — 吉隆坡地区、Sentral 及线上教学",
    h1: "轻松弹出你喜欢的歌曲，不再挫败。",
    sub: "拥有 10 年以上电吉他与木吉他演奏经验，并持有心理学学位，深谙人脑真正的学习方式。",
    body: "现代化的吉他、尤克里里与电吉他课程，围绕你的目标量身设计。无论你是完全的初学者、想找回生活节奏的远程工作者，还是想为孩子找个有趣课外活动的家长，都适合。",
    trialBtn: "💬 在 WhatsApp 上预约免费试听课",
    gigBtn: "💬 你有空表演吗？",
    slots: "我目前教授 10 多位固定学生，并限制每周免费试听课的名额，确保每一堂课都能获得充分关注。立即预约你的试听名额。",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const trialMessage = lang === "en" ? TRIAL_MESSAGE : TRIAL_MESSAGE_ZH;
  const gigMessage = lang === "en" ? GIG_MESSAGE : GIG_MESSAGE_ZH;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
            {c.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {c.h1}
          </h1>
          <p className="mt-4 text-base text-white/60">{c.sub}</p>
          <p className="mt-6 max-w-xl text-lg text-white/70">{c.body}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(trialMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
            >
              {c.trialBtn}
            </a>
            <a
              href={whatsappLink(gigMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {c.gigBtn}
            </a>
          </div>
          <p className="mt-4 max-w-xl text-sm text-white/50">{c.slots}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03] sm:aspect-[4/5]">
            <Image
              src="/images/profile-picture.jpg"
              alt="Profile photo of guitar teacher"
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
