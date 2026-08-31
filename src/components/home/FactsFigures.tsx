"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { statistics } from "@/data/statistics";
import { Server, Users, Award, Globe, Briefcase, Blocks } from "lucide-react";

const getIcon = (label: string, className: string = "text-[var(--primary)]") => {
  if (label.includes("Platforms")) return <Server size={32} className={className} />;
  if (label.includes("Clients")) return <Users size={32} className={className} />;
  if (label.includes("Experience")) return <Award size={32} className={className} />;
  if (label.includes("Countries")) return <Globe size={32} className={className} />;
  if (label.includes("Team")) return <Briefcase size={32} className={className} />;
  if (label.includes("Games")) return <Blocks size={32} className={className} />;
  return <Award size={32} className={className} />;
};

const Counter = ({ value, label }: { value: string, label: string }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const end = numericValue;
      const duration = 2000;
      let startTimestamp: number | null = null;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Ease-out easing function so it slows down near the end
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeOutProgress * end));
        
        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);

      return () => window.cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="py-4 lg:py-6 px-4 relative group flex flex-col items-center justify-center text-center h-full cursor-default">
      {/* Floating Icon */}
      <div className="mb-6 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 relative z-10">
        {getIcon(label, "text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors duration-500 drop-shadow-[0_0_0_rgba(var(--primary-rgb),0)] group-hover:drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]")}
      </div>
      
      <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
        <h4 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">
          {count}<span className="text-[var(--primary)]">{suffix}</span>
        </h4>
        <p className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-300 transition-colors duration-500">{label}</p>
      </div>
    </div>
  );
};

export default function FactsFigures() {
  return (
    <section className="py-12 lg:py-16 bg-[#0A0A0A] relative border-y border-white/5 overflow-hidden">
      {/* Abstract background graphics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHptMjAgMjB2MjBoMjBWMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==')] opacity-40 bg-fixed"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--secondary)] tracking-wide uppercase">Track Record</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Powering Global Scale
          </motion.h2>
        </div>

        <div id="statsCounter" className="relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-transparent relative ${index !== statistics.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/4 lg:after:h-1/2 lg:after:w-[1px] lg:after:bg-white/10" : ""}`}
              >
                <Counter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
