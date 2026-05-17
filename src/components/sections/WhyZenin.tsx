"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
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
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [duration, started, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const benefits = [
  "A team that grows with you",
  "Skilled professionals who match your brand voice",
  "Lower day to day operating cost",
  "Faster delivery through clear workflows",
];

export default function WhyZenin() {
  return (
    <Section id="why-zenin">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 order-2 lg:order-1">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              More Than Outsourcing <br />
              <span className="text-accent">A Real Growth Partner</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
              We do more than complete tasks. We improve how work moves across
              your business so every step feels smoother and easier to manage.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-4 text-lg font-medium text-neutral-800 animate-fade-up ${
                    index === 0
                      ? "animate-delay-1"
                      : index === 1
                        ? "animate-delay-2"
                        : index === 2
                          ? "animate-delay-3"
                          : "animate-delay-4"
                  }`}
                >
                  <div className="bg-accent/10 p-1 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <div className="animate-fade-in relative">
            {/* Visual element - Modern Abstract / Minimal Image placeholder */}
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100 shadow-premium">
              <Image
                fill
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Growth Partner"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>

            {/* Glass decoration */}
            <div className="animate-float absolute -bottom-8 -left-8 hidden rounded-2xl border-white/10 p-8 shadow-premium glass-dark md:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-white font-bold text-2xl">
                  <StatCounter target={40} suffix="%" />
                </span>
              </div>
              <p className="text-white/60 text-sm">Average Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
