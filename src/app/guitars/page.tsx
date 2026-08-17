import type { Metadata } from "next";
import GearGuide from "@/components/GearGuide";

export const metadata: Metadata = {
  title: "No Instrument Yet? | Khai Guitar Lessons",
  description:
    "Don't have a guitar yet? Here's how to pick an affordable starter guitar, ukulele, or electric guitar setup, plus trial lesson options.",
};

export default function GuitarsPage() {
  return (
    <main>
      <GearGuide />
    </main>
  );
}
