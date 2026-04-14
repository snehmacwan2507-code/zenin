"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section id="cta" className="bg-black py-24 md:py-40">
      <div className="relative overflow-hidden rounded-[3rem] bg-neutral-900 border border-white/10 p-12 md:p-24 text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8"
          >
            Outsource the Work. <br />
            <span className="text-white/40">Keep the Control.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 mb-12"
          >
            Let our team handle operations while you focus on scaling your business. 
            Reliable, professional, and fully integrated with your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button variant="accent" className="px-12 py-4 text-lg">
              Book a Call
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-12 py-4 text-lg">
              Contact Directors
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
