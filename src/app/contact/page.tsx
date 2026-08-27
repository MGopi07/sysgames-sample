import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Get In Touch</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          Contact <span className="text-transparent bg-clip-text bg-gradient-accent">Us</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          This is a temporary placeholder for the Contact page. The fully functional contact form and office locations will be added shortly.
        </p>
        
        <div className="glass-card p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--secondary)]/10 to-transparent mix-blend-overlay"></div>
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Sales & Inquiries</h2>
            <div className="w-16 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-4 relative z-10"></div>
            <p className="text-gray-400 relative z-10 mb-6">Reach out to our business development team.</p>
            <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-gray-900 rounded-full bg-gradient-accent shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:scale-105 transition-transform z-10">
              hello@sysgames.com
            </button>
        </div>
      </div>
    </div>
  );
}
