"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
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
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] flex items-center pt-24 pb-32 lg:pt-32 lg:pb-40">
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
          <div className="space-y-6 max-w-3xl lg:pr-8 lg:min-h-[480px] flex flex-col justify-center">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {(() => {
                  const parts = heroSlides[currentIndex].headline.split('\n');
                  if (parts.length > 1) {
                    return (
                      <>
                        {parts[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-accent">
                          {parts.slice(1).map((part, index, arr) => (
                            <span key={index}>
                              {part}
                              {index < arr.length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                      </>
                    );
                  }
                  return heroSlides[currentIndex].headline;
                })()}
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
              className="pt-4 flex flex-col gap-4"
            >
              <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[var(--btn-text)] rounded-full group bg-gradient-accent shadow-[0_0_30px_rgba(var(--secondary-rgb),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] transition-all self-start">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative z-10 font-semibold">{heroSlides[currentIndex].cta}</span>
              </button>
              <p className="text-sm text-gray-400/80 font-medium tracking-wide">
                Experience the next generation of iGaming platforms.
              </p>
            </motion.div>
          </div>

          {/* Visual abstract representation */}
          <div className="flex justify-center items-center h-[350px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0 w-full scale-75 md:scale-90 lg:scale-100 origin-center">
            {/* <HeroHubVisual /> - Commented out as requested */}
            {currentIndex === 0 && <EcosystemVisual />}
            {currentIndex === 1 && <CasinoVisual />}
            {currentIndex === 2 && <PredictionVisual />}
            {currentIndex === 3 && <GlobalVisual />}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div id="sliderControls" className="absolute bottom-10 left-0 w-full z-20">
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
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-gradient-accent" : "w-2 bg-white/20"
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
    id="aviatorSimulator"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="relative w-full h-full flex items-center justify-center"
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full max-w-xl mx-auto flex items-center justify-center z-20"
    >
      <img
        src="/images/banner/2.png"
        alt="Casino Platform"
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      />
    </motion.div>
  </motion.div>
);

const EcosystemVisual = () => (
  <motion.div
    id="ecosystemSimulator"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="relative w-full h-full flex items-center justify-center"
  >
    <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
    <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full max-w-xl mx-auto flex items-center justify-center z-20"
    >
      <img
        src="/images/banner/1.png"
        alt="Ecosystem Platform"
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      />
    </motion.div>
  </motion.div>
);

const PredictionVisual = () => (
  <motion.div
    id="predictionVisual"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="relative w-full h-full flex items-center justify-center"
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full max-w-xl mx-auto flex items-center justify-center z-20"
    >
      <img
        src="/images/banner/3.png"
        alt="Prediction Market Software"
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      />
    </motion.div>
  </motion.div>
);

const GlobalVisual = () => (
  <motion.div
    id="paymentFlow"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="relative w-full h-full flex items-center justify-center"
  >
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full max-w-xl mx-auto flex items-center justify-center z-20"
    >
      <img
        src="/images/banner/4.png"
        alt="Global iGaming Technology"
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      />
    </motion.div>
  </motion.div>
);
