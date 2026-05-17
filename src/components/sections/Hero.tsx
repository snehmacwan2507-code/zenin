import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] w-full flex items-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full animate-fade-in bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          <div className="animate-fade-up animate-delay-2">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Grow Your Business <br />
              <span className="text-white/60">Without Growing Your Headcount</span>
            </h1>
          </div>

          <p className="animate-fade-up animate-delay-4 mb-12 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            We run your daily operations, support desk, and backend tasks so your
            team can focus on growth. You get experienced people plus clear
            execution from day one.
          </p>

          <div className="animate-fade-up animate-delay-5 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="accent" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href={`mailto:${siteConfig.emails.directors[0]}?subject=I%20want%20to%20talk%20to%20a%20director`}
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
            >
              Talk to a Director
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle parallax scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 p-1">
          <div className="animate-bob h-2 w-1 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
