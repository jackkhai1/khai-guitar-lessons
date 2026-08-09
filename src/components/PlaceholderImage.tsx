type PlaceholderImageProps = {
  label: string;
  filename: string;
  aspect?: string;
  className?: string;
};

export default function PlaceholderImage({
  label,
  filename,
  aspect = "aspect-[4/5]",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.03] p-6 text-center ${className}`}
    >
      <svg
        className="h-8 w-8 text-white/25"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5V6a2 2 0 0 1 2-2h1.5l1-1.5h9l1 1.5H19a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
        />
        <circle cx="12" cy="11" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="text-sm font-medium text-white/60">{label}</p>
      <code className="rounded bg-black/30 px-2 py-1 text-[11px] text-white/35">
        public/images/{filename}
      </code>
    </div>
  );
}
