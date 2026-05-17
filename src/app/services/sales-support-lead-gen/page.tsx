import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Target, Search, Calendar, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Support And B2B Lead Generation",
  description: "Grow revenue with focused sales support including lead research outreach appointment booking and CRM updates.",
};

export default function SalesSupportPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Build A Stronger Sales Pipeline"
        description="Your closers should spend time closing. We handle prospecting outreach and appointment setting so your pipeline keeps moving."
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Drive Steady Revenue Growth</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              We build dedicated sales support teams that work as part of your organization. Our focus is to find the right prospects and start valuable conversations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { i: Search, t: "Lead Research", d: "Targeted prospect lists based on your ideal customer profile." },
                { i: Target, t: "Outreach", d: "Consistent outreach across email and LinkedIn." },
                { i: Calendar, t: "Appointment Setting", d: "Qualified meetings booked directly on your calendar." },
                { i: BarChart, t: "CRM Management", d: "Cleaner pipeline data and better visibility." },
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
          <div className="flex-1 bg-black text-white rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Performance Focused Support</h3>
              <p className="text-white/60 mb-8">We care about outcomes that matter. Every workflow and script is built to improve conversion and pipeline quality.</p>
              <ul className="space-y-6">
                {[
                  "Ideal customer profile planning",
                  "Personalized outreach copy",
                  "LinkedIn Sales Navigator support",
                  "HubSpot and Salesforce experience",
                  "Call quality review",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-4 font-medium text-white/80">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
