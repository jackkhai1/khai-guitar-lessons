import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

const credentials = [
  "10+ years of guitar experience",
  "Performed solo and in bands — Malaysia & UK",
  "Taught guitar, ukulele & electric guitar to all ages",
  "Psychology degree — trained to teach, not just to play",
  "1-on-1, personalized approach for any age or level",
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-neutral-900/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/15 bg-white/[0.03] sm:aspect-[4/5]">
            <Image
              src="/images/performance-photo.jpg"
              alt="Performance photo — live gig"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              10+ Years of Guitar — Now Teaching and Performing Professionally in Malaysia
            </h2>
            <p className="mt-6 text-lg text-white/70">
              10+ years playing guitar, now performing in
              bands in Malaysia. I&apos;ve taught guitar, ukulele, and
              electric guitar to students of all ages &mdash; from young
              kids to retirees, complete beginners to returning players. I hold a psychology degree,
              because most musicians can play, but not everyone can teach.
              Whether it&apos;s you or your child, lessons are built around how{" "}
              <em>you</em> learn, not a fixed curriculum.
            </p>
          </Reveal>
          <StaggerGroup className="mt-8 space-y-3">
            {credentials.map((item) => (
              <StaggerItem key={item} className="flex items-start gap-3 text-white/80">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{item}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
