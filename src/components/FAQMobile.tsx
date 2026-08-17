"use client";

import { Accordion } from "./Accordion";
import Reveal from "./motion/Reveal";
import { useLanguage } from "@/lib/language";

const copy = {
  en: {
    heading: "Common Questions",
    q1: "Why learn at Khai Guitar and not somewhere else?",
    a1: "In addition to teaching professionally at centres and performing professionally, I hold a degree in Psychology and a Master's in Data Science, both from the University of Manchester. I know what it takes to keep people of all ages — from kids to adults — engaged. Every lesson is personalised to you: follow a grade syllabus, or just learn what you want. I've had clients request specifically Japanese songs, and others whose only goal was the confidence to sing at parties.",
    q2: "What experience do you have?",
    a2: "I've taught at centres and performed professionally in Kuala Lumpur, teaching students from age 5 to adults 30+, across electric guitar, acoustic guitar, and ukulele. I have 10+ years of guitar experience — you can see me play on Instagram @jackkhaii. Not all great musicians are great teachers, but I've studied the science of human psychology in the UK and hold a Master's in Data Science/AI, so you can expect a more humanistic and technical approach to understanding your needs.",
    q3: "Why are more people choosing guitar over other instruments?",
    a3: "Piano teaches discipline — and maybe, if your kid sticks with it, some fun. Guitar teaches discipline by making it fun first. That's the shift happening in living rooms across Malaysia right now: kids don't need to be dragged to practice guitar, they want to. It's the instrument on their playlists, in the creators they watch, at every family gathering. Give a child a guitar and a song they actually love, and the discipline follows without a fight. I teach acoustic, electric, and ukulele to all ages — because the instrument a kid picks up on their own is the one they'll play for life.",
    q4: "What if I don't own a guitar, aren't they expensive?",
  },
  zh: {
    heading: "常见问题",
    q1: "为什么选择在 Khai Guitar 学习，而不是其他地方？",
    a1: "除了在琴行专业授课与演出经验之外，我还持有英国曼彻斯特大学的心理学学位，以及曼彻斯特大学的数据科学硕士学位。我深知如何让不同年龄层的学生——从孩子到成人——都能保持投入。每一堂课都是为你量身设计：你可以选择考级课程，也可以单纯学你想学的歌曲。曾有学生特别指定想学日文歌曲，也有学生的目标只是希望能有自信在聚会上开口唱歌。",
    q2: "你有哪些教学经验？",
    a2: "我曾在琴行任教，也在吉隆坡专业演出，教过的学生从 5 岁孩童到 30 多岁的成人都有，教授电吉他、木吉他与尤克里里。我拥有 10 年以上的吉他演奏经验——你可以在 Instagram @jackkhaii 上看到我的演奏。并非所有优秀的音乐人都懂得教学，但我在英国研读过人类心理学，也持有数据科学/人工智能硕士学位，因此你可以期待更具人性化与系统化的教学方式，真正理解你的需求。",
    q3: "为什么越来越多人选择吉他，而不是其他乐器？",
    a3: "钢琴教的是纪律——如果孩子能坚持下去，或许还能有点乐趣。吉他教的也是纪律，但先从乐趣开始。这正是现在马来西亚各个家庭客厅里正在发生的转变：孩子不需要被逼着练吉他，他们是主动想弹。因为那是他们歌单里的乐器、是他们追的创作者在弹的乐器、是每次家庭聚会都能听见的声音。给孩子一把吉他，加上一首他们真心喜欢的歌，纪律自然就会跟着来。我教木吉他、电吉他与尤克里里，学生年龄不限——因为孩子自己主动拿起的乐器，才是他们会弹一辈子的乐器。",
    q4: "还没有吉他？会不会很贵？",
  },
};

export default function FAQMobile() {
  const { lang } = useLanguage();
  const c = copy[lang];

  return (
    <section id="faq" className="border-t border-white/10 sm:hidden">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Reveal>
          <h2 className="text-center text-xl font-semibold text-white">{c.heading}</h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          <Reveal>
            <Accordion title={c.q1}>{c.a1}</Accordion>
          </Reveal>
          <Reveal delay={0.05}>
            <Accordion title={c.q2}>{c.a2}</Accordion>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion title={c.q3}>{c.a3}</Accordion>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="/guitars"
              className="flex items-center justify-between gap-4 rounded-2xl border border-amber-400/30 bg-amber-400/[0.05] p-5"
            >
              <span className="text-base font-bold text-amber-400">{c.q4}</span>
              <svg
                className="h-5 w-5 flex-shrink-0 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
