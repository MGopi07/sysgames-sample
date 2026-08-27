import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, MonitorSmartphone, Layers, Globe, ShieldCheck, BarChart3, Database, Cable, Gamepad2, Coins, LayoutDashboard, Users } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import AdvantagesCarousel from "@/components/ui/AdvantagesCarousel";
import ProviderSolutionsSlider from "@/components/ui/ProviderSolutionsSlider";

export const metadata: Metadata = {
    title: "Casino Game Aggregation Provider | Connect Multiple Casino Games",
    description: "Partner with a reliable casino game aggregation provider to access multiple casino game studios through one integration. Expand your casino portfolio slots, live casino, table games, APIs, and centralized management.",
    keywords: "Casino Game Aggregation Provider, Casino Game Aggregation Software, Casino Game Aggregator, Casino Game Aggregator Provider, Casino Game Aggregation Platform, Casino Game Aggregation Solution, Online Casino Game Aggregator, Casino Game Aggregator Software, Casino Game Aggregator",
};

export default function CasinoGameAggregationPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-[55%]">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">One Integration. Thousands of Games.</span>
                            </div>

                            <h1 className="text-4xl lg:text-[3.2rem] xl:text-[3.5rem] font-black text-white mb-6 leading-[1.1]">
                                Casino Game <br className="hidden lg:block" />
                                Aggregation Provider
                                for a <span className="text-transparent bg-clip-text bg-gradient-accent">Broader Portfolio</span>
                            </h1>

                            <div className="space-y-4 mb-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
                                <p>
                                    Integrating games from multiple studios individually is time-consuming. Our Casino Game Aggregation Provider solution helps operators connect multiple game providers through a single, streamlined platform.
                                </p>
                                <p>
                                    Access a diverse portfolio of slots, live casino, table games, and jackpots through one centralized integration. Instead of managing numerous technical connections, use our aggregation layer to efficiently manage content and expand your casino lobby.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                    Discuss Your Aggregation Requirements <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] flex justify-center relative scale-75 md:scale-90 lg:scale-100 origin-center mt-12 lg:mt-0">
                            <style>{`
                                @keyframes float-slow {
                                    0% { transform: translateY(0px); }
                                    50% { transform: translateY(-8px); }
                                    100% { transform: translateY(0px); }
                                }
                                @keyframes data-flow {
                                    0% { transform: translateX(35px); opacity: 0; }
                                    20% { opacity: 1; }
                                    80% { opacity: 1; }
                                    100% { transform: translateX(110px); opacity: 0; }
                                }
                            `}</style>
                            
                            {/* Premium Dynamic Aggregation Visual */}
                            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-[80px] animate-pulse"></div>
                                
                                {/* Orbiting Rings */}
                                <div className="absolute inset-8 rounded-full border border-white/[0.04] border-dashed animate-[spin_40s_linear_infinite]"></div>
                                <div className="absolute inset-20 rounded-full border border-[var(--primary)]/10 animate-[spin_30s_linear_infinite_reverse]"></div>
                                
                                {/* Central API Hub */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-3xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] backdrop-blur-2xl border border-[var(--primary)]/40 shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] flex flex-col items-center justify-center z-30 group cursor-default overflow-hidden">
                                    <div className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                                    <Database className="text-[var(--primary)] mb-2 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),1)] group-hover:scale-110 transition-transform duration-500" size={40} />
                                    <span className="text-xs font-black text-white tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mt-1">AGGREGATOR</span>
                                    <div className="mt-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                                        <span className="text-[8px] text-[var(--primary)] uppercase tracking-widest font-bold flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                            API Connected
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Connected Provider Nodes */}
                                {[
                                    { angle: 0, delay: 0, icon: Gamepad2, label: "Slots" },
                                    { angle: 60, delay: 1.5, icon: Globe, label: "Live Casino" },
                                    { angle: 120, delay: 3, icon: Coins, label: "Table Games" },
                                    { angle: 180, delay: 0.5, icon: Layers, label: "Crash Games" },
                                    { angle: 240, delay: 2, icon: BarChart3, label: "Virtuals" },
                                    { angle: 300, delay: 3.5, icon: ShieldCheck, label: "Jackpots" }
                                ].map((node, i) => {
                                    const rad = (node.angle * Math.PI) / 180;
                                    const radius = 160; // Distance from center
                                    const x = Math.cos(rad) * radius;
                                    const y = Math.sin(rad) * radius;
                                    
                                    return (
                                        <div key={i} className="absolute top-1/2 left-1/2 z-20"
                                            style={{ 
                                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                                            }}>
                                            
                                            {/* Node Container with independent float animation */}
                                            <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center hover:border-[var(--secondary)]/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(var(--secondary-rgb),0.2)] transition-all duration-300 group cursor-default relative shadow-xl"
                                                 style={{ animation: `float-slow ${3 + (i % 2)}s ease-in-out infinite alternate` }}>
                                                <node.icon className="text-gray-400 group-hover:text-[var(--secondary)] transition-colors duration-300 mb-1" size={22} />
                                                <span className="text-[8px] font-bold text-gray-400 group-hover:text-white uppercase tracking-wider text-center px-1 leading-tight">{node.label}</span>
                                            </div>

                                            {/* Dynamic Connection Line with Flowing Data */}
                                            <svg className="absolute top-1/2 left-1/2 -z-10 pointer-events-none" 
                                                 style={{ 
                                                     width: radius, 
                                                     height: 10, 
                                                     transform: `translate(0, -50%) rotate(${node.angle + 180}deg)`,
                                                     transformOrigin: 'left center'
                                                 }}>
                                                {/* Base Dashed Line */}
                                                <line 
                                                    x1="45" y1="5" x2="115" y2="5" 
                                                    stroke="rgba(255,255,255,0.15)" 
                                                    strokeWidth="1.5" 
                                                    strokeDasharray="4 4"
                                                />
                                                {/* Flowing Data Particle */}
                                                <circle 
                                                    cx="0" cy="5" r="2.5" 
                                                    fill="var(--primary)" 
                                                    style={{ 
                                                        animation: `data-flow 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`, 
                                                        animationDelay: `${node.delay}s` 
                                                    }} 
                                                />
                                            </svg>
                                        </div>
                                    )
                                })}

                                {/* Floating Data Badges */}
                                <div className="absolute top-4 right-2 px-4 py-2 bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-xl rounded-full flex items-center gap-2 z-40 animate-[float-slow_4s_ease-in-out_infinite_alternate]">
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                                    </span>
                                    <span className="text-[9px] font-bold text-white tracking-widest uppercase">15,000+ Games</span>
                                </div>
                                <div className="absolute bottom-8 left-2 px-4 py-2 bg-[var(--secondary)]/10 backdrop-blur-md border border-[var(--secondary)]/20 shadow-xl rounded-full flex items-center gap-2 z-40 animate-[float-slow_5s_ease-in-out_infinite_alternate_reverse]">
                                    <Cable size={14} className="text-[var(--secondary)]" />
                                    <span className="text-[9px] font-bold text-[var(--secondary)] tracking-widest uppercase">Single API</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Carousel UI */}
            <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none"></div>
                <AdvantagesCarousel />
            </section>

            {/* Platform Features Grid -> Expanding Accordion */}
            <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Capabilities</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                            What Does Our Aggregation <br className="hidden lg:block" />
                            Platform Include?
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full lg:h-[450px] gap-4">
                        {[
                            { icon: Users, title: "Multiple Game Providers", desc: "Connect your operation with multiple supported casino game studios. This gives operators the flexibility expand content portfolio without creating an independent integration for every provider." },
                            { icon: Cable, title: "Centralized Integration", desc: "Instead developing separate connections for every game studio, the Casino Game Aggregation Provider approach provides centralized integration layer between casino platform and supported game suppliers." },
                            { icon: Layers, title: "Extensive Casino Content", desc: "Expand your casino lobby with available slots, live dealer games, table games, jackpots, crash-style games, specialty games, and other supported content." },
                            { icon: Database, title: "API Integration", desc: "Our solution uses API-based technology to connect compatible casino platforms with supported gaming content and provider services securely." },
                            { icon: LayoutDashboard, title: "Game Filtering", desc: "Organize available content using categories, game types, providers, popularity, themes, or other supported filtering options to create a more convenient player experience." },
                            { icon: ShieldCheck, title: "Centralized Management", desc: "Manage game availability, provider connections, configurations, supported content through centralized administration environment." },
                            { icon: BarChart3, title: "Reporting & Data", desc: "Access relevant gaming and operational information through supported reporting functionality, helping operators understand content performance and platform activity." }
                        ].map((module, idx) => (
                            <div key={idx} className="group relative flex-none lg:flex-[1] lg:hover:flex-[5] lg:max-w-[380px] h-auto lg:h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-[#121212] border border-white/5 hover:border-[var(--primary)]/30 rounded-3xl cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)]">
                                
                                {/* Vertical Slim State */}
                                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-between py-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-[var(--primary)] shadow-[inset_0_0_10px_rgba(var(--primary-rgb),0.1)]">
                                        0{idx + 1}
                                    </div>
                                    <div 
                                        className="text-white font-bold text-lg whitespace-nowrap tracking-widest"
                                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                    >
                                        {module.title}
                                    </div>
                                    <module.icon className="text-gray-600" size={28} />
                                </div>

                                {/* Expanded State */}
                                <div className="relative lg:absolute inset-0 flex flex-col justify-end p-6 lg:p-10 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent">
                                    <div className="absolute top-0 right-0 p-6 lg:p-8 opacity-10 lg:opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                        <div className="text-6xl lg:text-8xl font-black text-white">0{idx + 1}</div>
                                    </div>
                                    
                                    {/* Fixed width inner container prevents text re-wrapping during flex expansion */}
                                    <div className="w-full lg:w-[300px] max-w-full">
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[var(--primary)]/20 flex items-center justify-center mb-4 lg:mb-6 border border-[var(--primary)]/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                                            <module.icon className="text-[var(--primary)]" size={28} />
                                        </div>
                                        <h3 className="text-xl lg:text-3xl font-black text-white mb-3 lg:mb-4 leading-tight whitespace-normal">{module.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm lg:text-base whitespace-normal opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 lg:translate-y-4 group-hover:translate-y-0">
                                            {module.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operator & Platform Sections (Zigzag) */}
            <section className="py-24 bg-[#121212] border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">

                    {/* Online Casino Operators */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Game Aggregation Provider for Online Casino Operators</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Online casino operators need a diverse game portfolio to serve different player preferences. Working with a Casino Game Aggregation Provider can help operators expand their game lobby while reducing the complexity of managing multiple technical integrations.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Our aggregation technology can help operators provide access to supported content from different game studios through a unified casino platform.
                            </p>
                            <h3 className="text-xl font-bold text-white mb-4">Benefits for Casino Operators</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Expand your game library more efficiently.",
                                    "Connect multiple supported game providers.",
                                    "Reduce individual integration requirements.",
                                    "Provide players with more game choices.",
                                    "Manage content through a centralized system.",
                                    "Support desktop and mobile gaming experiences.",
                                    "Add new content as your casino develops.",
                                    "Simplify technical and operational management."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[var(--primary)] shrink-0 mt-0.5" size={16} />
                                        <span className="text-sm text-gray-400">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <style>{`
                                @keyframes float-layer-mid {
                                    0%, 100% { transform: translateZ(60px); }
                                    50% { transform: translateZ(70px); }
                                }
                                @keyframes float-layer-top {
                                    0%, 100% { transform: translateZ(120px); }
                                    50% { transform: translateZ(140px); }
                                }
                            `}</style>
                            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] transition-transform duration-1000 ease-out hover:scale-105" style={{ perspective: '1200px' }}>
                                <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
                                    
                                    {/* Base Platform */}
                                    <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-[-20px_20px_40px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
                                        <div className="text-white/10 font-black text-4xl tracking-widest uppercase transform -rotate-z-90">Casino</div>
                                    </div>
                                    
                                    {/* Middle API Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md border border-[var(--primary)]/40 rounded-[2.5rem] flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(var(--primary-rgb),0.15)]" style={{ animation: 'float-layer-mid 6s ease-in-out infinite' }}>
                                        <Cable className="text-[var(--primary)] mb-3" size={64} />
                                        <div className="text-[var(--primary)] font-bold tracking-widest uppercase text-sm">Aggregator API</div>
                                    </div>

                                    {/* Top Providers Layer */}
                                    <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 grid grid-cols-2 gap-6 shadow-[0_30px_50px_rgba(0,0,0,0.3)]" style={{ animation: 'float-layer-top 6s ease-in-out infinite 0.5s' }}>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Gamepad2 className="text-white/30" size={40} /></div>
                                        <div className="bg-[var(--primary)]/15 rounded-2xl border border-[var(--primary)]/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.1)]"><Gamepad2 className="text-[var(--primary)]" size={40} /></div>
                                        <div className="bg-[var(--primary)]/15 rounded-2xl border border-[var(--primary)]/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.1)]"><Gamepad2 className="text-[var(--primary)]" size={40} /></div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Gamepad2 className="text-white/30" size={40} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* iGaming Platforms */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="order-2 lg:order-1 relative flex items-center justify-center">
                            <style>{`
                                @keyframes float-layer-mid-2 {
                                    0%, 100% { transform: translateZ(60px); }
                                    50% { transform: translateZ(70px); }
                                }
                                @keyframes float-layer-top-2 {
                                    0%, 100% { transform: translateZ(120px); }
                                    50% { transform: translateZ(140px); }
                                }
                            `}</style>
                            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] transition-transform duration-1000 ease-out hover:scale-105" style={{ perspective: '1200px' }}>
                                <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(45deg)' }}>
                                    
                                    {/* Base Layer: Game Providers */}
                                    <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-[20px_20px_40px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-6 p-8 overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Layers className="text-white/20" size={32} /></div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Layers className="text-white/20" size={32} /></div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Layers className="text-white/20" size={32} /></div>
                                        <div className="bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center"><Layers className="text-white/20" size={32} /></div>
                                    </div>
                                    
                                    {/* Middle API Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-bl from-[var(--secondary)]/20 to-[var(--secondary)]/5 backdrop-blur-md border border-[var(--secondary)]/40 rounded-[2.5rem] flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(var(--secondary-rgb),0.15)]" style={{ animation: 'float-layer-mid-2 6s ease-in-out infinite' }}>
                                        <Database className="text-[var(--secondary)] mb-3" size={64} />
                                        <div className="text-[var(--secondary)] font-bold tracking-widest uppercase text-sm">Data Layer</div>
                                    </div>

                                    {/* Top iGaming Platform Layer */}
                                    <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl border border-white/20 rounded-[2.5rem] flex items-center justify-center shadow-[0_30px_50px_rgba(0,0,0,0.3)]" style={{ animation: 'float-layer-top-2 6s ease-in-out infinite 0.5s' }}>
                                        <div className="text-center flex flex-col items-center">
                                            <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                                                <LayoutDashboard className="text-white" size={40} />
                                            </div>
                                            <div className="text-white font-black tracking-widest uppercase text-xl">Platform</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Game Aggregation Provider for iGaming Platforms</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                iGaming platforms often need to support multiple casino providers, sportsbook products, payment systems, wallets, and player management tools. A Casino Game Aggregation Provider can act as an important technology layer within this ecosystem.
                            </p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Our aggregation solution can connect supported game content with compatible iGaming platforms, helping businesses create a broader gaming lobby without requiring individual integrations for every provider.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you operate a new casino platform or want to expand an existing operation, our Casino Game Aggregation Provider technology configured around your technical architecture and business requirements.
                            </p>
                        </div>
                    </div>

                    {/* Casino Game Aggregation API */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Connectivity</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Game Aggregation API</h2>
                            <p className="text-gray-400 leading-relaxed mb-12">
                                A reliable API is essential when connecting a casino platform multiple game providers. Our Casino Game Aggregation Provider solution can offer supported API connectivity for game launches, content information, player sessions, wallet transactions, and other required functions.
                            </p>
                            
                            {/* Isometric API Terminal */}
                            <div className="relative w-full max-w-md h-[240px] perspective-[1200px] group">
                                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:rotate-x-[15deg] group-hover:rotate-y-[15deg]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(25deg) rotateY(20deg)' }}>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-[#111] border border-white/10 rounded-2xl shadow-[-20px_20px_40px_rgba(0,0,0,0.7)] overflow-hidden font-mono text-sm" style={{ transform: 'translateZ(0)' }}>
                                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                            </div>
                                            <span className="text-gray-500 text-xs">/api/v1/aggregator/connect</span>
                                        </div>
                                        <div className="p-6 text-gray-400">
                                            <span className="text-[var(--primary)]">{"{"}</span><br />
                                            &nbsp;&nbsp;<span className="text-white">"status"</span>: <span className="text-green-400">"200 OK"</span>,<br />
                                            &nbsp;&nbsp;<span className="text-white">"latency"</span>: <span className="text-yellow-400">"12ms"</span>,<br />
                                            &nbsp;&nbsp;<span className="text-white">"provider_nodes"</span>: <span className="text-blue-400">84</span>,<br />
                                            &nbsp;&nbsp;<span className="text-white">"games_synced"</span>: <span className="text-blue-400">15420</span>,<br />
                                            &nbsp;&nbsp;<span className="text-white">"stream_encryption"</span>: <span className="text-[var(--primary)]">true</span><br />
                                            <span className="text-[var(--primary)]">{"}"}</span>
                                        </div>
                                    </div>
                                    {/* Glowing backplate for 3D depth */}
                                    <div className="absolute inset-0 bg-[var(--primary)]/20 blur-[50px] transform -translate-z-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Game API Integration", desc: "Connect supported casino games to your platform through standardized API interfaces." },
                                { title: "Wallet API", desc: "Integrate supported wallet functionality for player balances and gaming transactions." },
                                { title: "Player Session Management", desc: "Support player sessions and game launches through compatible casino platform integrations." },
                                { title: "Game Information", desc: "Exchange supported information relating to game titles, providers, categories, configurations, and availability." },
                                { title: "Transaction Processing", desc: "Connect supported gaming transactions with compatible wallet and payment infrastructure." },
                                { title: "Reporting Integration", desc: "Exchange relevant gaming and operational data with supported back-office and reporting systems." }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Categories */}
            <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="space-y-16 md:space-y-20">

                        {/* Slots */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Gamepad2 size={48} className="text-[var(--primary)] mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-4">Slot Mechanics & Features</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Depending on the available provider portfolio, operators can offer different slot themes, mechanics, volatility profiles, paylines, bonus features, jackpots, and other gaming formats.</p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Content Aggregation for Slots</h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Slots represent one of the largest categories of online casino content. Our Casino Game Aggregation Provider solution help operators expand their slot portfolio by connecting supported slot studios through a centralized aggregation layer.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    This enables casino brands to build a diverse lobby without creating a separate technical integration for every individual slot provider.
                                </p>
                            </div>
                        </div>

                        {/* Live Casino */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Game Aggregation for Live Casino</h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Live casino content can add a more interactive experience to an online gaming platform. A Casino Game Aggregation Provider can help operators connect supported live casino providers and make available games accessible through the casino lobby.
                                </p>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Provider availability depends on the selected aggregation network, target market, licensing requirements, and platform configuration.
                                </p>
                            </div>
                            <div>
                                <div className="glass-card p-10 rounded-3xl border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-6">Available live casino content may include:</h3>
                                    <ul className="grid grid-cols-2 gap-4">
                                        {["Live blackjack", "Live roulette", "Live baccarat", "Game shows", "Poker-style games", "Other supported live dealer formats"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]"></div>
                                                <span className="text-sm text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Table Games */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Coins size={48} className="text-white mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-4">Classic Casino Experiences</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">Operators can create a broader casino lobby with supported roulette, blackjack, baccarat, poker, and specialty table games while managing content through a centralized aggregation environment.</p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Casino Game Aggregation for Table Games</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Slots and live casino, our Casino Game Aggregation Provider platform can support access to available table game content from integrated providers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits & Key Features */}
            <section className="py-24 bg-[#121212] border-t border-white/5 relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none"></div>
                <div className="absolute -left-[20%] top-1/4 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-16 items-start">
                        
                        {/* Left Side: Benefits */}
                        <div>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight">Benefits of Working With a Casino Game Aggregation Provider</h2>
                            
                            <div className="space-y-4">
                                {[
                                    { t: "Faster Content Expansion", d: "A Casino Game Aggregation Provider gives operators a streamlined way to expand their game portfolio through supported providers." },
                                    { t: "Reduced Integration Complexity", d: "Connect your casino platform to an aggregation layer rather than maintaining separate technical integrations for every game provider." },
                                    { t: "Broader Game Selection", d: "Offer players access to a wider selection of supported casino content across different game categories and studios." },
                                    { t: "Centralized Management", d: "Manage available content, provider connections, game configurations, and related operational functions through one environment." },
                                    { t: "Scalable Technology", d: "As your casino business grows, your Casino Game Aggregation Provider solution can support additional providers and content where technically and commercially available." },
                                    { t: "Improved Player Experience", d: "A broader and better-organized game lobby can make it easier for players to discover games that match their interests." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex items-start gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[var(--primary)]/5 hover:border-[var(--primary)]/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(var(--primary-rgb),0.05)]">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-xl font-black text-white group-hover:text-[var(--primary)] group-hover:scale-110 group-hover:border-[var(--primary)]/50 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">{item.t}</h4>
                                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Key Features Panel */}
                        <div className="sticky top-32 glass-card p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0A0A0A] rounded-[2.4rem] p-8 md:p-10 h-full relative overflow-hidden">
                                {/* Abstract glowing orb in corner */}
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--primary)]/20 rounded-full blur-[100px] pointer-events-none"></div>
                                
                                <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                                    <Layers className="text-[var(--primary)]" size={28} />
                                    Platform Features
                                </h3>
                                
                                <div className="space-y-2 relative z-10">
                                    {[
                                        { t: "Multiple Providers", d: "Connect supported casino game studios through one aggregation layer." },
                                        { t: "Single API", d: "Streamline integration with a centralized API connection." },
                                        { t: "Game Portfolio", d: "Access supported slots, live casino, table games, and other content." },
                                        { t: "Game Filtering", d: "Organize content by provider, category, theme, and supported filters." },
                                        { t: "Wallet Integration", d: "Connect compatible player wallet systems." },
                                        { t: "Player Sessions", d: "Support compatible player and game session workflows." },
                                        { t: "Mobile Support", d: "Provide supported games across mobile and desktop environments." },
                                        { t: "Reporting", d: "Access relevant gaming and operational information." },
                                        { t: "Centralized Management", d: "Manage supported content and configurations through one environment." },
                                        { t: "Scalable Architecture", d: "Add supported providers and content as your operation grows." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group cursor-default">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/30 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:scale-110 transition-all duration-300 shrink-0 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]">
                                                <CheckCircle2 size={12} className="text-[var(--primary)] group-hover:text-[#0A0A0A] transition-colors" strokeWidth={4} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm md:text-base mb-1 group-hover:text-[var(--primary)] transition-colors">{item.t}</h4>
                                                <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Workflow</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">How Our Casino Game Aggregation Provider Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { step: "1", title: "Understand Your Platform", desc: "We review your casino platform, technical architecture, target markets, existing providers, gaming requirements, and business objectives." },
                            { step: "2", title: "Select Game Providers", desc: "Our Casino Game Aggregation Provider team helps identify compatible game content and provider integrations based on your platform and operating requirements." },
                            { step: "3", title: "Integrate the Aggregation API", desc: "Your casino platform is connected to the aggregation layer through supported APIs and integration technology." },
                            { step: "4", title: "Configure Your Game Lobby", desc: "Games can be categorized and configured according to your casino's branding, player experience, content strategy, and available functionality." },
                            { step: "5", title: "Test the Integration", desc: "The integration is tested across supported game launches, player sessions, wallet functions, transactions, content delivery, and reporting." },
                            { step: "6", title: "Launch Your Casino Content", desc: "Once the integration is ready, supported casino games can be made available through your platform. Additional providers and content can be added as your operation grows." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#121212] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors">
                                <div className="absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-[var(--primary)]/10 transition-colors">
                                    0{item.step}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 mt-4 relative z-10">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our... Solutions */}
            <section className="py-24 bg-[#121212] border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Why Choose Our Provider Solutions?</h2>
                    </div>

                    <ProviderSolutionsSlider />
                </div>
            </section>

            {/* Business Models */}
            <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--secondary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 lg:sticky lg:top-32 relative">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Scalability</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">Built for Different Business Models</h2>
                            <p className="text-gray-400 leading-relaxed mb-12">
                                Our aggregation technology is designed to adapt to your specific technical architecture and commercial requirements, whether you operate a standalone casino or a massive B2B platform.
                            </p>

                            {/* 3D Isometric Business Model Pattern */}
                            <div className="relative w-full h-[300px] perspective-[1200px] group hidden md:block">
                                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:rotate-x-[10deg] group-hover:rotate-z-[5deg]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(35deg) rotateZ(-35deg)' }}>
                                    
                                    {/* Top Layer: Operators / End Users */}
                                    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-32 h-32 bg-[var(--secondary)]/10 border-2 border-[var(--secondary)]/50 rounded-2xl backdrop-blur-md flex items-center justify-center animate-float-layer-top" style={{ transform: 'translateZ(100px)' }}>
                                        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center shadow-[0_0_15px_rgba(var(--secondary-rgb),0.6)]">
                                            <Users size={14} className="text-[#0A0A0A]" />
                                        </div>
                                        <div className="w-16 h-16 rounded-xl border border-[var(--secondary)]/30 flex items-center justify-center">
                                            <Globe size={28} className="text-[var(--secondary)] opacity-80" />
                                        </div>
                                    </div>

                                    {/* Middle Layer: Aggregation Node */}
                                    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-48 h-48 bg-[var(--primary)]/10 border border-[var(--primary)]/40 rounded-3xl backdrop-blur-sm flex items-center justify-center animate-float-layer-mid" style={{ transform: 'translateZ(50px)' }}>
                                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[var(--primary)] animate-ping"></div>
                                        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[var(--primary)] animate-ping" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="w-full h-full border-[0.5px] border-[var(--primary)]/20 rounded-3xl m-4 grid grid-cols-3 grid-rows-3 gap-2 p-3 opacity-30">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="bg-[var(--primary)]/20 rounded-md"></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Layer: Core Infrastructure */}
                                    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-64 h-64 bg-[#111]/80 border border-white/10 rounded-[2.5rem] shadow-[-30px_30px_60px_rgba(0,0,0,0.8)] flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
                                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50"></div>
                                        <Layers size={48} className="text-white/20" />
                                    </div>

                                    {/* Connecting Beams (Visual only) */}
                                    <div className="absolute top-1/2 left-1/2 w-0.5 h-[100px] bg-gradient-to-t from-[var(--primary)]/0 via-[var(--secondary)]/50 to-[var(--secondary)]/0 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(50px) rotateX(90deg)' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Online Casino Operators", desc: "Expand your casino lobby with multiple supported game providers through a centralized aggregation platform." },
                                    { title: "Sportsbook Operators", desc: "Add casino content to an existing sportsbook operation and create a broader multi-product iGaming experience where supported." },
                                    { title: "White Label Casinos", desc: "Connect supported casino game content to your white label platform and expand your available gaming portfolio." },
                                    { title: "iGaming Platform Providers", desc: "Offer integrated casino content as part of your broader gaming platform infrastructure." },
                                    { title: "Casino Aggregators", desc: "Create or expand an ecosystem that connects supported game studios with casino operators and gaming platforms." },
                                    { title: "Crypto Casinos", desc: "Integrate flexible gaming content that can support crypto-based wagers and decentralized platform architectures." }
                                ].map((item, idx) => (
                                    <div key={idx} className={`bg-[#121212] border border-white/5 rounded-2xl p-8 relative overflow-hidden group hover:border-[var(--secondary)]/30 transition-all duration-300 flex flex-col justify-center`}>
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--secondary)]/30 group-hover:w-full group-hover:bg-[var(--secondary)]/5 transition-all duration-500"></div>
                                        <h3 className="text-lg font-bold text-white mb-3 relative z-10 group-hover:text-[var(--secondary)] transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm relative z-10">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {/* FAQs */}
            <section className="py-24 lg:py-32 bg-[#0A0A0A] relative border-t border-white/5">
                {/* Background glow wrapped to prevent overflow without breaking sticky */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
                        
                        {/* Left Side: Container that sticks */}
                        <div className="lg:col-span-5 lg:sticky lg:top-[15vh] flex flex-col justify-start">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 w-fit shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                                </span>
                                <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">Answers</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Frequently Asked Questions
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Find answers to common questions about Casino Game Aggregation Providers and how this technology can support your online gaming operation.
                            </p>

                            <div className="hidden lg:block p-8 rounded-3xl glass-card border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-xl font-bold text-white mb-3 relative z-10">Still have questions?</h3>
                                <p className="text-gray-400 mb-8 relative z-10">Our enterprise integration specialists are available 24/7 to discuss your platform requirements.</p>
                                <button className="w-full py-4 rounded-xl font-bold text-[var(--btn-text)] bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-colors shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] relative z-10">
                                    Contact Support
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Scrollable Accordion */}
                        <div className="lg:col-span-7">
                            <FAQAccordion items={[
                                { q: "What is a Casino Game Aggregation Provider?", a: "A Casino Game Aggregation Provider connects multiple casino game studios with operators through an aggregation platform. Instead creating individual integrations every provider, operators can use a centralized integration to access supported gaming content." },
                                { q: "What games can I access through a Casino Game Aggregation Provider?", a: "Depending on the available provider network, operators can access slots, live casino, table games, jackpots, specialty games, and other supported casino content." },
                                { q: "Why use a Casino Game Aggregation Provider?", a: "A Casino Game Aggregation Provider can reduce integration complexity, expand your game portfolio, simplify content management, and provide a scalable way to connect with multiple supported game studios." },
                                { q: "Can I integrate casino aggregation into my existing platform?", a: "Yes, where the platform and aggregation technology are compatible. API-based integration can connect supported casino platforms with the aggregation service." },
                                { q: "Can I access multiple game providers through one API?", a: "Yes, this is one of the primary benefits of a Casino Game Aggregation Provider. A centralized API can provide access to multiple supported game providers through one integration layer." },
                                { q: "Can casino game aggregation support mobile casinos?", a: "Yes. Supported games can be delivered to compatible mobile environments, depending on the game technology, provider, platform, and integration configuration." },
                                { q: "Can I add new game providers later?", a: "Yes, additional providers can generally be added where they are supported by the aggregation platform and compatible with your technical, commercial, licensing, and market requirements." },
                                { q: "Can I integrate the aggregation platform with my wallet?", a: "Where supported, the Casino Game Aggregation Provider platform can integrate with compatible wallet and player account systems to support gaming transactions and player balances." }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection
                title="Expand Your Casino With a Casino Game Aggregation Provider"
                highlightText="With One Integration"
                description="Simplify content connectivity and expand your game lobby with centralized aggregation technology. Whether you need slots, live casino, or table games, our solutions help you build a broader, more engaging casino experience."
                buttonText="Talk to Our Casino Aggregation Experts"
            />

        </div>
    );
}
