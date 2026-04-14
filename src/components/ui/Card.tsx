"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.15)" } : {}}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "glass rounded-3xl p-8 border border-black/5 flex flex-col gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
