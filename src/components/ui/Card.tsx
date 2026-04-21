import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className,
  hoverEffect = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "glass flex flex-col gap-4 rounded-3xl border border-black/5 p-8 transition duration-300",
        hoverEffect &&
          "motion-safe:hover:-translate-y-2 motion-safe:hover:border-accent/20 motion-safe:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
