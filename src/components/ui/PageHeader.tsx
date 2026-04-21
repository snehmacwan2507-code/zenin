import { cn } from "@/lib/utils";
import Breadcrumbs from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("relative pt-40 pb-20 overflow-hidden bg-black", className)}>
      {/* Decorative gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black select-none pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Breadcrumbs />
        
        <div className="animate-fade-up mt-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
