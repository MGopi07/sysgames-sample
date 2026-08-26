import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">About SysGames</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-accent">Us</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          This is a temporary placeholder for the About page. The content will be updated soon with our company history, mission, vision, and team details.
        </p>
        
        <div className="glass-card p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent mix-blend-overlay"></div>
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Coming Soon</h2>
            <div className="w-16 h-1 bg-[var(--primary)] mx-auto rounded-full mb-4 relative z-10"></div>
            <p className="text-gray-400 relative z-10">We are crafting an incredible enterprise-grade experience. Stay tuned.</p>
        </div>
      </div>
    </div>
  );
}
