import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  id,
  containerClassName,
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 overflow-hidden", className)}
    >
      <div className={cn("container mx-auto px-6 md:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
