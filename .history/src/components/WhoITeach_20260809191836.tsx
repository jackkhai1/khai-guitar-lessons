"use client";

import Image from "next/image";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { whatsappLink, TRIAL_MESSAGE, TRIAL_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const ageGroups = [
  {
    id: "4-8",
    label: { en: "Ages 4–8", zh: "4–8 岁" },
    filename: "7 yr old.png",
    blurb: {
      en: "Short, playful sessions built around songs kids already love.",
      zh: "短而有趣的课程，围绕孩子已经喜欢的歌曲设计。",
    },
  },
  {
    id: "9-17",
    label: { en: "Ages 9–17", zh: "9–17 岁" },
    filename: "teenage student.jpeg",
    blurb: {
      en: "Real technique, real songs — progress they can actually hear.",
      zh: "扎实的技巧、真实的歌曲 — 让他们听得见自己的进步。",
    },
  },
  {
    id: "18-up",
    label: { en: "Ages 18 & Up", zh: "18 岁以上" },
    filename: "online-teaching.jpg",
    blurb: {
      en: "Whether you're starting from zero, coming back after years off, or picking up a lifelong passion.",
      zh: "无论你是从零开始、久别重拾吉他，还是想培养一项终身兴趣。",
    },
  },
];

const copy = {
  en: {
    heading: "Lessons for Every Age, Personalized to You",
    body: "Guitar, ukulele, and electric guitar — taught one-on-one and tailored to your goals, whether that's your first chord or your first gig.",
    cta: "💬 Book a Free Trial Lesson for You or Your Child on WhatsApp",
  },
  zh: {
    heading: "为每个年龄量身打造的课程",
    body: "吉他、尤克里里与电吉他 — 一对一教学，依你的目标量身规划，无论是弹出第一个和弦，还是准备第一场演出。",
    cta: "💬 在 WhatsApp 上为你或你的孩子预约免费试听课",
  },
};

export default function WhoITeach() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const trialMessage = lang === "en" ? TRIAL_MESSAGE : TRIAL_MESSAGE_ZH;

  return (
    <section id="lessons" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-lg text-white/70">{c.body}</p>
        </Reveal>
        <StaggerGroup className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0">
          {ageGroups.map((group) => (
            <StaggerItem
              key={group.id}
              className="w-[70%] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-white/15">
                <Image
                  src={encodeURI(`/images/${group.filename}`)}
                  alt={`Teaching photo — ${group.label.en}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className={group.id === "4-8" ? "object-contain" : "object-cover"}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{group.label[lang]}</h3>
              <p className="mt-1 text-sm text-white/60">{group.blurb[lang]}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <a
            href={whatsappLink(trialMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 sm:mt-12"
          >
            {c.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
