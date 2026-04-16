"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Scalable team as you grow",
  "Trained professionals aligned with your brand",
  "Reduced operational cost",
  "Faster turnaround with structured workflows",
];

export default function WhyZenin() {
  return (
    <Section id="why-zenin">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              More Than Outsourcing — <br />
              <span className="text-accent">A Growth Partner</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-xl">
              We don&rsquo;t just handle tasks; we optimize your entire workflow. 
              Our approach ensures that every process is scalable, efficient, and 
              perfectly aligned with your company&rsquo;s core values.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-lg font-medium text-neutral-800"
                >
                  <div className="bg-accent/10 p-1 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex-1 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Visual element - Modern Abstract / Minimal Image placeholder */}
            <div className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden shadow-premium">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Growth Partner" 
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>
            
            {/* Glass decoration */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-dark p-8 rounded-2xl shadow-premium border-white/10 hidden md:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-white font-bold text-2xl">40%</span>
              </div>
              <p className="text-white/60 text-sm">Average Cost Reduction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
