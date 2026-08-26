"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Shield, Globe } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--secondary)]/20 rounded-full blur-[150px]"></div>
        
        {/* Technology grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-8 lg:px-14 lg:py-16 text-center relative overflow-hidden shadow-2xl">
          {/* Internal glowing elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)]/30 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--secondary)]/30 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Ready to Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">Global iGaming Empire?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Partner with the leading iGaming software development company and launch a highly scalable, secure, and fully customized platform today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="#contact" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-[var(--btn-text)] rounded-full group bg-gradient-accent shadow-[0_0_30px_rgba(var(--secondary-rgb),0.4)] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.6)] transition-all w-full sm:w-auto text-base">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative z-10 flex items-center gap-2">Contact Us <ArrowRight size={20} /></span>
              </Link>
            </motion.div>

            {/* Floating UI Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="pt-5 flex flex-wrap justify-center gap-6 lg:gap-12 opacity-70"
            >
              <div className="flex items-center gap-2 text-white/80 font-medium">
                 <Server size={20} className="text-[var(--primary)]" /> 100% Platform Ownership
              </div>
              <div className="flex items-center gap-2 text-white/80 font-medium">
                 <Shield size={20} className="text-[var(--secondary)]" /> Zero GGR Share
              </div>
              <div className="flex items-center gap-2 text-white/80 font-medium">
                 <Globe size={20} className="text-[var(--primary)]" /> Global Reach
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
