import { StaggerGroup, StaggerItem } from "./motion/Stagger";

const items = [
  {
    title: "KL Sentral",
    detail: "In-person lessons based in the Sentral area.",
  },
  {
    title: "Zoom",
    detail: "Full lessons online, anywhere you are.",
  },
  {
    title: "Travel Around KL",
    detail: "Available for an added travel fee — quote on request.",
  },
];

export default function FormatLocation() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.detail}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
