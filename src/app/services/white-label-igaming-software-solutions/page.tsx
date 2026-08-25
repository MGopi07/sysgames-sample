import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, LayoutDashboard, ShieldCheck, Wallet, Gamepad2, Settings, BarChart3, HelpCircle, Palette, FileCheck, Zap, Server } from "lucide-react";

export const metadata: Metadata = {
    title: "White Label iGaming Software Solutions | Launch Your Platform Fast",
    description: "Launch faster with White Label iGaming Software Solutions for casino, sportsbook, and sweepstakes platforms. Get branded technology, gaming content, payments, KYC, bonuses, and scalable infrastructure.",
    keywords: "White Label iGaming Software Solutions, White Label iGaming Software, White Label iGaming Platform, White Label Casino Software, White Label Casino Platform, White Label Sportsbook Software, White Label Sportsbook Platform",
};

import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export default function WhiteLabelPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Premium Solutions</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                White Label iGaming Software Solutions, Built Around <span className="text-transparent bg-clip-text bg-gradient-accent">Your Brand</span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                Launching an iGaming business from scratch requires considerable time, technology, integrations, and operational planning. Our White Label iGaming Software Solutions provide an established platform foundation that can be adapted to your brand, business model, and target market.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    "Faster Launch: Adapted to your brand.",
                                    "Ready-Made Tech: Casino & sportsbook.",
                                    "Complete Platform: Wallets, payments, KYC.",
                                    "Reduced Complexity: Save time and effort.",
                                    "Focus on Growth: Brand & acquisition.",
                                    "Scalable Foundation: Expand as you grow."
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[var(--primary)] shrink-0 mt-0.5" size={18} />
                                        <span className="text-sm text-gray-300 leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                Let's Talk About Your Launch <ChevronRight className="ml-2" />
                            </Link>
                        </div>

                        {/* Right side Abstract UI / Image */}
                        <div className="lg:w-1/2 hidden lg:flex justify-center relative">
                            <div className="relative w-full max-w-lg aspect-square">
                                {/* Background Glows */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-full blur-[80px] pointer-events-none z-0"></div>
                                
                                {/* Main Dashboard Card */}
                                <div className="relative z-10 w-full h-full glass-card rounded-2xl border border-white/10 p-6 flex flex-col shadow-2xl overflow-hidden transform perspective-1000 rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-500">
                                    {/* Top Nav */}
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
                                                <LayoutDashboard size={20} className="text-[var(--primary)]" />
                                            </div>
                                            <div>
                                                <div className="h-3 w-24 bg-white/20 rounded mb-1.5"></div>
                                                <div className="h-2 w-16 bg-white/10 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                                        </div>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-[#0A0A0A]/50 rounded-xl p-5 border border-white/5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                                                <div className="h-2 w-16 bg-white/20 rounded"></div>
                                            </div>
                                            <div className="text-2xl font-black text-white tracking-wider">124,592</div>
                                        </div>
                                        <div className="bg-[#0A0A0A]/50 rounded-xl p-5 border border-white/5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-[var(--secondary)]"></div>
                                                <div className="h-2 w-16 bg-white/20 rounded"></div>
                                            </div>
                                            <div className="text-2xl font-black text-white tracking-wider">$84.2M</div>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="flex-1 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]/20 rounded-xl border border-white/5 p-5 flex flex-col justify-end relative overflow-hidden group">
                                        <div className="absolute top-5 left-5 h-2 w-32 bg-white/20 rounded"></div>
                                        <div className="absolute top-5 right-5 h-2 w-12 bg-white/10 rounded"></div>
                                        
                                        <div className="flex items-end gap-3 h-32 mt-8">
                                            {[40, 60, 45, 80, 55, 90, 75, 100, 65, 85].map((h, i) => (
                                                <div key={i} className="flex-1 bg-gradient-to-t from-[var(--primary)]/40 to-[var(--primary)]/10 rounded-t-sm hover:from-[var(--primary)]/80 transition-colors cursor-pointer" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Floating Element */}
                                    <div className="absolute -right-4 top-1/3 glass-card rounded-xl p-4 border border-[var(--secondary)]/30 shadow-[0_0_30px_rgba(var(--secondary-rgb),0.3)] animate-[bounce_3s_infinite]">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={24} className="text-[var(--secondary)]" />
                                            <div>
                                                <div className="h-2 w-16 bg-white/30 rounded mb-1.5"></div>
                                                <div className="h-1.5 w-10 bg-white/10 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Why Choose Us</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">Why Choose White Label iGaming Software Solutions?</h2>
                            <div className="w-12 h-1 bg-gradient-accent rounded-full mb-8"></div>
                            
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Building an iGaming platform independently is complex, costly, and time-consuming. Our white-label solutions eliminate these hurdles by providing a robust, established technology foundation. Move from planning to deployment in record time while maintaining full control over your brand identity.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                                {[
                                    { title: "Brand Identity", desc: "Full control of UI, logos & colors.", icon: Palette },
                                    { title: "Game Integration", desc: "Casino & sportsbook ready.", icon: Gamepad2 },
                                    { title: "Payments & KYC", desc: "Built-in verification & wallets.", icon: Wallet },
                                    { title: "Licensing Support", desc: "Market-compliant structures.", icon: FileCheck },
                                    { title: "Fast Market Entry", desc: "Skip years of development.", icon: Zap },
                                    { title: "Scalable Tech", desc: "Grows alongside your business.", icon: Server }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3.5 group">
                                        <div className="w-11 h-11 rounded-full bg-[var(--primary)]/5 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/10 transition-colors">
                                            <item.icon className="text-[var(--primary)]" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-[15px] mb-0.5">{item.title}</h4>
                                            <p className="text-sm text-gray-400 leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative w-full h-[600px] flex items-center justify-center">
                                {/* Decorative elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
                                
                                <div className="relative z-10 w-full h-full glass-card rounded-3xl border border-white/10 p-6 flex flex-col overflow-hidden shadow-2xl">
                                    {/* Top Nav */}
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                            </div>
                                            <div className="h-4 w-32 bg-white/5 rounded ml-2"></div>
                                        </div>
                                        <div className="h-8 w-8 rounded bg-white/5 flex items-center justify-center border border-white/5">
                                            <Settings size={14} className="text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Platform Modules */}
                                    <div className="grid grid-cols-2 gap-4 flex-1">
                                        {[
                                            { icon: LayoutDashboard, title: "PAM System", color: "from-blue-500/20 to-blue-500/5", iconColor: "text-blue-400", lines: [80, 60] },
                                            { icon: Wallet, title: "Payments Hub", color: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-400", lines: [90, 75] },
                                            { icon: ShieldCheck, title: "Risk Engine", color: "from-rose-500/20 to-rose-500/5", iconColor: "text-rose-400", lines: [40, 85] },
                                            { icon: BarChart3, title: "Live Analytics", color: "from-purple-500/20 to-purple-500/5", iconColor: "text-purple-400", lines: [70, 95] },
                                        ].map((module, i) => (
                                            <div key={i} className="group relative rounded-2xl bg-[#0A0A0A]/60 border border-white/5 p-5 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-colors cursor-pointer">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                                <div className="relative z-10">
                                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                                        <module.icon size={22} className={module.iconColor} />
                                                    </div>
                                                    <h4 className="text-white font-medium mb-3">{module.title}</h4>
                                                    <div className="space-y-2.5">
                                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className="h-full bg-white/20 rounded-full" style={{ width: `${module.lines[0]}%` }}></div>
                                                        </div>
                                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                            <div className="h-full bg-white/20 rounded-full" style={{ width: `${module.lines[1]}%` }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Bottom status bar */}
                                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-medium tracking-wide uppercase">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                            </span>
                                            System Online
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck size={12} className="text-green-500" />
                                            Secured Connection
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--secondary)] tracking-widest uppercase">Core Features</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">What's Included in Our Solutions?</h2>
                        <p className="text-gray-400">Everything you need to launch and operate a successful iGaming platform under one unified environment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {[
                            { 
                                icon: LayoutDashboard, 
                                title: "Complete Platform Architecture", 
                                desc: "Player management, wallets, administration, and platform controls integrated seamlessly into one powerful ecosystem." 
                            },
                            { 
                                icon: Gamepad2, 
                                title: "Casino & Sportsbook Ready", 
                                desc: "Instant access to top-tier casino games, live dealer tables, and global sportsbook markets via integrated premium providers." 
                            },
                            { 
                                icon: Settings, 
                                title: "Custom Branding", 
                                desc: "Logo, colors, domains, and UI fully aligned with your business identity." 
                            },
                            { 
                                icon: Wallet, 
                                title: "Payment & Wallet", 
                                desc: "Manage deposits and player wallets through secure, integrated providers." 
                            },
                            { 
                                icon: ShieldCheck, 
                                title: "KYC & Verification", 
                                desc: "Automated identity checks and compliance requirements built natively into the platform." 
                            },
                            { 
                                icon: CheckCircle2, 
                                title: "Bonus Management", 
                                desc: "Manage complex promotional campaigns, rewards, and multi-tier wagering requirements." 
                            },
                            { 
                                icon: BarChart3, 
                                title: "Admin Dashboard", 
                                desc: "Real-time analytics and detailed reporting for transactions and gaming activity." 
                            },
                            { 
                                icon: HelpCircle, 
                                title: "Responsible Gaming", 
                                desc: "Configurable player controls, session limits, and market-specific monitoring." 
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-6 group relative">
                                <div className="absolute -inset-6 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>
                                <div className="w-16 h-16 rounded-full border-2 border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-center justify-center shrink-0 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/10 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] group-hover:-translate-y-1 transition-all duration-500 relative z-10">
                                    <feature.icon className="text-[var(--primary)] transition-colors duration-500" size={26} />
                                </div>
                                <div className="relative z-10 pt-2">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Models */}
            <section className="py-20 bg-[#121212]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Business Models</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Solutions for Different Business Models</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "White Label Online Casino",
                                desc: "Support branded online casino operations with slots, table games, live casino content, player accounts, payments, bonuses & administration.",
                                image: "/images/casino_model.png"
                            },
                            {
                                title: "White Label Sportsbook",
                                desc: "Create a branded sportsbook experience with supported betting markets, odds integrations, player wallets, promotions, and reporting.",
                                image: "/images/sportsbook_model.png"
                            },
                            {
                                title: "White Label Sweepstakes",
                                desc: "Configured for sweepstakes business models with branded player experiences, promotions, account management, and administrative controls.",
                                image: "/images/sweepstakes_model.png"
                            }
                        ].map((model, idx) => (
                            <div key={idx} className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/10 cursor-pointer shadow-2xl bg-[#0A0A0A]">
                                {/* Base Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                                    style={{ backgroundImage: `url(${model.image})` }}
                                ></div>
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>

                                {/* Content container */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight">{model.title}</h3>
                                        
                                        {/* Description that reveals on hover */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                            <div className="overflow-hidden">
                                                <div className="pt-3">
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {model.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Decorative Top Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--secondary)] tracking-widest uppercase">Workflow</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">The Launch Process</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A streamlined, transparent, and proven methodology to get your custom iGaming brand to market quickly.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { step: "1", title: "Define Requirements", desc: "Analyze business model, target markets, branding, and core objectives." },
                            { step: "2", title: "Configure Platform", desc: "Integrate domains, games, UI elements, and payment methods." },
                            { step: "3", title: "Compliance & Ops", desc: "Align with licensing, KYC verification, and responsible gaming limits." },
                            { step: "4", title: "Testing & QA", desc: "Rigorously review registration, transactions, and gaming content." },
                            { step: "5", title: "Launch & Support", desc: "Deploy your platform with reliable ongoing technical maintenance." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-[var(--primary)]/40 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 shadow-xl overflow-hidden">
                                
                                {/* Massive Background Number Watermark */}
                                <div className="absolute -bottom-8 -right-4 text-[8rem] font-black text-white/[0.03] group-hover:text-[var(--primary)]/[0.05] transition-colors duration-500 pointer-events-none select-none z-0 leading-none">
                                    0{item.step}
                                </div>

                                {/* Top Progress Bar Indicator */}
                                <div className="flex items-center gap-2 mb-8 relative z-10">
                                    <div className="h-2 w-12 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors duration-300 shadow-[0_0_15px_rgba(var(--primary-rgb),0)] group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></div>
                                    {idx < 4 && <div className="h-[1px] flex-1 bg-white/5 hidden lg:block"></div>}
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[var(--primary)] transition-colors relative z-10">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed flex-1 relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-32 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        
                        {/* Sticky Left Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                                    <HelpCircle className="text-[var(--primary)]" size={16} />
                                    <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Answers</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Frequently Asked Questions</h2>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                    Everything you need to know about launching your white-label platform. Can't find the answer you're looking for?
                                </p>
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-colors">
                                    Contact Our Team <ChevronRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Accordion Right Side */}
                        <div className="lg:w-2/3">
                            <FAQAccordion items={[
                                {
                                    q: "What are White Label iGaming Software Solutions?",
                                    a: "Ready-made gaming technology platforms that allow operators to launch an iGaming business under their own brand, including casino/sportsbook technology, payments, KYC, and more."
                                },
                                {
                                    q: "How quickly can I launch?",
                                    a: "Deployment time depends on your business model, branding, licensing, and integrations. Because the core tech is ready, it significantly reduces development time compared to custom builds."
                                },
                                {
                                    q: "Can I customize the platform?",
                                    a: "Yes. Branding, domain, visual identity, gaming content, payment methods, and promotional features can be configured around your requirements."
                                },
                                {
                                    q: "Can I launch both casino and sportsbook?",
                                    a: "Yes. Where supported, we can combine casino and sportsbook functionality under one branded operation on a unified platform."
                                },
                                {
                                    q: "Does it include licensing?",
                                    a: "Licensing arrangements vary according to the provider, jurisdiction, and business model. Our team can explain the applicable pathway for your intended market."
                                },
                                {
                                    q: "What payment methods are supported?",
                                    a: "Supported solutions include regional payment methods, cards, e-wallets, bank methods, and cryptocurrency/stablecoin options where applicable."
                                },
                                {
                                    q: "Can I move to a custom platform later?",
                                    a: "Yes. White label provides an initial foundation. Additional custom features or a transition toward a bespoke platform can be planned as you grow."
                                }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection 
                title="Want a Fast Entry Into"
                highlightText="The iGaming Market?"
                description="Launch your own fully operational casino and sportsbook in record time with our comprehensive, ready-to-go White Label iGaming solutions."
                buttonText="Get Your White Label Solution"
            />

        </div>
    );
}
