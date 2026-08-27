import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [1, 2, 3]; // Dummy data

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Insights & News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-accent">Blog</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            This is a temporary placeholder for the Blog archive. The actual CMS integration and latest iGaming industry insights will be populated here.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <Link href={`/blog/sample-post-${post}`} key={post} className="group">
                    <div className="glass-card h-full p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/50 hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent mix-blend-overlay"></div>
                        <div className="w-full aspect-[16/9] bg-[#121212] rounded-2xl mb-6 border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <span className="text-gray-600 text-sm font-mono">Image Placeholder</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80"></div>
                        </div>
                        <div className="flex gap-3 mb-4">
                            <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">iGaming Trends</span>
                            <span className="text-xs text-gray-500">Aug 26, 2026</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">
                            The Future of Enterprise Casino Platforms
                        </h2>
                        <p className="text-gray-400 mb-6 line-clamp-3">
                            Discover how modular architecture and live rendering engines are completely changing the landscape of modern online casino operations.
                        </p>
                        <div className="flex items-center text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                            Read Article &rarr;
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
