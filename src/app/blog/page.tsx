import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "iGaming Blog | Casino, Sportsbook & Gaming Technology",
    description: "Explore latest iGaming insights, casino software trends, sportsbook technology, gaming solutions, industry updates, and expert tips our blog.",
    keywords: "iGaming Blog, iGaming Industry Blog, iGaming News, iGaming Insights, iGaming Technology, iGaming Trends, Casino Software Blog, Online Casino Technology, Sportsbook Software Blog, Sports Betting Technology",
};

export default function BlogPage() {
  const posts = Array.from({ length: 9 }, (_, i) => i + 1); // 9 posts dummy data

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[var(--secondary)]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_10px_var(--primary)]"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Insights & News</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-accent drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">Blog</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            This is a temporary placeholder for the Blog archive. The actual CMS integration and latest iGaming industry insights will be populated here.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {posts.map((post) => (
                <Link href={`/blog/sample-post-${post}`} key={post} className="group flex flex-col h-full">
                    <div className="glass-card flex-grow p-4 md:p-6 rounded-[2rem] border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-[var(--primary)]/40 hover:-translate-y-2 bg-[#121212]/80 backdrop-blur-xl">
                        
                        {/* Hover Glow effect top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--primary)]/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent mix-blend-overlay pointer-events-none"></div>
                        
                        {/* Image Container */}
                        <div className="w-full aspect-[16/10] bg-[#0a0a0a] rounded-2xl mb-8 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80`} alt="Blog post thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-[var(--primary)]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                        
                        <div className="relative z-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-5">
                                <span className="px-3 py-1.5 text-[10px] font-bold text-[var(--primary)] bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full tracking-widest uppercase shadow-[0_0_10px_rgba(var(--primary-rgb),0.1)]">
                                    iGaming Trends
                                </span>
                                <span className="text-xs font-medium text-gray-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[var(--secondary)] transition-colors duration-300"></span>
                                    Aug 26, 2026
                                </span>
                            </div>
                            
                            <h2 className="text-2xl lg:text-[26px] font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2 leading-tight">
                                The Future of Enterprise Casino Platforms
                            </h2>
                            
                            <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed text-sm lg:text-base">
                                Discover how modular architecture and live rendering engines are completely changing the landscape of modern online casino operations.
                            </p>
                            
                            <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors duration-300">
                                <span className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2">
                                    Read Article 
                                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                                </span>
                                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_0_rgba(var(--primary-rgb),0)] group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] border border-white/5 group-hover:border-[var(--primary)]/30">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[var(--primary)] transition-colors duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-20 flex justify-center items-center gap-2">
            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] font-bold shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)] transition-all duration-300">
                1
            </button>
            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-400 font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                2
            </button>
            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-400 font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 hidden sm:flex">
                3
            </button>
            
            <span className="text-gray-600 px-2 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </span>
            
            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-400 font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                12
            </button>

            <button className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
            </button>
        </div>
      </div>
    </div>
  );
}
