import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Shield, FileText, Layout, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Back Office And Operational Support",
  description: "Reliable back office support for admin work data management and daily operational workflows.",
};

export default function BackOfficePage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Smooth And Efficient Operations"
        description="Your backend operations should run quietly and reliably. We handle the complexity so your team can stay focused."
      />

      <Section>
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Back Office Support You Can Rely On</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Expand your administrative capacity without adding internal overhead. Our teams are trained in careful data work research and transactional processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { i: Database, t: "Data Management", d: "Data entry cleaning and CRM checks." },
                { i: FileText, t: "Administrative Support", d: "Scheduling invoicing and documentation." },
                { i: Shield, t: "Trust And Safety", d: "Content moderation and fraud review." },
                { i: Layout, t: "Workflow Operations", d: "Order processing and inventory support." },
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.i className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg">{item.t}</h3>
                  <p className="text-neutral-500 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden">
              <Image
                fill
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Process optimization"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
