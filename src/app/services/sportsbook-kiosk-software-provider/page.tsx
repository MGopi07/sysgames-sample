import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, MonitorSmartphone, Settings, ShieldCheck, Wallet, BarChart3, HelpCircle, Layers, Cpu, Globe, Users, Coins, PenTool, LayoutDashboard, User, Zap, Palette, Sliders, Network } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import CardsSlider from "@/components/ui/CardsSlider";

export const metadata: Metadata = {
    title: "Sportsbook Kiosk Software Provider",
    description: "Looking for a sportsbook kiosk software provider? Launch self-service betting kiosks with secure betting technology, real-time odds, player management, payments, and centralized administration.",
    keywords: "Sportsbook Kiosk Software Provider, Sportsbook Kiosk Software, Sportsbook Kiosk Solution, Sportsbook Kiosk Platform, Sports Betting Kiosk Software, Sports Betting Kiosk Solution, Self Service Betting Kiosk Software, Self-Service Sportsbook Kiosk, Betting Kiosk Software Provider, Betting Kiosk Solution Provider",
};

export default function SportsbookKioskProviderPage() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-[55%]">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Self-Service Solutions</span>
                            </div>

                            <h1 className="text-4xl lg:text-[3.5rem] font-black text-white mb-6 leading-[1.1]">
                                Sportsbook Kiosk Software Provider for <span className="text-transparent bg-clip-text bg-gradient-accent">Modern Betting Businesses</span>
                            </h1>

                            <div className="space-y-4 mb-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
                                <p>
                                    Looking for a reliable Sportsbook Kiosk Software Provider to expand your retail betting operation? Our sportsbook kiosk solutions are designed help operators deploy convenient, self-service betting that connect customers with sportsbook services through a fast and intuitive interface.
                                </p>
                                <p>
                                    As an experienced Sportsbook Kiosk Software Provider, Deliver configurable kiosk technology that can support sportsbook operations across betting shops, retail locations, gaming venues, and other permitted environments. Our solutions bring betting markets, odds, ticketing, player accounts, payment functionality, centralized management together a single platform.
                                </p>
                                <p>
                                    Whether you launching a new sportsbook kiosk network or upgrading an existing retail betting operation, our Sportsbook Kiosk Software Provider services around your business requirements, target markets, branding & operational model.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                                    Talk to Our Sportsbook Kiosk Experts <ChevronRight className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-[45%] hidden lg:flex justify-center relative">
                            {/* Visual representation of a Kiosk UI */}
                            <div className="relative w-full max-w-md aspect-[3/4] bg-[#121212] border-4 border-gray-800 rounded-[2.5rem] shadow-2xl p-3 flex flex-col">
                                <div className="absolute -inset-1 bg-gradient-to-b from-[var(--primary)]/20 to-transparent rounded-[3rem] -z-10 blur-xl"></div>
                                <div className="flex-1 bg-[#0A0A0A] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col relative">
                                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"></div>
                                    <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                                        <div className="h-5 w-24 bg-white/20 rounded-md"></div>
                                        <div className="h-6 w-16 bg-[var(--primary)]/20 rounded-md"></div>
                                    </div>
                                    <div className="p-4 grid grid-cols-2 gap-3 flex-1">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2">
                                                <div className="h-3 w-16 bg-white/20 rounded"></div>
                                                <div className="flex justify-between items-end mt-auto">
                                                    <div className="h-2 w-10 bg-white/10 rounded"></div>
                                                    <div className="h-5 w-12 bg-[var(--primary)]/40 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 border-t border-white/10 bg-white/[0.02] flex gap-3">
                                        <div className="h-10 w-full bg-white/10 rounded-xl"></div>
                                        <div className="h-10 w-full bg-[var(--primary)]/80 rounded-xl"></div>
                                    </div>
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
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Sportsbook Kiosk Software Provider Solutions?</h2>
                        <p className="text-gray-400 mb-4">
                            Traditional retail betting operations require staff to manage customer requests, betting slips, transactions, and ticket processing. Self-service sportsbook kiosks help operators create a more efficient betting experience reducing dependence on manual processes.
                        </p>
                        <p className="text-gray-400">
                            Our Sportsbook Kiosk Software Provider solutions are built to help operators manage self-service betting experiences through modern software, intuitive interfaces, centralized administration, sportsbook integrations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Self-Service Betting Experience", desc: "Give customers a convenient way to browse markets and place permitted bets independently.", icon: User },
                            { title: "Real-Time Sportsbook Integration", desc: "Connect kiosk interfaces with supported sportsbook feeds and betting infrastructure.", icon: Zap },
                            { title: "Custom Branding", desc: "Configure kiosk interfaces around your sportsbook brand, colors, logos, and visual identity.", icon: Palette },
                            { title: "Centralized Management", desc: "Manage kiosk activity, configurations, transactions, and operational settings through an administrative platform.", icon: Sliders },
                            { title: "Secure Transactions", desc: "Integrate supported payment and ticketing functionality based on your market and operating requirements.", icon: ShieldCheck },
                            { title: "Scalable Kiosk Network", desc: "Manage multiple sportsbook kiosks from a centralized environment as your retail operation expands.", icon: Network }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-[var(--primary)]/50 transition-all duration-500 overflow-hidden shadow-2xl">
                                {/* Decorative Background Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-bl-[100px] -z-10 group-hover:scale-125 group-hover:bg-[var(--primary)]/20 transition-all duration-700 blur-2xl"></div>
                                
                                {/* Icon Container */}
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 group-hover:-translate-y-1 transition-all duration-300 shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <item.icon className="text-gray-400 group-hover:text-[var(--primary)] transition-colors relative z-10" size={24} strokeWidth={1.5} />
                                </div>
                                
                                {/* Text Content */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                
                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-accent group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--secondary)] tracking-widest uppercase">Capabilities</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Complete Sportsbook Kiosk Software Solutions</h2>
                        <p className="text-gray-400 mb-4">
                            As a Sportsbook Kiosk Software Provider, Understand operators need more than a touchscreen interface. A successful kiosk network requires sportsbook integration, betting functionality, transaction management, security, reporting & centralized administration.
                        </p>
                        <p className="text-gray-400">
                            Our sportsbook kiosk platform include a range of configurable capabilities designed for retail betting environments.
                        </p>
                    </div>

                    <CardsSlider>
                        {[
                            { icon: MonitorSmartphone, title: "Intuitive Kiosk Interface", desc: "Create a simple and responsive betting experience that allows customers to navigate available sports, competitions, markets, odds, and selections through easy-to-use kiosk interface." },
                            { icon: Layers, title: "Sportsbook Integration", desc: "Our Sportsbook Kiosk Software Provider platform can integrate with supported sportsbook systems to display available betting markets and relevant information through the kiosk interface." },
                            { icon: BarChart3, title: "Real-Time Odds", desc: "Connect kiosks with supported odds feeds provide current market information and betting selections, subject to the sportsbook infrastructure and applicable regulations." },
                            { icon: PenTool, title: "Bet Slip & Ticket Management", desc: "Enable customers to review selections and generate permitted betting tickets through the kiosk. Ticket functionality be configured according to the operator's business model and jurisdiction." },
                            { icon: Wallet, title: "Payment Integration", desc: "Our sportsbook kiosk solutions can support integrations with applicable payment systems for deposits, transactions, and other permitted payment workflows." },
                            { icon: Users, title: "Player Account Support", desc: "Where required, kiosks can connect with player account systems to support account-based betting, identification, balance management, and other permitted functionality." },
                            { icon: LayoutDashboard, title: "Centralized Admin Dashboard", desc: "Manage your sportsbook kiosk network from a centralized administrative environment. Operators can monitor kiosk status, configurations, transactions, reports, and operational activity." },
                            { icon: Globe, title: "Remote Kiosk Management", desc: "Manage multiple kiosks without having to configure every terminal individually. Centralized controls help operators maintain consistent configurations across their retail network." }
                        ].map((module, idx) => (
                            <div key={idx} className="group h-full relative rounded-[2rem] bg-[#121212] border border-white/5 p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-[var(--secondary)]/30 transition-all duration-500 overflow-hidden flex flex-col">
                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/0 to-[var(--secondary)]/0 group-hover:from-[var(--secondary)]/5 group-hover:to-transparent transition-colors duration-500"></div>

                                <div className="relative z-10 flex flex-col flex-1">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/5 border border-[var(--secondary)]/20 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 group-hover:border-[var(--secondary)]/50 transition-all duration-300">
                                        <module.icon className="text-[var(--secondary)] drop-shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--secondary)] transition-colors">{module.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-1">{module.desc}</p>
                                </div>
                            </div>
                        ))}
                    </CardsSlider>
                </div>
            </section>

            {/* Split Content: Retail Shops & Customization */}
            <section className="py-24 bg-[#121212] border-y border-white/5 relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Retail Shops */}
                        <div>
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Target Markets</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Sportsbook Kiosk Software for Retail Betting Shops</h2>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Retail betting shops remain an important channel operators looking to provide customers with convenient in-person betting experiences. A Sportsbook Kiosk Software Provider can help businesses complement traditional cashier-based betting with self-service terminals.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Sportsbook kiosks can be deployed in suitable retail environments to allow customers browse available markets and complete supported betting workflows independently.
                            </p>
                            
                            <h3 className="text-xl font-bold text-white mb-4">Benefits for Retail Betting Operators</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Reduce reliance on manual betting processes.", 
                                    "Provide customers with additional self-service options.", 
                                    "Support faster interaction during busy periods.", 
                                    "Extend sportsbook access across suitable retail locations.", 
                                    "Centralize kiosk monitoring and management.", 
                                    "Maintain consistent branding across the kiosk network.", 
                                    "Collect operational data through centralized reporting.", 
                                    "Scale kiosk deployments as the retail network expands."
                                ].map((item, idx) => (
                                    <div key={idx} className="group relative flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-gradient-to-br hover:from-[var(--primary)]/10 hover:to-transparent hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-6 h-6 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0 border border-[var(--primary)]/20 group-hover:bg-[var(--primary)] transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary-rgb),0)] group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]">
                                            <ChevronRight size={14} className="text-[var(--primary)] group-hover:text-black transition-colors" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customization */}
                        <div className="glass-card p-10 rounded-3xl border border-white/10 relative">
                            <h2 className="text-3xl font-bold text-white mb-6">Custom Sportsbook Kiosk Software</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Every sportsbook operator has different requirements. That's our Sportsbook Kiosk Software Provider services be configured around your business model rather than forcing your operation into a one-size-fits-all system.
                            </p>
                            <p className="text-gray-400 mb-6 font-medium">Customization options can include:</p>
                            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-black/40 mt-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                                <table className="w-full text-left text-[13px] sm:text-sm text-gray-300">
                                    <tbody className="divide-y divide-white/[0.05]">
                                        {[
                                            ["Kiosk interface design", "Brand colors and logos"],
                                            ["Sportsbook API integration", "Odds feed integration"],
                                            ["Betting market configuration", "Ticketing workflows"],
                                            ["Payment integrations", "Player account functionality"],
                                            ["Multi-language interfaces", "Multi-currency functionality"],
                                            ["Administrative controls", "Reporting dashboards"],
                                            ["Kiosk monitoring", "Remote configuration"],
                                            ["Promotional features", ""]
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-white/[0.06] even:bg-white/[0.01] transition-colors group/row">
                                                <td className="px-5 py-3.5 sm:px-6 sm:py-4 border-r border-white/[0.05] w-1/2">
                                                    <div className="flex items-center gap-3">
                                                        <CheckCircle2 size={16} strokeWidth={2.5} className="text-[var(--secondary)]/70 group-hover/row:text-[var(--secondary)] group-hover/row:shadow-[0_0_10px_var(--secondary)] transition-all shrink-0 rounded-full" />
                                                        <span className="font-medium group-hover/row:text-white transition-colors">{row[0]}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3.5 sm:px-6 sm:py-4 w-1/2">
                                                    {row[1] && (
                                                        <div className="flex items-center gap-3">
                                                            <CheckCircle2 size={16} strokeWidth={2.5} className="text-[var(--secondary)]/70 group-hover/row:text-[var(--secondary)] group-hover/row:shadow-[0_0_10px_var(--secondary)] transition-all shrink-0 rounded-full" />
                                                            <span className="font-medium group-hover/row:text-white transition-colors">{row[1]}</span>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-400 mt-8 leading-relaxed text-sm">
                                Our team can help determine which functionality is appropriate your sportsbook, target market, and operating environment.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* How it Works / Development Process */}
            <section className="py-24 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--secondary)] tracking-widest uppercase">Process</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">How Our Sportsbook Kiosk Software Works</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[42px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent overflow-hidden">
                            {/* Animated Energy Beam */}
                            <div 
                                className="absolute top-0 h-full w-[30%] bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent opacity-60"
                                style={{ animation: 'timeline-beam 3s infinite linear' }}
                            ></div>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: `
                            @keyframes timeline-beam {
                                0% { left: -30%; }
                                100% { left: 100%; }
                            }
                        `}} />
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                            {[
                                { step: "1", title: "Understand Your Requirements", desc: "We begin by understanding your sportsbook business model, target market, kiosk deployment plans, branding, sportsbook provider, payment requirements, and operational objectives." },
                                { step: "2", title: "Configure the Kiosk Platform", desc: "Our Sportsbook Kiosk Software Provider team configures the kiosk interface, sportsbook integrations, branding, betting workflows, payment functionality, and administrative tools according to your requirements." },
                                { step: "3", title: "Integrate Sportsbook Services", desc: "The kiosk software is connected with supported sportsbook systems, odds feeds, payment services, ticketing systems, and other required integrations." },
                                { step: "4", title: "Test the Kiosk Experience", desc: "Before deployment, key functionality can be tested across the customer journey, including navigation, market display, selections, ticketing, transactions, account functionality, and administrative controls." },
                                { step: "5", title: "Deploy Your Kiosk Network", desc: "Once the platform is ready, kiosks can be deployed across suitable retail locations. Centralized management tools allow operators to monitor and manage the network as it grows." }
                            ].map((item, idx) => (
                                <div key={idx} className="relative group flex flex-col h-full">
                                    {/* Timeline Node */}
                                    <div className="flex justify-center mb-6 relative z-10">
                                        <div className="w-[84px] h-[84px] rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center group-hover:border-[var(--secondary)]/50 group-hover:shadow-[0_0_20px_rgba(var(--secondary-rgb),0.2)] transition-all duration-500 relative">
                                            <div className="w-14 h-14 rounded-full bg-white/[0.02] flex items-center justify-center group-hover:bg-[var(--secondary)]/10 transition-colors">
                                                <span className="text-xl font-black text-gray-400 group-hover:text-[var(--secondary)] transition-colors">0{item.step}</span>
                                            </div>
                                            {/* Glowing pulse on hover */}
                                            <div className="absolute inset-0 rounded-full bg-[var(--secondary)]/0 group-hover:bg-[var(--secondary)]/10 group-hover:animate-ping opacity-30 duration-1000 pointer-events-none"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="flex-1 bg-[#121212] border border-white/5 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-[var(--secondary)]/30 hover:shadow-[0_15px_30px_-15px_rgba(var(--secondary-rgb),0.2)] transition-all duration-500 relative overflow-hidden flex flex-col">
                                        {/* Ambient Top Glow */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--secondary)]/0 to-transparent group-hover:via-[var(--secondary)]/50 transition-all duration-500"></div>
                                        
                                        <h3 className="text-base font-bold text-white mb-3 group-hover:text-[var(--secondary)] transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us & Scalability */}
            <section className="py-24 bg-[#121212] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Why Work With a Sportsbook Kiosk Software Provider?</h2>
                            <p className="text-gray-400 mb-4 leading-relaxed text-lg">
                                Choosing the right Sportsbook Kiosk Software Provider can have a direct impact on your retail sportsbook's operational efficiency and customer experience.
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Our approach focuses on creating sportsbook kiosk technology that combines usability, integration capabilities, centralized administration, and scalability.
                            </p>
                            <div className="flex flex-col gap-4 mt-8">
                                {[
                                    { t: "Faster Deployment", d: "Use an established kiosk software foundation instead of developing every sportsbook kiosk component from scratch.", icon: Zap },
                                    { t: "Flexible Integration", d: "Connect your kiosk solution with supported sportsbook platforms, odds providers, payment systems, ticketing services, and other technologies.", icon: Network },
                                    { t: "Better Customer Experience", d: "Provide customers with an intuitive interface designed for fast navigation and convenient self-service betting workflows.", icon: User },
                                    { t: "Centralized Control", d: "Manage multiple kiosks through one administrative environment rather maintaining each terminal independently.", icon: Sliders },
                                    { t: "Scalable Infrastructure", d: "Start with a small kiosk deployment and expand the network as your retail sportsbook operation grows.", icon: Layers },
                                    { t: "Brand Consistency", d: "Maintain a consistent sportsbook identity across your kiosk interfaces and retail locations.", icon: Palette }
                                ].map((item, i) => (
                                    <div key={i} className="group relative flex items-start gap-5 p-5 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:bg-gradient-to-r hover:from-white/[0.05] hover:to-transparent hover:border-white/10 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 flex items-center justify-center border border-[var(--primary)]/20 shrink-0 group-hover:scale-110 group-hover:bg-[var(--primary)]/30 group-hover:border-[var(--primary)]/50 transition-all duration-300 shadow-lg">
                                            <item.icon className="text-[var(--primary)] drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" size={20} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-[17px] mb-2 group-hover:text-[var(--primary)] transition-colors">{item.t}</h4>
                                            <p className="text-[15px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative h-full">
                            <div className="sticky top-32 glass-card p-10 md:p-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#121212] to-[#0A0A0A] overflow-hidden group shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-[100px] group-hover:bg-[var(--primary)]/20 transition-colors duration-700 pointer-events-none"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 flex items-center justify-center mb-8 border border-[var(--primary)]/20 shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                                        <ShieldCheck className="text-[var(--primary)] drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" size={36} strokeWidth={1.5} />
                                    </div>
                                    
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[var(--primary)] transition-all duration-500">
                                        Sportsbook Kiosk Software Provider With Scalable Technology
                                    </h3>
                                    
                                    {/* Decorative Divider */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent rounded-full mb-8 opacity-50 group-hover:w-32 group-hover:opacity-100 transition-all duration-700"></div>
                                    
                                    <p className="text-gray-400 leading-relaxed mb-6 text-[17px]">
                                        Your sportsbook kiosk infrastructure should be able to grow alongside your business. Our Sportsbook Kiosk Software Provider solutions designed with scalability in mind, allowing operators to add kiosks, locations, integrations, and functionality as operational requirements increase.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed mb-6 text-[17px]">
                                        From a small retail deployment to a larger sportsbook kiosk network, centralized administration can help operators maintain control over configurations, transactions, reporting, and kiosk activity.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-[17px]">
                                        The platform can also be adapted as your sportsbook technology evolves, helping you avoid unnecessary redevelopment when new requirements emerge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* NEW SECTION: Key Features Table */}
            <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Features</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Key Features of Our Sportsbook Kiosk Software</h2>
                    </div>
                    
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-[#121212] rounded-[2rem] border border-white/5 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] relative">
                        {/* Ambient Table Glow */}
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
                                    { f: "Self-Service Betting", d: "Enables customers to complete supported betting workflows independently." },
                                    { f: "Sportsbook Integration", d: "Connects kiosks with supported sportsbook platforms and services." },
                                    { f: "Real-Time Odds", d: "Displays current supported market and odds information." },
                                    { f: "Bet Slip", d: "Allows customers to review selections before completing a permitted transaction." },
                                    { f: "Ticketing", d: "Supports applicable betting ticket workflows." },
                                    { f: "Payment Integration", d: "Connects with supported payment services." },
                                    { f: "Player Accounts", d: "Supports account-based functionality where applicable." },
                                    { f: "Admin Dashboard", d: "Provides centralized operational management." },
                                    { f: "Remote Management", d: "Helps operators monitor and configure kiosk networks remotely." },
                                    { f: "Reporting", d: "Provides operational and transaction reporting capabilities." },
                                    { f: "Custom Branding", d: "Aligns the kiosk interface with the sportsbook brand." },
                                    { f: "Multi-Language Support", d: "Supports localized kiosk experiences where required." }
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
            
            {/* NEW SECTION: Different Environments */}
            <section className="py-24 bg-[#121212] border-t border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/5 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse"></span>
                            <span className="text-sm font-bold text-[var(--secondary)] tracking-widest uppercase">Environments</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Kiosk Software Provider for Different Betting Environments</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "Retail Betting Shops", desc: "Deploy self-service sportsbook kiosks alongside traditional cashier services to provide customers with additional betting options.", icon: MonitorSmartphone },
                            { title: "Sportsbook Retail Networks", desc: "Manage multiple kiosk locations through centralized software and administrative controls.", icon: Network },
                            { title: "Gaming & Entertainment Venues", desc: "Where permitted, deploy branded sportsbook kiosks within suitable entertainment environments.", icon: Layers },
                            { title: "Large-Scale Kiosk Networks", desc: "Use centralized monitoring, reporting, and configuration tools to manage sportsbook kiosks across multiple locations.", icon: Globe }
                        ].map((item, idx) => (
                            <div key={idx} className="group relative rounded-3xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-[var(--secondary)] hover:to-[var(--secondary)]/10 transition-all duration-700 hover:shadow-[0_0_40px_rgba(var(--secondary-rgb),0.15)] hover:-translate-y-2 cursor-default">
                                {/* Inner Card Container */}
                                <div className="bg-[#0A0A0A] rounded-[23px] h-full p-8 md:p-10 relative overflow-hidden z-10 flex flex-col justify-between">
                                    
                                    {/* Massive Watermark Icon */}
                                    <div className="absolute -top-6 -right-6 text-white/5 group-hover:text-[var(--secondary)]/5 group-hover:scale-125 transition-all duration-700 pointer-events-none group-hover:rotate-12">
                                        <item.icon size={160} strokeWidth={1} />
                                    </div>
                                    
                                    <div className="relative z-20">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--secondary)]/5 border border-[var(--secondary)]/20 flex items-center justify-center mb-8 group-hover:bg-[var(--secondary)] group-hover:border-[var(--secondary)] transition-all duration-500 shadow-lg">
                                            <item.icon className="text-[var(--secondary)] group-hover:text-black transition-colors duration-500" size={28} strokeWidth={1.5} />
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--secondary)] transition-colors duration-500">{item.title}</h3>
                                        <p className="text-[16px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-32 bg-[#0A0A0A] border-t border-white/5">
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
                                { q: "What does a Sportsbook Kiosk Software Provider do?", a: "A Sportsbook Kiosk Software Provider develops or supplies the technology that powers self-service sportsbook kiosks. This can include kiosk interfaces, sportsbook integrations, betting workflows, payment functionality, ticketing, player accounts, reporting, and centralized administration." },
                                { q: "What is sportsbook kiosk software?", a: "Sportsbook kiosk software is the technology used to operate self-service betting terminals. It can connect customers with supported sportsbook markets and provide functionality for browsing selections, reviewing bets, completing permitted transactions, and managing tickets." },
                                { q: "Can sportsbook kiosk software be customized?", a: "Yes. A Sportsbook Kiosk Software Provider can configure the interface, branding, integrations, payment methods, languages, currencies, administrative controls, and other functionality according to the operator's requirements." },
                                { q: "Can I connect my existing sportsbook?", a: "Depending on the available APIs and technical architecture, sportsbook kiosk software integrate with supported sportsbook platforms and odds providers. Integration requirements should be reviewed before development or deployment." },
                                { q: "Can I manage multiple kiosks from one dashboard?", a: "Yes. Centralized administration can allow operators to monitor and manage multiple sportsbook kiosks from one platform, including configurations, operational activity, reporting, and supported remote management functions." },
                                { q: "Can sportsbook kiosks support payment integration?", a: "Supported payment integrations depend on target jurisdiction, payment provider, kiosk hardware, and operating model. Available payment functionality should be configured according to applicable requirements." },
                                { q: "Is sportsbook kiosk software suitable for betting shops?", a: "Yes. Self-service sportsbook kiosks complement cashier-based betting services in suitable retail betting environments, subject to local laws, licensing, and regulatory requirements." },
                                { q: "Can I add more kiosks later?", a: "Yes. A scalable Sportsbook Kiosk Software Provider solution support the addition of new kiosks and locations as your sportsbook operation expands." }
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <CTASection 
                title="Launch Your"
                highlightText="Sportsbook Kiosk Solution"
                description="A modern retail sportsbook needs technology that keeps up with customer expectations. Our scalable kiosk solutions provide robust integrations, seamless self-service betting, and centralized management. Whether launching your first terminal or expanding a retail network, we configure the perfect solution for your business."
                buttonText="Request a Sportsbook Kiosk Consultation"
            />

        </div>
    );
}
