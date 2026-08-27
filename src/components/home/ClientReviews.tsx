"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ClientReviews() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setPage([page + 1, 1]);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(timer);
  }, [page, isPaused]);
  
  const next = () => {
    setPage([page + 1, 1]);
  };
  
  const prev = () => {
    setPage([page - 1, -1]);
  };

  const currentIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const visibleItems = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -left-40 top-20 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              iGaming Software Development Company – Client Reviews
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full"></div>
          </div>
          
          <div className="flex gap-4">
             <button onClick={prev} aria-label="Previous Review" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[var(--primary)] transition-all">
               <ChevronLeft size={20} />
             </button>
             <button onClick={next} aria-label="Next Review" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[var(--primary)] transition-all">
               <ChevronRight size={20} />
             </button>
          </div>
        </div>

        <div 
          className="flex flex-nowrap gap-6 overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {visibleItems.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                layout
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 200 : -200,
                    opacity: 0,
                    scale: 0.9
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1
                  },
                  exit: (direction: number) => ({
                    x: direction < 0 ? 200 : -200,
                    opacity: 0,
                    scale: 0.9
                  })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 25,
                  opacity: { duration: 0.2 }
                }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] flex-shrink-0 glass-card rounded-2xl p-8 flex flex-col min-h-[300px] border border-white/10 hover:border-white/20 transition-colors relative"
              >
                <Quote size={40} className="text-white/5 absolute top-6 right-6" />
                
                <div className="inline-flex px-3 py-1 rounded-full bg-white/5 text-white text-xs font-semibold mb-6 border border-white/10 uppercase tracking-wide self-start">
                  {testimonial.service}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                   <div className="w-12 h-12 rounded-full bg-gradient-accent p-[2px]">
                      <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center text-white font-bold">
                         {testimonial.client.charAt(0)}
                      </div>
                   </div>
                   <div>
                      <h4 className="font-bold text-white">{testimonial.client}</h4>
                      <p className="text-sm text-gray-400">Verified Client</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
