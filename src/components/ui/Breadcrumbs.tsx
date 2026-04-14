"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  // Don't show breadcrumbs on homepage
  if (paths.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center gap-2 text-sm font-medium", className)}
    >
      <Link 
        href="/" 
        className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;
        const label = path
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return (
          <div key={path} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            {isLast ? (
              <span className="text-white font-bold" aria-current="page">
                {label}
              </span>
            ) : (
              <Link 
                href={href}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}

      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://zeningrowth.com"
              },
              ...paths.map((path, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": path.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
                "item": `https://zeningrowth.com/${paths.slice(0, index + 1).join("/")}`
              }))
            ]
          })
        }}
      />
    </nav>
  );
}
