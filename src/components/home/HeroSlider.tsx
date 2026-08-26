"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, Crown, BarChart2, Globe, Target } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import HeroHubVisual from "./HeroHubVisual";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === heroSlides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroSlides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPlaying]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-center pt-32 pb-40">
      {/* Abstract Backgrounds based on slide visual */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--secondary)]/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[150px]"></div>
        {/* Network grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHptMjAgMjB2MjBoMjBWMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==')] opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full"
        >
          {/* Content */}
          <div className="space-y-6 max-w-3xl lg:pr-8 min-h-[450px] lg:min-h-[480px] flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-medium text-[var(--primary)] tracking-wide uppercase">{heroSlides[currentIndex].eyebrow}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start"
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight pr-4 whitespace-pre-line">
                {heroSlides[currentIndex].headline}
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start"
            >
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl">
                {heroSlides[currentIndex].paragraph}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[var(--btn-text)] rounded-full group bg-gradient-accent shadow-[0_0_30px_rgba(var(--secondary-rgb),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] transition-all">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative z-10 font-semibold">{heroSlides[currentIndex].cta}</span>
              </button>
            </motion.div>
          </div>

          {/* Visual abstract representation */}
          <div className="hidden lg:flex justify-center items-center h-[500px]">
            {currentIndex === 0 && <HeroHubVisual />}
            {currentIndex === 1 && <CasinoVisual />}
            {currentIndex === 2 && <PredictionVisual />}
            {currentIndex === 3 && <GlobalVisual />}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex gap-3 items-center">
             <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Previous slide"
             >
                <ChevronLeft size={20} />
             </button>
             <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                aria-label="Next slide"
             >
                <ChevronRight size={20} />
             </button>
             
             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 ml-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
             >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
             </button>
          </div>

          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-gradient-accent" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Unique Visual Components --- */

const CasinoVisual = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full h-full flex items-center justify-center"
    >
        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Main Card: Casino Interface */}
        <div className="w-64 h-64 glass-card rounded-2xl rotate-12 relative z-20 flex flex-col justify-center items-center shadow-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-colors">
            <div className="w-full flex gap-2 mb-4 h-32">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="flex-1 bg-[#0a0a0a] rounded-lg overflow-hidden relative shadow-inner border border-white/5">
                        <motion.div 
                            animate={{ y: ["0%", "-50%"] }} 
                            transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-[200%] flex flex-col"
                        >
                            <div className="flex-1 bg-gradient-to-b from-yellow-500/20 to-transparent m-1 rounded"></div>
                            <div className="flex-1 bg-gradient-to-b from-red-500/20 to-transparent m-1 rounded"></div>
                            <div className="flex-1 bg-gradient-to-b from-purple-500/20 to-transparent m-1 rounded"></div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="h-2 w-3/4 bg-white/20 rounded-full mb-3"></div>
            <div className="h-2 w-1/2 bg-white/10 rounded-full mt-auto"></div>
        </div>
        
        {/* Floating Card: Chip / Reward */}
        <div className="w-40 h-40 glass-card rounded-2xl -rotate-6 absolute -bottom-8 -left-8 z-30 flex flex-col items-center justify-center border border-yellow-500/30 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center p-1 shadow-[0_0_20px_rgba(234,179,8,0.4)] mb-3">
                <div className="w-full h-full rounded-full border-2 border-dashed border-yellow-800/40 flex items-center justify-center bg-yellow-400">
                    <Crown size={20} className="text-yellow-800" />
                </div>
            </div>
            <div className="h-2 w-1/2 bg-yellow-500/40 rounded-full"></div>
        </div>
    </motion.div>
);

const PredictionVisual = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full h-full flex items-center justify-center"
    >
        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Main Card: Data Dashboard */}
        <div className="w-64 h-64 glass-card rounded-2xl rotate-12 relative z-20 flex flex-col shadow-2xl p-6 border border-[var(--primary)]/20">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                    <BarChart2 size={16} className="text-[var(--primary)]" />
                </div>
                <div className="h-3 w-20 bg-white/20 rounded-full"></div>
            </div>
            
            <div className="flex gap-3 items-end h-32 w-full mt-auto">
                <div className="w-full bg-white/10 rounded-t-sm h-[40%] hover:bg-white/20 transition-colors"></div>
                <div className="w-full bg-gradient-to-t from-[var(--primary)]/40 to-[var(--primary)] rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-[#0a0a0a] text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">HIGH</div>
                </div>
                <div className="w-full bg-[var(--secondary)]/60 rounded-t-sm h-[65%]"></div>
                <div className="w-full bg-white/20 rounded-t-sm h-[50%]"></div>
            </div>
        </div>
        
        {/* Floating Card: Accuracy Stat */}
        <div className="w-40 h-40 glass-card rounded-2xl -rotate-6 absolute -bottom-8 -left-8 z-30 flex flex-col items-center justify-center border border-[var(--secondary)]/30 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-transparent rounded-2xl"></div>
            <div className="w-20 h-20 rounded-full border-4 border-[var(--secondary)]/20 border-t-[var(--secondary)] flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(var(--secondary-rgb),0.2)]">
                <span className="text-2xl font-mono font-bold text-white">98<span className="text-[var(--secondary)] text-lg">%</span></span>
            </div>
            <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
        </div>
    </motion.div>
);

const GlobalVisual = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full h-full flex items-center justify-center"
    >
        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        
        {/* Main Card: Global Radar */}
        <div className="w-64 h-64 glass-card rounded-2xl rotate-12 relative z-20 flex items-center justify-center shadow-2xl p-6 border border-white/10 hover:border-white/20 transition-colors overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="w-48 h-48 rounded-full border border-[var(--secondary)]/30 flex items-center justify-center relative">
                <div className="w-32 h-32 rounded-full border border-[var(--primary)]/20 flex items-center justify-center">
                    <Globe size={48} className="text-white/20" />
                </div>
                {/* Ping Nodes */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-[var(--primary)] rounded-full animate-ping"></div>
                <div className="absolute bottom-12 right-6 w-3 h-3 bg-[var(--secondary)] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Radar Sweep */}
                <div className="absolute inset-0 rounded-full border-r-2 border-[var(--primary)]/50 animate-[spin_3s_linear_infinite] origin-center">
                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-[var(--primary)]/10 rounded-r-full"></div>
                </div>
            </div>
        </div>
        
        {/* Floating Card: API Node */}
        <div className="w-40 h-40 glass-card rounded-2xl -rotate-6 absolute -bottom-8 -left-8 z-30 flex flex-col p-5 border border-[var(--primary)]/30 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-2xl"></div>
            
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center relative">
                    <Target size={20} className="text-[var(--primary)]" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--primary)] rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),1)]"></div>
                </div>
            </div>
            
            <div className="space-y-2 mt-auto">
                <div className="h-2 w-full bg-white/20 rounded-full"></div>
                <div className="h-2 w-2/3 bg-white/10 rounded-full"></div>
                <div className="flex gap-2">
                    <div className="h-6 w-full bg-[var(--primary)]/20 rounded border border-[var(--primary)]/30"></div>
                    <div className="h-6 w-full bg-white/5 rounded border border-white/10"></div>
                </div>
            </div>
        </div>
    </motion.div>
);
