"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { Mail, Clock, User } from "lucide-react";
import type { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      name ? `New inquiry from ${name}` : "New inquiry from website"
    );

    const body = encodeURIComponent(
      [
        `Name: ${name || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        "",
        "Message:",
        message || "Not provided",
      ].join("\n")
    );

    window.location.href = `mailto:${siteConfig.emails.hello}?subject=${subject}&body=${body}`;
  };
  return (
    <Section id="contact" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Col: Contact Info */}
        <div className="flex-1">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Start Your <br />
              <span className="text-accent">Growth Journey</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-12 max-w-md">
              Ready to streamline your operations? Reach out to our directors today for a personalized consultation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Reach out to our directors on:</div>
                  {siteConfig.emails.directors.map((email) => (
                    <p key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-neutral-600 hover:text-accent transition-colors"
                      >
                        {email}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Contact us to onboard:</div>
                  <p>
                    <a
                      href={`mailto:${siteConfig.emails.hello}`}
                      className="text-neutral-600 hover:text-accent transition-colors"
                    >
                      {siteConfig.emails.hello}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">Working Hours</div>
                  <p className="text-neutral-600">24/7 Operational Support</p>
                  <p className="text-neutral-500 text-sm">Main Office: 9AM - 6PM (EST)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Form */}
        <div className="flex-1">
          <div className="glass animate-fade-up animate-delay-2 rounded-[2rem] border-black/5 p-8 shadow-premium md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-neutral-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full bg-neutral-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-400">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help your business grow?"
                  className="w-full bg-neutral-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-4 text-lg">
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
