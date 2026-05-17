import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import CTA from "@/components/sections/CTA";
import { Star, Phone, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Care Outsourcing",
  description:
    "Scale customer support with all day coverage across email chat and voice while keeping service quality high.",
};

export default function CustomerCareOutsourcingPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Customer Care That Feels Personal"
        description="Do more than answer tickets. Build trust with customers through fast thoughtful support at scale."
      />

      <Section>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold">
              Omnichannel Support All Day
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              Your customers expect fast answers. We run dedicated support teams
              that plug into your current helpdesk tools including Zendesk
              Intercom and Freshdesk.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  description:
                    "Quick responses that solve questions before they become bigger issues.",
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  description:
                    "Clear responses for customers who need thoughtful detailed help.",
                },
                {
                  icon: Phone,
                  title: "Voice Support",
                  description:
                    "Empathetic call support for urgent and sensitive conversations.",
                },
                {
                  icon: Star,
                  title: "Customer Success",
                  description:
                    "Proactive follow up that improves retention and loyalty.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-[3rem] border border-black/5 bg-neutral-50 p-8 md:p-12">
            <h3 className="mb-8 text-2xl font-bold">
              Why teams choose Zenin for customer care
            </h3>
            <ul className="space-y-6">
              {[
                "Average response time under two minutes",
                "Strong customer satisfaction scores",
                "Consistent quality checks",
                "Direct Slack and Discord collaboration",
                "Weekly performance reporting",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 font-medium text-neutral-800"
                >
                  <div className="h-2 w-2 rounded-full bg-accent" />
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
