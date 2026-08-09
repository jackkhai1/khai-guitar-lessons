import Image from "next/image";
import Reveal from "./motion/Reveal";
import { whatsappLink, TRIAL_MESSAGE, GIG_MESSAGE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Acoustic Guitar &middot; Electric Guitar &middot; Ukelele &mdash; KL Area, Sentral &amp; Online
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Play the Songs You Love &mdash; Without the Frustration.
          </h1>
          <p className="mt-4 text-base text-white/60">
            Backed by 10+ years of electric and acoustic guitar experience
            and a psychology degree in how the human brain actually learns.
          </p>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Modern guitar, ukulele, and electric lessons designed around your
            goals. Whether you&apos;re an absolute beginner, a remote worker
            seeking an analog reset, or a parent wanting a fun outlet for
            your child.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(TRIAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
            >
              💬 Claim Your Free Trial Lesson on WhatsApp
            </a>
            <a
              href={whatsappLink(GIG_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              💬 Are You Available to Gig?
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03] sm:aspect-[4/5]">
            <Image
              src="/images/profile-picture.jpg"
              alt="Profile photo of guitar teacher"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
