import Link from "next/link";
import { Globe, Briefcase, Mail, ChevronRight } from "lucide-react";

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[var(--primary)] transition-all duration-300 hover:translate-x-2">
      <ChevronRight size={14} className="text-[var(--primary)]/70 group-hover:text-[var(--primary)] transition-colors flex-shrink-0" />
      <span>{children}</span>
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-[var(--btn-text)] shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)]">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">SYSGAMES</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global B2B technology company providing premium iGaming software solutions built for scalability, security, and exceptional user experiences.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Global Network" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all border border-white/10 hover:border-[var(--primary)]/50">
                <Globe size={18} />
              </Link>
              <Link href="#" aria-label="Careers" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all border border-white/10 hover:border-[var(--primary)]/50">
                <Briefcase size={18} />
              </Link>
              <Link href="#" aria-label="Contact via Email" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all border border-white/10 hover:border-[var(--primary)]/50">
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/services/white-label-igaming-software-solutions">iGaming</FooterLink>
              <FooterLink href="/services/online-casino-game-development-company">Casino Games</FooterLink>
              <FooterLink href="/services/sportsbook-software-development-company">Sports Book</FooterLink>
              <FooterLink href="/services/casino-platform-development-company">Casino Platform</FooterLink>
              <FooterLink href="/services/retail-betting-shop-software-provider">Retail Betting Shops</FooterLink>
              <FooterLink href="/services/sportsbook-kiosk-software-provider">Betting Kiosks</FooterLink>
              <FooterLink href="/services/slot-game-software-provider">Slot Games</FooterLink>
              <FooterLink href="/services/casino-game-aggregation-provider">Casino Game Aggregator</FooterLink>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6">Technology</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Platform Technology</FooterLink>
              <FooterLink href="#">API Integration</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">Scalability</FooterLink>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Global Solutions</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SYSGAMES. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
