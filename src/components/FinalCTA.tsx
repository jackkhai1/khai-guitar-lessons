import Reveal from "./motion/Reveal";
import { whatsappLink, TRIAL_MESSAGE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="contact" className="border-t border-white/10">
      <Reveal className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Start?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Book a free intro call — for you, your child, or your next event.
        </p>
        <a
          href={whatsappLink(TRIAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-amber-400"
        >
          💬 Book Your Free Intro Call on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
