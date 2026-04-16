"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    content: "Zenin took over our customer support within weeks. Response time improved immediately, and the team feels like an extension of our company. Their attention to detail and process maturity was exactly what we needed to scale.",
    author: "Sarah Mitchell",
    role: "CEO at TechFlow",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    content: "Managing our backend workflows used to be a nightmare until we partnered with Zenin. They brought structure and reliability to our operations, allowing us to double our output without increasing headcount.",
    author: "James Chen",
    role: "COO at Logistics Plus",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section id="testimonials" className="bg-neutral-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-accent/5 mb-6"
          >
            <Quote className="w-8 h-8 text-accent fill-accent/20" />
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight">Trusted by Industry Leaders</h2>
        </div>

        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="glass rounded-[2rem] p-10 md:p-16 border-black/5 flex flex-col items-center text-center shadow-premium"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-medium text-neutral-800 leading-relaxed italic mb-10">
              &ldquo;{testimonials[active].content}&rdquo;
            </p>

            <div className="flex flex-col items-center">
              <img 
                src={testimonials[active].avatar} 
                alt={testimonials[active].author} 
                className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-white shadow-lg"
              />
              <div className="font-bold text-lg">{testimonials[active].author}</div>
              <div className="text-neutral-500">{testimonials[active].role}</div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
