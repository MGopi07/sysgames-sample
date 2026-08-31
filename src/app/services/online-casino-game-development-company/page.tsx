import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Gamepad2, Settings, Code, Layers, Smartphone, Globe, ShieldCheck, Zap, LineChart, Lightbulb, Calculator, Layout, Palette, Puzzle, Rocket } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Online Casino Game Development Company",
    description: "Online casino game development company creating custom slots, table, live-style, branded, and mobile casino games with engaging gameplay and scalable technology.",
    keywords: "online casino game development company, casino game development company, custom casino game development, casino game development services, casino game developers, live casino game development, mobile casino game development, slot game development company",
};

export default function OnlineCasinoGameDevPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-[55%] lg:pr-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Expert Game Studio</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1]">
                                Build Engaging Casino Games
                                <span className="block text-xl lg:text-2xl mt-4 font-bold text-gray-300">
                                    With an <span className="text-transparent bg-clip-text bg-gradient-accent">Online Casino Game Development Company</span>
                                </span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                                A successful casino game needs more than attractive graphics and a spin button. It needs thoughtful mechanics, balanced mathematics, engaging visuals, responsive interfaces, and reliable performance. Our Online Casino Game Development Company creates gaming experiences designed around your brand, audience, and business objectives.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-12">
                                {[
                                    "Original game concepts", "Custom gameplay mechanics", "Brand-focused visual design",
                                    "Mobile-first development", "Multiple game formats", "Configurable mathematics"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[var(--primary)] shrink-0" size={16} />
                                        <span className="text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                    Talk to Our Team <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0 flex justify-center scale-75 md:scale-90 lg:scale-100 origin-center">
                            {/* Graphic Container */}
                            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden  group">
                                {/* <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div> */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/images/all_service/2-1.png"
                                    alt="Casino Games Development"
                                    className="w-full h-full object-cover transition-transform duration-700 "
                                />
                                {/* Overlay UI elements to make it look alive */}
                                
                                <div className="absolute bottom-6 right-6 z-20 glass-card px-4 py-2 flex items-center gap-3 rounded-full border border-white/20">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]"></span>
                                    </span>
                                    <span className="text-xs font-bold text-white tracking-wider uppercase">Live Rendering Engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Casino Game Development */}
            <section className="py-20 border-t border-white/5 bg-[#121212]/50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Bespoke Solutions</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">Custom Casino Game Development</h2>
                            <div className="w-12 h-1 bg-gradient-accent rounded-full mb-8"></div>
                            <p className="mb-6 leading-relaxed">
                                Our Online Casino Game Development Company creates original casino games instead of relying exclusively on generic templates. We develop concepts around brand identity, target audience, market preferences, and desired gameplay experience.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                We support the complete development lifecycle, from initial concept, game mechanics, and art production, to development, testing, integration, and deployment. A professional Online Casino Game Development Company helps transform your initial idea into a complete, market-ready casino game.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative glass-card p-8 rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl">
                                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                            <Code className="text-[var(--primary)]" size={20} />
                                            Custom Development Scope
                                        </h3>
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
                                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]/40"></div>
                                            <div className="w-2 h-2 rounded-full bg-[var(--primary)]/20"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "Game concept creation", "Gameplay mechanics", "Mathematical modeling", "UI/UX design",
                                            "Character & environment", "Animation", "Sound design", "Game development",
                                            "Quality assurance", "Platform integration", "Performance optimization", "Post-launch improvements"
                                        ].map((item, idx) => (
                                            <div key={idx} className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-[var(--primary)]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default">
                                                <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center border border-[var(--primary)]/20 group-hover/item:bg-[var(--primary)] group-hover/item:shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] transition-all duration-300">
                                                    <CheckCircle2 className="text-[var(--primary)] group-hover/item:text-black transition-colors duration-300" size={14} />
                                                </div>
                                                <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors duration-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Formats Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Game Formats</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Our Game Development Expertise</h2>
                        <p className="text-gray-400">We develop diverse, high-performance gaming portfolios across all major casino categories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Slot Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <Gamepad2 className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Slot Game Development</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Classic slots, video slots, branded slots, cascading games, cluster mechanics, and progressive concepts.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Configurable RTP & Volatility</li>
                                <li>• Multipliers, Wilds, Free Spins</li>
                                <li>• Bonus rounds & Cluster mechanics</li>
                            </ul>
                        </div>

                        {/* Table Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <Layers className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Table & Card Games</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Modern versions of traditional games combining familiar rules with contemporary interfaces and smooth animations.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Blackjack, Roulette, Baccarat</li>
                                <li>• Poker, Sic Bo, Craps</li>
                                <li>• Customized table layouts & betting</li>
                            </ul>
                        </div>

                        {/* Live-Style Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <Globe className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Live-Style Casino Games</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Immersive, real-time gaming experiences with dealer-style presentations and dynamic animations.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Real-time interfaces & gameplay</li>
                                <li>• Multiple betting options</li>
                                <li>• Responsive layouts & visual elements</li>
                            </ul>
                        </div>

                        {/* Branded Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Branded Game Development</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Your brand becomes part of the gameplay. We develop games around your identity, characters, or IP.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Brand-specific themes & artwork</li>
                                <li>• Custom characters & symbols</li>
                                <li>• IP-based game series development</li>
                            </ul>
                        </div>

                        {/* Mobile Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <Smartphone className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Mobile Casino Games</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Mobile-first approach creating responsive games optimized for different screen sizes and touch interactions.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Touch-friendly & adaptive interfaces</li>
                                <li>• Portrait and landscape support</li>
                                <li>• Fast loading & lightweight assets</li>
                            </ul>
                        </div>

                        {/* Mini Games */}
                        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-6 border border-[var(--primary)]/20 group-hover:scale-110 transition-transform">
                                <Zap className="text-[var(--primary)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Mini & Casual Games</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Lightweight games designed for quick sessions, promotional campaigns, and loyalty programs.
                            </p>
                            <ul className="text-xs text-gray-500 space-y-2">
                                <li>• Quick-play & casual games</li>
                                <li>• Prize-based & arcade mechanics</li>
                                <li>• Loyalty & promotional games</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Disciplines (Math, Mechanics, UI, Art) */}
            <section className="py-20 bg-[#121212]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Core Disciplines</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">The Anatomy of a Hit Game</h2>
                        <p className="text-gray-400">Mastery across four key pillars is required to build a successful and profitable casino game.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Architectural Grid Container */}
                        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                            {/* Math */}
                            <div className="bg-[#0A0A0A] p-10 lg:p-14 relative group hover:bg-[#0f0f0f] transition-colors duration-500">
                                <div className="absolute -top-4 right-8 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                                    01
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-8 h-px bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">Mathematics</h3>
                                    </div>
                                    <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                                        Rigorous mathematical modeling defines game behavior, balancing payout structures with optimal engagement metrics.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {["RTP configuration", "Volatility configuration", "Hit & Win frequency", "Payout distribution", "Bonus probability", "Mathematical simulations"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] transition-all"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mechanics */}
                            <div className="bg-[#0A0A0A] p-10 lg:p-14 relative group hover:bg-[#0f0f0f] transition-colors duration-500">
                                <div className="absolute -top-4 right-8 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                                    02
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-8 h-px bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">Mechanics</h3>
                                    </div>
                                    <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                                        Deep, engaging gameplay systems engineered to create interaction, variety, and extended session times.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {["Free spins", "Cascading reels", "Progressive features", "Pick-and-win", "Achievement elements", "Buy features"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] transition-all"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* UI/UX */}
                            <div className="bg-[#0A0A0A] p-10 lg:p-14 relative group hover:bg-[#0f0f0f] transition-colors duration-500">
                                <div className="absolute -top-4 right-8 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                                    03
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-8 h-px bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">UI/UX Design</h3>
                                    </div>
                                    <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                                        Crystal-clear interfaces built for intuitive navigation, responsive feedback, and maximum visual appeal.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {["Betting panels", "Menu systems", "Responsive layouts", "Touch interaction", "Accessibility", "Navigation optimization"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] transition-all"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Art & Animation */}
                            <div className="bg-[#0A0A0A] p-10 lg:p-14 relative group hover:bg-[#0f0f0f] transition-colors duration-500">
                                <div className="absolute -top-4 right-8 text-[8rem] font-black text-white/[0.02] group-hover:text-white/[0.04] group-hover:scale-105 transition-all duration-700 pointer-events-none select-none">
                                    04
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-8 h-px bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">Art & Animation</h3>
                                    </div>
                                    <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-md">
                                        High-fidelity visual storytelling that establishes identity through 3D art, effects, and cohesive environments.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                        {["2D/3D artwork", "Character design", "Motion graphics", "Reel animations", "Win effects", "Music integration"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover:bg-[var(--primary)] group-hover:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] transition-all"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 10-Step Development Process */}
            <section className="py-16 relative bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Workflow</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Our Game Development Process</h2>
                        <p className="text-gray-400">A structured workflow to move ideas from concept to deployment.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: LineChart, title: "Market Research", desc: "Understanding the audience, trends, and preferences." },
                            { icon: Lightbulb, title: "Game Concept", desc: "Developing the core theme and mechanics." },
                            { icon: Calculator, title: "Math Design", desc: "Creating RTP, volatility, and payouts." },
                            { icon: Layout, title: "UI/UX Design", desc: "Developing visual hierarchy and navigation." },
                            { icon: Palette, title: "Art & Animation", desc: "Creating artwork, characters, and effects." },
                            { icon: Code, title: "Development", desc: "Converting designs into functional software." },
                            { icon: ShieldCheck, title: "Testing", desc: "Comprehensive QA across devices." },
                            { icon: Puzzle, title: "Integration", desc: "Connecting with platforms and APIs." },
                            { icon: Rocket, title: "Deployment", desc: "Preparing the game for live launch." },
                            { icon: Settings, title: "Post-Launch", desc: "Supporting updates and maintenance." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/[0.02] border border-white/[0.05] hover:border-[var(--primary)]/50 rounded-2xl p-6 relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(var(--primary-rgb),0.3)]">
                                {/* Inner Neon Glow */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/20 blur-[40px] rounded-full transition-all duration-700 pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-white group-hover:border-[var(--primary)] group-hover:text-[var(--primary)] group-hover:shadow-[inset_0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all duration-300">
                                            <item.icon size={24} />
                                        </div>
                                        {/* <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-[var(--primary)]/50 transition-colors">Phase</div> */}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration, Testing, Performance */}
            <section className="py-16 relative overflow-hidden bg-[#050505] border-t border-white/5">
                {/* Immersive Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--primary)]/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Post-Production</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Beyond Development</h2>
                        <p className="text-gray-400 text-lg">Deploying a flawless, high-performing game requires rigorous post-production.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Casino Game Integration */}
                        <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--primary)]/50 transition-all duration-500 group">
                            <div className="relative h-full bg-[#0A0A0A] p-10 rounded-[23px] overflow-hidden flex flex-col">
                                {/* Inner Corner Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/10 blur-[50px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[var(--primary)]/30 transition-all duration-700 pointer-events-none"></div>

                                {/* Icon Node */}
                                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[var(--primary)]/40 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 relative z-10">
                                    <Code className="text-[var(--primary)]" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors relative z-10">Casino Game Integration</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10 flex-grow">Developing the game is only part of the process. We support seamless integration with PAM systems, wallets, APIs, aggregators, and analytics platforms.</p>
                            </div>
                        </div>

                        {/* Testing and QA */}
                        <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--primary)]/50 transition-all duration-500 group">
                            <div className="relative h-full bg-[#0A0A0A] p-10 rounded-[23px] overflow-hidden flex flex-col">
                                {/* Inner Corner Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/10 blur-[50px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[var(--primary)]/30 transition-all duration-700 pointer-events-none"></div>

                                {/* Icon Node */}
                                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[var(--primary)]/40 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 relative z-10">
                                    <ShieldCheck className="text-[var(--primary)]" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors relative z-10">Testing and QA</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10 flex-grow">Quality assurance is essential. We use structured testing processes to identify functional, mathematical, performance, compatibility, and security issues.</p>
                            </div>
                        </div>

                        {/* High-Performance Build */}
                        <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-[var(--primary)]/50 transition-all duration-500 group">
                            <div className="relative h-full bg-[#0A0A0A] p-10 rounded-[23px] overflow-hidden flex flex-col">
                                {/* Inner Corner Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary)]/10 blur-[50px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-[var(--primary)]/30 transition-all duration-700 pointer-events-none"></div>

                                {/* Icon Node */}
                                <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[var(--primary)]/40 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 relative z-10">
                                    <Zap className="text-[var(--primary)]" size={32} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors relative z-10">High-Performance Build</h3>
                                <p className="text-gray-400 leading-relaxed relative z-10 flex-grow">Game assets, animations, interfaces, and backend architecture are optimized to provide smooth, responsive gameplay and reduced resource consumption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 lg:py-20 bg-[#0A0A0A] relative border-t border-white/5">
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
                                Everything you need to know about our casino game development services and custom software process.
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

                        {/* Accordion Right Side */}
                        <div className="lg:col-span-7">
                            <FAQAccordion items={[
                                { q: "What Does an Online Casino Game Development Company Do?", a: "Designs, develops, tests, integrates, and maintains casino games for operators. Services include slots, table games, live-style games, math, UI/UX, and QA." },
                                { q: "Why Choose Custom Development Instead of Pre-Made Games?", a: "Custom development gives operators greater control over themes, mechanics, visual identity, and features, creating games specifically around your brand and audience." },
                                { q: "Can You Create Branded Games?", a: "Yes. We create branded games using your visual identity, characters, themes, campaigns, or approved intellectual property." },
                                { q: "Can You Develop Mobile Casino Games?", a: "Yes. We use a mobile-first approach to develop responsive games optimized for smartphones and tablets with touch controls." },
                                { q: "Can You Configure RTP and Volatility?", a: "Yes. We incorporate specific RTP and volatility settings into the mathematical design of the game based on your requirements." },
                                { q: "How Long Does Casino Game Development Take?", a: "The timeline depends on complexity, features, artwork, mathematical models, and testing requirements. We provide project-specific timelines." },
                                { q: "Can You Integrate Games With Our Existing Platform?", a: "Yes. We support integration with casino platforms, PAM systems, wallets, APIs, aggregators, and analytics tools." },
                                { q: "Do You Provide Post-Launch Support?", a: "Yes. We provide ongoing maintenance, optimization, bug fixes, updates, and additional feature development after launch." }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection
                title="Ready to Build Your"
                highlightText="Next Casino Game?"
                description="From initial concept and math design to development and testing, our team delivers high-quality casino games that players love."
                buttonText="Talk to Our Game Developers"
                secondaryButtonText="Request a Free Consultation"
            />

        </div>
    );
}
