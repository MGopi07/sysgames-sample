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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[350px] md:min-h-[450px] lg:h-auto lg:aspect-square mt-12 lg:mt-0 flex items-center justify-center w-full"
          >
            {/* Subtle atmospheric glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative w-full max-w-[600px] lg:max-w-[750px] xl:max-w-[850px] flex items-center justify-center z-10">
              <img 
                src="/images/why_choose.png" 
                alt="Why Choose Us" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)', 
                  WebkitMaskComposite: 'source-in',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)',
                  maskComposite: 'intersect'
                }}
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
