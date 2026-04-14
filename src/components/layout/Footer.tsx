import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center font-bold text-white text-xl">Z</div>
              <span className="font-bold text-xl tracking-tighter">
                ZENIN <span className="font-light opacity-60">GROWTH</span>
              </span>
            </Link>
            <p className="text-neutral-500 max-w-sm leading-relaxed">
              Zenin Growth Partners is a business support company helping organizations streamline operations and scale efficiently. Your partner in growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-neutral-600 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#why-zenin" className="text-neutral-600 hover:text-accent transition-colors">Why Zenin</Link></li>
              <li><Link href="#about" className="text-neutral-600 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="text-neutral-600 hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-neutral-400">Contact</h4>
            <ul className="space-y-4">
              <li className="text-neutral-600">Hello@zeningrowthpartners.com</li>
              <li className="text-neutral-600">Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-400">
          <p>© 2026 Zenin Growth Partners. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
