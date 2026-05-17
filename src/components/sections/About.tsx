 "use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { useEffect, useRef, useState } from "react";

function StatCounter({
  target,
  suffix = "",
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const next = Math.round(target * progress);
      setValue(next);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [duration, started, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-accent mb-2">
      {value}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" className="bg-black text-white">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1">
          <div className="animate-fade-in overflow-hidden rounded-3xl border border-white/10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                fill
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="About Zenin Growth Partners"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Built To Keep <br />
              <span className="text-white/40">Your Team Moving</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We help growing teams stay focused by taking day to day operations
              off their plate.
            </p>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              From customer support to backend tasks we work like an in house
              team. You get consistency, clear communication, and work that gets
              done on time.
            </p>

            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <StatCounter target={98} suffix="%" />
                <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Client Retention</div>
              </div>
              <div>
                <StatCounter target={20} suffix="+" />
                <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Processes Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
