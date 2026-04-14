import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Headphones, Star, Phone, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience & Support Outsourcing",
  description: "Scale your customer support with 24/7 multi-channel CX solutions. Email, Chat, and Voice support that feels like an extension of your own team.",
};

export default function CustomerExperiencePage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="World-Class Customer Experience." 
        description="Don't just answer tickets. Build relationships. Zenin provides the talent and technology to deliver superior support at scale."
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Omnichannel Support That Never Sleeps.</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Your customers expect answers in minutes, not days. We provide fully managed, 24/7 support teams that integrate seamlessly with your existing helpdesk software (Zendesk, Intercom, Freshdesk, etc.).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { i: MessageSquare, t: "Live Chat", d: "Real-time responses for instant resolution." },
                { i: Mail, t: "Email Support", d: "Detailed, thorough support for complex queries." },
                { i: Phone, t: "Voice Support", d: "High-EQ phone support for critical interactions." },
                { i: Star, t: "Success", d: "Proactive outreach to ensure client satisfaction." },
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
          <div className="flex-1 bg-neutral-50 rounded-[3rem] p-8 md:p-12 border border-black/5">
            <h3 className="text-2xl font-bold mb-8">Why Zenin for CX?</h3>
            <ul className="space-y-6">
              {[
                "Average Response Time < 2 Minutes",
                "95%+ CSAT Score Average",
                "Strict Quality Assurance Protocols",
                "Direct Slack/Discord Integration",
                "Weekly Performance Reporting"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4 font-medium text-neutral-800">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
