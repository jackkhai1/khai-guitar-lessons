import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

const stages = [
  {
    label: "Parents",
    blurb:
      "Build your child's focus, creativity, social confidence, and motor skills through an enriching skill.",
  },
  {
    label: "Teens",
    blurb:
      "Express yourself, boost your self-esteem, build lasting friendships, and — let's be honest — impress your crush.",
  },
  {
    label: "Working Professionals",
    blurb:
      "Decompress, blow off steam, and reclaim a creative space just for you after a hectic workday.",
  },
  {
    label: "Retirees",
    blurb:
      "Pick up a rewarding, meaningful lifelong passion that keeps your mind sharp and your days inspired.",
  },
  {
    label: "Remote & Freelance",
    blurb:
      "When home is also your office, guitar breaks up the Zoom fatigue and gives you a real way to connect and belong.",
  },
];

export default function WhyLearn() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <p className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Imagine picking up a guitar and effortlessly playing everyone&apos;s
            favorite songs.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base text-white/60">
            Imagine being the person who brings everyone together at family
            gatherings, surprises your partner with their favorite song, or
            bonds instantly with new friends through music. Playing guitar
            builds genuine confidence, creates a sense of belonging, and lets
            you share unforgettable moments with the people around you.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-xl font-semibold text-amber-400">
            But most importantly, you do it for yourself.
          </p>
          <p className="mt-4 text-base text-white/60">
            Guitar is your personal outlet. It&apos;s a way to unwind after a
            long day, process your emotions, and express yourself in ways
            words can&apos;t match.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-center text-xl font-semibold text-white">
            No Matter Your Stage in Life, Music Fits
          </h2>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage) => (
            <StaggerItem
              key={stage.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-base font-semibold text-white">
                {stage.label}
              </h3>
              <p className="mt-2 text-sm text-white/60">{stage.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-lg font-semibold text-white">
            There is a place for you here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
