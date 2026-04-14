"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "accent";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-neutral-800",
    secondary: "bg-white text-black border border-black/10 hover:bg-neutral-50 shadow-sm",
    outline: "bg-transparent border border-black/20 text-black hover:bg-black/5",
    accent: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
}
