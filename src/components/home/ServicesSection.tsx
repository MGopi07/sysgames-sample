"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { services } from "@/data/services";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // We create a very tall section so we can scroll through the stacked items
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
      // 100vh for each service + a bit of buffer
      style={{ height: `${(services.length + 1) * 100}vh` }}
      id="solutions"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Title - fades out as we start scrolling */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.05], [0, -50]),
            scale: useTransform(smoothProgress, [0, 0.05], [1, 0.9])
          }}
          className="absolute top-24 left-0 right-0 z-50 text-center px-6 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/30 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(var(--secondary-rgb),0.15)]">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
            As a trusted <span className="text-transparent bg-clip-text bg-gradient-accent drop-shadow-[0_0_15px_rgba(var(--secondary-rgb),0.3)]">B2B iGaming</span> Software Development Company
          </h2>
        </motion.div>

        {/* Stack Container */}
        <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                total={services.length}
                progress={smoothProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, total, progress }: any) {
  // We divide the scroll progress into segments for each card.
  // Note: we leave the first 5% for the title fade out.
  const usableProgress = 0.95;
  const startProgress = 0.05;

  const segment = usableProgress / total;
  const start = startProgress + index * segment;       // When this card starts its active phase
  const fullyActive = start + segment * 0.2;         // When this card is fully in place
  const end = startProgress + (index + 1) * segment;   // When this card begins to exit
  const fullyExit = end + segment * 0.2;             // When this card is completely gone

  const isEven = index % 2 === 0;

  // Determine stacked properties based on index
  const stackedY = index * 15 + 290; // pushed down slightly less to find the perfect middle ground
  const stackedScale = 1 - index * 0.04;
  const stackedRotate = (index % 2 === 0 ? 1 : -1) * (index * 2);

  // We want the entire deck to coalesce and follow the active card
  const coalescedActive = startProgress + segment * 0.2; // The moment Card 0 is fully active

  const visualXInput = [0, startProgress];
  const visualXOutput = ["0%", "0%"];

  // Follow the stack's global movement until this card becomes active
  for (let i = 0; i <= index; i++) {
    const isThisCardEven = i % 2 === 0;
    const targetX = isThisCardEven ? "-50%" : "50%";

    const segmentStart = startProgress + i * segment;
    const segmentActive = segmentStart + segment * 0.2;

    visualXInput.push(segmentStart, segmentActive);
    visualXOutput.push(
      i === 0 ? "0%" : (isThisCardEven ? "50%" : "-50%"),
      targetX
    );
  }

  // After this card is active, it stays at its targetX while exiting
  visualXInput.push(end, fullyExit);
  visualXOutput.push(isEven ? "-50%" : "50%", isEven ? "-50%" : "50%");

  const visualX = useTransform(progress, visualXInput, visualXOutput);

  // All cards coalesce into a single neat pile at y=0, scale=1, rotate=0 when scrolling starts
  // Then they stay there until it's their turn to exit (progress = end)
  const visualY = useTransform(
    progress,
    [0, coalescedActive, end, fullyExit],
    [stackedY, 0, 0, -1000]
  );

  const visualScale = useTransform(
    progress,
    [0, coalescedActive, end, fullyExit],
    [stackedScale, 1, 1, 0.8]
  );

  const visualRotate = useTransform(
    progress,
    [0, coalescedActive, end, fullyExit],
    [stackedRotate, 0, 0, 0]
  );

  // Opacity stays 1 until exiting
  const visualOpacity = useTransform(
    progress,
    [0, coalescedActive, end, fullyExit],
    [1, 1, 1, 0]
  );

  // CONTENT PANEL (The Text)
  // 1. Initially invisible and offset
  // 2. Fades in and slides to center side when active
  // 3. Exits up when done

  const contentX = useTransform(
    progress,
    [start, fullyActive, end, fullyExit],
    [isEven ? "20%" : "-20%", "0%", "0%", "0%"]
  );

  const contentY = useTransform(
    progress,
    [start, fullyActive, end, fullyExit],
    [50, 0, 0, -1000]
  );

  const contentOpacity = useTransform(
    progress,
    [start, fullyActive, end - segment * 0.1, end],
    [0, 1, 1, 0]
  );

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: total - index }}
    >
      <div className="container mx-auto px-6 lg:px-12 w-full flex items-center relative h-full">

        {/* Visual Panel Wrapper */}
        <motion.div
          style={{
            x: visualX,
            y: visualY,
            scale: visualScale,
            rotateZ: visualRotate,
            opacity: visualOpacity,
          }}
          className={`absolute w-full lg:w-1/2 left-1/2 -ml-[50%] lg:-ml-[25%] pointer-events-auto flex justify-center items-center`}
        >
          <div className="w-full max-w-[400px] lg:max-w-[450px] px-4 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 group h-[400px] lg:h-[450px] bg-[#121212]">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--primary)]/10 opacity-50"></div>

              <div className="absolute inset-0 p-8 flex flex-col">
                <div className="text-7xl font-bold text-white/5 absolute top-4 right-8 select-none">
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
        </motion.div>

        {/* Content Panel */}
        <motion.div
          style={{
            x: contentX,
            y: contentY,
            opacity: contentOpacity,
          }}
          className={`absolute w-full lg:w-1/2 ${isEven ? 'right-0 lg:pr-12' : 'left-0 lg:pl-12'} pointer-events-auto`}
        >
          <div className="space-y-6 lg:space-y-8 bg-[#0A0A0A]/80 backdrop-blur-sm p-6 lg:p-0 rounded-2xl">
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
              <Link href={service.link || "#contact"} className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium hover:bg-[var(--primary)] hover:text-black transition-all duration-300 group">
                {service.cta}
                <span className="ml-2 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
