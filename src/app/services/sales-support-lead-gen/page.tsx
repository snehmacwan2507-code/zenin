import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { TrendingUp, Target, Search, Calendar, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Sales Support & B2B Lead Generation",
  description: "Accelerate your revenue growth with outsourced sales support. B2B lead generation, appointment setting, and CRM management.",
};

export default function SalesSupportPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Fuel Your Sales Pipeline." 
        description="Your closers should be closing. Zenin handles the top-of-funnel heavy lifting, from prospecting to initial outreach and appointment setting."
      />

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Drive Consistent Revenue Growth.</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              We build and manage dedicated sales support teams that act as an extension of your sales organization. We specialize in identifying the right prospects and initiating high-value conversations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { i: Search, t: "Lead Prospecting", d: "Highly targeted lists based on your ICP." },
                { i: Target, t: "Outreach", d: "Multi-touch campaigns across email & LinkedIn." },
                { i: Calendar, t: "Appt. Setting", d: "Qualified meetings booked direct to your calendar." },
                { i: BarChart, t: "CRM Management", d: "Full pipeline visibility and data hygiene." },
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
              <h3 className="text-2xl font-bold mb-8">Performance Driven</h3>
              <p className="text-white/60 mb-8">We focus on outcomes. Our sales support teams are trained on conversion-centric workflows and scripts designed to move the needle.</p>
              <ul className="space-y-6">
                {[
                  "Ideal Customer Profile (ICP) Development",
                  "Personalized Email Copywriting",
                  "LinkedIn Sales Navigator Experts",
                  "HubSpot & Salesforce Native",
                  "Call Auditing & Quality Control"
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
