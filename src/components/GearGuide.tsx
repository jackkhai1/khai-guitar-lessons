"use client";

import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { whatsappLink, GEAR_MESSAGE, GEAR_MESSAGE_ZH } from "@/lib/constants";
import { useLanguage } from "@/lib/language";

const trials = [
  {
    label: { en: "In-Person Trial", zh: "面授试听课" },
    blurb: {
      en: "Use my guitar for your first lesson — zero cost, zero pressure.",
      zh: "第一堂课可以直接使用我的吉他 — 零成本，零压力。",
    },
  },
  {
    label: { en: "Online Trial", zh: "线上试听课" },
    blurb: {
      en: "We'll test the waters first, and I'll guide you on what to buy based on your budget.",
      zh: "我们先线上试试水温，我再根据你的预算，教你该买什么。",
    },
  },
];

const starters = [
  {
    emoji: "🪕",
    name: { en: "The Ukulele Gateway", zh: "尤克里里入门款" },
    price: "~RM50",
    blurb: {
      en: "4 soft nylon strings. Easy on young or sensitive fingers and super budget-friendly.",
      zh: "4 条柔软尼龙弦，对幼小或敏感的手指很友善，价格也非常实惠。",
    },
    url: "https://shopee.com.my/Magic-21-Inch-4-Strings-Instrument-Ukulele-Soprano-Natural-Wood-Set-Music-Free-Bag-Capo-Music-Set-i.11002029.431871577?extraParams=%7B%22display_model_id%22%3A310554104308%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    emoji: "🪵",
    name: { en: "The Acoustic Starter", zh: "木吉他入门款" },
    price: "~RM100",
    blurb: {
      en: "Perfect for learning your first open chords, strumming patterns, and vocal accompaniments.",
      zh: "非常适合学习你的第一批开放和弦、扫弦节奏，以及弹唱伴奏。",
    },
    url: "https://shopee.com.my/38-inch-Beginner-Acoustic-Guitar-Mukita-by-BLW-Gitar-Akustik-38-Beginner-Package-38%E5%AF%B8%E5%88%9D%E5%AD%A6%E8%80%85%E5%90%89%E4%BB%96%E5%A5%97%E8%A3%85-i.5180434.20448149?extraParams=%7B%22display_model_id%22%3A133790601210%2C%22model_selection_logic%22%3A3%7D",
  },
  {
    emoji: "⚡",
    name: { en: "The Electric Bundle", zh: "电吉他套装" },
    price: "~RM100",
    blurb: {
      en: "Includes the guitar, mini amp, cable, and strap — everything you need to play through headphones without disturbing anyone.",
      zh: "包含吉他、迷你音箱、导线和背带 — 你可以戴上耳机练习，不会吵到任何人。",
    },
    url: "https://shopee.com.my/ST-Electric-Guitar-Stratocaster-Full-set-and-Guitar-Only-i.241332088.22960326104?extraParams=%7B%22display_model_id%22%3A204736981907%2C%22model_selection_logic%22%3A3%7D",
  },
];

const copy = {
  en: {
    eyebrow: "❓ Common Question",
    heading: "What If I Don't Own a Guitar Yet? Aren't They Expensive?",
    lead: "Don't buy anything just yet!",
    body: "Most beginners waste money buying the wrong size or cheap guitars with strings that are too hard to press down. Let's save you the headache and the money.",
    startersHeading: "🎸 Starter Options for Every Budget",
    startersBody: "You don't need to spend a fortune to start playing. I help my students pick out great-value starter setups online or locally.",
    clickHint: "Click on the image to go to the link for a cheap starter set.",
    guaranteeHeading: "🎁 Personal Gear Guarantee",
    guaranteeBody: "Scared of picking the wrong instrument? When you enroll in a 3-month lesson package, I'll personally go to the guitar store with you to help you test, inspect, and choose the perfect guitar for your hands and your budget.",
    cta: "💬 Claim Free Trial & Ask About Guitars",
  },
  zh: {
    eyebrow: "❓ 常见问题",
    heading: "还没有吉他？会不会很贵？",
    lead: "先别急着买！",
    body: "很多初学者会浪费钱买到尺寸不对、或琴弦太硬按不下去的廉价吉他。让我帮你省下这份麻烦和金钱。",
    startersHeading: "🎸 各种预算都有的入门选择",
    startersBody: "开始弹奏不需要花大钱。我会协助学生挑选高性价比的入门配置，无论是网购还是实体店。",
    clickHint: "点击图片即可前往便宜入门款的购买链接。",
    guaranteeHeading: "🎁 个人选琴保证",
    guaranteeBody: "担心选错乐器？只要报名 3 个月的课程套餐，我会亲自陪你去乐器行，帮你试弹、检查，选出最适合你双手与预算的吉他。",
    cta: "💬 在 WhatsApp 上预约试听课并询问吉他",
  },
};

export default function GearGuide() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const gearMessage = lang === "en" ? GEAR_MESSAGE : GEAR_MESSAGE_ZH;

  return (
    <section id="guitars" className="border-t border-white/10 bg-neutral-900/40">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {c.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-4 text-lg text-white/80">{c.lead}</p>
          <p className="mt-4 text-base text-white/60">{c.body}</p>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {trials.map((trial) => (
            <StaggerItem
              key={trial.label.en}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-white">{trial.label[lang]}</h3>
              <p className="mt-2 text-sm text-white/60">{trial.blurb[lang]}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white">{c.startersHeading}</h3>
          <p className="mt-3 text-base text-white/60">{c.startersBody}</p>
          <p className="mt-2 text-sm text-white/50">{c.clickHint}</p>
        </Reveal>

        <StaggerGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {starters.map((starter) => (
            <StaggerItem
              key={starter.name.en}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <a
                href={starter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy ${starter.name.en} on Shopee`}
                className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-3xl transition hover:border-amber-400/50 hover:bg-white/[0.06]"
              >
                {starter.emoji}
              </a>
              <h4 className="mt-3 text-base font-semibold text-white">{starter.name[lang]}</h4>
              <p className="mt-1 text-sm font-semibold text-amber-400">{starter.price}</p>
              <p className="mt-2 text-sm text-white/60">{starter.blurb[lang]}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-amber-400/30 bg-amber-400/[0.05] p-6 text-center">
            <h3 className="text-lg font-semibold text-white">{c.guaranteeHeading}</h3>
            <p className="mt-2 text-sm text-white/60">{c.guaranteeBody}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href={whatsappLink(gearMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
          >
            {c.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
