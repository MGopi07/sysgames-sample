import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function BlogSinglePage({ params }: { params: { slug: string } }) {
  const recentPosts = [1, 2, 3, 4];
  const relatedPosts = [1, 2, 3, 4];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#050505] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-[var(--primary)]/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

        {/* Top Header */}
        <div className="container mx-auto max-w-4xl px-6 lg:px-12 mb-12 text-center relative z-10 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-5xl leading-[1.1] font-black text-white uppercase tracking-wider mb-6">
                The Future Of Enterprise Casino Platforms
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm">
                <span className="text-[var(--primary)] uppercase tracking-widest text-[11px] font-bold bg-[var(--primary)]/10 px-4 py-1.5 rounded-full">
                    iGaming Trends
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                <span className="text-gray-400 font-medium text-sm">
                    August 26, 2026
                </span>
            </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Main Content */}
                <div className="lg:col-span-8 bg-[#121212] rounded-2xl border border-white/5 p-4 md:p-4 lg:p-6 shadow-2xl">
                    
                    {/* Hero Image Inside Card */}
                    <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative mb-10 border border-white/5 group">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80" 
                            alt="Hero" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                        />
                        <div className="absolute inset-0 bg-[var(--primary)]/5 mix-blend-overlay"></div>
                    </div>

                    {/* Content Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                        The Shift Towards Modular Architecture
                    </h2>
                    
                    {/* Content Body */}
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[var(--primary)] hover:prose-a:text-[var(--primary)]/80 prose-strong:text-white prose-li:text-gray-300">
                        <p className="lead text-xl text-gray-200 font-medium mb-8 leading-relaxed">
                            This is a temporary placeholder for the single blog post page (Slug: <code className="text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded-md text-base">{params.slug}</code>). 
                            The actual article content fetched from the CMS will be rendered here.
                        </p>
                        
                        <p className="mb-6 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <h3 className="text-xl font-bold text-white mb-6 mt-10">Live Rendering Engines</h3>
                        <p className="mb-6 leading-relaxed">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <ul className="space-y-4 my-8 text-gray-300 list-none pl-0">
                            <li className="flex items-start gap-4">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0 shadow-[0_0_10px_var(--primary)]"></span>
                                <span className="leading-relaxed">Reduced latency across global CDNs and edge nodes, ensuring real-time syncing for live betting.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0 shadow-[0_0_10px_var(--primary)]"></span>
                                <span className="leading-relaxed">Dynamic real-time odds calculation without client-side blocking or stuttering.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0 shadow-[0_0_10px_var(--primary)]"></span>
                                <span className="leading-relaxed">Seamless integration with third-party game providers via modern GraphQL and WebSocket APIs.</span>
                            </li>
                        </ul>

                        <blockquote className="my-10 pl-6 border-l-4 border-[var(--primary)] py-4 bg-gradient-to-r from-[var(--primary)]/10 to-transparent rounded-r-xl">
                            <p className="text-xl font-medium text-white italic m-0 leading-relaxed drop-shadow-md">
                                "The next generation of iGaming platforms will not be monolithic. They will be composed of specialized, highly optimized microservices that allow operators to scale infinitely."
                            </p>
                        </blockquote>
                        
                        <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5 relative group my-10">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Content" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                        </div>
                    </div>
                    
                   
                </div>

                {/* Right Column: Sidebar */}
                <div className="lg:col-span-4 sticky top-32">
                    
                    <div className="bg-[#121212] rounded-2xl border border-white/5 p-5 shadow-2xl flex flex-col gap-8">
                        {/* Search Widget */}
                        <div>
                            <h4 className="text-[15px] font-black text-white uppercase tracking-wider mb-4">
                                Search
                            </h4>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search" 
                                    className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3 px-4 pr-12 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner" 
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--primary)] transition-colors p-1">
                                    <Search className="w-[18px] h-[18px]" />
                                </button>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div>
                            <h4 className="text-[15px] font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                                Categories
                            </h4>
                            <div className="space-y-2">
                                <Link href="#" className="group flex items-center justify-between bg-[#1A1A1A] hover:bg-[#202020] transition-colors p-4 rounded-xl border border-white/5 hover:border-white/10">
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Technology</span>
                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-[#0A0A0A] text-[10px] font-bold text-gray-500">4</span>
                                </Link>
                                {/* Add more categories as needed */}
                            </div>
                        </div>

                        {/* Recent Posts Widget */}
                        <div>
                            <h4 className="text-[15px] font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                                Recent Posts
                            </h4>
                            <div className="space-y-3">
                                {[
                                    { title: "SysGames API Integration", date: "Aug 27, 2026" },
                                    { title: "Next-Gen Casino Platforms", date: "Aug 27, 2026" },
                                    { title: "Live Dealer Studio Launch", date: "Aug 27, 2026" },
                                    { title: "Global Sportsbook Expansion", date: "Aug 26, 2026" },
                                ].map((post, i) => (
                                    <Link href={`/blog/post-${i}`} key={i} className="group flex gap-5 items-center bg-[#1A1A1A] hover:bg-[#202020] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all">
                                        <div className="w-[100px] h-[64px] flex-shrink-0 bg-[#0A0A0A] rounded-lg overflow-hidden relative border border-white/5">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=150&q=80`} alt="Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="text-xs font-bold text-white uppercase group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2 leading-snug mb-2">
                                                {post.title}
                                            </h5>
                                            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                {post.date}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Related Blogs Section */}
            <div className="mt-20 pt-16 border-t border-white/5">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-8 drop-shadow-md">
                    Related Blogs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedPosts.map((post) => (
                        <Link href={`/blog/sample-post-${post}`} key={post} className="group bg-[#121212] rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors flex flex-col h-full shadow-lg">
                            <div className="w-full aspect-[16/10] bg-[#0A0A0A] relative overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80`} alt="Related thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                                <div className="absolute top-3 left-3 px-2 py-1 bg-[#121212]/80 backdrop-blur-md rounded-md border border-white/10 text-[9px] font-bold text-[var(--primary)] uppercase tracking-widest">
                                    Technology
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h4 className="text-sm font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2 leading-snug mb-3">
                                    Building Scalable iGaming Microservices For The Future
                                </h4>
                                <div className="mt-auto flex justify-between items-center text-[11px] text-gray-500 font-medium">
                                    <span>Aug 20, 2026</span>
                                    <span className="text-gray-400 group-hover:text-white transition-colors">Read More →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    </div>
  );
}
