import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  return (
    <Section id="cta" className="bg-black py-24 md:py-40">
      <div className="relative overflow-hidden rounded-[3rem] bg-neutral-900 border border-white/10 p-12 md:p-24 text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="animate-fade-up mb-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Let Us Run The Ops <br />
            <span className="text-white/40">So You Can Lead Growth</span>
          </h2>

          <p className="animate-fade-up animate-delay-1 mb-12 text-xl text-neutral-400">
            Our team handles the daily operational load while you focus on the
            work that moves your business forward.
          </p>

          <div className="animate-fade-up animate-delay-2 flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              href={`mailto:${siteConfig.emails.hello}?subject=Book%20a%20call%20with%20Zenin%20Growth%20Partners`}
              variant="accent"
              className="px-12 py-4 text-lg"
            >
              Book a Call
            </Button>
            <Button
              href={`mailto:${siteConfig.emails.directors.join(",")}?subject=Contacting%20Zenin%20Growth%20Partners%20Directors`}
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10 px-12 py-4 text-lg"
            >
              Contact Directors
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
