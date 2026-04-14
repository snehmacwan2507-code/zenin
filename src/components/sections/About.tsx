"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about" className="bg-black text-white">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="About Zenin" 
              className="w-full aspect-[4/3] object-cover grayscale"
            />
          </motion.div>
        </div>
        
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Reliable Excellence <br />
              <span className="text-white/40">In Every Workflow</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Zenin Growth Partners is a business support company that helps organizations streamline operations, reduce workload, and scale efficiently.
            </p>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              From customer service to backend execution, we act as an extension of your team — ensuring consistency, quality, and performance. Our mission is to handle the operational burden so your core team can focus on what matters most: innovation and growth.
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10M+</div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Tasks Executed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
