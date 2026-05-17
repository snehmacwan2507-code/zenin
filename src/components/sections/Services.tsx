import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { ChevronRight, Headphones, UserCheck, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Customer Care Outsourcing",
    description:
      "Support across email chat and phone to improve response time and customer satisfaction.",
    icon: Headphones,
    href: "/services/customer-care-outsourcing",
  },
  {
    title: "Virtual Assistance & Back Office",
    description:
      "From scheduling to admin work we handle daily operations so your team stays focused.",
    icon: UserCheck,
    href: "/services/back-office-operations",
  },
  {
    title: "Lead Generation & Sales Support",
    description:
      "We help you find nurture and convert leads through a clear outreach process.",
    icon: TrendingUp,
    href: "/services/sales-support-lead-gen",
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-neutral-50/50">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="animate-fade-up mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Support Services Built for Growth
        </h2>
        <p className="animate-fade-up animate-delay-1 text-lg text-neutral-600">
          Practical support that helps your business scale while keeping quality high.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`animate-fade-up ${
              index === 0
                ? "animate-delay-1"
                : index === 1
                  ? "animate-delay-2"
                  : "animate-delay-3"
            }`}
          >
            <Link href={service.href} className="block h-full group">
              <Card className="flex h-full flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-neutral-600">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-accent transition-transform group-hover:translate-x-1">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.24em] text-accent transition-colors hover:text-accent-hover"
        >
          View all services
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
