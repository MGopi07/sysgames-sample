import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, LayoutDashboard, Settings, Smartphone, ShieldCheck, Database, CreditCard, Users, Layers, Zap, Gift, Server, Shield, Coins, BarChart3, Lock, Target, Globe } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Casino Platform Development Company",
  description: "Build scalable casino platform with casino platform development company offering custom software, PAM, payments, game integration, CRM, and analytics.",
  keywords: "casino platform development company, casino platform development, custom casino platform, online casino platform development, casino software development company, casino platform software, white label casino platform, turnkey casino platform, casino platform solution, casino platform provider",
};

export default function CasinoPlatformDevPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_20%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--secondary)]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),1)]"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Scalable Technology</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-black text-white mb-8 leading-[1.15] tracking-tight">
                A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Casino Platform Development Company</span><br /> for Scalable Online Casino Businesses
              </h1>

              <div className="space-y-6 mb-10">
                <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-[var(--primary)]/50 pl-6">
                  Launching an online casino requires more than a collection of games. Operators need a reliable technology foundation that connects games, players, payments, wallets, promotions, analytics, security, and back-office operations.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed pl-6">
                  As a casino platform development company, we build customizable casino platforms designed around your business model, target audience, operational requirements, and growth plans.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0A0A0A] bg-[var(--primary)] rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group">
                  Talk to Our Experts <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side Image Graphic */}
            <div className="w-full lg:w-2/5 relative flex justify-center scale-90 lg:scale-100 mt-12 lg:mt-0">
              {/* Image Asset with Blend Mode to remove dark backgrounds */}
              <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center group">
                 <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-105 mix-blend-screen">
                    <Image
                      src="/images/all_service/4-1.png"
                      alt="Casino Platform Development"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      className="object-contain drop-shadow-[0_0_50px_rgba(var(--secondary-rgb),0.5)]"
                      priority
                    />
                 </div>
                 
                 {/* Decorative Glow Behind Image */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--secondary)]/15 blur-[120px] -z-10 rounded-full opacity-60 transition-opacity duration-700 group-hover:opacity-100"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Box UI */}
      <section className="py-24 border-t border-white/5 bg-[#121212]/50 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">The Edge</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose Our Casino Platform?</h2>
            <p className="text-xl text-gray-400">
              A modern casino platform should provide operators control, flexibility, security, and the ability to scale. We combine essential technologies within one centralized ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* 1. Custom Platform Architecture (2x2) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors duration-500 flex flex-col">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <LayoutDashboard size={120} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center justify-center h-48 mb-6 relative">
                {/* Abstract UI building blocks graphic */}
                <div className="absolute w-24 h-24 bg-[var(--primary)]/20 border border-[var(--primary)]/50 rounded-2xl backdrop-blur-sm -translate-x-12 translate-y-4 group-hover:-translate-x-16 group-hover:rotate-12 transition-all duration-700 shadow-xl"></div>
                <div className="absolute w-28 h-28 bg-[var(--secondary)]/20 border border-[var(--secondary)]/50 rounded-2xl backdrop-blur-sm translate-x-10 -translate-y-4 group-hover:translate-x-16 group-hover:-rotate-12 transition-all duration-700 z-10 shadow-xl"></div>
                <div className="absolute w-32 h-20 bg-[#121212] border border-white/20 rounded-2xl backdrop-blur-md z-20 group-hover:scale-110 transition-all duration-500 flex items-center justify-center shadow-2xl">
                  <Settings className="text-white animate-[spin_10s_linear_infinite]" size={32} />
                </div>
              </div>

              <div className="mt-auto relative z-20">
                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-[var(--primary)] transition-colors">Custom Platform Architecture</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Build casino technology around your specific business requirements, workflows, and long-term expansion goals rather than conforming to fixed constraints.</p>
              </div>
            </div>

            {/* 2. Scalable Infrastructure (1x1) */}
            <div className="col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors duration-500 flex flex-col justify-end min-h-[220px]">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/20 group-hover:scale-110 transition-all">
                <Server size={24} className="text-white group-hover:text-[var(--primary)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Infrastructure</h3>
              <p className="text-sm text-gray-400">Support exponentially increasing players, games, transactions, and workloads.</p>
            </div>

            {/* 3. Game Integration (1x1) */}
            <div className="col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--secondary)]/40 transition-colors duration-500 flex flex-col justify-end min-h-[220px]">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--secondary)]/20 group-hover:scale-110 transition-all">
                <Layers size={24} className="text-white group-hover:text-[var(--secondary)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Game Integration</h3>
              <p className="text-sm text-gray-400">Connect diverse casino games and content through unified, flexible API integrations.</p>
            </div>

            {/* 4. PAM Integration (1x1) */}
            <div className="col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors duration-500 flex flex-col justify-end min-h-[220px]">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)]/20 group-hover:scale-110 transition-all">
                <Users size={24} className="text-white group-hover:text-[var(--primary)] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PAM Integration</h3>
              <p className="text-sm text-gray-400">Manage player accounts, secure wallets, tracking activity, and personal preferences.</p>
            </div>

            {/* 7. Advanced Analytics (1x1) */}
            <div className="col-span-1 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--secondary)]/40 transition-colors duration-500 flex flex-col justify-end min-h-[220px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)]/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              <BarChart3 size={32} className="text-[var(--secondary)] mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Advanced Analytics</h3>
              <p className="text-sm text-gray-400 relative z-10">Monitor player activity, revenue, transactions, and platform performance in real-time.</p>
            </div>

            {/* 6. CRM Functionality (2x1) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/40 transition-colors duration-500 flex items-center gap-6">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 to-transparent border border-[var(--primary)]/30 flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Target size={36} className="text-[var(--primary)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">CRM & Marketing Functionality</h3>
                <p className="text-gray-400">Create highly targeted player segments, dynamic promotions, and automated engagement campaigns to maximize retention.</p>
              </div>
            </div>

            {/* 5. Payment Integration (2x1) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-[var(--secondary)]/40 transition-colors duration-500 flex items-center gap-6">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/20 to-transparent border border-[var(--secondary)]/30 flex items-center justify-center group-hover:-rotate-6 transition-transform">
                <CreditCard size={36} className="text-[var(--secondary)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Global Payment Integration</h3>
                <p className="text-gray-400">Connect supported local and international fiat gateways along with modern cryptocurrency processing solutions.</p>
              </div>
            </div>

            {/* 8. Mobile Compatibility (4x1 Banner) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-gradient-to-r from-[var(--primary)]/10 via-[#0A0A0A] to-[var(--secondary)]/10 border border-white/10 hover:border-white/30 rounded-3xl p-8 relative overflow-hidden group transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 mt-2">

              <div className="md:w-2/3 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                  <Smartphone size={14} className="text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Mobile-First</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-3">Flawless Mobile Compatibility</h3>
                <p className="text-gray-300 text-lg">Deliver consistent, blazing-fast casino experiences across desktop, tablet, and all mobile devices without sacrificing visual quality or load times.</p>
              </div>

              <div className="md:w-1/3 flex justify-center relative z-10">
                <div className="w-48 h-16 bg-[#121212] border border-white/20 rounded-full flex items-center justify-center gap-2 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Smartphone size={20} className="text-[var(--primary)]" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Zap size={20} className="text-[var(--secondary)]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Massive Solutions Grid */}
      <section className="py-24 border-t border-white/5 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Comprehensive Capabilities</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Comprehensive Casino Platform Capabilities</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our casino platform development company provides an expansive suite of modules designed to deliver a robust, end-to-end operational environment for your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Casino Platform Development",
                icon: <LayoutDashboard size={28} className="text-[var(--primary)]" />,
                desc: "Every operator has different requirements. Our casino platform development company provides custom casino platform development that is adapted to your brand, market, audience, and business model. Instead of relying entirely on a fixed platform, custom development gives operators greater flexibility over functionality and integrations.",
                features: ["Custom casino frontend", "Personalized branding", "Custom navigation", "Game lobby configuration", "Player account management", "Wallet management", "Payment integration", "Bonus management", "CRM integration", "Analytics", "Reporting", "Back-office functionality"],
                extraTitle: "The Custom Advantage",
                extraDesc: "A casino platform development company can customize the platform to match your operational workflow and long-term expansion strategy."
              },
              {
                title: "Online Casino Platform Development",
                icon: <Globe size={28} className="text-[var(--primary)]" />,
                desc: "Our casino platform development company creates online casino technology designed to bring games, players, payments, and administration together in one environment. The platform can be structured around your preferred casino products and target audience.",
                features: ["Casino lobby", "Game categories", "Search and filtering", "Player registration", "Player wallet", "Deposit and withdrawal functionality", "Bonuses", "Promotions", "Player profiles", "Game history", "Transaction history", "Reporting", "Back-office management"],
                extraTitle: "The Online Advantage",
                extraDesc: "A professional casino platform development company can build an online casino environment that is flexible, responsive, and ready for future feature expansion."
              },
              {
                title: "Casino PAM Development",
                icon: <Users size={28} className="text-[var(--primary)]" />,
                desc: "Player Account Management is one of the most important components of a casino platform. Our casino platform development company can develop or integrate PAM functionality for centralized player management.",
                features: ["Player registration", "Account management", "Player profiles", "Wallet management", "Transaction history", "Player activity", "Verification workflows", "Account controls", "Player segmentation", "Reporting", "Administrative management"],
                extraTitle: "The PAM Advantage",
                extraDesc: "A casino platform development company can connect PAM with games, payments, CRM, bonuses, analytics, and other casino services."
              },
              {
                title: "Casino Wallet Development",
                icon: <Coins size={28} className="text-[var(--primary)]" />,
                desc: "Our casino platform development company can develop wallet functionality for managing player balances and supported transactions. The wallet can be connected to payment providers and other platform modules to create a streamlined financial workflow.",
                features: ["Player balance management", "Deposit management", "Withdrawal management", "Transaction history", "Multiple currency support", "Wallet reporting", "Payment status tracking", "Bonus balance management", "Transaction controls"],
                extraTitle: "The Wallet Advantage",
                extraDesc: "A scalable casino platform development company solution can support wallet functionality alongside PAM and payment integrations."
              },
              {
                title: "Casino Payment Integration",
                icon: <CreditCard size={28} className="text-[var(--primary)]" />,
                desc: "Players expect convenient payment options when depositing and withdrawing from online casino platforms. Our casino platform development company can integrate payment solutions based on your target markets and operational requirements.",
                features: ["Credit and debit cards", "Bank payments", "E-wallets", "Alternative payment methods", "Digital wallets", "Cryptocurrency", "Stablecoins", "Regional payment methods"],
                extraTitle: "The Payment Advantage",
                extraDesc: "A flexible casino platform development company can integrate multiple payment providers through APIs and centralized transaction management."
              },
              {
                title: "Casino Game Integration",
                icon: <Settings size={28} className="text-[var(--primary)]" />,
                desc: "A casino platform needs an engaging and diverse content library. Our casino platform development company can integrate casino games from supported providers and aggregators.",
                features: ["Slots", "Table games", "Roulette", "Blackjack", "Baccarat", "Poker", "Live casino", "Crash games", "Arcade games", "Instant games", "Specialty games"],
                extraTitle: "The Gaming Advantage",
                extraDesc: "Our casino platform development company can organize games into categories and lobbies designed around player preferences."
              },
              {
                title: "Casino Game Aggregation",
                icon: <Layers size={28} className="text-[var(--primary)]" />,
                desc: "Game aggregation allows operators to connect multiple game providers through an integrated technology layer. Our casino platform development company can support game aggregation functionality that simplifies content management and provides access to diverse casino titles.",
                features: ["Multiple game providers", "Centralized game management", "Simplified integration", "Game categorization", "Provider management", "Content configuration", "Game performance monitoring", "Scalable content expansion"],
                extraTitle: "Aggregation Benefits",
                extraDesc: "With a casino platform development company, operators can create a broader casino library without managing every game integration independently."
              },
              {
                title: "Live Casino Platform Development",
                icon: <Users size={28} className="text-[var(--primary)]" />,
                desc: "Live casino provides players with an interactive experience through live dealer games and real-time gameplay. Our casino platform development company can integrate supported live casino technologies and game providers into the casino environment.",
                features: ["Live Blackjack", "Live Roulette", "Live Baccarat", "Game shows", "Multiple table options", "Live dealer interfaces", "Real-time game information", "Responsive gameplay"],
                extraTitle: "The Live Advantage",
                extraDesc: "A casino platform development company can integrate live casino functionality into the wider casino ecosystem."
              },
              {
                title: "Casino CRM Development",
                icon: <Target size={28} className="text-[var(--primary)]" />,
                desc: "Player engagement is an important component of casino operations. Our casino platform development company can integrate CRM tools for managing player relationships and promotional activity.",
                features: ["Player segmentation", "Campaign management", "Promotional campaigns", "Bonus management", "Player lifecycle tracking", "Retention campaigns", "Personalized offers", "Player analytics", "Communication management"],
                extraTitle: "The CRM Advantage",
                extraDesc: "A CRM-enabled casino platform development company solution can help operators organize player engagement activities from a centralized environment."
              },
              {
                title: "Casino Bonus Management",
                icon: <Gift size={28} className="text-[var(--primary)]" />,
                desc: "Our casino platform development company can provide bonus and promotional management tools for creating configurable campaigns. Operators can configure promotional mechanics according to their business strategy and applicable market requirements.",
                features: ["Welcome bonuses", "Deposit promotions", "Free spins", "Loyalty rewards", "Promotional campaigns", "Player-specific offers", "Bonus rules", "Campaign tracking", "Reward management"],
                extraTitle: "The Bonus Advantage",
                extraDesc: "A flexible casino platform development company can connect bonus functionality with player accounts, wallets, CRM, and analytics."
              },
              {
                title: "Casino Analytics & Reporting",
                icon: <BarChart3 size={28} className="text-[var(--primary)]" />,
                desc: "Data helps operators understand how players interact with their platform. Our casino platform development company provides analytics and reporting functionality for monitoring key platform activity.",
                features: ["Player activity", "Game performance", "Revenue reports", "Deposit reports", "Withdrawal reports", "Player retention", "Campaign performance", "Transaction analytics", "Game popularity", "Operational reporting"],
                extraTitle: "The Analytics Advantage",
                extraDesc: "A data-driven casino platform development company can provide centralized dashboards for monitoring casino performance."
              },
              {
                title: "Casino Back-Office Development",
                icon: <Settings size={28} className="text-[var(--primary)]" />,
                desc: "A powerful back office allows operators to manage casino operations from a centralized environment. Our casino platform development company develops administrative functionality managing players, games, payments, bonuses, content, reports, and platform settings.",
                features: ["Player management", "Game management", "Provider management", "Payment management", "Bonus management", "Content management", "Reporting", "User permissions", "Configuration tools", "Operational dashboards"],
                extraTitle: "The Back-Office Advantage",
                extraDesc: "A centralized back office from a casino platform development company simplifies day-to-day platform administration."
              },
              {
                title: "Mobile Casino Platform Development",
                icon: <Smartphone size={28} className="text-[var(--primary)]" />,
                desc: "Players increasingly access casino platforms through mobile devices. A casino platform development company creates responsive interfaces optimized for smartphones and tablets.",
                features: ["Responsive casino lobby", "Mobile game interface", "Touch-friendly navigation", "Mobile wallet", "Mobile payments", "Responsive promotions", "Mobile player account", "Fast-loading interfaces", "Cross-device compatibility"],
                extraTitle: "The Mobile Advantage",
                extraDesc: "A mobile-focused casino platform development company can create consistent experiences across desktop, tablet, and mobile environments."
              },
              {
                title: "White Label Casino Platform",
                icon: <Settings size={28} className="text-[var(--primary)]" />,
                desc: "A white-label casino platform provides businesses with pre-developed technology that can be customized with their own branding and selected features. Our casino platform development company can provide customizable white-label casino solutions for your route to market.",
                features: ["Custom branding", "Casino frontend", "Game library", "PAM", "Wallet", "Payment integration", "CRM", "Bonuses", "Analytics", "Back office", "Mobile compatibility"],
                extraTitle: "The White-Label Advantage",
                extraDesc: "A casino platform development company can customize the white-label environment according to your business requirements."
              },
              {
                title: "Turnkey Casino Platform",
                icon: <Database size={28} className="text-[var(--primary)]" />,
                desc: "A turnkey casino platform brings multiple casino technologies together into one integrated solution. Our casino platform development company can provide turnkey functionality covering games, PAM, payments, wallets, CRM, bonuses, analytics, and back-office management.",
                features: ["Casino platform", "Game integrations", "Game aggregator", "PAM", "Wallet", "Payment gateways", "CRM", "Bonus management", "Analytics", "Reporting", "Back office", "Mobile interface"],
                extraTitle: "The Turnkey Advantage",
                extraDesc: "A turnkey casino platform development company solution can reduce the complexity of coordinating multiple technology systems."
              },
              {
                title: "Casino Platform Security",
                icon: <ShieldCheck size={28} className="text-[var(--primary)]" />,
                desc: "Security should be incorporated throughout the casino platform architecture. Our casino platform development company uses security-focused development practices and technologies to help protect the platform and player information.",
                features: ["Data encryption", "Secure authentication", "Access controls", "API security", "Transaction monitoring", "Anti-fraud functionality", "Administrative permissions", "Activity monitoring", "Secure infrastructure"],
                extraTitle: "The Security Advantage",
                extraDesc: "A security-focused casino platform development company can implement multiple layers of protection across the casino ecosystem."
              }
            ].map((section, idx) => (
              <div key={idx} className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[var(--primary)]/30 hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.05)] flex flex-col hover:-translate-y-1">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 transition-all duration-500 shrink-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-[17px] leading-relaxed mb-10 flex-1">
                    {section.desc}
                  </p>

                  {section.features && (
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-[var(--primary)]/20 transition-colors duration-500">
                      <h4 className="text-[11px] font-black text-[var(--primary)] uppercase tracking-widest mb-5 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]">
                        <Settings size={14} className="text-[var(--primary)] transition-colors duration-300 animate-[spin_10s_linear_infinite]" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {section.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/item">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/50 group-hover/item:bg-[var(--primary)] group-hover/item:shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)] mt-1.5 shrink-0 transition-all duration-300"></span>
                            <span className="group-hover/item:text-white transition-colors">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Accent Footer */}
                {section.extraTitle && (
                  <div className="bg-[#121212] px-6 md:px-8 py-5 border-t border-white/5 flex flex-row items-center justify-between gap-4 group-hover:bg-[var(--primary)]/5 transition-colors duration-500 relative z-10">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm mb-1">{section.extraTitle}</h4>
                      <p className="text-gray-400 text-[13px] leading-relaxed">{section.extraDesc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:text-[#0A0A0A] shadow-md transition-all">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Hover Expansion Pillars (Creative UI) */}
      <section className="py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">

        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Methodology</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Development Process</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hover over the pillars below to explore our comprehensive, end-to-step development pipeline.
            </p>
          </div>

          {/* DESKTOP UI: Flex Hover Pillars */}
          <div className="hidden lg:flex w-full h-[400px] gap-4">
            {[
              { step: "01", title: "Business Analysis", desc: "Understanding your business model, target audience, preferred games, and operational goals.", icon: BarChart3 },
              { step: "02", title: "Platform Architecture", desc: "Defining the technical architecture, integrations, database structure, frontend, and scalability requirements.", icon: Server },
              { step: "03", title: "UI/UX Design", desc: "Creating highly intuitive and engaging interfaces perfectly aligned with your branding and player expectations.", icon: LayoutDashboard },
              { step: "04", title: "Core Development", desc: "Developing the required frontend, backend, PAM, wallet, payment, game, CRM, and administrative components.", icon: Settings },
              { step: "05", title: "Systems Integration", desc: "Integrating games, payment providers, third-party APIs, analytics, CRM, and other essential casino services.", icon: Layers },
              { step: "06", title: "Quality Assurance", desc: "Performing extensive functional, performance, compatibility, integration, and security testing.", icon: ShieldCheck },
              { step: "07", title: "Deployment", desc: "Preparing the fully-tested platform for deployment and executing a smooth, secure launch.", icon: Globe },
              { step: "08", title: "Ongoing Support", desc: "Providing technical maintenance, continuous updates, optimization, and feature enhancements after launch.", icon: Database }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex-1 hover:flex-[4] h-full bg-[#121212] border border-white/5 rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
              >
                {/* Background Glow (Active State) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[#121212] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* COLLAPSED STATE */}
                <div className="absolute inset-0 flex flex-col items-center justify-between py-6 opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--primary)] font-black text-base bg-[#0A0A0A] shadow-lg shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1 flex items-center justify-center min-h-[140px]">
                    <h3 className="text-white font-bold text-lg -rotate-90 whitespace-nowrap tracking-wider">{item.title}</h3>
                  </div>
                  <item.icon size={20} className="text-white/30 shrink-0" />
                </div>

                {/* EXPANDED STATE */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[280px] xl:w-[320px] flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto z-20">
                  <div className="transform -translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <item.icon size={40} className="text-[var(--primary)] mb-4 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2 block">Phase {item.step}</span>
                    <h3 className="text-2xl font-black text-white mb-3 leading-tight">{item.title}</h3>
                  </div>

                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE UI: Standard Stack (Visible only on smaller screens) */}
          <div className="flex lg:hidden flex-col gap-6">
            {[
              { step: "01", title: "Business Analysis", desc: "Understanding your business model, target audience, preferred games, and operational goals.", icon: BarChart3 },
              { step: "02", title: "Platform Architecture", desc: "Defining the technical architecture, integrations, database structure, frontend, and scalability requirements.", icon: Server },
              { step: "03", title: "UI/UX Design", desc: "Creating highly intuitive and engaging interfaces perfectly aligned with your branding and player expectations.", icon: LayoutDashboard },
              { step: "04", title: "Core Development", desc: "Developing the required frontend, backend, PAM, wallet, payment, game, CRM, and administrative components.", icon: Settings },
              { step: "05", title: "Systems Integration", desc: "Integrating games, payment providers, third-party APIs, analytics, CRM, and other essential casino services.", icon: Layers },
              { step: "06", title: "Quality Assurance", desc: "Performing extensive functional, performance, compatibility, integration, and security testing.", icon: ShieldCheck },
              { step: "07", title: "Deployment", desc: "Preparing the fully-tested platform for deployment and executing a smooth, secure launch.", icon: Globe },
              { step: "08", title: "Ongoing Support", desc: "Providing technical maintenance, continuous updates, optimization, and feature enhancements after launch.", icon: Database }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-white/5">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] relative z-10">
                  <item.icon size={32} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Partner With Us (Key Benefits) */}
      <section className="py-32 border-t border-white/5 relative bg-gradient-to-b from-[#121212] to-[#0A0A0A] overflow-hidden">

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Partner With a Casino Platform Development Company?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Working with a specialized casino platform development company gives operators access to dedicated casino technology and development expertise. A reliable casino platform development company can bring these components together into one connected casino ecosystem.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
                {[
                "Custom casino technology", "Scalable architecture", "Game integration", "PAM", "Wallet management",
                "Payment integration", "CRM", "Bonus management", "Analytics", "Back-office tools",
                "Mobile compatibility", "White-label solutions", "Turnkey solutions", "API integrations", "Ongoing technical support"
                ].map((benefit, idx) => (
                <div
                    key={idx}
                    className="group bg-[#0A0A0A] hover:bg-white/[0.02] py-5 px-6 flex items-center gap-4 transition-all duration-300"
                >
                    <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all duration-500">
                        <CheckCircle2 size={18} className="text-[var(--primary)] group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-[15px] font-medium text-gray-300 group-hover:text-white tracking-wide transition-colors duration-300">
                    {benefit}
                    </span>
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro to feature marquee wall */}
      <section className="py-24 border-t border-b border-white/5 bg-[#121212]/30 overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 45s linear infinite;
          }
          .marquee-hover:hover .animate-marquee,
          .marquee-hover:hover .animate-marquee-reverse {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-6 lg:px-12 mb-16 relative z-10">
          <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="lg:w-5/12">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Ecosystem</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">Build Your Casino Platform With Scalable Technology</h2>
            </div>

            <div className="lg:w-7/12 relative">
              <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Your casino platform is the foundation of your online gaming operation. It needs to connect games, players, payments, wallets, promotions, analytics, security, and administration through a reliable technology ecosystem.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our casino platform development company provides custom, white-label, and turnkey casino platform solutions designed to support different operator requirements.
              </p>
            </div>
          </div>

          <div className="text-center mt-24 mb-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Build With</h3>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 marquee-hover py-4">
          <div className="flex w-max animate-marquee gap-5">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-5">
                {[
                  "Custom casino platform development", "Game aggregation", "Online casino software", "PAM", "Player wallets",
                  "Payment integration", "CRM", "Bonus management"
                ].map((tag, idx) => (
                  <span key={idx} className="px-8 py-3.5 rounded-full border border-white/5 bg-[#121212] text-[15px] text-gray-400 font-medium hover:border-[var(--primary)]/40 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 cursor-default whitespace-nowrap hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                    {tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-5">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-5">
                {[
                  "Live casino integration", "Analytics", "Back-office management",
                  "Mobile optimization", "API integrations", "Scalable architecture", "Security-focused technology"
                ].map((tag, idx) => (
                  <span key={idx} className="px-8 py-3.5 rounded-full border border-white/5 bg-[#121212] text-[15px] text-gray-400 font-medium hover:border-[var(--primary)]/40 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 cursor-default whitespace-nowrap hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                    {tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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
                Everything you need to know about our enterprise casino solutions, platform compliance standards, and game integration capabilities.
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
                { q: "What Is a Casino Platform Development Company?", a: "A casino platform development company develops technology used to operate online casino businesses. This can include casino platforms, PAM, wallets, game integrations, payments, CRM, bonuses, analytics, back-office systems, and mobile interfaces." },
                { q: "What Is Custom Casino Platform Development?", a: "Custom casino platform development involves creating casino technology around specific business requirements. A casino platform development company can customize the platform's design, functionality, integrations, payments, games, player management, and administrative tools." },
                { q: "Can You Build a White-Label Casino Platform?", a: "Yes. A casino platform development company can provide white-label casino technology that allows operators to launch under their own branding while using pre-developed platform infrastructure." },
                { q: "What Does a Turnkey Casino Platform Include?", a: "A turnkey solution from a casino platform development company can include the casino frontend, game integrations, PAM, wallet, payment systems, CRM, bonuses, analytics, reporting, and back-office tools." },
                { q: "Can You Integrate Multiple Casino Game Providers?", a: "Yes. A casino platform development company can integrate multiple supported game providers or aggregation services, allowing operators to manage diverse casino content through a centralized platform." },
                { q: "Does the Platform Support Live Casino?", a: "Yes. A casino platform development company can integrate supported live casino games such as Blackjack, Roulette, Baccarat, and other live dealer formats." },
                { q: "Can the Casino Platform Support Multiple Currencies?", a: "Yes. A casino platform development company can design platforms with multi-currency architecture, subject to the selected payment providers and target-market requirements." },
                { q: "Can You Integrate Cryptocurrency Payments?", a: "Yes. A casino platform development company can integrate supported cryptocurrency and stablecoin payment technologies according to the project's technical and applicable market requirements." },
                { q: "Does the Platform Include PAM?", a: "Yes. A casino platform development company can provide PAM functionality for player registration, accounts, wallets, activity, transactions, segmentation, and administrative management." },
                { q: "Can the Casino Platform Integrate With a Sportsbook?", a: "Yes. A casino platform development company can integrate casino and sportsbook environments through shared PAM, wallet, CRM, payments, and other platform infrastructure." },
                { q: "Is the Casino Platform Mobile Compatible?", a: "Yes. A mobile-focused casino platform development company can develop responsive casino interfaces for smartphones, tablets, and desktop devices." },
                { q: "Do You Provide Ongoing Support?", a: "Yes. An experienced casino platform development company can provide technical maintenance, troubleshooting, updates, optimization, integrations, and future feature development." }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
          title="Ready to Launch Your"
          highlightText="Custom Casino Platform?"
          description="Work with our expert developers to build a fully customizable, highly scalable, and secure casino platform tailored to your specific market needs."
          buttonText="Start Your Casino Project"
          secondaryButtonText="Request Demo"
      />

    </div>
  );
}
