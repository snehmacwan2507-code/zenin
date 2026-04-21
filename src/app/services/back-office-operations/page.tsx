import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Shield, FileText, Layout, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Back-Office & Operational Support",
  description: "Efficient back-office outsourcing for administrative tasks, data management, and operational workflows. Reliable and process-driven support.",
};

export default function BackOfficePage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Lean, Efficient Operations." 
        description="The engine room of your business should run without friction. We handle the complexity of backend workflows so you don't have to."
      />

      <Section>
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Process-Driven Back Office Support.</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Scale your administrative capabilities without the overhead of hiring. Our teams are trained in meticulous data management, research, and transactional workflows.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { i: Database, t: "Data Management", d: "Entry, cleaning, and CRM auditing." },
                { i: FileText, t: "Administrative", d: "Scheduling, invoicing, and documentation." },
                { i: Shield, t: "Trust & Safety", d: "Content moderation and fraud detection." },
                { i: Layout, t: "Workflows", d: "Order processing and inventory management." },
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
                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80" 
                alt="Process optimization" 
                sizes="(max-width: 1024px) 100vw, 50vw"
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
