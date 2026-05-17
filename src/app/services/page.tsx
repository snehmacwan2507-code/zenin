import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import { Headphones, UserCheck, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Zenin Growth Partners services for customer care, operations, and sales support.",
};

const serviceDetails = [
  {
    title: "Customer Care Outsourcing",
    description:
      "Give your customers fast thoughtful support across email live chat and voice.",
    icon: Headphones,
    href: "/services/customer-care-outsourcing",
    features: [
      "24 7 support coverage",
      "Multilingual support",
      "Technical issue handling",
      "Retention focused care",
    ],
  },
  {
    title: "Back Office Operations",
    description: "Keep administrative and data tasks moving with a reliable team so your core team stays focused.",
    icon: UserCheck,
    href: "/services/back-office-operations",
    features: ["Data entry and management", "Content review", "Fraud and trust safety", "Inventory support"]
  },
  {
    title: "Sales Support And Lead Generation",
    description: "Build a healthier pipeline with focused outreach and better lead qualification.",
    icon: TrendingUp,
    href: "/services/sales-support-lead-gen",
    features: ["B2B lead generation", "Appointment setting", "LinkedIn outreach", "CRM updates"]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Services Built For Scale"
        description="Choose the support model that fits your team, your workflow, and your growth goals."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <Card className="h-full border-black/5 group-hover:border-accent/40 group-hover:bg-accent/[0.02] cursor-pointer transition-all">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8">
                  <service.icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-neutral-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 text-accent font-bold group-hover:translate-x-1 transition-transform">
                  View service details <ChevronRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">How we get started</h2>
          <p className="text-xl text-white/60 mb-12">Every engagement starts with a clear review of your workflows, goals, and support needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { num: "01", t: "Discovery", d: "We learn how your current process works." },
              { num: "02", t: "Planning", d: "We design the right team and workflow." },
              { num: "03", t: "Launch", d: "We onboard fast and start delivering." }
            ].map((step, i) => (
              <div key={i} className="border-l border-white/20 pl-6">
                <div className="text-accent font-bold text-2xl mb-2">{step.num}</div>
                <div className="font-bold text-lg mb-2">{step.t}</div>
                <p className="text-white/40">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
