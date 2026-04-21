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
    "Scale your customer support with 24/7 multi-channel customer care outsourcing. Email, chat, and voice support that feels like an extension of your own team.",
};

export default function CustomerCareOutsourcingPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="World-Class Customer Care Outsourcing."
        description="Don&apos;t just answer tickets. Build relationships. Zenin Growth Partners provides the talent and systems to deliver superior support at scale."
      />

      <Section>
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold">
              Omnichannel Support That Never Sleeps.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-600">
              Your customers expect answers in minutes, not days. Zenin Growth
              Partners provides fully managed, 24/7 support teams that integrate
              seamlessly with your existing helpdesk software such as Zendesk,
              Intercom, and Freshdesk.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  description:
                    "Real-time responses that turn quick questions into confident resolutions.",
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  description:
                    "Detailed, high-context replies for customers who need thoughtful help.",
                },
                {
                  icon: Phone,
                  title: "Voice Support",
                  description:
                    "High-empathy phone coverage for urgent or high-stakes conversations.",
                },
                {
                  icon: Star,
                  title: "Customer Success",
                  description:
                    "Proactive follow-up designed to improve retention and satisfaction.",
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
              Why Zenin Growth Partners for customer care?
            </h3>
            <ul className="space-y-6">
              {[
                "Average response time under 2 minutes",
                "95%+ CSAT score average",
                "Strict quality assurance protocols",
                "Direct Slack and Discord integration",
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
