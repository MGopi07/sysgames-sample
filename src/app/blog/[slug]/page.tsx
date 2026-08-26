import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function BlogSinglePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
            <ChevronLeft size={20} className="mr-2" /> Back to all articles
        </Link>
        
        <div className="glass-card p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent mix-blend-overlay"></div>
            
            <div className="relative z-10 mb-12 border-b border-white/10 pb-12">
                <div className="flex gap-4 mb-6">
                    <span className="px-3 py-1 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full text-xs font-bold text-[var(--primary)] tracking-wider uppercase">iGaming Trends</span>
                    <span className="text-sm text-gray-400 self-center">August 26, 2026</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                    The Future of Enterprise Casino Platforms
                </h1>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20"></div>
                    <div>
                        <div className="font-bold text-white">SysGames Editorial</div>
                        <div className="text-sm text-gray-400">5 min read</div>
                    </div>
                </div>
            </div>
            
            <div className="relative z-10 prose prose-invert prose-lg max-w-none text-gray-300">
                <p className="lead text-xl text-white font-medium mb-8">
                    This is a temporary placeholder for the single blog post page (Slug: <code className="text-[var(--primary)]">{params.slug}</code>). 
                    The actual article content fetched from the CMS will be rendered here.
                </p>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">The Shift Towards Modular Architecture</h2>
                <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="w-full aspect-video bg-[#121212] rounded-2xl mb-8 border border-white/5 flex items-center justify-center">
                    <span className="text-gray-600 font-mono">Article Image Placeholder</span>
                </div>
                <p className="mb-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
