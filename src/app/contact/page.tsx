import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Zenin Growth Partners. Whether you're looking to scale your support, sales, or operations, we're here to help.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Let's Talk Growth." 
        description="Fill out the form below or reach out directly. Our team typically responds within 2 business hours."
      />

      <Contact />

      <CTA />
      <Footer />
    </main>
  );
}
