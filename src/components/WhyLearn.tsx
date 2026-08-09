"use client";

import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { useLanguage } from "@/lib/language";

const stages = [
  {
    label: { en: "Parents", zh: "家长" },
    blurb: {
      en: "Build your child's focus, creativity, social confidence, and motor skills through an enriching skill.",
      zh: "透过一项充实的技能，培养孩子的专注力、创造力、社交自信与手部协调能力。",
    },
  },
  {
    label: { en: "Teens", zh: "青少年" },
    blurb: {
      en: "Express yourself, boost your self-esteem, build lasting friendships, and — let's be honest — impress your crush.",
      zh: "表达自我、提升自信、建立长久的友谊 — 老实说，也能吸引你喜欢的人的目光。",
    },
  },
  {
    label: { en: "Working Professionals", zh: "上班族" },
    blurb: {
      en: "Decompress, blow off steam, and reclaim a creative space just for you after a hectic workday.",
      zh: "忙碌一天后，放松心情、释放压力，为自己找回一个专属的创作空间。",
    },
  },
  {
    label: { en: "Retirees", zh: "退休人士" },
    blurb: {
      en: "Pick up a rewarding, meaningful lifelong passion that keeps your mind sharp and your days inspired.",
      zh: "培养一项有意义的终身爱好，让思维保持敏锐，生活充满灵感。",
    },
  },
  {
    label: { en: "Remote & Freelance", zh: "远程与自由工作者" },
    blurb: {
      en: "When home is also your office, guitar breaks up the Zoom fatigue and gives you a real way to connect and belong.",
      zh: "当家里同时也是办公室，吉他能打破视讯会议的疲惫，给你真正与人连结、找到归属感的方式。",
    },
  },
];

const copy = {
  en: {
    line1: "Imagine picking up a guitar and effortlessly playing everyone's favorite songs.",
    line2: "Imagine being the person who brings everyone together at family gatherings, surprises your partner with their favorite song, or bonds instantly with new friends through music. Playing guitar builds genuine confidence, creates a sense of belonging, and lets you share unforgettable moments with the people around you.",
    line3: "But most importantly, you do it for yourself.",
    line4: "Guitar is your personal outlet. It's a way to unwind after a long day, process your emotions, and express yourself in ways words can't match.",
    stagesHeading: "No Matter Your Stage in Life, Music Fits",
    closing: "There is a place for you here.",
  },
  zh: {
    line1: "想象一下，拿起吉他就能轻松弹出大家最爱的歌曲。",
    line2: "想象你成为那个在家庭聚会上凝聚大家的人、为另一半弹奏她最爱的歌、或透过音乐迅速和新朋友熟络起来。弹吉他能建立真正的自信、带来归属感，也让你与身边的人共享难忘的时刻。",
    line3: "但最重要的是，你是为了自己而弹。",
    line4: "吉他是你专属的抒发出口，能在忙碌一天后帮你放松、梳理情绪，用言语无法表达的方式展现自己。",
    stagesHeading: "无论你正处于人生哪个阶段，音乐都适合你",
    closing: "这里总有属于你的位置。",
  },
};

export default function WhyLearn() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {c.line1}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base text-white/60">{c.line2}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-xl font-semibold text-amber-400">{c.line3}</p>
          <p className="mt-4 text-base text-white/60">{c.line4}</p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-center text-xl font-semibold text-white">
            {c.stagesHeading}
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage) => (
            <StaggerItem
              key={stage.label.en}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {stage.label[lang]}
              </h3>
              <p className="mt-2 text-sm text-white/60">{stage.blurb[lang]}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-lg font-semibold text-white">
            {c.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
