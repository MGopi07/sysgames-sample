import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, LayoutDashboard, MonitorSmartphone, ShieldCheck, Wallet, BarChart3, HelpCircle, Settings, Target, Layers, Cpu, Globe, Users, Coins, Store, Terminal, Trophy, TrendingUp, Zap, Network, Webhook, Lock, MapPin } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Retail Betting Shop Software Provider | Retail Betting Solutions",
    description: "Partner with a retail betting shop software provider for terminals, real-time odds, sportsbook management, payments, risk controls, analytics, and support.",
    keywords: "retail betting shop software provider, retail betting shop software, retail sportsbook software, betting shop software, retail betting platform, retail sportsbook solution, betting terminal software, retail betting technology, retail sportsbook development, retail betting software",
};

const modulesData = [
    {
        title: "Retail Betting Shop Software",
        icon: Store,
        intro: [
            "Our retail betting shop software provider platform provides core technology required to operate physical sportsbook locations.",
            "The software can connect betting terminals, sportsbook systems, odds feeds, markets, transactions, risk controls, and reporting tools."
        ],
        features: ["Sportsbook interface", "Event management", "Market management", "Real-time odds", "Betting terminal integration", "Bet slip functionality", "Betting limits", "Transaction management", "Risk controls", "Shop management", "User management", "Reporting dashboards"],
        outro: "As a retail betting shop software provider, we customize the platform around your retail operation and target market."
    },
    {
        title: "Retail Betting Terminal Software",
        icon: Terminal,
        intro: [
            "Betting terminals are central to many modern retail betting environments. Our retail betting shop software provider solutions integrate supported terminals with a centralized sportsbook backend.",
            "Customers can browse available sports and markets, review odds, create bets, and complete supported transactions through the retail interface."
        ],
        features: ["Sports and event browsing", "Market selection", "Real-time odds display", "Bet slip creation", "Bet confirmation", "Ticket generation", "Transaction tracking", "Terminal monitoring", "User authentication", "Remote configuration"],
        outro: "A reliable retail betting shop software provider helps operators connect multiple terminals maintaining centralized control."
    },
    {
        title: "Retail Sportsbook Software",
        icon: Trophy,
        intro: [
            "Our retail betting shop software provider solution connects physical betting locations with sportsbook technology containing sports, events, markets, and odds.",
            "Operators can configure their retail sportsbook around the sporting events and betting markets most relevant to their customers."
        ],
        features: ["Pre-match betting", "Live betting where supported", "Multiple sports", "Multiple markets", "Real-time odds", "Market suspension", "Event updates", "Betting limits", "Risk management", "Centralized configuration"],
        outro: "A specialized retail betting shop software provider can create consistent sportsbook experience across multiple retail locations."
    },
    {
        title: "Real-Time Odds Management",
        icon: TrendingUp,
        intro: [
            "Odds can change quickly as sporting events develop. Our retail betting shop software provider technology can integrate real-time odds feeds to keep retail betting information updated."
        ],
        features: ["Pre-match odds", "Live odds", "Automated updates", "Multiple odds formats", "Market suspension", "Event updates", "Margin configuration", "Market management", "Odds monitoring"],
        outro: "A centralized odds system allows the retail betting shop software provider platform distribute updated pricing across connected retail locations."
    },
    {
        title: "Live Betting Software for Retail Shops",
        icon: Zap,
        intro: [
            "Live betting gives customers opportunity to place qualifying bets while events are taking place.",
            "Our retail betting shop software provider solution can support in-play betting functionality where applicable."
        ],
        features: ["In-play markets", "Real-time odds", "Live event updates", "Market suspension", "Live bet slips", "Configurable limits", "Bet status tracking", "Cash Out functionality where supported"],
        outro: "The retail betting shop software provider platform connect retail locations live sportsbook infrastructure."
    },
    {
        title: "Centralized Retail Betting Management",
        icon: Network,
        intro: [
            "Managing several physical betting locations becomes increasingly complex without centralized software.",
            "Our retail betting shop software provider platform gives operators centralized tools for managing locations, terminals, users, sports, markets, transactions, and reporting."
        ],
        features: ["Shop management", "Terminal management", "User management", "Sports configuration", "Market configuration", "Betting limits", "Transaction monitoring", "Risk management", "Reporting", "Performance monitoring"],
        outro: "With centralized technology a retail betting shop software provider, operators can manage their retail network more efficiently."
    },
    {
        title: "Risk Management for Retail Betting Shops",
        icon: ShieldCheck,
        intro: [
            "Effective risk management helps operators monitor betting activity and manage configured limits across retail networks.",
            "Our retail betting shop software provider solution can include tools for monitoring exposure, liability, transactions, and betting activity."
        ],
        features: ["Stake limits", "Betting limits", "Liability monitoring", "Exposure monitoring", "Market controls", "Transaction monitoring", "Risk alerts", "Player activity monitoring", "Suspicious activity monitoring", "Risk reporting"],
        outro: "A retail betting shop software provider can configure controls according to an operator's business requirements and applicable market rules."
    },
    {
        title: "Retail Betting Payment Integration",
        icon: Wallet,
        intro: [
            "Payment and transaction management are important components of physical betting operations.",
            "Our retail betting shop software provider platform can integrate supported payment systems and transaction workflows based on the operator's requirements."
        ],
        features: ["Deposit management", "Withdrawal management", "Transaction tracking", "Digital payment integration", "Wallet connectivity", "Payment status monitoring", "Transaction reporting", "Cash-management workflows"],
        outro: "Payment functionality configured for individual locations or across an entire network through the retail betting shop software provider platform."
    },
    {
        title: "Retail Betting Shop Back Office",
        icon: LayoutDashboard,
        intro: [
            "A centralized back office gives operators greater control over their retail betting operations.",
            "Our retail betting shop software provider technology provide administrative tools for managing shops, terminals, users, sports, markets, transactions, and reports."
        ],
        features: ["Shop administration", "Terminal management", "User permissions", "Sports management", "Market management", "Odds configuration", "Risk controls", "Transaction management", "Reporting", "Analytics", "System configuration"],
        outro: "A centralized back office from a retail betting shop software provider simplifies management across multiple betting locations."
    },
    {
        title: "Retail Betting Analytics & Reporting",
        icon: BarChart3,
        intro: [
            "Data can help operators understand how individual locations and their overall retail network are performing.",
            "Our retail betting shop software provider solution provides reporting capabilities across betting activity, transactions, sports, markets, terminals, and locations."
        ],
        features: ["Shop performance", "Terminal activity", "Betting activity", "Transaction reports", "Sports performance", "Market performance", "Revenue reporting", "Risk reports", "Operational analytics", "Location comparisons"],
        outro: "The retail betting shop software provider platform gives operators a centralized view of retail performance."
    },
   
    {
        title: "Custom Retail Betting Shop Software",
        icon: Settings,
        intro: [
            "Every operator has different requirements. Our retail betting shop software provider solutions can be customized according size of your network, target audience, sports coverage, terminals, payment systems, and operational model."
        ],
        features: ["Custom terminal interface", "Custom branding", "Sports selection", "Market selection", "Betting rules", "Risk configuration", "Payment integrations", "API integrations", "Backend customization", "Reporting dashboards", "User permissions"],
        outro: "A custom retail betting shop software provider solution gives operators greater flexibility their retail sportsbook technology."
    },
    {
        title: "Multi-Location Betting Shop Management",
        icon: MapPin,
        intro: [
            "Operators managing multiple locations need centralized technology to maintain consistency and visibility.",
            "Our retail betting shop software provider platform can support multiple betting shops, terminals, users, and administrative levels."
        ],
        features: ["Multiple shop management", "Terminal management", "Location-based reporting", "Centralized configuration", "User permissions", "Shop-level controls", "Regional management", "Performance comparisons", "Transaction monitoring", "Central reporting"],
        outro: "A scalable retail betting shop software provider platform can grow alongside an expanding retail betting network."
    },
    {
        title: "Retail Betting Shop API Integration",
        icon: Webhook,
        intro: [
            "APIs allow retail sportsbook systems to connect with external services and technology providers.",
            "Our retail betting shop software provider solution can support API-based integrations for sportsbook feeds, payment services, terminals, analytics, CRM, and other systems."
        ],
        features: ["Odds feed APIs", "Sports data APIs", "Payment APIs", "Wallet APIs", "CRM APIs", "Analytics APIs", "Terminal APIs", "Player management APIs", "Reporting APIs"],
        outro: "A flexible API architecture allows the retail betting shop software provider platform to connect with the systems required by each operator."
    },
    {
        title: "Retail Betting Shop Security",
        icon: Lock,
        intro: [
            "Security should be considered throughout the technology architecture of a retail sportsbook.",
            "Our retail betting shop software provider platform can incorporate security-focused technologies and controls designed to protect accounts, transactions, systems, and operational data."
        ],
        features: ["Secure authentication", "Data encryption", "Access controls", "Role-based permissions", "API security", "Transaction monitoring", "Anti-fraud capabilities", "Activity monitoring", "Administrative controls"],
        outro: "A security-focused retail betting shop software provider help operators establish a more controlled retail technology environment."
    }
];

export default function RetailBettingShopProviderPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Premium Technology</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                                Retail Betting Shop Software Provider for <span className="text-transparent bg-clip-text bg-gradient-accent">Modern Betting Operations</span>
                            </h1>

                            <div className="space-y-4 mb-8 text-lg text-gray-400 leading-relaxed">
                                <p>
                                    Running physical betting locations requires reliable technology that can connect betting terminals, sports markets, odds, transactions, risk controls, payments, and centralized administration.
                                </p>
                                <p>
                                    As a retail betting shop software provider, we deliver flexible technology solutions designed to help operators manage modern retail sportsbook operations from a centralized environment. Our solutions support individual betting locations, growing retail networks, and operators looking to connect physical betting shops with online and mobile sportsbook channels.
                                </p>
                                
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                    Talk to Our Retail Betting Experts <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center relative scale-75 md:scale-90 lg:scale-100 origin-center mt-12 lg:mt-0">
                            <div className="relative w-full max-w-lg aspect-square glass-card rounded-3xl border border-white/10 p-8 shadow-2xl flex flex-col">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center border border-[var(--primary)]/30">
                                            <MonitorSmartphone className="text-[var(--primary)]" size={20} />
                                        </div>
                                        <div>
                                            <div className="h-4 w-32 bg-white/20 rounded mb-2"></div>
                                            <div className="h-2 w-20 bg-white/10 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 flex-1">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                                            <div className="w-8 h-8 rounded-full bg-white/10 mb-auto"></div>
                                            <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Retail Betting Shop Software Provider Solution?</h2>
                        <p className="text-gray-400">
                            A modern betting shop needs more than a basic betting terminal. Operators require connected technology that provides visibility and control across the entire retail network.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Centralized Management", desc: "Manage multiple shops and terminals through one backend." },
                            { title: "Real-Time Odds", desc: "Deliver continuously updated odds across supported sporting events." },
                            { title: "Terminal Integration", desc: "Connect retail terminals with sportsbook infrastructure." },
                            { title: "Live Betting", desc: "Support qualifying in-play markets and real-time betting experiences." },
                            { title: "Risk Management", desc: "Configure betting limits and monitor exposure." },
                            { title: "Payment Integration", desc: "Connect supported payment and transaction systems." },
                            { title: "Analytics & Reporting", desc: "Monitor shop, terminal, betting, and transaction performance." },
                            { title: "Omnichannel Connectivity", desc: "Connect retail operations with online and mobile sportsbook channels." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[var(--primary)]/30 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="text-[var(--primary)]" size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-400 max-w-2xl mx-auto">Choosing the right retail betting shop software provider helps operators build a more connected and manageable retail sportsbook environment.</p>
                    </div>
                </div>
            </section>

            {/* Detailed Core Modules Section */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Platform Ecosystem</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Retail Betting Shop Software</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our retail betting shop software provider platform provides core technology required to operate physical sportsbook locations. The software can connect betting terminals, sportsbook systems, odds feeds, markets, transactions, risk controls, and reporting tools.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {modulesData.map((mod, idx) => (
                            <div key={idx} className="group relative bg-[#0D0D0D] border border-white/5 rounded-[2rem] p-8 lg:p-10 overflow-hidden hover:bg-[#111] transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl hover:border-[var(--primary)]/30">

                                {/* Bottom right abstract number */}
                                <div className="absolute -bottom-8 -right-6 text-[10rem] font-black text-white/[0.02] pointer-events-none group-hover:text-[var(--primary)]/[0.05] transition-colors duration-500 leading-none select-none z-0">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 group-hover:bg-[var(--primary)]/20 transition-all shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] shrink-0">
                                            <mod.icon size={24} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors leading-tight">{mod.title}</h3>
                                    </div>

                                    {/* Intro */}
                                    <div className="text-gray-400 text-[15px] leading-relaxed mb-8 space-y-4">
                                        {mod.intro.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    {/* Features Box */}
                                    <div className="mb-8 mt-auto bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm group-hover:border-[var(--primary)]/20 transition-colors">
                                        <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] mb-5">Included Features</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {mod.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-300">
                                                    <div className="w-4 h-4 rounded-full bg-[var(--primary)]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--primary)]/40 transition-colors">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]"></div>
                                                    </div>
                                                    <span className="leading-snug group-hover:text-white transition-colors">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outro */}
                                    <div className="pt-6 border-t border-white/5 mt-auto">
                                        <p className="text-gray-400 font-medium text-[14px] leading-relaxed border-l-2 border-[var(--primary)]/40 pl-4 group-hover:border-[var(--primary)] transition-colors">{mod.outro}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Development Process */}
            <section className="py-24 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Workflow</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Retail Betting Shop Development Process</h2>
                        <p className="text-gray-400">Our structured approach ensures successful deployment across your entire retail network.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Business Analysis", desc: "We evaluate your retail network, target markets, sportsbook requirements, terminals, payment systems, and operational goals." },
                            { step: "2", title: "Technology Planning", desc: "Defining the required architecture, integrations, backend, frontend, APIs, and scalability requirements." },
                            { step: "3", title: "UI/UX Design", desc: "Designing intuitive interfaces for retail terminals, administrative users, and other required touchpoints." },
                            { step: "4", title: "Development", desc: "Developing the required software components based exactly on your specifications and brand guidelines." },
                            { step: "5", title: "Integration", desc: "Integrating sportsbook feeds, odds, payment systems, terminals, analytics, CRM, and other technologies." },
                            { step: "6", title: "Testing", desc: "The platform undergoes functional, performance, compatibility, integration, and security testing." },
                            { step: "7", title: "Deployment", desc: "Preparing the solution for deployment across the required retail locations and physical infrastructure." },
                            { step: "8", title: "Support & Optimization", desc: "Providing ongoing technical support, maintenance, updates, optimization, and additional integrations." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[var(--primary)]/40 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 shadow-xl overflow-hidden">
                                <div className="absolute -bottom-8 -right-4 text-[6rem] font-black text-white/[0.02] group-hover:text-[var(--primary)]/[0.05] transition-colors duration-500 pointer-events-none select-none z-0">
                                    0{item.step}
                                </div>
                                <div className="flex items-center gap-2 mb-6 relative z-10">
                                    <div className="h-2 w-8 rounded-full bg-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-colors duration-300"></div>
                                    <div className="h-[1px] flex-1 bg-white/5"></div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors relative z-10">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed flex-1 relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-white mb-6">Benefits of Working With a Retail Betting Shop Software Provider</h2>
                            <div className="w-12 h-1 bg-gradient-accent rounded-full mb-8"></div>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Partnering with a specialized retail betting shop software provider gives operators access to dedicated retail sportsbook technology. The right provider brings multiple retail sportsbook components together through one technology ecosystem.
                            </p>
                            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform">
                                Partner With Us <ChevronRight className="ml-2" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            {[
                                "Centralized management", "Real-time odds", "Betting terminal integration",
                                "Live betting functionality", "Risk management", "Payment integration",
                                "Analytics & Reporting", "Multi-location management", "API connectivity",
                                "Omnichannel integration", "Custom functionality", "Scalable architecture"
                            ].map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/5">
                                    <CheckCircle2 className="text-[var(--primary)] shrink-0" size={18} />
                                    <span className="text-sm font-medium text-gray-300">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
                {/* Background glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[150px]"></div>
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
                                <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">FAQ</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Frequently Asked Questions
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Everything you need to know about partnering with our retail betting software experts.
                            </p>

                            <div className="hidden lg:block p-8 rounded-2xl bg-[#121212] border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                                <p className="text-gray-400 mb-6">Our enterprise integration specialists are available 24/7.</p>
                                <button className="w-full py-4 rounded-xl font-bold text-[var(--btn-text)] bg-gradient-accent hover:opacity-90 transition-opacity">
                                    Contact Support
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Scrollable Accordion */}
                        <div className="lg:col-span-7 space-y-4">
                            <FAQAccordion items={[
                                { q: "What Does a Retail Betting Shop Software Provider Do?", a: "A retail betting shop software provider develops or supplies technology for managing physical betting operations. This includes betting terminals, sportsbook software, odds, markets, payments, risk management, reporting, and centralized administration." },
                                { q: "What Is Retail Betting Shop Software?", a: "Retail betting shop software provides the technology required to operate sportsbook services within physical betting locations." },
                                { q: "Can Your Software Support Multiple Betting Shops?", a: "Yes. We develop centralized technology for managing multiple locations, terminals, users, transactions, and reports." },
                                { q: "Can Betting Terminals Be Integrated?", a: "Yes. Our solution can integrate supported betting terminals with a centralized sportsbook backend." },
                                { q: "Does the Platform Support Live Betting?", a: "Where applicable, the platform can support in-play markets, real-time odds, and other live betting functionality." },
                                { q: "Can Retail Betting Software Connect to an Online Sportsbook?", a: "Yes. We can connect retail and online sportsbook environments through shared infrastructure, APIs, odds feeds, player management, payments, and reporting." },
                                { q: "Can You Integrate Payment Systems?", a: "Yes. Our solution can integrate supported payment technologies and transaction-management systems." },
                                { q: "Does the Platform Include Risk Management?", a: "Yes. We include betting limits, exposure monitoring, liability management, transaction monitoring, and configurable risk controls." },
                                { q: "Can the Platform Support Different Sports?", a: "Yes. The platform can support multiple sports and betting markets depending on the selected sportsbook and data integrations." },
                                { q: "Is the Software Customizable?", a: "Yes. We customize branding, interfaces, markets, terminals, payments, reports, user roles, and integrations according to project requirements." },
                                { q: "Can You Provide Ongoing Support?", a: "Yes. We provide ongoing technical support, maintenance, troubleshooting, updates, integrations, and platform optimization." }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection 
                title="Ready to Upgrade Your"
                highlightText="Retail Betting Shop?"
                description="Empower your betting shop with a fast, reliable, and comprehensive software solution that maximizes profitability and streamlines operations."
                buttonText="Talk to Our Retail Experts"
            />
        </div>
    );
}
