"use client";
import { motion } from "framer-motion";
import { Gamepad2, Trophy, Coins, ShieldCheck, Store, MonitorPlay, Code, Gift } from "lucide-react";

export default function HeroHubVisual() {
  const rings = [220, 320, 420]; // Diameters of the rings

  // radius = diameter / 2
  const nodes = [
    // Outer Ring (Radius 210)
    { label: "Sports Betting Solutions", icon: Trophy, color: "#10B981", radius: 210, angle: -90, labelAlign: "bottom" },
    { label: "Online & Retail Lottery", icon: Coins, color: "#F59E0B", radius: 210, angle: 30, labelAlign: "bottom" },
    { label: "Sweepstakes Casino", icon: Gift, color: "#38BDF8", radius: 210, angle: 150, labelAlign: "bottom" },
    
    // Middle Ring (Radius 160)
    { label: "Provably Fair Games", icon: ShieldCheck, color: "#3B82F6", radius: 160, angle: -30, labelAlign: "right" },
    { label: "Retail Solutions", icon: Store, color: "#8B5CF6", radius: 160, angle: 90, labelAlign: "bottom" },
    { label: "Slot Development", icon: Gamepad2, color: "#6366F1", radius: 160, angle: -150, labelAlign: "left" },

    // Inner Ring (Radius 110)
    { label: "Casino Game Dev", icon: Code, color: "#EF4444", radius: 110, angle: 180, labelAlign: "left" },
    { label: "Online/Live Casino", icon: MonitorPlay, color: "#EC4899", radius: 110, angle: 0, labelAlign: "right" },
  ];

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center lg:translate-x-2 xl:translate-x-6">
      
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {rings.map((size, i) => (
          <div 
            key={i}
            className="absolute rounded-full border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
            style={{ width: size, height: size }}
          ></div>
        ))}
      </div>

      {/* Center Hub */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-20 flex flex-col items-center justify-center w-36 h-36 rounded-full border-[3px] border-[var(--secondary)] bg-[#0A0A0A] shadow-[0_0_50px_rgba(var(--secondary-rgb),0.3)] cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[var(--secondary)]/20 to-transparent"></div>
        
        {/* Pulsing inner ring */}
        <div className="absolute -inset-2 border border-[var(--secondary)]/40 rounded-full animate-pulse"></div>
        
        {/* Visibly rotating dashed ring */}
        <div className="absolute -inset-5 border-2 border-dashed border-[var(--primary)]/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
        
        {/* Visibly counter-rotating partial ring */}
        <div className="absolute -inset-8 border-t-2 border-l-2 border-[var(--secondary)]/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
        
        <Gamepad2 size={36} className="text-[var(--primary)] mb-1.5 relative z-10 group-hover:scale-110 transition-transform" />
        <span className="text-white font-bold text-center text-sm leading-tight relative z-10">
          iGaming<br />Platform
        </span>
      </motion.div>

      {/* Orbiting Nodes */}
      <div className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none -translate-x-1/2 -translate-y-1/2">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          
          // Determine label positioning based on requested alignment
          let labelClasses = "";
          if (node.labelAlign === "right") labelClasses = "left-full ml-3 top-1/2 -translate-y-1/2";
          else if (node.labelAlign === "left") labelClasses = "right-full mr-3 top-1/2 -translate-y-1/2";
          else if (node.labelAlign === "bottom") labelClasses = "top-full mt-3 left-1/2 -translate-x-1/2";
          else labelClasses = "bottom-full mb-3 left-1/2 -translate-x-1/2";

          return (
            <div 
              key={i}
              className="absolute top-1/2 left-1/2 group"
              style={{
                transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateX(${node.radius}px)`
              }}
            >
              {/* Connecting line that always points directly back to center (180deg in local coords) */}
              <div 
                className="absolute top-1/2 left-1/2 h-[1px] origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                style={{
                  width: node.radius - 70,
                  background: `linear-gradient(to right, ${node.color}90, ${node.color}00)`,
                  transform: `translateY(-50%) rotate(180deg)`
                }}
              ></div>

              {/* Static counter-rotate for initial position */}
              <div style={{ transform: `rotate(${-node.angle}deg)` }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 100 }}
                  className="relative group pointer-events-auto flex items-center justify-center"
                >
                  {/* The Label Pill */}
                  <div className={`absolute ${labelClasses} px-4 py-2 rounded-full border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md whitespace-nowrap text-[13px] font-semibold text-gray-200 shadow-xl transition-all group-hover:border-white/30 cursor-pointer`}>
                    {node.label}
                  </div>
                  
                  {/* The Icon Circle */}
                  <div 
                    className="w-12 h-12 rounded-full border bg-[#0A0A0A]/80 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer relative z-10"
                    style={{ borderColor: `${node.color}50`, boxShadow: `0 0 20px ${node.color}20` }}
                  >
                    <Icon size={20} style={{ color: node.color }} />
                  </div>

                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
