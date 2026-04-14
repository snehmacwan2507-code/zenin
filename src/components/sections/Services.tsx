"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Headphones, UserCheck, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Customer Experience Operations",
    description: "Premium multi-channel support engineering. We deploy native-level teams to slash response times and elevate CSAT scores across your brand.",
    icon: Headphones,
    metric: "99%",
    metricLabel: "CSAT Average",
    color: "from-blue-500 to-blue-400"
  },
  {
    title: "Back-Office Architecture",
    description: "From complex data engineering to executive scheduling, we optimize and automate your backend operations so your core team executes faster.",
    icon: UserCheck,
    metric: "0.01%",
    metricLabel: "Error Rate",
    color: "from-indigo-500 to-indigo-400"
  },
  {
    title: "Growth & Sales Engineering",
    description: "Data-driven outbound engines. We manage sourcing, qualification, and lead nurturing pipelines to deliver highly converting prospects directly to you.",
    icon: TrendingUp,
    metric: "3x",
    metricLabel: "Pipeline Growth",
    color: "from-purple-500 to-purple-400"
  },
];

const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="relative py-32 bg-[#04060e] overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: APPLE_EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-px bg-blue-500/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/80">Capabilities</span>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: APPLE_EASE }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] font-heading text-white max-w-xl"
            >
              Engineered <br />
              <span className="text-white/40">for scale.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: APPLE_EASE }}
              className="text-lg md:text-xl text-white/40 leading-[1.8] max-w-lg mt-2"
            >
              We don't just provide bodies. We build scalable operational engines designed to integrate seamlessly into your existing workflows and tools.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.8, ease: APPLE_EASE }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-white/[0.05] bg-white/[0.015] p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.03] hover:border-white/[0.1] relative overflow-hidden flex flex-col">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.03] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity duration-700`} />
                
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="w-5 h-5 text-white/80" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-heading tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[14px] leading-[1.8] text-white/40 mb-10 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/[0.05]">
                  <div>
                     <p className="text-2xl font-bold font-heading text-white/80">{service.metric}</p>
                     <p className="text-[11px] font-medium uppercase tracking-widest text-white/30 mt-1">{service.metricLabel}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center transition-all duration-300 group-hover:bg-white text-white/50 group-hover:text-black">
                     <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
