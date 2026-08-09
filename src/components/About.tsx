"use client";

import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { useLanguage } from "@/lib/language";

const credentials = [
  { en: "10+ years of guitar experience", zh: "10 年以上吉他演奏经验" },
  { en: "Performed solo and in bands — Malaysia & UK", zh: "曾在马来西亚与英国以个人及乐团形式演出" },
  { en: "Taught guitar, ukulele & electric guitar to all ages", zh: "教授吉他、尤克里里与电吉他，学生年龄不限" },
  { en: "Psychology degree — trained to teach, not just to play", zh: "持有心理学学位 — 受过专业教学训练，不只是会弹" },
  { en: "1-on-1, personalized approach for any age or level", zh: "一对一教学，针对任何年龄或程度量身规划" },
];

const copy = {
  en: {
    heading: "10+ Years of Guitar — Now Teaching and Performing Professionally in Malaysia",
    body: (
      <>
        10+ years playing guitar, now performing in bands in Malaysia. I&apos;ve
        taught guitar, ukulele, and electric guitar to students of all ages
        — from young kids to retirees, complete beginners to returning
        players. I hold a psychology degree, because most musicians can
        play, but not everyone can teach. Whether it&apos;s you or your
        child, lessons are built around how <em>you</em> learn, not a
        fixed curriculum.
      </>
    ),
  },
  zh: {
    heading: "10 年以上吉他经验 — 现于马来西亚专业教学与演出",
    body: (
      <>
        拥有 10 年以上的吉他演奏经验，目前在马来西亚的乐团中演出。我教过吉他、尤克里里与电吉他，学生年龄涵盖幼儿到退休人士、从完全初学者到重拾兴趣的学生。我持有心理学学位，因为许多音乐人会弹奏，却不是每个人都懂得教学。无论是你自己还是你的孩子，课程都会围绕<em>你</em>的学习方式设计，而不是套用一套固定的教材。
      </>
    ),
  },
};

export default function About() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section id="about" className="border-t border-white/10 bg-neutral-900/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03] sm:aspect-[4/5]">
            <Image
              src="/images/performance-photo.jpg"
              alt="Performance photo — live gig"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {c.heading}
            </h2>
            <p className="mt-6 text-lg text-white/70">{c.body}</p>
          </Reveal>
          <StaggerGroup className="mt-8 space-y-3">
            {credentials.map((item) => (
              <StaggerItem key={item.en} className="flex items-start gap-3 text-white/80">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{item[lang]}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
