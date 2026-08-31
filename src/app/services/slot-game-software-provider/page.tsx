import React from 'react';
import { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ChevronRight, MonitorSmartphone, Settings, ShieldCheck, Wallet, BarChart3, HelpCircle, Layers, Cpu, Globe, Users, Coins, PenTool, LayoutDashboard, Rocket, Gamepad2, Blocks, Wand2, Zap, TrendingUp, Sliders, Waypoints, LifeBuoy, RotateCcw, Code2 } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Slot Game Software Provider | Online Slot Game Development Solutions",
    description: "Partner with a reliable slot game software provider for engaging online slots, custom game development, API integration, mobile-ready gameplay, and scalable casino gaming solutions.",
    keywords: "Slot Game Software Provider, Slot Game Software, Slot Game Development, Slot Game Development Company, Slot Game Development Services, Online Slot Game Development, Online Slot Software Provider, Casino Slot Game Software, Casino Slot Game Development, Custom Slot Game Development",
};

export default function SlotGameProviderPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-[55%]">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Premium Slot Development</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1]">
                                Slot Game Software Provider for <span className="text-transparent bg-clip-text bg-gradient-accent">Modern Casinos</span>
                            </h1>

                            <div className="space-y-4 mb-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
                                <p>
                                    Looking for a reliable Slot Game Software Provider to expand your online casino offering? Our slot game solutions designed to help casino operators, gaming businesses, aggregators, and platform providers deliver engaging slot experiences across desktop and mobile devices.
                                </p>
                                <p>
                                    As an experienced Slot Game Software Provider, we offer configurable gaming technology can support different casino business models and integration requirements. From classic slot mechanics and modern video slots to feature-rich games bonus rounds, free spins, jackpots, and interactive gameplay, our solutions can be adapted to your platform.
                                </p>
                                <p>
                                    Our Slot Game Software Provider services combine game technology, engaging interfaces, integration capabilities, mobile compatibility, and scalable infrastructure to help businesses build and expand their online slot portfolios.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                    Discuss Your Slot Game Project <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Side Image Graphic */}
                        <div className="w-full lg:w-[45%] relative flex justify-center scale-90 lg:scale-100 mt-12 lg:mt-0">
                          {/* Image Asset with Blend Mode to remove dark backgrounds */}
                          <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center group">
                             <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-105">
                                <Image
                                  src="/images/all_service/7-1.png"
                                  alt="Slot Game Software Provider"
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  quality={85}
                                  className="object-contain drop-shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)]"
                                  priority
                                />
                             </div>
                             
                             {/* Decorative Glow Behind Image */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--primary)]/15 blur-[120px] -z-10 rounded-full opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                        
                        {/* Sticky Left Column: Header */}
                        <div className="lg:w-5/12 lg:sticky lg:top-32 relative z-10">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                                Why Choose Our Slot Game Software Provider Solutions?
                            </h2>
                            <p className="text-gray-400 text-[16px] leading-relaxed">
                                A successful online casino needs more large game library. Players expect smooth gameplay, attractive interfaces, fast loading, mobile compatibility, and engaging features. Our Slot Game Software Provider solutions are designed around these expectations while giving operators flexibility to integrate slot content their existing gaming platforms.
                            </p>

                            {/* Image Graphic Bottom */}
                            <div className="mt-16 w-full max-w-md mx-auto relative hidden lg:block group scale-110 2xl:scale-125">
                                <div className="relative w-full aspect-square transition-transform duration-700">
                                    <Image
                                        src="/images/all_service/7-2.png"
                                        alt="Slot Game Software Solutions"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={85}
                                        className="object-contain drop-shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)]"
                                    />
                                </div>
                                
                                {/* Decorative Glow Behind Image */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--primary)]/15 blur-[120px] -z-10 rounded-full opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>
                            </div>
                        </div>

                        {/* Scrolling Right Column: Feature List */}
                        <div className="lg:w-7/12 relative z-10 pt-4">
                            
                            <div className="flex flex-col gap-6">
                                {[
                                    { icon: Gamepad2, title: "Engaging Slot Experiences", desc: "Deliver visually appealing slot games with configurable themes, mechanics, animations, and features." },
                                    { icon: MonitorSmartphone, title: "Mobile-Ready Gameplay", desc: "Provide responsive slot experiences across smartphones, tablets, desktops, and other supported devices." },
                                    { icon: Waypoints, title: "Flexible Integration", desc: "Connect slot games with supported casino platforms, aggregators, APIs, wallets, and gaming systems." },
                                    { icon: Wand2, title: "Custom Game Development", desc: "Build unique slot concepts around your brand, audience, mechanics, and business requirements." },
                                    { icon: TrendingUp, title: "Scalable Technology", desc: "Expand your slot portfolio and platform capabilities as your casino business grows." },
                                    { icon: Settings, title: "Centralized Management", desc: "Manage supported game configurations, content, reporting, and operational requirements." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start group relative">
                                        
                                        {/* Icon Container */}
                                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/5 group-hover:border-[var(--primary)]/40 transition-all duration-500 z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] overflow-hidden">
                                            {/* Glow internal gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <item.icon className="text-gray-400 group-hover:text-[var(--primary)] transition-colors duration-500 relative z-10" size={30} strokeWidth={1.5} />
                                        </div>
                                        
                                        {/* Content Block */}
                                        <div className="pt-2 pb-4 group-hover:-translate-y-1 transition-transform duration-500 flex-1 relative">
                                            
                                            {/* Giant Watermark Number */}
                                            <div className="absolute right-0 top-0 text-[60px] lg:text-[80px] font-black text-white/[0.02] group-hover:text-[var(--primary)]/[0.05] transition-colors duration-500 pointer-events-none leading-none -mt-4 lg:-mt-8 select-none">
                                                0{idx + 1}
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors duration-300 relative z-10">{item.title}</h3>
                                            <p className="text-gray-400 text-[15.5px] leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 lg:pr-12">{item.desc}</p>
                                            
                                            {/* Animated Progress Bar under text */}
                                            <div className="h-[2px] w-0 bg-gradient-to-r from-[var(--primary)] to-transparent mt-6 group-hover:w-full transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Complete Solutions Grid */}
            <section className="py-16 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Portfolio</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Complete Slot Game Software Solutions</h2>
                        <p className="text-gray-400">Our solutions provide the technical and commercial requirements for casino operators and gaming platforms to create, integrate, and manage online slot games.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Blocks, title: "Classic Slot Games", desc: "Offer traditional reel-based slot experiences familiar symbols, paylines, themes gameplay mechanics designed for players who enjoy classic casino formats." },
                            { icon: Gamepad2, title: "Video Slot Games", desc: "Create feature-rich video slots with multiple reels, paylines, animations, bonus features, free spins, wild symbols, scatter symbols other configurable mechanics." },
                            { icon: Coins, title: "Progressive & Jackpot Slots", desc: "Where supported, integrate jackpot functionality slot experiences to create additional engagement opportunities and promotional possibilities." },
                            { icon: ShieldCheck, title: "Branded Slot Games", desc: "Develop custom slot games around your casino brand, campaign, theme, target audience. Custom branding can help operators create a more distinctive gaming portfolio." },
                            { icon: Globe, title: "HTML5 Slot Games", desc: "Our Slot Game Software Provider solutions can support HTML5-based gaming experiences designed compatibility across modern browsers and supported devices." },
                            { icon: MonitorSmartphone, title: "Mobile Slot Games", desc: "Create responsive slot experiences that allow players access supported games through smartphones and tablets without compromising the core gameplay experience." }
                        ].map((module, idx) => (
                            <div key={idx} className="group relative rounded-3xl bg-white/[0.02] border border-white/5 p-8 hover:-translate-y-2 hover:border-[var(--primary)]/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                    <module.icon className="text-[var(--primary)]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{module.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{module.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Development & API Integration Split */}
            <section className="py-16 bg-[#121212] border-y border-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Custom Development */}
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 w-max shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Bespoke Production</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Custom Slot Game Development</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">
                                Not every casino wants the same gaming portfolio. Our Slot Game Software Provider services can include custom slot game development for businesses want original concepts rather than relying exclusively on standard game libraries.
                            </p>
                            <p className="text-white font-bold mb-5">Our development process can cover:</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Game concept development", "Theme and visual design", 
                                    "Reel & payline configuration", "Game mathematics", 
                                    "Bonus mechanics", "Free-spin features", 
                                    "Wild & scatter functionality", "Jackpot functionality",
                                    "Sound and animation", "Responsive interfaces",
                                    "API integration", "Testing and optimization",
                                    "Platform deployment"
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-4 py-1.5 group cursor-default">
                                        <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-white/5 rounded-full group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_8px_var(--primary)] transition-all duration-300"></div>
                                        <span className="text-[13.5px] text-gray-400 font-medium group-hover:text-gray-100 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* API Integration - Interactive Data Node UI */}
                        <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-b from-[#151820] to-[#0A0A0A] border border-white/5 overflow-hidden group/api shadow-2xl">
                            {/* Abstract Graphic Top Right */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-[60px] group-hover/api:bg-[var(--primary)]/10 transition-colors duration-700"></div>
                            
                            <div className="absolute top-10 right-10 opacity-[0.02] group-hover/api:opacity-10 group-hover/api:scale-110 transition-all duration-1000 pointer-events-none">
                                <Layers size={160} strokeWidth={1} className="text-white" />
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Slot Game API Integration</h2>
                            <p className="text-gray-400 mb-10 leading-relaxed text-[15px] relative z-10">
                                Integration is an important part of modern casino technology. Our solutions support API-based connections with compatible casino platforms, aggregators, wallets, and back-office systems.
                            </p>

                            {/* Animated Stack */}
                            <div className="relative z-10 space-y-3 pl-5 border-l-[3px] border-white/5">
                                {/* Flowing energy line */}
                                <div className="absolute top-0 -left-[3px] w-[3px] h-32 bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                                
                                {[
                                    { t: "Flexible Integration", d: "Connect slot games with supported gaming platforms." },
                                    { t: "Game Aggregation", d: "Connect multiple providers through aggregation technology." },
                                    { t: "Wallet Integration", d: "Manage player balances and gaming transactions." },
                                    { t: "Player Account Integration", d: "Connect gameplay with casino management systems." },
                                    { t: "Reporting Integration", d: "Exchange relevant gaming and operational data." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative p-4 rounded-2xl bg-[#1A1D24]/60 border border-white/5 hover:border-[var(--primary)]/30 hover:bg-[#1A1D24] transition-all duration-300 group/item overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--primary)]/0 group-hover/item:bg-[var(--primary)] transition-colors"></div>
                                        <h4 className="text-[15px] font-bold text-white mb-1 group-hover/item:text-[var(--primary)] transition-colors">{item.t}</h4>
                                        <p className="text-[13px] text-gray-400 leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Platforms & Audiences */}
            <section className="py-16 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Ecosystem Support</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Slot Software for Diverse Platforms</h2>
                        <p className="text-gray-400">Our solutions can help operators expand their casino portfolios with configurable slot technology across multiple platform types.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Operators Card */}
                        <div className="relative p-10 rounded-[2rem] bg-gradient-to-br from-[#1A1C23] to-[#0A0A0A] border border-white/5 overflow-hidden group shadow-2xl">
                            {/* Background Ambient Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary)]/20 transition-colors duration-700"></div>
                            
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-[var(--primary)]/40 group-hover:bg-[var(--primary)]/5 transition-all duration-500">
                                    <Users className="text-[var(--primary)]" size={28} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">For Casino Operators</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed text-[15px]">
                                    Online casino operators need game variety, performance, integration flexibility, and player-friendly experiences. We provide multiple slot themes, classic and video formats, varying volatility profiles, and promotional content.
                                </p>
                                
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Bonus features", icon: Zap },
                                        { name: "Free spins", icon: RotateCcw },
                                        { name: "Wild & scatter symbols", icon: Wand2 },
                                        { name: "Progressive jackpots", icon: Coins }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all duration-300 cursor-default group/pill">
                                            <item.icon size={14} className="text-gray-500 group-hover/pill:text-[var(--primary)] transition-colors" />
                                            <span className="text-[13px] font-bold text-gray-400 group-hover/pill:text-gray-200 transition-colors">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Platforms Stack */}
                        <div className="flex flex-col gap-4">
                            {[
                                { title: "Online & Mobile Casinos", desc: "Integrate directly into your lobby and deliver responsive experiences for smartphones.", icon: MonitorSmartphone },
                                { title: "Gaming Aggregators", desc: "Integrate multiple game providers through compatible aggregation infrastructure.", icon: Layers },
                                { title: "White Label & Custom", desc: "Add slot content to white label solutions or connect to bespoke platforms via APIs.", icon: Code2 }
                            ].map((plat, idx) => (
                                <div key={idx} className="flex-1 p-8 rounded-[2rem] bg-[#111319] border border-white/[0.02] hover:border-[var(--primary)]/30 flex items-center gap-6 group transition-all duration-500 hover:bg-[#151820] hover:-translate-y-1 shadow-lg">
                                    <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/10 group-hover:border-[var(--primary)]/20 transition-all duration-500">
                                        <plat.icon className="text-gray-500 group-hover:text-[var(--primary)] transition-colors duration-500" size={26} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">{plat.title}</h4>
                                        <p className="text-[14px] text-gray-400 leading-relaxed">{plat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Table */}
            <section className="py-16 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Features</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Key Features of Our Slot Game Software</h2>
                    </div>
                    
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
                        
                        <table className="w-full text-left border-collapse relative z-10">
                            <thead>
                                <tr className="bg-black/40 border-b border-white/10">
                                    <th className="py-6 px-8 font-bold text-gray-400 text-sm uppercase tracking-widest w-1/3">Feature</th>
                                    <th className="py-6 px-8 font-bold text-gray-400 text-sm uppercase tracking-widest">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { f: "HTML5 Technology", d: "Supports modern browser-based gaming experiences." },
                                    { f: "Mobile Compatibility", d: "Designed for supported smartphones and tablets." },
                                    { f: "Custom Themes", d: "Create games around selected themes and branding." },
                                    { f: "Bonus Features", d: "Support configurable bonus rounds and gameplay mechanics." },
                                    { f: "Free Spins", d: "Add free-spin functionality to supported slot titles." },
                                    { f: "Jackpot Support", d: "Enable supported jackpot functionality where applicable." },
                                    { f: "API Integration", d: "Connect games with compatible gaming platforms." },
                                    { f: "Game Aggregation", d: "Support aggregation through compatible systems." },
                                    { f: "Wallet Integration", d: "Connect with supported player wallet systems." },
                                    { f: "Reporting", d: "Provide relevant gaming and operational data through compatible systems." },
                                    { f: "Scalable Infrastructure", d: "Support expanding game portfolios and player volumes." },
                                    { f: "Custom Development", d: "Build original slot games around specific requirements." }
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[var(--primary)]/5 even:bg-white/[0.01] transition-colors duration-300 group/row">
                                        <td className="py-5 px-8 font-bold text-white group-hover/row:text-[var(--primary)] transition-colors border-r border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-white/[0.02] flex items-center justify-center group-hover/row:bg-[var(--primary)]/10 transition-colors shrink-0 border border-white/5 group-hover/row:border-[var(--primary)]/30">
                                                    <CheckCircle2 size={16} strokeWidth={2.5} className="text-gray-500 group-hover/row:text-[var(--primary)] transition-colors" />
                                                </div>
                                                <span className="text-[15px]">{row.f}</span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-8 text-[15px] text-gray-400 group-hover/row:text-gray-300 transition-colors leading-relaxed">
                                            {row.d}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-16 border-t border-white/5 relative overflow-hidden bg-[#0A0A0A]">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Process</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">How Our Services Work</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Define Requirements", desc: "We evaluate your business model, target audience, preferred game types, branding, and integrations." },
                            { step: "2", title: "Select or Design", desc: "Choose supported slot solutions or discuss a custom game development project." },
                            { step: "3", title: "Develop & Configure", desc: "Our team configures the required gaming functionality, interface, features, and branding." },
                            { step: "4", title: "Integrate Platform", desc: "The games are connected to compatible casinos, APIs, wallets, and aggregators." },
                            { step: "5", title: "Test & Optimize", desc: "Games are tested across supported devices for functionality and player experience." },
                            { step: "6", title: "Launch Portfolio", desc: "Your slot games are deployed to your platform and made available to eligible players." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-[#0F1117] border border-white/5 rounded-2xl p-8 overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-lg">
                                {/* Ambient Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 via-transparent to-[var(--primary)]/0 group-hover:from-[var(--primary)]/5 group-hover:to-[var(--primary)]/10 transition-colors duration-500"></div>
                                
                                {/* Animated Top Progress Bar */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] group-hover:w-full transition-all duration-700 ease-out"></div>

                                {/* Header with Step Node & Connecting Line */}
                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center font-black text-xl text-gray-500 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all duration-500">
                                        0{item.step}
                                    </div>
                                    <div className="flex-1 h-px border-t border-dashed border-white/10 group-hover:border-[var(--primary)]/30 transition-colors duration-500 relative overflow-hidden">
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--primary)] to-transparent group-hover:w-full transition-all duration-1000 ease-out delay-100"></div>
                                    </div>
                                </div>

                                {/* Giant Watermark Number */}
                                <div className="absolute -bottom-8 -right-4 text-[140px] font-black text-white/[0.02] group-hover:text-[var(--primary)]/[0.05] group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none select-none leading-none">
                                    {item.step}
                                </div>

                                {/* Card Content */}
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[var(--primary)] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us & Benefits */}
            <section className="py-16 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="flex flex-col">
                            {/* Top Badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 w-max">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Expertise</span>
                            </div>

                            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Our Slot Game Software Provider?</h2>
                            
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                We combine engaging game mechanics with scalable architecture and seamless integrations to support growing casino operations.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-16">
                                {[
                                    { text: "Scalable Gaming Technology", icon: TrendingUp },
                                    { text: "Flexible Customization", icon: Sliders }, 
                                    { text: "Multi-Device Support", icon: MonitorSmartphone }, 
                                    { text: "Integration-Friendly Architecture", icon: Waypoints }, 
                                    { text: "Engaging Game Mechanics", icon: Gamepad2 }, 
                                    { text: "Ongoing Technical Support", icon: LifeBuoy }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0 border border-[var(--primary)]/20">
                                            <item.icon size={16} className="text-[var(--primary)]" />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Isometric UI Graphic */}
                            <div className="relative w-full h-64 perspective-[1200px] mt-auto">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 [transform:rotateX(60deg)_rotateZ(-45deg)] [transform-style:preserve-3d] group cursor-default">
                                    
                                    {/* Base Infrastructure Layer */}
                                    <div className="absolute w-64 h-64 bg-white/[0.02] border border-white/10 rounded-3xl shadow-2xl transition-transform duration-1000 group-hover:[transform:translateZ(-15px)]">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 rounded-3xl"></div>
                                    </div>
                                    
                                    {/* Middle Platform Layer */}
                                    <div className="absolute w-48 h-48 bg-[#0A0A0A] border border-[var(--primary)]/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] [transform:translateZ(40px)] transition-transform duration-1000 group-hover:[transform:translateZ(60px)] flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent"></div>
                                        <div className="absolute inset-0 border-[4px] border-[var(--primary)]/20 rounded-2xl m-2 border-dashed animate-[spin_20s_linear_infinite]"></div>
                                        <Layers className="text-[var(--primary)]/60 relative z-10" size={48} strokeWidth={1} />
                                    </div>
                                    
                                    {/* Top Application Layer */}
                                    <div className="absolute w-32 h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl [transform:translateZ(90px)] shadow-[0_20px_50px_rgba(var(--primary-rgb),0.5)] transition-transform duration-1000 group-hover:[transform:translateZ(130px)] flex items-center justify-center border border-white/30 backdrop-blur-md">
                                        <Gamepad2 className="text-black drop-shadow-md relative z-10" size={40} />
                                        
                                        {/* Floating Elements Around Top */}
                                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-lg shadow-[0_0_15px_white] flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                                            <Zap className="text-black" size={16} />
                                        </div>
                                    </div>

                                    {/* Energy Beams connecting layers */}
                                    <div className="absolute w-[2px] h-32 bg-gradient-to-t from-transparent via-[var(--primary)] to-transparent [transform:translateZ(20px)_translateX(-40px)_translateY(40px)] animate-pulse" style={{ animationDuration: '2s' }}></div>
                                    <div className="absolute w-[2px] h-40 bg-gradient-to-t from-transparent via-[var(--primary)] to-transparent [transform:translateZ(10px)_translateX(60px)_translateY(-20px)] animate-pulse" style={{ animationDuration: '2.5s' }}></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="glass-card p-10 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/5 to-transparent">
                            <h3 className="text-2xl font-bold text-white mb-6">Benefits of Choosing Us</h3>
                            <ul className="space-y-4">
                                {[
                                    { t: "Expand Your Casino Portfolio", d: "with additional slot titles and gaming formats." },
                                    { t: "Improve Player Engagement", d: "through visually appealing games and configurable features." },
                                    { t: "Support Mobile Players", d: "with responsive gaming experiences." },
                                    { t: "Simplify Integration", d: "through compatible APIs and gaming infrastructure." },
                                    { t: "Create Branded Content", d: "with custom themes and casino-specific experiences." },
                                    { t: "Scale Your Operation", d: "by adding games and integrations as your business develops." },
                                    { t: "Streamline Management", d: "through centralized platform and reporting capabilities." }
                                ].map((item, i) => (
                                    <li key={i}>
                                        <h4 className="font-bold text-white text-sm"><span className="text-[var(--primary)] mr-2">✓</span> {item.t}</h4>
                                        <p className="text-sm text-gray-400 ml-6">{item.d}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="lg:w-5/12 relative">
                            <div className="sticky top-32">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--primary)]/30 bg-transparent mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></span>
                                    <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">FAQ</span>
                                </div>
                                
                                <h2 className="text-4xl lg:text-[42px] font-bold text-white mb-6 leading-[1.2]">
                                    Frequently Asked Questions
                                </h2>
                                
                                <p className="text-gray-400 text-[15px] mb-12 leading-relaxed max-w-sm">
                                    Everything you need to know about our enterprise iGaming solutions, compliance standards, and integration capabilities.
                                </p>

                                {/* Support CTA Card */}
                                <div className="p-6 rounded-2xl bg-[#111319] border border-white/[0.02]">
                                    <h4 className="text-lg font-bold text-white mb-2">Still have questions?</h4>
                                    <p className="text-[14px] text-gray-400 mb-6 leading-relaxed">
                                        Our enterprise integration specialists are available 24/7.
                                    </p>
                                    <Link 
                                        href="/contact" 
                                        className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[var(--primary)] text-black font-bold text-sm hover:brightness-110 transition-all"
                                    >
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <FAQAccordion items={[
                                { q: "What does a Slot Game Software Provider do?", a: "A Slot Game Software Provider develops, supplies, or integrates technology used to operate online slot games. Services can include game development, APIs, game aggregation, casino integration, wallet connectivity, mobile compatibility, reporting, and ongoing technical support." },
                                { q: "Can you develop custom slot games?", a: "Yes. Custom slot games can be developed around your preferred theme, branding, gameplay mechanics, features, interface, and technical requirements, subject applicable development and regulatory specifications." },
                                { q: "Can slot games work on mobile devices?", a: "Yes. Modern HTML5-based slot games can be designed for supported smartphones and tablets, allowing players to access compatible games through mobile browsers supported casino applications." },
                                { q: "Can I integrate slot games into my existing casino platform?", a: "Depending the technical architecture, slot games can be integrated with compatible casino platforms through APIs, aggregators, wallet systems, and other supported technologies." },
                                { q: "Can you provide branded slot games?", a: "Yes. A Slot Game Software Provider can develop or configure branded slot games using your visual identity, selected themes, promotional concepts, and other approved branding elements." },
                                { q: "What features can be included in slot games?", a: "Depending on game concept, supported features can include paylines, wild symbols, scatter symbols, free spins, bonus rounds, multipliers, jackpots, animations, sound effects, and other gameplay mechanics." },
                                { q: "Do you provide slot game aggregation?", a: "Where supported, aggregation technology can connect multiple game providers and titles through a unified integration, helping operators expand their casino content more efficiently." },
                                { q: "Are slot games compatible with online casinos?", a: "Yes, compatible slot games can be integrated supported online casino platforms. Integration requirements depend on the casino platform, game technology, APIs, wallet architecture, and target market." }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection 
                title="Launch Your Slot Game"
                highlightText="Software Solution"
                description="Our Slot Game Software Provider solutions give operators and platforms access to highly configurable, modern slot technology. Whether you need ready-to-integrate games, custom development, or seamless API integration, we deliver scalable solutions with engaging gameplay and reliable performance."
                buttonText="Talk to Our Slot Game Experts"
            />

        </div>
    );
}
