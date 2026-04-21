import { ShieldCheck, Users, Zap, Repeat } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, text: "24/7 Support" },
  { icon: Zap, text: "Scalable Teams" },
  { icon: Repeat, text: "Process-Driven Execution" },
  { icon: Users, text: "Reliable Operations" },
];

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-black/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {indicators.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-3 animate-fade-up ${
                index === 0
                  ? "animate-delay-1"
                  : index === 1
                    ? "animate-delay-2"
                    : index === 2
                      ? "animate-delay-3"
                      : "animate-delay-4"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm md:text-base font-medium text-neutral-800 tracking-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
