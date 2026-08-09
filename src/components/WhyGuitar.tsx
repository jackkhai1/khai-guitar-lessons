import Reveal from "./motion/Reveal";

export default function WhyGuitar() {
  return (
    <section className="border-t border-white/10 bg-neutral-900/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Why More Parents Are Choosing Guitar Over Piano
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-xl leading-relaxed text-white/80 sm:text-2xl">
            Piano teaches discipline &mdash; and maybe, if your kid sticks with
            it, some fun.
            <br className="hidden sm:block" /> Guitar teaches discipline{" "}
            <span className="text-amber-400">by making it fun first.</span>
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-base text-white/60">
            That&apos;s the shift happening in living rooms across Malaysia
            right now. Kids don&apos;t need to be dragged to practice guitar
            &mdash; they want to. It&apos;s the instrument on their playlists,
            in the creators they watch, at every family gathering, and on
            every corner in the city.
          </p>
          <p className="mt-4 text-base text-white/60">
            Give a child a guitar and a song they actually love, and the
            discipline follows without a fight.
          </p>
          <p className="mt-4 text-base text-white/60">
            I teach acoustic guitar, electric guitar, and ukulele to all ages
            &mdash; because the instrument a kid picks up on their own is the
            one they&apos;ll play for life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
