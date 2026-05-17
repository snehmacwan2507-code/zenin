import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Zenin Growth Partners to discuss support for operations customer care or sales workflows.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Let Us Talk About Your Goals"
        description="Fill out the form below or contact us directly. We usually reply within two business hours."
      />

      <Contact />

      <CTA />
      <Footer />
    </main>
  );
}
