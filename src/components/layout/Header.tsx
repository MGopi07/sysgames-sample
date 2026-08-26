"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Home, Info, Layers, BookOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    { name: "White Label iGaming", href: "/services/white-label-igaming-software-solutions" },
    { name: "Casino Games", href: "/services/online-casino-game-development-company" },
    { name: "Sportsbook", href: "/services/sportsbook-software-development-company" },
    { name: "Casino Platform", href: "/services/casino-platform-development-company" },
    { name: "Retail Betting Shops", href: "/services/retail-betting-shop-software-provider" },
    { name: "Betting Kiosks", href: "/services/sportsbook-kiosk-software-provider" },
    { name: "Slot Games", href: "/services/slot-game-software-provider" },
    { name: "Game Aggregator", href: "/services/casino-game-aggregation-provider" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-[var(--btn-text)] shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)]">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-white transition-all uppercase">SYSGAMES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`relative text-sm font-medium transition-colors py-2 group ${pathname === '/' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            Home
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link href="/about" className={`relative text-sm font-medium transition-colors py-2 group ${pathname === '/about' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            About
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`relative flex items-center gap-1 text-sm font-medium transition-colors py-2 group outline-none ${pathname?.startsWith('/services') ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
              Services <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname?.startsWith('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-4 w-80 bg-[#0A0A0A]/95 backdrop-blur-xl rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                >
                  {/* Invisible bridge to prevent hover loss when moving mouse */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                  <div className="flex flex-col gap-1">
                    {servicesList.map((item, idx) => {
                      const isActiveService = pathname === item.href;
                      return (
                      <Link key={idx} href={item.href} onClick={() => setIsServicesOpen(false)} className={`group flex items-center justify-between px-4 py-3 text-sm rounded-xl transition-all duration-300 relative overflow-hidden ${isActiveService ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent transition-opacity duration-300 ${isActiveService ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                        <span className={`relative z-10 ${isActiveService ? 'font-bold' : ''}`}>{item.name}</span>
                        <ChevronRight size={16} className={`text-[var(--primary)] transition-all duration-300 relative z-10 ${isActiveService ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                      </Link>
                    )})}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className={`relative text-sm font-medium transition-colors py-2 group ${pathname === '/blog' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            Blog
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link href="/contact" className={`relative text-sm font-medium transition-colors py-2 group ${pathname === '/contact' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            Contact Us
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link href="#contact" className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white rounded-full group bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 transition-all hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-accent rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative z-10 text-sm group-hover:text-gray-900 transition-colors">Let's connect</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button aria-label="Toggle mobile menu" className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-white/10 overflow-y-auto pb-32 z-50"
          >
            <div className="flex flex-col p-6">
              {/* Home */}
              <Link href="/" className={`flex items-center gap-4 py-4 border-b border-white/5 transition-colors ${pathname === '/' ? 'text-[var(--primary)]' : 'text-gray-300 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <Home size={22} className={pathname === '/' ? 'text-[var(--primary)]' : 'text-gray-500'} />
                <span className="text-xl font-medium tracking-wide">Home</span>
              </Link>

              {/* About */}
              <Link href="/about" className={`flex items-center gap-4 py-4 border-b border-white/5 transition-colors ${pathname === '/about' ? 'text-[var(--primary)]' : 'text-gray-300 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <Info size={22} className={pathname === '/about' ? 'text-[var(--primary)]' : 'text-gray-500'} />
                <span className="text-xl font-medium tracking-wide">About</span>
              </Link>

              {/* Services Dropdown */}
              <div className="py-4 border-b border-white/5">
                <div className={`flex items-center gap-4 mb-4 cursor-default ${pathname?.startsWith('/services') ? 'text-[var(--primary)]' : 'text-gray-300'}`}>
                  <Layers size={22} className={pathname?.startsWith('/services') ? 'text-[var(--primary)]' : 'text-gray-500'} />
                  <span className="text-xl font-medium tracking-wide">Services</span>
                </div>
                <div className="flex flex-col pl-10 gap-3 border-l-2 border-white/10 ml-3 relative">
                  {pathname?.startsWith('/services') && (
                    <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] to-transparent"></div>
                  )}
                  {servicesList.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={idx} href={item.href} className={`flex items-center justify-between py-2 transition-colors ${isActive ? 'text-[var(--primary)] font-bold' : 'text-gray-400 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-base">{item.name}</span>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(var(--primary-rgb),1)] mr-2"></div>}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Blog */}
              <Link href="/blog" className={`flex items-center gap-4 py-4 border-b border-white/5 transition-colors ${pathname === '/blog' ? 'text-[var(--primary)]' : 'text-gray-300 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <BookOpen size={22} className={pathname === '/blog' ? 'text-[var(--primary)]' : 'text-gray-500'} />
                <span className="text-xl font-medium tracking-wide">Blog</span>
              </Link>

              {/* Contact Us */}
              <Link href="/contact" className={`flex items-center gap-4 py-4 border-b border-white/5 transition-colors ${pathname === '/contact' ? 'text-[var(--primary)]' : 'text-gray-300 hover:text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                <Mail size={22} className={pathname === '/contact' ? 'text-[var(--primary)]' : 'text-gray-500'} />
                <span className="text-xl font-medium tracking-wide">Contact Us</span>
              </Link>

              {/* CTA Button */}
              <div className="pt-8">
                <Link href="#contact" className="flex items-center justify-center w-full py-4 bg-[var(--primary)] text-[#0A0A0A] font-black rounded-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] active:scale-95 transition-all uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
