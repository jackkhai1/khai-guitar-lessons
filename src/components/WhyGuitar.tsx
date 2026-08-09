"use client";

import Reveal from "./motion/Reveal";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    heading: "Why More Parents Are Choosing Guitar Over Piano",
    lead1: "Piano teaches discipline — and maybe, if your kid sticks with it, some fun.",
    leadBreakBefore: "Guitar teaches discipline ",
    leadHighlight: "by making it fun first.",
    body1: "That's the shift happening in living rooms across Malaysia right now. Kids don't need to be dragged to practice guitar — they want to. It's the instrument on their playlists, in the creators they watch, at every family gathering, and on every corner in the city.",
    body2: "Give a child a guitar and a song they actually love, and the discipline follows without a fight.",
    body3: "I teach acoustic guitar, electric guitar, and ukulele to all ages — because the instrument a kid picks up on their own is the one they'll play for life.",
  },
  zh: {
    heading: "为什么越来越多家长选择吉他而非钢琴",
    lead1: "钢琴教的是纪律 — 如果孩子能坚持下去，或许还能有点乐趣。",
    leadBreakBefore: "吉他教的也是纪律，",
    leadHighlight: "但先从乐趣开始。",
    body1: "这正是现在马来西亚各个家庭客厅里正在发生的转变。孩子不需要被逼着练吉他 — 他们是主动想弹。因为那是他们歌单里的乐器、是他们追的创作者在弹的乐器、是每次家庭聚会和城市街角都能听见的声音。",
    body2: "给孩子一把吉他，加上一首他们真心喜欢的歌，纪律自然就会跟着来，不用大费周章。",
    body3: "我教木吉他、电吉他与尤克里里，学生年龄不限 — 因为孩子自己主动拿起的乐器，才是他们会弹一辈子的乐器。",
  },
};

export default function WhyGuitar() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section className="border-t border-white/10 bg-neutral-900/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {c.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-xl leading-relaxed text-white/80 sm:text-2xl">
            {c.lead1}
            <br className="hidden sm:block" /> {c.leadBreakBefore}
            <span className="text-amber-400">{c.leadHighlight}</span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-base text-white/60">{c.body1}</p>
          <p className="mt-4 text-base text-white/60">{c.body2}</p>
          <p className="mt-4 text-base text-white/60">{c.body3}</p>
        </Reveal>
      </div>
    </section>
  );
}
