"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
        isScrolled ? "bg-[#04060e]/80 backdrop-blur-xl border-white/[0.05] py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-105 font-heading">
            Z
          </div>
          <span className="font-bold text-xl tracking-tighter text-white font-heading">
            ZENIN <span className="font-light opacity-60">GROWTH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[14px] font-medium transition-colors text-white/50 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl bg-white/[0.03] border border-white/[0.08] px-5 py-2.5 text-[13px] font-semibold text-white/90 transition duration-300 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98] font-heading hidden lg:block">
              Client Login
            </button>
            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-[13px] font-bold text-white transition duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-[0.98] font-heading">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 relative z-50 rounded-lg bg-white/[0.05] border border-white/[0.05]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
             <X className="text-white w-5 h-5" />
          ) : (
             <Menu className="text-white w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            className="absolute top-full left-0 right-0 bg-[#04060e]/95 backdrop-blur-2xl border-b border-white/[0.05] overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6 min-h-[300px]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-white/80 hover:text-white font-heading tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 mt-4 border-t border-white/[0.05] flex flex-col gap-4">
                <button className="w-full rounded-xl bg-blue-600 px-5 py-4 text-[14px] font-bold text-white transition duration-300 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.25)] font-heading">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
