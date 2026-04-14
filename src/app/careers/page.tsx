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
  description: "Join a team of operational experts. Explore career opportunities at Zenin and help us build the global operational backbone for modern businesses.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Build the Future of Operations." 
        description="We are always looking for high-quality talent in support, sales, and operations management. Join a team that values excellence and growth."
      />

      <Section>
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Work at Zenin?</h2>
          <p className="text-lg text-neutral-600">
            We provide our team members with the training, tools, and culture they need to deliver world-class work. We don't just hire employees; we build professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { i: Zap, t: "Fast-Paced Environment", d: "Work with some of the fastest-growing startups and established agencies globally." },
            { i: Heart, t: "People-First Culture", d: "We value work-life balance and provide a supportive environment for professional growth." },
            { i: Rocket, t: "Growth Opportunity", d: "As Zenin scales, so do our people. We promote from within whenever possible." },
            { i: Briefcase, t: "Remote Flexibility", d: "Work from anywhere in the world with our globally distributed operational model." },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Interested in joining our talent pool?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Even if we don't have an active opening that fits your profile, we'd love to hear from you. We are constantly expanding our teams.</p>
          <a href="mailto:careers@zeningrowth.com" className="inline-block bg-accent text-white px-12 py-4 rounded-full font-bold hover:bg-accent-hover transition-all">
            Send Your Resume
          </a>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
