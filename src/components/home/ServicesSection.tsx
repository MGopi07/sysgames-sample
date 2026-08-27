"use client";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Gamepad2, Dices, Trophy, Layers, Store, MonitorUp, Coins, Network } from "lucide-react";

const nodeIcons = [Gamepad2, Dices, Trophy, Layers, Store, MonitorUp, Coins, Network];

export default function ServicesSection() {
  return (
    <section className="pt-24 lg:pt-32 pb-24 lg:pb-32 bg-[#0A0A0A] relative" id="solutions">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Our Expertise</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Trusted <span className="text-transparent bg-clip-text bg-gradient-accent drop-shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)]">B2B iGaming</span> Software Provider
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Scroll down to explore our comprehensive suite of modular, enterprise-grade iGaming solutions.
          </motion.p>
        </div>

        {/* Stacked Cards Container */}
        {/* Massive gap added to significantly slow down the pacing so it doesn't transition too quickly. Disabled on mobile for normal scrolling. */}
        <div className="flex flex-col gap-16 lg:gap-[60vh] xl:gap-[80vh]">
          {services.map((service, index) => {
            const Icon = nodeIcons[index % nodeIcons.length];
            const isReversed = index % 2 !== 0;
            
            return (
              <div 
                key={service.id}
                className="relative lg:sticky transition-all duration-500 w-full"
                // Reduced top offset to 90px to save vertical space
                style={{ 
                  top: `90px`,
                  zIndex: index + 1
                }}
              >
                {/* The Card - Extremely compact padding and spacing to naturally fit small screens */}
                {/* Fixed heights guarantee no peeking. Sizes optimized for 1024px wrapping. */}
                <div className="w-full bg-[#111111] border-t-2 border-t-[var(--primary)]/20 border-x border-b border-white/5 rounded-3xl p-5 xl:p-8 flex flex-col group shadow-[0_-20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden h-auto lg:h-[560px] xl:h-[620px]">
                  
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className={`relative z-10 flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 xl:gap-8 items-stretch w-full h-full`}>
                    
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                      <div className="flex items-center gap-3 xl:gap-4 mb-4 xl:mb-6">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] group-hover:scale-110 transition-transform duration-500 shrink-0">
                          <Icon size={24} className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-[10px] xl:text-xs font-bold tracking-widest text-[var(--primary)] uppercase mb-1">
                            0{index + 1} // {service.category}
                          </div>
                          <h3 className="text-xl lg:text-2xl xl:text-4xl font-black text-white leading-tight">{service.heading}</h3>
                        </div>
                      </div>
                      
                      <div className="w-8 xl:w-10 h-1 bg-gradient-accent rounded-full mb-4 xl:mb-6"></div>
                      
                      <p className="text-gray-400 text-sm xl:text-base leading-snug xl:leading-relaxed mb-5 xl:mb-8">
                        {service.description}
                      </p>

                      <ul className="space-y-2.5 xl:space-y-4 mb-5 xl:mb-6">
                        {service.features.map((f: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-xs xl:text-sm text-gray-300">
                            <div className="mt-0.5 flex-shrink-0">
                              <CheckCircle2 size={16} className="text-[var(--primary)] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)] xl:w-[20px] xl:h-[20px]" />
                            </div>
                            <span className="leading-snug font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href={service.link || "#contact"} className="inline-flex items-center justify-center px-6 py-3 xl:px-8 xl:py-4 bg-white/5 border border-white/10 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 rounded-full font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] group/btn w-max mt-auto text-sm xl:text-base">
                        {service.cta || "Explore Module"}
                        <ChevronRight size={16} className="ml-2 xl:w-[18px] xl:h-[18px] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Image Content - Now visible on mobile! */}
                    <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-auto relative overflow-hidden rounded-xl bg-[#050505] border border-white/5 shadow-2xl shrink-0">
                      <img 
                        src={`/images/${service.id}.png`} 
                        alt={service.heading}
                        className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 hue-rotate-[250deg] saturate-[1.2]"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Shadow overlay only at the very edges to blend with the card */}
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
