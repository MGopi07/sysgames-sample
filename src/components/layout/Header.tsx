"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Home, Info, Layers, LayoutGrid, BookOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionCategories } from "@/data/solutions";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when off-canvas mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu and dropdowns on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsSolutionsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
      {/* Background layer placed separately to prevent backdrop-filter from creating a containing block bug on fixed children */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-300 pointer-events-none ${
          isScrolled ? "bg-[#0A0A0A]/80 backdrop-blur-md opacity-100" : "bg-transparent opacity-0"
        }`}
      />
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo/logo.png"
            alt="SYSGAMES"
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className={`relative text-base font-medium transition-colors py-2 group ${pathname === '/' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            Home
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link href="/about" className={`relative text-base font-medium transition-colors py-2 group ${pathname === '/about' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            About
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`relative flex items-center gap-1 text-base font-medium transition-colors py-2 group outline-none ${pathname?.startsWith('/services') ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
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
                  className="absolute top-full left-0 mt-4 w-80 bg-[#111111] rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 z-[100]"
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

          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setIsSolutionsOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={isSolutionsOpen}
              aria-controls="solutions-menu"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={`relative flex items-center gap-1 text-base font-medium transition-colors py-2 group outline-none ${pathname?.startsWith('/solutions') ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}
            >
              Solutions <ChevronDown size={14} className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname?.startsWith('/solutions') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  id="solutions-menu"
                  initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[740px] max-w-[calc(100dvw-2rem)] bg-[#111111] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 z-[100]"
                >
                  {/* Invisible bridge to prevent hover loss when moving mouse */}
                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                  <div className="grid grid-cols-3 gap-5">
                    {solutionCategories.map((category) => (
                      <div key={category.heading} className="flex flex-col gap-1.5">
                        <div className="px-3 pb-2 mb-1 border-b border-white/10 text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                          {category.heading}
                        </div>
                        {category.items.map((item) => {
                          const isActiveSolution = pathname === item.href;
                          return (
                            <Link
                              key={item.slug}
                              href={item.href}
                              aria-current={isActiveSolution ? "page" : undefined}
                              onClick={() => setIsSolutionsOpen(false)}
                              className={`group flex items-center justify-between px-3 py-2.5 text-sm rounded-xl transition-all duration-300 relative overflow-hidden ${isActiveSolution ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent transition-opacity duration-300 ${isActiveSolution ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                              <span className={`relative z-10 ${isActiveSolution ? 'font-bold' : ''}`}>{item.name}</span>
                              <ChevronRight size={15} className={`text-[var(--primary)] shrink-0 transition-all duration-300 relative z-10 ${isActiveSolution ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                            </Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className={`relative text-base font-medium transition-colors py-2 group ${pathname === '/blog' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
            Blog
            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[var(--primary)] transition-transform duration-300 origin-left ${pathname === '/blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>

          <Link href="/contact" className={`relative text-base font-medium transition-colors py-2 group ${pathname === '/contact' ? 'text-[var(--primary)]' : 'text-white hover:text-[var(--primary)]'}`}>
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

        {/* Mobile Toggle Button */}
        <button
          id="mobileMenuBtn"
          aria-label="Open mobile menu"
          className="lg:hidden relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[var(--primary)]/50 text-white transition-all active:scale-95 flex items-center justify-center focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Off-Canvas Mobile Menu Drawer rendered directly to document.body via Portal to prevent any parent backdrop-filter containing block truncation */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-[9999] lg:hidden h-[100dvh] w-screen overflow-hidden">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Offcanvas Drawer Content */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                  className="absolute top-0 right-0 h-[100dvh] w-[85%] max-w-sm sm:max-w-md bg-[#0D0D11] border-l border-white/10 shadow-2xl flex flex-col justify-between z-10"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0A0A0E] shrink-0">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                      <Image
                        src="/images/logo/logo.png"
                        alt="SYSGAMES"
                        width={150}
                        height={34}
                        className="h-8 w-auto object-contain"
                      />
                    </Link>
                    <button
                      aria-label="Close menu"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all active:scale-95"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Drawer Navigation Links */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                    {/* Home */}
                    <Link
                      href="/"
                      className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all ${pathname === '/' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Home size={20} className={pathname === '/' ? 'text-[var(--primary)]' : 'text-gray-400'} />
                      <span className="text-base tracking-wide">Home</span>
                    </Link>

                    {/* About */}
                    <Link
                      href="/about"
                      className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all ${pathname === '/about' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Info size={20} className={pathname === '/about' ? 'text-[var(--primary)]' : 'text-gray-400'} />
                      <span className="text-base tracking-wide">About</span>
                    </Link>

                    {/* Services Accordion */}
                    <div className="pt-1">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all ${pathname?.startsWith('/services') ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        <div className="flex items-center gap-3.5">
                          <Layers size={20} className={pathname?.startsWith('/services') ? 'text-[var(--primary)]' : 'text-gray-400'} />
                          <span className="text-base tracking-wide">Services</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-[var(--primary)]' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 pr-1 py-1"
                          >
                            <div className="flex flex-col gap-1 border-l-2 border-white/10 pl-3 my-1">
                              {servicesList.map((item, idx) => {
                                const isActive = pathname === item.href;
                                return (
                                  <Link
                                    key={idx}
                                    href={item.href}
                                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${isActive ? 'text-[var(--primary)] font-semibold bg-[var(--primary)]/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <span>{item.name}</span>
                                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(var(--primary-rgb),1)]"></div>}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Solutions Accordion */}
                    <div className="pt-1">
                      <button
                        type="button"
                        aria-expanded={isMobileSolutionsOpen}
                        aria-controls="mobile-solutions-menu"
                        onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all ${pathname?.startsWith('/solutions') ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        <div className="flex items-center gap-3.5">
                          <LayoutGrid size={20} className={pathname?.startsWith('/solutions') ? 'text-[var(--primary)]' : 'text-gray-400'} />
                          <span className="text-base tracking-wide">Solutions</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180 text-[var(--primary)]' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileSolutionsOpen && (
                          <motion.div
                            id="mobile-solutions-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden pl-4 pr-1 py-1"
                          >
                            <div className="flex flex-col gap-3 border-l-2 border-white/10 pl-3 my-1">
                              {solutionCategories.map((category) => (
                                <div key={category.heading} className="space-y-1">
                                  <div className="px-3 pt-1 text-[11px] font-bold uppercase tracking-widest text-[var(--primary)]">
                                    {category.heading}
                                  </div>
                                  {category.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                      <Link
                                        key={item.slug}
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${isActive ? 'text-[var(--primary)] font-semibold bg-[var(--primary)]/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <span>{item.name}</span>
                                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(var(--primary-rgb),1)]"></div>}
                                      </Link>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Blog */}
                    <Link
                      href="/blog"
                      className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all ${pathname === '/blog' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <BookOpen size={20} className={pathname === '/blog' ? 'text-[var(--primary)]' : 'text-gray-400'} />
                      <span className="text-base tracking-wide">Blog</span>
                    </Link>

                    {/* Contact Us */}
                    <Link
                      href="/contact"
                      className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all ${pathname === '/contact' ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold border border-[var(--primary)]/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Mail size={20} className={pathname === '/contact' ? 'text-[var(--primary)]' : 'text-gray-400'} />
                      <span className="text-base tracking-wide">Contact Us</span>
                    </Link>
                  </div>

                  {/* Drawer Footer */}
                  <div className="p-6 border-t border-white/10 bg-[#0A0A0E] space-y-4 shrink-0">
                    <Link
                      href="#contact"
                      className="flex items-center justify-center w-full py-3.5 bg-gradient-accent text-[var(--btn-text)] font-bold rounded-xl shadow-[0_0_20px_rgba(var(--secondary-rgb),0.3)] active:scale-95 transition-all uppercase tracking-wider text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Let's Connect
                    </Link>
                    <p className="text-xs text-center text-gray-500">
                      &copy; {new Date().getFullYear()} SYSGAMES. All rights reserved.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
