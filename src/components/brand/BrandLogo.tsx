import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  theme?: "light" | "dark";
};

function BrandMark() {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      className="h-11 w-11 shrink-0"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="12"
          y1="11"
          x2="44"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c2410c" />
          <stop offset="1" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="16" fill="#111111" />
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="16"
        stroke="rgba(255,255,255,0.08)"
      />
      <path
        d="M15.5 15H41.5L36.75 21.25H25L40.5 33L35.5 41H13.5L18.25 34.75H29L13.5 23L18.5 15H15.5Z"
        fill={`url(#${gradientId})`}
      />
      <path
        d="M36.5 15L23 41"
        stroke="#F5F5F4"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandLogo({
  className,
  theme = "dark",
}: BrandLogoProps) {
  const isLight = theme === "light";

  return (
    <div
      aria-label="Zenin Growth Partners"
      className={cn("flex items-center gap-3", className)}
    >
      <BrandMark />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.8rem] font-semibold uppercase tracking-[0.22em] md:text-[0.92rem] md:tracking-[0.26em]",
            isLight ? "text-white" : "text-neutral-950"
          )}
        >
          ZENIN GROWTH
        </span>
        <span
          className={cn(
            "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] md:text-[0.62rem] md:tracking-[0.3em]",
            isLight ? "text-white/70" : "text-neutral-500"
          )}
        >
          PARTNERS
        </span>
      </div>
    </div>
  );
}
