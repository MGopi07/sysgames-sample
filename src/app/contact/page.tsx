import { Metadata } from 'next';
import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send, Globe2, Building2, Terminal } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contact Us | iGaming Software Development Company",
    description: "Contact our iGaming software development team discuss casino, sportsbook, white label, slot game, game aggregation custom iGaming software solutions.",
    keywords: "Contact iGaming Software Company, iGaming Software Development Company, iGaming Software Provider, iGaming Technology Provider, iGaming Solutions, Casino Software Development, Sportsbook Software Development",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[var(--primary)]/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--primary)]/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

        {/* Hero Section */}
        <div className="pt-40 pb-16 relative z-10">
            <div className="container mx-auto max-w-4xl px-6 lg:px-12 text-center flex flex-col items-center">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                    <span className="text-[10px] font-bold text-[var(--primary)] tracking-widest uppercase">Global Support 24/7</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-black text-white uppercase tracking-wider mb-6">
                    Let's Build The Future
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    Whether you're looking for an enterprise platform or an API integration, our specialized team is ready to engineer your next big move in iGaming.
                </p>
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Left Column: Contact Info Blocks */}
                <div className="lg:col-span-5 space-y-6">
                    
                    {/* Global Headquarters */}
                    <div className="group bg-[#121212] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-[var(--primary)]/10 transition-colors"></div>
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center flex-shrink-0 text-[var(--primary)] shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white uppercase tracking-wider mb-1">Global Headquarters</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-3">123 Innovation Drive, Silicon Valley, CA 94025, United States</p>
                                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-[var(--primary)] uppercase tracking-widest hover:text-white transition-colors">
                                    View on Map <Globe2 className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sales & Partnerships */}
                    <div className="group bg-[#121212] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center flex-shrink-0 text-[var(--primary)] shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white uppercase tracking-wider mb-1">Sales & Partnerships</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-3">Connect with our business development team for customized quotes.</p>
                                <div className="space-y-1.5">
                                    <a href="mailto:sales@sysgames.com" className="flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--primary)] transition-colors">
                                        <Mail className="w-3.5 h-3.5 text-gray-500" /> sales@sysgames.com
                                    </a>
                                    <a href="tel:+18001234567" className="flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--primary)] transition-colors">
                                        <Phone className="w-3.5 h-3.5 text-gray-500" /> +1 (800) 123-4567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Support */}
                    <div className="group bg-[#121212] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors">
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center flex-shrink-0 text-[var(--primary)] shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-black text-white uppercase tracking-wider mb-1">Technical Support</h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-3">24/7 dedicated support for active enterprise deployments.</p>
                                <div className="space-y-1.5">
                                    <a href="mailto:support@sysgames.com" className="flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--primary)] transition-colors">
                                        <Mail className="w-3.5 h-3.5 text-gray-500" /> support@sysgames.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Premium Form */}
                <div className="lg:col-span-7">
                    <div className="bg-[#121212] rounded-[24px] border border-white/5 p-8 md:p-10 shadow-2xl relative overflow-hidden">
                        {/* Form Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary)]/5 blur-[100px] rounded-full pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">Send us a message</h3>
                            <p className="text-gray-400 mb-8 text-sm font-medium">Our enterprise team typically responds within 2 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                                        <input type="text" className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                                        <input type="text" className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                                        <input type="email" className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner" placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company / Brand</label>
                                        <input type="text" className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner" placeholder="Your Brand Name" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Inquiry Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner appearance-none cursor-pointer">
                                            <option value="">Select an option</option>
                                            <option value="enterprise">Enterprise Platform Setup</option>
                                            <option value="api">API & Aggregation</option>
                                            <option value="custom">Custom Game Development</option>
                                            <option value="support">Technical Support</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Message</label>
                                    <textarea rows={4} className="w-full bg-[#1A1A1A] border border-transparent rounded-xl py-3.5 px-5 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/50 transition-all text-sm shadow-inner resize-none" placeholder="Tell us about your project requirements..."></textarea>
                                </div>
                                
                                <button type="button" className="w-full mt-2 group relative flex items-center justify-center gap-2 px-8 py-4 overflow-hidden font-black text-sm uppercase tracking-widest text-[#050505] rounded-xl bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]">
                                    Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}
