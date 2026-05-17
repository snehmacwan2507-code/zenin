import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  theme?: "light" | "dark";
};

function BrandMark() {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 w-16 shrink-0 overflow-visible"
    >
      <Image
        src="/logo-dragon-transparent-v2.png"
        alt=""
        fill
        sizes="64px"
        className="object-contain object-center"
        priority
      />
    </div>
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
