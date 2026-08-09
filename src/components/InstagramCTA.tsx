import Reveal from "./motion/Reveal";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function InstagramCTA() {
  return (
    <section className="border-t border-white/10 bg-neutral-900/40">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-xl font-semibold text-white">
          Follow Along on Instagram
        </h2>
        <p className="max-w-md text-sm text-white/60">
          Clips from lessons, gigs, and everything in between.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          @jackkhaii on Instagram
        </a>
      </Reveal>
    </section>
  );
}
