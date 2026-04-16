import Link from "next/link";
import BrandLogo from "@/components/brand/BrandLogo";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <BrandLogo />
            </Link>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              Zenin Growth Partners helps organizations streamline operations, elevate customer experience, and scale with disciplined execution.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-neutral-600 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#why-zenin" className="text-neutral-600 hover:text-accent transition-colors">Why Zenin</Link></li>
              <li><Link href="/#about" className="text-neutral-600 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/#testimonials" className="text-neutral-600 hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-400">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.emails.hello}`}
                  className="text-neutral-600 hover:text-accent transition-colors"
                >
                  {siteConfig.emails.hello}
                </a>
              </li>
              <li className="text-neutral-600">Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
