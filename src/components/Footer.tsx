import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/40 sm:flex-row">
        <p>
          {new Date().getFullYear()} {SITE_NAME}
        </p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
          Instagram
        </a>
      </div>
    </footer>
  );
}
