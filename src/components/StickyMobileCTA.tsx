"use client";

import { whatsappLink, TRIAL_MESSAGE, TRIAL_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const copy = {
  en: "💬 I'm Ready To Claim My Free Lesson!",
  zh: "💬 预约免费试听课",
};

export default function StickyMobileCTA() {
  const { lang } = useLanguage();
  const trialMessage = lang === "en" ? TRIAL_MESSAGE : TRIAL_MESSAGE_ZH;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-neutral-950/95 px-4 py-3 backdrop-blur sm:hidden">
      <a
        href={whatsappLink(trialMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
      >
        {copy[lang]}
      </a>
    </div>
  );
}
