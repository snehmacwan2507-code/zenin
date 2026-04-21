import Image from "next/image";
import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Scalable team as you grow",
  "Trained professionals aligned with your brand",
  "Reduced operational cost",
  "Faster turnaround with structured workflows",
];

export default function WhyZenin() {
  return (
    <Section id="why-zenin">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 order-2 lg:order-1">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              More Than Outsourcing — <br />
              <span className="text-accent">A Growth Partner</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
              We don&rsquo;t just handle tasks; we optimize your entire workflow. 
              Our approach ensures that every process is scalable, efficient, and 
              perfectly aligned with your company&rsquo;s core values.
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
                <span className="text-white font-bold text-2xl">40%</span>
              </div>
              <p className="text-white/60 text-sm">Average Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
