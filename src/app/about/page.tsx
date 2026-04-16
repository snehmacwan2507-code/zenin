import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Users, Target, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Zenin Growth Partners, our mission, and how we act as an extension of your team to drive operational excellence.",
};

const values = [
  {
    icon: Target,
    title: "Precision Execution",
    description: "Every process is mapped and optimized for absolute consistency and quality."
  },
  {
    icon: Users,
    title: "Team Integration",
    description: "We don't just work for you; we work with you as an extension of your own culture."
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "High standards are not a goal for us—they are the starting point for every engagement."
  },
  {
    icon: Globe,
    title: "Scalable Reach",
    description: "Our global infrastructure allows your business to scale across time zones without friction."
  }
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="More Than Outsourcing — A Growth Partner." 
        description="Zenin Growth Partners was founded with a single mission: to provide the operational backbone that allows visionary companies to focus on scaling."
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 italic text-neutral-800">
              &ldquo;We believe that operational overhead shouldn&rsquo;t be the ceiling for your growth.&rdquo;
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Founded by a team of operational experts, Zenin was built to solve a specific pain point: the high cost and complexity of scaling support and back-office teams. 
              </p>
              <p>
                In the modern economy, agility is everything. We provide that agility by offering world-class talent and process-driven execution that plugs directly into your existing workflows.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                alt="Zenin team strategy" 
                className="w-full h-full object-cover grayscale"
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
