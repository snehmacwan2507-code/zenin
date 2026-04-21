import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: "_self" | "_blank";
  rel?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  href,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition duration-300 md:text-base motion-safe:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-neutral-800",
    secondary: "bg-white text-black border border-black/10 hover:bg-neutral-50 shadow-sm",
    outline: "bg-transparent border border-black/20 text-black hover:bg-black/5",
    accent: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={styles} target={target} rel={rel}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={styles} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
}
