import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import { Briefcase, Zap, Heart, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Join Zenin Growth Partners",
  description:
    "Join Zenin Growth Partners and build a strong career in operations support.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Build A Career In Modern Operations"
        description="We are always looking for people who take pride in great work and steady growth."
      />

      <Section>
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Work With Zenin Growth Partners</h2>
          <p className="text-lg text-neutral-600">
            We give every team member the training and support they need to do excellent work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { i: Zap, t: "Fast Moving Work", d: "Work with growing companies and solve real operational problems." },
            { i: Heart, t: "People First Culture", d: "Be part of a supportive team that respects balance and progress." },
            { i: Rocket, t: "Real Growth Paths", d: "When the company grows your role can grow too." },
            { i: Briefcase, t: "Remote Flexibility", d: "Work from anywhere with a distributed team model." },
          ].map((item, idx) => (
            <Card key={idx} className="bg-neutral-50/50 border-none">
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-6">
                <item.i className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.t}</h3>
              <p className="text-neutral-500 leading-relaxed">{item.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-[3rem] bg-neutral-900 text-white p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Want to join our talent network</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">If there is no open role that matches your profile right now we still want to hear from you.</p>
          <a
            href="mailto:sneh@zeningrowthpartners.com"
            className="inline-block bg-accent text-white px-12 py-4 rounded-full font-bold hover:bg-accent-hover transition-all"
          >
            sneh@zeningrowthpartners.com
          </a>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
