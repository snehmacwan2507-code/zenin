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
    "Explore Zenin Growth Partners services across customer care outsourcing, back-office operations, and sales support for modern teams ready to scale.",
};

const serviceDetails = [
  {
    title: "Customer Care Outsourcing",
    description:
      "Deliver world-class support across email, live chat, and voice with KPI-driven teams focused on satisfaction and retention.",
    icon: Headphones,
    href: "/services/customer-care-outsourcing",
    features: [
      "24/7 multi-channel support",
      "Multilingual capabilities",
      "Technical support",
      "Success and retention",
    ],
  },
  {
    title: "Back-Office Operations",
    description: "Streamline your administrative and data-driven tasks with our meticulous execution teams. Focus on your core business while we handle the rest.",
    icon: UserCheck,
    href: "/services/back-office-operations",
    features: ["Data Entry & Management", "Content Moderation", "Fraud & Trust Safety", "Inventory Management"]
  },
  {
    title: "Sales & Lead Generation",
    description: "Build a consistent pipeline of high-quality leads. Our sales support teams handle the top-of-funnel work so your closers can close.",
    icon: TrendingUp,
    href: "/services/sales-support-lead-gen",
    features: ["B2B Lead Generation", "Appointment Setting", "LinkedIn Outreach", "CRM Management"]
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Services Built for Scale." 
        description="Explore dedicated support lines from Zenin Growth Partners, from customer care outsourcing to complex back-office workflows and revenue support."
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">&ldquo;How can Zenin Growth Partners help you reach the next level?&rdquo;</h2>
          <p className="text-xl text-white/60 mb-12">Every engagement starts with a thorough analysis of your current workflows, goals, and service expectations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { num: "01", t: "Discovery", d: "Deep dive into your operations." },
              { num: "02", t: "Strategy", d: "Designing the ideal team & process." },
              { num: "03", t: "Execution", d: "Seamless integration & launch." }
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
