"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { globalSolutions } from "@/data/globalSolutions";
import { Globe, FileCheck, CalendarCheck, LayoutTemplate, Gift, TrendingUp, ChevronRight } from "lucide-react";

const getCategoryIcon = (id: string) => {
  switch (id) {
    case "market-regulations": return <Globe size={24} />;
    case "certifications": return <FileCheck size={24} />;
    case "events-offering": return <CalendarCheck size={24} />;
    case "front-end": return <LayoutTemplate size={24} />;
    case "bonus-tools": return <Gift size={24} />;
    case "scalable-solutions": return <TrendingUp size={24} />;
    default: return <Globe size={24} />;
  }
};

export default function GlobalSolutions() {
  const [activeTab, setActiveTab] = useState(globalSolutions[0].id);
  const activeContent = globalSolutions.find(s => s.id === activeTab) || globalSolutions[0];

  return (
    <section className="py-24 bg-[#121212] relative" id="global-solutions">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(var(--secondary-rgb),0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Global Reach</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
          >
            Global iGaming Solutions Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent drop-shadow-[0_0_15px_rgba(var(--secondary-rgb),0.3)]">
              Compliance, Flexibility & Growth
            </span>
          </motion.h2>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Vertical Navigation */}
          <div className="col-span-4 flex flex-col gap-2 relative">
             {globalSolutions.map((solution) => {
               const isActive = activeTab === solution.id;
               return (
                 <button
                   key={solution.id}
                   onClick={() => setActiveTab(solution.id)}
                   className={`relative flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                     isActive ? "bg-white/5" : "hover:bg-white/5"
                   }`}
                 >
                   <div className={`absolute left-[-2px] w-1 h-8 rounded-r-full transition-all duration-300 ${
                     isActive ? "bg-[var(--primary)] opacity-100" : "bg-transparent opacity-0"
                   }`}></div>
                   
                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors duration-300 ${
                     isActive ? "bg-gradient-accent text-gray-900 shadow-[0_0_15px_rgba(var(--secondary-rgb),0.5)]" : "bg-white/5 text-gray-400 border border-white/10"
                   }`}>
                     {getCategoryIcon(solution.id)}
                   </div>
                   
                   <span className={`font-semibold text-lg ${isActive ? "text-white" : "text-gray-400"}`}>
                     {solution.category}
                   </span>
                 </button>
               );
             })}
          </div>

          {/* Content Panel */}
          <div className="col-span-8 bg-[#171717]/80 backdrop-blur-xl rounded-[2rem] p-10 min-h-[520px] border border-white/10 relative overflow-hidden shadow-2xl shadow-black/40 group">
             {/* Decorative blob */}
             <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] transition-all duration-700 group-hover:bg-[var(--secondary)]/20"></div>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="relative z-10 h-full flex flex-col"
               >
                 {/* Header */}
                 <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/10 relative">
                    <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                    <div className="text-[#171717] bg-gradient-accent p-4 rounded-2xl shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                       {getCategoryIcon(activeContent.id)}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white tracking-tight mb-1">{activeContent.category}</h3>
                      <p className="text-[var(--secondary)] text-sm font-semibold tracking-wider uppercase">Platform Capabilities</p>
                    </div>
                 </div>
                 
                 {/* List Items */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                   {activeContent.statements.map((statement, idx) => (
                     <motion.div 
                       initial={{ opacity: 0, y: 15 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: idx * 0.1, duration: 0.4 }}
                       key={idx} 
                       className="flex items-start gap-4 group/item bg-white/[0.02] hover:bg-white/[0.06] p-5 rounded-2xl border border-white/5 hover:border-[var(--secondary)]/30 transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(var(--secondary-rgb),0.15)] relative overflow-hidden"
                     >
                       <div className="absolute top-0 left-0 w-1 h-full bg-gradient-accent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                       <div className="mt-0.5 bg-[var(--secondary)]/10 p-1.5 rounded-lg border border-[var(--secondary)]/20 text-[var(--primary)] group-hover/item:scale-110 transition-transform flex-shrink-0">
                         <ChevronRight size={16} strokeWidth={3} />
                       </div>
                       <p className="text-gray-400 group-hover/item:text-gray-200 leading-relaxed text-[14px] lg:text-[15px] transition-colors">{statement}</p>
                     </motion.div>
                   ))}
                 </div>
                 
                 {/* Corporate Footer for Card */}
                 <div className="mt-auto pt-12">
                    <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-white/15 to-transparent mb-8"></div>
                    <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                      <span className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-40"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
                        </span>
                        Enterprise Grade
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-40" style={{animationDelay: "0.2s"}}></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--secondary)]"></span>
                        </span>
                        Globally Compliant
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-40" style={{animationDelay: "0.4s"}}></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
                        </span>
                        Secure Infrastructure
                      </span>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {globalSolutions.map((solution) => {
            const isActive = activeTab === solution.id;
            return (
              <div key={solution.id} className="glass-card rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setActiveTab(isActive ? "" : solution.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-${isActive ? '[var(--primary)]' : 'gray-400'}`}>
                      {getCategoryIcon(solution.id)}
                    </div>
                    <span className={`font-semibold text-lg ${isActive ? "text-white" : "text-gray-300"}`}>
                      {solution.category}
                    </span>
                  </div>
                  <ChevronRight size={20} className={`text-gray-400 transition-transform ${isActive ? "rotate-90" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-white/5 space-y-4">
                        {solution.statements.map((statement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)] mt-2 flex-shrink-0"></span>
                            <p className="text-gray-300 text-sm">{statement}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
