"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Headphones, UserCheck, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Customer Care Outsourcing",
    description: "Multi-channel support (Email, Chat, Phone) to improve response time and customer satisfaction.",
    icon: Headphones,
  },
  {
    title: "Virtual Assistance & Back Office",
    description: "From scheduling to admin tasks, we handle your operations so your team stays focused.",
    icon: UserCheck,
  },
  {
    title: "Lead Generation & Sales Support",
    description: "We help you find, nurture, and convert leads consistently through structured outreach.",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-neutral-50/50">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          World-Class Support Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-600"
        >
          Specialized solutions designed to help your business scale efficiently while maintaining quality.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card className="h-full group hover:border-accent/20">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <span className="text-sm font-bold text-accent group-hover:underline cursor-pointer">
                  Learn more →
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
