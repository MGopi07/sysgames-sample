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
            className="relative h-[350px] md:h-[450px] lg:h-[600px] mt-12 lg:mt-0 flex items-center justify-center w-full scale-[0.65] md:scale-75 lg:scale-[0.85] origin-center"
            style={{ perspective: '2000px' }}
          >
            <div 
              className="relative w-full max-w-[420px] aspect-square" 
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(50deg) rotateZ(-35deg)' }}
            >
              {/* Base Dashboard Layer */}
              <motion.div 
                animate={{ translateZ: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-3xl rounded-2xl border-t border-l border-white/15 shadow-[30px_30px_60px_rgba(0,0,0,0.9)] flex overflow-hidden"
                style={{ transform: 'translateZ(0px)' }}
              >
                {/* Sidebar */}
                <div className="w-[25%] h-full bg-white/[0.02] border-r border-white/5 p-4 flex flex-col gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`h-2 rounded-full ${i === 2 ? 'w-full bg-[var(--primary)]' : 'w-[70%] bg-white/20'}`}></div>
                  ))}
                  <div className="mt-auto h-8 w-8 rounded-full bg-white/10"></div>
                </div>

                {/* Main Content */}
                <div className="flex-1 h-full p-5 flex flex-col">
                  {/* Top Nav */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-white/20 rounded-md"></div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                    </div>
                  </div>
                  
                  {/* Hero Stat Chart */}
                  <div className="w-full h-[40%] bg-white/5 rounded-xl border border-white/5 p-4 mb-4 flex items-end justify-between gap-2 relative overflow-hidden">
                    <div className="absolute top-4 left-4 h-3 w-20 bg-white/30 rounded-md"></div>
                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-[var(--primary)]/60 to-[var(--primary)] rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>

                  {/* Bottom Grid */}
                  <div className="flex gap-4 flex-1">
                    <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-center items-center">
                       <div className="w-12 h-12 rounded-full border-[4px] border-[var(--secondary)]/30 border-t-[var(--secondary)] flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                       </div>
                    </div>
                    <div className="flex-[1.5] bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2 justify-center">
                       <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full w-[70%] bg-[var(--primary)] rounded-full"></div></div>
                       <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full w-[40%] bg-white/40 rounded-full"></div></div>
                       <div className="h-2 w-full bg-white/10 rounded-full"><div className="h-full w-[85%] bg-[var(--secondary)] rounded-full"></div></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Panel 1 */}
              <motion.div 
                animate={{ translateZ: [50, 70, 50] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[10%] left-[-20%] w-[50%] h-[40%] bg-white/5 backdrop-blur-2xl rounded-2xl border-t border-l border-white/20 shadow-[20px_20px_40px_rgba(0,0,0,0.6)] p-5 flex flex-col"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center mb-auto">
                  <Shield size={20} className="text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl tracking-tight mb-1">99.9%</div>
                  <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Uptime SLA</div>
                </div>
              </motion.div>

              {/* Floating Glass Panel 2 */}
              <motion.div 
                animate={{ translateZ: [90, 110, 90] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[35%] bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] rounded-2xl border-t border-l border-white/30 shadow-[20px_20px_50px_rgba(var(--primary-rgb),0.4)] p-5 flex flex-col justify-between"
                style={{ transform: 'translateZ(90px)' }}
              >
                <div className="flex justify-between items-start">
                  <div className="h-4 w-16 bg-white/30 rounded-md"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_#fff]"></div>
                </div>
                <div>
                  <div className="text-white font-black text-3xl mb-1 drop-shadow-md">€2.4M</div>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                    <div className="w-[85%] h-full bg-white rounded-full"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
