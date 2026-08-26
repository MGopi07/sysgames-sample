"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { services } from "@/data/services";
import Link from "next/link";
import { CheckCircle2, Gamepad2, Dices, Trophy, Layers, Store, MonitorUp, Coins, Network } from "lucide-react";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We create a very tall section so we can scroll through the states
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the progress for fluid animations
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 50, mass: 0.8, restDelta: 0.001 });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0A0A0A]"
      // 100vh for each service + buffer
      style={{ height: `${(services.length + 2) * 100}vh` }}
      id="solutions"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Title - fades out rapidly as we start scrolling */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.03], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.03], [0, -50]),
            scale: useTransform(smoothProgress, [0, 0.03], [1, 0.9]),
            pointerEvents: useTransform(smoothProgress, (v: any) => v < 0.03 ? "auto" : "none") as any
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center px-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(var(--secondary-rgb),0.15)]">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight">
            As a trusted <span className="text-transparent bg-clip-text bg-gradient-accent drop-shadow-[0_0_25px_rgba(var(--secondary-rgb),0.4)]">B2B iGaming</span> Software Development Company
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scroll down to explore our comprehensive suite of modular, enterprise-grade iGaming solutions.
          </p>
        </motion.div>

        {/* The Outer Circle Nodes */}
        <CircularNodes progress={smoothProgress} total={services.length} />

        {/* The Center Stage (Active Service Content) */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-20">
          {services.map((service, index) => (
            <CenterServiceCard
              key={service.id}
              service={service}
              index={index}
              total={services.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CircularNodes({ progress, total }: { progress: any, total: number }) {
  const radiusProgress = useTransform(progress, [0.03, 0.07], [0, 1]); // Spread phase

  // Outer connecting ring fades in, then fades out as services appear
  const ringOpacity = useTransform(progress, [0.03, 0.07, 0.09, 0.12], [0, 1, 1, 0]);
  const ringScale = useTransform(progress, [0.03, 0.07], [0.1, 1]);

  // Center introduction text
  const centerTextOpacity = useTransform(progress, [0.03, 0.05, 0.09, 0.12], [0, 1, 1, 0]);
  const centerTextScale = useTransform(progress, [0.03, 0.07], [0.8, 1]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">

      {/* The Ring */}
      <motion.div
        style={{
          opacity: ringOpacity,
          scale: ringScale,
          width: 'calc(min(40vw, 36vh) * 2)',
          height: 'calc(min(40vw, 36vh) * 2)',
          x: "-50%",
          y: "-50%"
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 rounded-full border-[1.5px] border-dashed border-white/15 shadow-[0_0_60px_rgba(255,255,255,0.03)]"
      />

      {/* Center Intro Text */}
      <motion.div
        style={{ opacity: centerTextOpacity, scale: centerTextScale }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full max-w-[80%] md:max-w-md pointer-events-none"
      >
        <div className="absolute inset-0 bg-[var(--primary)]/10 blur-[100px] rounded-full"></div>
        <div className="w-12 h-1.5 bg-gradient-accent rounded-full mb-6 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 leading-tight drop-shadow-2xl">
          Explore Our<br className="hidden sm:block" /> Services
        </h3>
        <p className="text-gray-400 text-sm md:text-base px-2">
          Scroll down to discover our end-to-end iGaming solutions.
        </p>
      </motion.div>

      {Array.from({ length: total }).map((_, i) => {
        const angle = (i * (360 / total)) * (Math.PI / 180);
        // Start at top (-90 degrees)
        const adjustedAngle = angle - Math.PI / 2;

        const x = useTransform(radiusProgress, r => `calc(-50% + min(40vw, 36vh) * ${r * Math.cos(adjustedAngle)})`);
        const y = useTransform(radiusProgress, r => `calc(-50% + min(40vw, 36vh) * ${r * Math.sin(adjustedAngle)})`);

        const segment = 0.85 / total;
        const start = 0.10 + i * segment;
        const end = start + segment;

        const scale = useTransform(progress, [start - 0.02, start + 0.02, end - 0.02, end + 0.02], [1, 1.4, 1.4, 1]);
        const opacity = useTransform(progress, [0.03, 0.05, 0.09, 0.12], [0, 1, 1, 0]);
        const glowOpacity = useTransform(progress, [start - 0.02, start + 0.02, end - 0.02, end + 0.02], [0, 1, 1, 0]);

        // Optional Icons as fallback if images aren't loaded
        const nodeIcons = [Gamepad2, Dices, Trophy, Layers, Store, MonitorUp, Coins, Network];
        const IconComponent = nodeIcons[i % nodeIcons.length];

        return (
          <motion.div
            key={i}
            style={{ x, y, scale, opacity }}
            className="absolute left-1/2 top-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border border-white/15 bg-gradient-to-b from-[#1a1a1a] to-[#050505] flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden group cursor-default"
          >
            {/* Background image if uploaded by user */}
            <img
              src={`/images/${services[i].id}.png`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Glowing active layer (renders on top to tint) */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 z-20 rounded-full border-[3px] border-[var(--primary)] bg-[var(--primary)]/10 shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.5)]"
            />

            {/* Fallback Icon (underneath image) */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <IconComponent className="text-[var(--primary)]/60 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)] transition-transform duration-500 group-hover:scale-110" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function CenterServiceCard({ service, index, total, progress }: any) {
  const segment = 0.85 / total;
  const start = 0.10 + index * segment;
  const fullyActive = start + segment * 0.15;
  const end = start + segment;
  const fullyExit = end + segment * 0.15;

  const isReversed = index % 2 !== 0;

  const opacity = useTransform(
    progress,
    [start - segment * 0.1, fullyActive, end - segment * 0.1, fullyExit],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [start - segment * 0.1, fullyActive, end - segment * 0.1, fullyExit],
    [100, 0, 0, -100]
  );

  const scale = useTransform(
    progress,
    [start - segment * 0.1, fullyActive, end - segment * 0.1, fullyExit],
    [0.9, 1, 1, 0.9]
  );

  const pointerEvents = useTransform(opacity, (v: any) => (v > 0.5 ? "auto" : "none")) as any;

  return (
    <motion.div
      style={{ opacity, y, scale, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-10 lg:gap-16 w-full max-w-6xl mx-auto`}>

        {/* Visual Panel */}
        <div className="w-full lg:w-5/12 perspective-1000">
          <div className={`relative rounded-3xl overflow-hidden glass-card border border-white/10 group h-[400px] lg:h-[450px] bg-[#121212]/80 backdrop-blur-xl shadow-2xl w-full max-w-[380px] lg:max-w-[400px] xl:max-w-[450px] mx-auto ${isReversed ? 'lg:ml-0' : 'lg:mr-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--primary)]/10 opacity-50"></div>

            <div className="absolute inset-0 p-8 flex flex-col">
              <div className={`text-7xl font-bold text-white/5 absolute top-4 select-none ${isReversed ? 'left-8' : 'right-8'}`}>
                0{index + 1}
              </div>

              {/* Abstract UI representing the service */}
              <div className="mt-auto h-2/3 w-full border border-white/10 rounded-xl bg-[#0A0A0A]/80 backdrop-blur-md p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
                <div className="flex gap-2 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex gap-4 h-full">
                  <div className="w-1/3 bg-white/5 rounded-lg flex flex-col gap-2 p-3">
                    <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                    <div className="h-4 w-full bg-white/5 rounded"></div>
                    <div className="h-4 w-5/6 bg-white/5 rounded"></div>
                  </div>
                  <div className="w-2/3 flex flex-col gap-4">
                    <div className="h-1/2 w-full bg-gradient-accent opacity-20 rounded-lg"></div>
                    <div className="h-1/2 w-full bg-white/5 rounded-lg flex items-end p-3 gap-2">
                      <div className="w-1/4 h-[30%] bg-white/10 rounded-t"></div>
                      <div className="w-1/4 h-[60%] bg-[var(--primary)]/40 rounded-t"></div>
                      <div className="w-1/4 h-[80%] bg-[var(--secondary)]/40 rounded-t"></div>
                      <div className="w-1/4 h-[40%] bg-white/10 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className={`w-full lg:w-7/12 flex justify-center ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}`}>
          <div className="space-y-6 lg:space-y-8 max-w-xl px-4 lg:px-0">
            <div>
              <div className="inline-block px-3 py-1.5 mb-5 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 text-xs font-bold tracking-widest text-[var(--primary)] uppercase">
                {service.category}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">{service.heading}</h3>
              <div className="w-12 h-1 bg-gradient-accent rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            <ul className="space-y-4">
              {service.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 size={20} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href={service.link || "#contact"} className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--primary)] text-[var(--btn-text)] font-bold hover:brightness-110 transition-all duration-300 group shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                {service.cta}
                <span className="ml-2 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
