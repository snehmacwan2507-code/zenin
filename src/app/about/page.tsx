import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Users, Target, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how Zenin Growth Partners supports your team with dependable operations.",
};

const values = [
  {
    icon: Target,
    title: "Focused Execution",
    description: "We build clear workflows so every task is handled with care and consistency."
  },
  {
    icon: Users,
    title: "True Team Alignment",
    description: "We work alongside your team and adapt to your culture and goals."
  },
  {
    icon: Award,
    title: "High Standards Always",
    description: "Quality is not an extra step for us. It is built into every process."
  },
  {
    icon: Globe,
    title: "Ready To Scale",
    description: "Our global setup helps your business grow across regions and time zones."
  }
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="More Than Outsourcing A Growth Partner"
        description="Zenin Growth Partners was built to help ambitious teams run better operations at every stage."
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-neutral-800">
              &ldquo;Operations should empower growth not slow it down.&rdquo;
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Zenin Growth Partners was founded to solve a common challenge. As companies grow, support and operations get harder to manage.
              </p>
              <p>
                We make that shift easier with skilled teams and dependable systems that fit your current workflow.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                fill
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                alt="Zenin Growth Partners team strategy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 bg-white rounded-3xl border border-black/5 hover:border-accent/20 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-neutral-500">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
