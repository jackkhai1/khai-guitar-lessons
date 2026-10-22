"use client";

import { useLanguage } from "@/lib/language";
import OnlinePriceLink from "./OnlinePriceLink";

const copy = {
  en: {
    kids: "Kids, ages 3–9 (30 min): RM65 per lesson, or RM240/month",
    teens: "Teens, ages 10–17 (1 hr): RM115 per lesson, or RM420/month",
    adults: "Adults, ages 18+ (1 hr): RM130 per lesson, or RM470/month",
    monthly: "Monthly = 4 weekly lessons, paid at the start of each month.",
  },
  zh: {
    kids: "儿童 3–9 岁（30 分钟）：每堂 RM65，或月费 RM240",
    teens: "青少年 10–17 岁（1 小时）：每堂 RM115，或月费 RM420",
    adults: "成人 18 岁以上（1 小时）：每堂 RM130，或月费 RM470",
    monthly: "月费含每周一堂、共 4 堂课，于每月初缴付。",
  },
};

export default function PriceNote({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <div className={`text-sm text-white/80 ${className}`}>
      <p>{c.kids}</p>
      <p className="mt-1">{c.teens}</p>
      <p className="mt-1">{c.adults}</p>
      <p className="mt-2 text-xs text-white/50">{c.monthly}</p>
      <OnlinePriceLink className="mt-3" />
    </div>
  );
}
