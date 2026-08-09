"use client";

import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { useLanguage } from "@/lib/language";

const items = [
  {
    title: { en: "KL Sentral", zh: "吉隆坡中央车站（KL Sentral）" },
    detail: { en: "In-person lessons based in the Sentral area.", zh: "面授课程，地点位于 Sentral 一带。" },
  },
  {
    title: { en: "Zoom", zh: "Zoom 线上教学" },
    detail: { en: "Full lessons online, anywhere you are.", zh: "完整课程线上进行，无论你身在何处都能上课。" },
  },
  {
    title: { en: "Travel Around KL", zh: "吉隆坡区域到府教学" },
    detail: { en: "Available for an added travel fee — quote on request.", zh: "可加收车马费到府教学 — 详情请询价。" },
  },
];

export default function FormatLocation() {
  const { lang } = useLanguage();

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <StaggerItem
              key={item.title.en}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title[lang]}</h3>
              <p className="mt-2 text-sm text-white/60">{item.detail[lang]}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
