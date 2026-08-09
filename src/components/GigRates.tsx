import Image from "next/image";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import { whatsappLink, GIG_MESSAGE } from "@/lib/constants";

const rates = [
  { sets: "2 Sets", price: "RM300" },
  { sets: "3 Sets", price: "RM400" },
];

export default function GigRates() {
  return (
    <section id="gigs" className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Book Me For Your Event
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Standard gig rates for solo or band performances in KL.
            </p>
          </Reveal>
          <StaggerGroup className="mt-8 grid grid-cols-2 gap-4">
            {rates.map((rate) => (
              <StaggerItem
                key={rate.sets}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-white/60">{rate.sets}</p>
                <p className="mt-1 text-3xl font-bold text-white">{rate.price}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm text-white/50">
              Travel fee applies for locations outside Sentral &mdash; contact
              for a quote.
            </p>
            <a
              href={whatsappLink(GIG_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400"
            >
              💬 Are You Available for a Gig?
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03]">
            <Image
              src="/images/gig photoo.jpg"
              alt="Band performance photo"
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
