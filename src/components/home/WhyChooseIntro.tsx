"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Network, Shield, Zap } from "lucide-react";

export default function WhyChooseIntro() {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[var(--secondary)]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pr-0 lg:pr-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-[11px] font-bold text-[var(--primary)] tracking-widest uppercase">Enterprise Solutions</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-accent">Us</span>
              </h2>
              
              <div className="text-gray-300 text-lg leading-relaxed mb-10 space-y-6">
                <p className="text-xl text-gray-100 font-medium leading-snug">
                  As a leading B2B iGaming software development company, we provide enterprise-grade solutions tailored for operators looking to scale globally.
                </p>
                <p className="text-base text-gray-400">
                  Our powerful ecosystem delivers comprehensive tools that ensure you have total control over your platform, unparalleled security, and seamless API integrations designed for maximum growth in a highly regulated landscape.
                </p>
              </div>

              {/* Value Props Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-black/20">
                    <Shield size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">100% Ownership</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Total control over your platform and database.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-black/20">
                    <Zap size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Zero GGR Share</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Keep 100% of your revenue to maximize growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-[var(--btn-text)] rounded-full bg-gradient-accent hover:shadow-[0_0_20px_rgba(var(--secondary-rgb),0.4)] transition-all hover:-translate-y-1 group">
                Partner With Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>
          </motion.div>

          {/* Visual Illustration */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:flex items-center justify-center w-full"
            style={{ perspective: '2000px' }}
          >
            <div 
              className="relative w-full max-w-[420px] aspect-square" 
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(55deg) rotateZ(-45deg)' }}
            >
              {/* Base Dashboard Layer */}
              <motion.div 
                animate={{ translateZ: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[30px_30px_50px_rgba(0,0,0,0.9)] p-5 flex flex-col"
                style={{ transform: 'translateZ(0px)' }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 border border-[var(--primary)]/30"></div>
                    <div className="h-4 w-24 bg-white/10 rounded-md"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5"></div>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5"></div>
                  </div>
                </div>
                
                {/* Stats row */}
                <div className="flex gap-4 mb-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex-1 bg-white/5 rounded-xl border border-white/5 p-3">
                      <div className="h-2 w-12 bg-white/20 rounded-full mb-3"></div>
                      <div className="h-5 w-20 bg-white/40 rounded-md"></div>
                    </div>
                  ))}
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-[#121212] rounded-xl border border-white/5 p-4 flex flex-col gap-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 bg-white/5 rounded-lg flex items-center px-3 gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10"></div>
                      <div className="h-2 w-32 bg-white/10 rounded-full"></div>
                      <div className="ml-auto h-2 w-12 bg-white/10 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Analytics Card - Layer 2 */}
              <motion.div 
                animate={{ translateZ: [60, 75, 60] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[25%] left-[-15%] w-[65%] h-[45%] bg-[#121212]/95 backdrop-blur-xl rounded-2xl border border-[var(--primary)]/40 shadow-[20px_20px_40px_rgba(0,0,0,0.6)] p-4 flex flex-col"
                style={{ transform: 'translateZ(60px)' }}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="h-3 w-20 bg-white/20 rounded-full"></div>
                  <div className="h-4 w-12 bg-[var(--primary)]/20 rounded-md border border-[var(--primary)]/30"></div>
                </div>
                <div className="flex-1 flex items-end gap-2">
                  {[30, 50, 40, 70, 55, 85, 65].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[var(--primary)]/80 to-[var(--primary)]/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Mini Card 1 - Layer 3 */}
              <motion.div 
                animate={{ translateZ: [110, 125, 110] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[-5%] right-[-10%] w-[45%] h-[35%] bg-gradient-to-br from-[#18181b] to-[#121212] rounded-2xl border border-[var(--secondary)]/50 shadow-[15px_15px_30px_rgba(0,0,0,0.6)] p-5 flex flex-col justify-center items-center"
                style={{ transform: 'translateZ(110px)' }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/20 flex items-center justify-center mb-3 border border-[var(--secondary)]/30">
                  <svg className="w-6 h-6 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-white font-black text-xl mb-1">+245%</div>
                <div className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Revenue</div>
              </motion.div>

              {/* Floating Mini Card 2 - Layer 4 */}
              <motion.div 
                animate={{ translateZ: [80, 90, 80] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[25%] bg-[#0A0A0A]/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[15px_15px_30px_rgba(0,0,0,0.7)] p-4 flex items-center gap-4"
                style={{ transform: 'translateZ(80px)' }}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 shrink-0 flex items-center justify-center border border-white/10">
                  <Shield size={20} className="text-[var(--primary)]" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center w-full">
                     <div className="w-[50%] h-2.5 bg-white/20 rounded-full"></div>
                     <div className="w-[20%] h-2.5 bg-[var(--primary)]/60 rounded-full"></div>
                  </div>
                  <div className="w-[80%] h-1.5 bg-white/10 rounded-full"></div>
                </div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
