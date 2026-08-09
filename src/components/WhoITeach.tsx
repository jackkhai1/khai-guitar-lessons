import Image from "next/image";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

const ageGroups = [
  {
    label: "Ages 4–8",
    filename: "7 yr old.png",
    blurb: "Short, playful sessions built around songs kids already love.",
  },
  {
    label: "Ages 9–17",
    filename: "teenage student.jpeg",
    blurb: "Real technique, real songs — progress they can actually hear.",
  },
  {
    label: "Ages 18 & Up",
    filename: "online-teaching.jpg",
    blurb: "Whether you're starting from zero, coming back after years off, or picking up a lifelong passion.",
  },
];

export default function WhoITeach() {
  return (
    <section id="lessons" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lessons for Every Age, Personalized to You
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Guitar, ukulele, and electric guitar &mdash; taught one-on-one and
            tailored to your goals, whether that&apos;s your first chord or
            your first gig.
          </p>
        </Reveal>
        <StaggerGroup className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:gap-8 sm:overflow-visible sm:pb-0">
          {ageGroups.map((group) => (
            <StaggerItem
              key={group.label}
              className="w-[70%] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-white/15">
                <Image
                  src={encodeURI(`/images/${group.filename}`)}
                  alt={`Teaching photo — ${group.label}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className={
                    group.label === "Ages 4–8" ? "object-contain" : "object-cover"
                  }
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{group.label}</h3>
              <p className="mt-1 text-sm text-white/60">{group.blurb}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
