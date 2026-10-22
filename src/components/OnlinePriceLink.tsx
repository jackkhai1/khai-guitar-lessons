"use client";

import { whatsappLink, ONLINE_MESSAGE, ONLINE_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: "💻 Learning online? Ask about online lesson prices on WhatsApp",
  zh: "💻 想上线上课？在 WhatsApp 上询问线上课程价格",
};

export default function OnlinePriceLink({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  const message = lang === "en" ? ONLINE_MESSAGE : ONLINE_MESSAGE_ZH;

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-sm font-semibold text-amber-400 underline underline-offset-4 transition hover:text-amber-300 ${className}`}
    >
      {copy[lang]}
    </a>
  );
}
