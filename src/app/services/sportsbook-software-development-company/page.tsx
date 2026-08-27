import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Activity, TrendingUp, Users, Wallet, ShieldCheck, Zap, BarChart3, Smartphone, Target, Layers, Settings, Cpu, LayoutTemplate, Briefcase, CircleDollarSign, Code } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Sportsbook Software Development Company",
  description: "Sportsbook software development company delivering real-time odds, live betting, risk management, payments, and scalable technology for modern operators.",
  keywords: "sportsbook software development company, sports betting software development, custom sportsbook software development, white label sportsbook software, turnkey sportsbook solution, hire sportsbook software developer, live betting software development, sportsbook odds engine development, crypto sportsbook software development",
};

export default function SportsbookSoftwareDevPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
            <div className="lg:w-[60%]">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advanced Betting Tech</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                A Sportsbook Software <span className="text-transparent bg-clip-text bg-gradient-accent">Development Company</span> Built for Fast-Moving Betting Markets
              </h1>

              <div className="text-lg lg:text-xl text-gray-400 mb-10 space-y-4 leading-relaxed">
                <p>
                  Sports betting is fast-paced industry where odds, markets, player activity, event conditions can change within seconds. A reliable platform needs technology that can respond quickly while giving operators control over risk, markets, payments, and player management.
                </p>
                <p>
                  Our Sportsbook Software Development Company develops scalable betting platforms equipped with real-time odds, live betting, automated risk management, extensive market coverage, PAM, CRM, payment integration responsive user experiences.
                </p>
                {/* <p>
                  Whether you're launching a new sportsbook or upgrading an existing platform, our Sportsbook Software Development Company create a solution your business model and target audience.
                </p> */}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                  Talk to Our Sportsbook Team <ChevronRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative group scale-75 md:scale-90 lg:scale-100 origin-center mt-12 lg:mt-0" style={{ perspective: "1000px" }}>
              {/* Visual representation of a Sportsbook UI */}
              <div
                className="relative w-full max-w-md aspect-[4/5] bg-[#0A0A0A] rounded-[2rem] border border-[var(--primary)]/30 p-4 flex flex-col overflow-hidden transition-all duration-700 ease-out [transform:rotateY(-25deg)_rotateX(15deg)_rotateZ(5deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_rotateZ(0deg)_translateY(-10px)] shadow-[-20px_20px_40px_rgba(0,0,0,0.7)] group-hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-[2rem] -z-10 blur-xl"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse"></div>
                    <span className="text-[var(--primary)] font-bold text-sm">LIVE BETTING</span>
                  </div>
                  <div className="h-6 w-16 bg-white/10 rounded text-xs flex items-center justify-center text-white font-bold">78:32</div>
                </div>

                {/* Main Match Card */}
                <div className="bg-[#121212] rounded-xl border border-white/5 p-4 mb-4 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[var(--primary)]"></div>
                  <div className="flex justify-between items-center mb-4 text-white font-bold text-lg">
                    <span>Team A</span>
                    <span className="text-[var(--primary)]">2 - 1</span>
                    <span>Team B</span>
                  </div>

                  <div className="text-xs text-gray-400 mb-2">Match Winner (1X2)</div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/5 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/50 cursor-pointer border border-white/5 rounded-lg p-2 text-center transition-colors">
                      <div className="text-gray-400 text-xs mb-1">1</div>
                      <div className="text-white font-bold">1.85</div>
                    </div>
                    <div className="flex-1 bg-white/5 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/50 cursor-pointer border border-white/5 rounded-lg p-2 text-center transition-colors">
                      <div className="text-gray-400 text-xs mb-1">X</div>
                      <div className="text-white font-bold">3.40</div>
                    </div>
                    <div className="flex-1 bg-white/5 hover:bg-[var(--primary)]/20 hover:border-[var(--primary)]/50 cursor-pointer border border-white/5 rounded-lg p-2 text-center transition-colors">
                      <div className="text-gray-400 text-xs mb-1">2</div>
                      <div className="text-white font-bold">4.20</div>
                    </div>
                  </div>
                </div>

                {/* Secondary Match */}
                <div className="bg-[#121212] rounded-xl border border-white/5 p-4 mb-4 opacity-70">
                  <div className="flex justify-between items-center mb-4 text-white font-bold text-sm">
                    <span>Team C</span>
                    <span className="text-[var(--secondary)]">0 - 0</span>
                    <span>Team D</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-2 text-center">
                      <div className="text-white font-bold text-sm">2.10</div>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-2 text-center">
                      <div className="text-white font-bold text-sm">3.10</div>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-2 text-center">
                      <div className="text-white font-bold text-sm">2.85</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bet Slip Preview */}
                <div className="mt-auto bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-xl p-4 border border-[var(--primary)]/30 backdrop-blur-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold text-sm">Bet Slip (2)</span>
                    <span className="text-[var(--primary)] font-bold">Total Odds: 5.27</span>
                  </div>
                  <div className="h-10 bg-[var(--primary)] rounded-lg w-full mt-2 flex items-center justify-center text-[var(--btn-text)] font-bold text-sm cursor-pointer hover:bg-[var(--primary)]/90 transition-colors">
                    Place Bet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 border-t border-white/5 bg-[#121212]/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Why Operators Choose Our Sportsbook Software</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A sportsbook requires more than a simple betting interface. Operators need reliable technology that manage markets, odds, player activity, liabilities, payments, and promotional campaigns from a centralized environment.
              </p>
              <div className="relative w-full h-[320px] mt-12 flex items-center justify-center group scale-75 md:scale-90 lg:scale-100 origin-center" style={{ perspective: "1000px" }}>
                {/* 3D Isometric UI Graphic */}
                <div 
                  className="relative w-[260px] h-[260px] transition-all duration-700 ease-out [transform:rotateX(55deg)_rotateZ(-45deg)] group-hover:[transform:rotateX(55deg)_rotateZ(-45deg)_translateY(-10px)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Base Layer */}
                  <div className="absolute inset-0 bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-[-20px_20px_30px_rgba(0,0,0,0.8)] flex flex-col p-5 justify-between transition-all duration-700 ease-out [transform:translateZ(0px)] group-hover:[transform:translateZ(-10px)]">
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
                      <div className="h-2 w-1/4 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="h-24 w-full bg-[#121212] rounded-xl border border-white/5 flex items-center justify-center">
                       <Activity className="text-white/20" size={32} />
                    </div>
                  </div>
                  
                  {/* Middle Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-2xl border border-[var(--primary)]/20 backdrop-blur-sm flex flex-col p-5 gap-3 opacity-90 transition-all duration-700 ease-out [transform:translateZ(40px)] group-hover:[transform:translateZ(60px)]">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="h-2 w-1/4 bg-[var(--primary)]/30 rounded-full"></div>
                    </div>
                    <div className="flex-1 border border-[var(--primary)]/20 rounded-xl flex gap-2 p-3 bg-[#0A0A0A]/50">
                       <div className="flex-1 bg-[var(--primary)]/10 rounded-lg flex items-end p-2"><div className="w-full h-[40%] bg-[var(--primary)]/30 rounded-sm"></div></div>
                       <div className="flex-1 bg-[var(--primary)]/10 rounded-lg flex items-end p-2"><div className="w-full h-[70%] bg-[var(--primary)]/40 rounded-sm"></div></div>
                       <div className="flex-1 bg-[var(--primary)]/10 rounded-lg flex items-end p-2"><div className="w-full h-[100%] bg-[var(--primary)]/50 rounded-sm"></div></div>
                    </div>
                  </div>

                  {/* Top Layer */}
                  <div className="absolute inset-0 bg-[var(--primary)]/5 rounded-2xl border border-[var(--primary)]/30 backdrop-blur-md flex items-center justify-center opacity-90 transition-all duration-700 ease-out [transform:translateZ(80px)] group-hover:[transform:translateZ(120px)]">
                     <div className="w-20 h-20 rounded-full bg-[#0A0A0A] border-2 border-[var(--primary)] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse mb-1"></span>
                        <span className="text-[var(--primary)] font-black text-xs tracking-widest">LIVE</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[55%] w-full">
              <ul className="space-y-3 lg:space-y-4">
                {[
                  { title: "Real-Time Odds Engine", desc: "Dynamic odds technology designed to respond to changing sporting events.", Icon: Zap },
                  { title: "AI-Assisted Risk Management", desc: "Tools for monitoring exposure, liabilities, and unusual betting patterns.", Icon: ShieldCheck },
                  { title: "Extensive Market Coverage", desc: "Support for 50+ sports and 100+ betting markets.", Icon: Layers },
                  { title: "PAM & CRM Integration", desc: "Centralized player management, promotions, segmentation, and retention tools.", Icon: Users },
                  { title: "Live Betting Technology", desc: "In-play markets and real-time betting functionality.", Icon: Activity },
                  { title: "Crypto & Stablecoin Support", desc: "Payment and wallet integration for supported digital payment models.", Icon: Wallet },
                  { title: "Scalable Architecture", desc: "Technology designed to accommodate growing users, markets, and operational requirements.", Icon: TrendingUp }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-5 p-5 rounded-2xl bg-[#0F0F0F] border border-white/[0.04] hover:bg-[#121212] hover:border-white/10 hover:shadow-[0_10px_30px_rgba(var(--primary-rgb),0.05)] transition-all duration-300 group">
                    <div className="shrink-0 bg-[#1A1A1A] group-hover:bg-[var(--primary)]/10 p-2.5 rounded-xl border border-white/5 transition-colors duration-300 shadow-inner">
                      <item.Icon className="text-[var(--primary)]" size={20} />
                    </div>
                    <div className="pt-0.5">
                      <span className="text-white font-bold block mb-1.5 text-[15px] group-hover:text-[var(--primary)] transition-colors duration-300">{item.title}</span>
                      <span className="text-[14px] text-gray-400 leading-relaxed block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build - Feature Showcase */}
      <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--secondary)]/5 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">What We Build</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Core Sportsbook Features</h2>
            <p className="text-gray-400 text-lg">Everything needed to power a competitive and engaging sports betting ecosystem.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Odds Engine & Risk Management",
                icon: Zap,
                paras: [
                  "The odds engine is at the heart of a modern sportsbook. Our Sportsbook Software Development Company develops and integrates odds technology designed process changing event information and update betting prices efficiently.",
                  "Our solutions support automated pricing, market suspension, odds adjustments, margin configuration, and real-time event updates."
                ],
                conclusion: "With an experienced Sportsbook Software Development Company, operators can create an odds environment to their sports and betting strategy.",
                featuresTitle: "Key Features",
                features: ["Real-time odds updates", "Pre-match odds", "Live odds", "Multiple odds formats", "Automated price updates", "Market suspension", "Margin management", "Odds configuration", "Event management", "Market controls"]
              },
              {
                title: "Live & In-Play Betting",
                icon: Activity,
                paras: [
                  "Live betting allows players to participate throughout a sporting event rather than limiting wagers to pre-match markets. Our Sportsbook Software Development Company develops play functionality designed around fast-moving events."
                ],
                conclusion: "A specialized Sportsbook Software Development Company can help operators create a sportsbook experience remains responsive throughout live events.",
                featuresTitle: "Live Betting Features",
                features: ["Real-time in-play odds", "Live markets", "Live event updates", "Live statistics", "Market suspension", "Cash Out", "Partial Cash Out", "Dynamic betting limits", "Mobile live betting", "Real-time bet status"]
              },
              {
                title: "Sports & Market Coverage",
                icon: Layers,
                paras: [
                  "Different audiences prefer different sports and betting markets. Our Sportsbook Software Development Company can provide broad coverage while allowing operators prioritize the events most relevant their target markets."
                ],
                conclusion: "Our Sportsbook Software Development Company can configure market coverage around your audience, location, and business requirements.",
                featuresTitle: "Sports Coverage",
                features: ["Football", "Basketball", "Cricket", "Tennis", "Baseball", "Ice hockey", "Golf", "Boxing", "MMA", "Motorsports", "Esports", "Regional sports"],
                extraTitle: "Betting Markets",
                extraFeatures: ["Match winner", "Moneyline", "Handicap", "Spreads", "Totals", "Over/Under", "Player props", "Team props", "Parlays", "Accumulators", "Live markets"]
              },
              {
                title: "PAM, CRM & Player Management",
                icon: Users,
                paras: [
                  "Player Account Management and CRM functionality are important components complete sportsbook ecosystem. Our Sportsbook Software Development Company can integrate player accounts, wallets, promotions, segmentation retention tools one centralized environment."
                ],
                conclusion: "A flexible Sportsbook Software Development Company connect PAM and CRM functionality with sportsbook, payment, risk analytics systems.",
                featuresTitle: "Player Management Features",
                features: ["Player registration", "Account management", "Wallet management", "Transaction history", "Player segmentation", "Player verification", "Promotional management", "Player activity tracking", "Reporting", "Administrative controls"]
              },
              {
                title: "Payments & Wallets",
                icon: Wallet,
                paras: [
                  "Players expect convenient and reliable ways deposit and withdraw funds. Our Sportsbook Software Development Company integrate payment methods based on your target market and platform requirements."
                ],
                conclusion: "Our Sportsbook Software Development Company connect payment services with player wallets and transaction management functionality.",
                featuresTitle: "Payment Options",
                features: ["Debit and credit cards", "Bank payments", "E-wallets", "Alternative payment methods", "Digital wallets", "Cryptocurrency", "Stablecoins", "Regional payment methods"]
              }
            ].map((section, idx) => (
              <div key={idx} className="relative bg-[#111111] rounded-[32px] p-8 lg:p-14 border border-white/5 overflow-hidden group hover:border-[var(--primary)]/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Massive Background Number */}
                <div className="absolute -bottom-8 -right-8 text-[180px] lg:text-[240px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[var(--primary)]/[0.04] transition-colors duration-700 leading-none">
                  0{idx + 1}
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
                  {/* Left Column: Content */}
                  <div className="lg:w-5/12 flex flex-col">
                     <div className="flex items-center gap-5 mb-8">
                       <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/[0.03] group-hover:bg-[var(--primary)]/10 transition-colors duration-500 flex items-center justify-center border border-white/5">
                         <section.icon className="text-[var(--primary)]" size={30} />
                       </div>
                       <h3 className="text-3xl font-bold text-white">{section.title}</h3>
                     </div>
                     <div className="space-y-5 mb-10 flex-1">
                       {section.paras.map((p, i) => (
                         <p key={i} className="text-gray-400 leading-relaxed text-[16px]">{p}</p>
                       ))}
                     </div>
                     <div className="p-5 bg-gradient-to-r from-[var(--primary)]/10 to-transparent rounded-2xl border-l-4 border-[var(--primary)] text-[14px] text-gray-300">
                       <strong className="text-white block mb-1">Advantage:</strong> {section.conclusion}
                     </div>
                  </div>

                  {/* Right Column: Features Chips */}
                  <div className="lg:w-7/12">
                     <div className="bg-[#0A0A0A]/50 rounded-[24px] p-8 border border-white/5 h-full">
                       <h4 className="text-[13px] font-black text-[var(--primary)] tracking-widest uppercase mb-6 flex items-center gap-2">
                         <ChevronRight size={16} /> {section.featuresTitle}
                       </h4>
                       <div className="flex flex-wrap gap-2.5">
                         {section.features.map((f, i) => (
                           <div key={i} className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[14px] font-medium group-hover:border-white/20 hover:!bg-[var(--primary)] hover:!text-black hover:!border-[var(--primary)] transition-all cursor-default">
                             {f}
                           </div>
                         ))}
                       </div>

                       {section.extraFeatures && (
                         <>
                           <div className="w-full h-px bg-white/5 my-8"></div>
                           <h4 className="text-[13px] font-black text-[var(--secondary)] tracking-widest uppercase mb-6 flex items-center gap-2">
                             <ChevronRight size={16} /> {section.extraTitle}
                           </h4>
                           <div className="flex flex-wrap gap-2.5">
                             {section.extraFeatures.map((f, i) => (
                               <div key={i} className="px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[14px] font-medium group-hover:border-white/20 hover:!bg-[var(--secondary)] hover:!text-black hover:!border-[var(--secondary)] transition-all cursor-default">
                                 {f}
                               </div>
                             ))}
                           </div>
                         </>
                       )}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-24 bg-[#121212] relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                  <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Workflow</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">How Our Sportsbook Development Process Works</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">From initial market research to deployment and ongoing support, we ensure a seamless execution of your vision.</p>
                
                {/* Premium Decorative Graphic */}
                <div className="w-full h-64 bg-gradient-to-br from-[#0A0A0A] to-[#121212] border border-white/5 rounded-3xl relative overflow-hidden flex items-center justify-center group shadow-2xl">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 via-transparent to-[var(--secondary)]/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Animated Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"></div>
                  
                  {/* Rotating 3D Core */}
                  <div className="relative w-32 h-32 [transform-style:preserve-3d] group-hover:[transform:rotateX(25deg)_rotateY(15deg)] transition-transform duration-700">
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--primary)]/40 animate-[spin_8s_linear_infinite] shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"></div>
                    <div className="absolute inset-3 rounded-full border-2 border-[var(--secondary)]/30 animate-[spin_6s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-6 rounded-full border-2 border-[var(--primary)]/60 border-dashed animate-[spin_12s_linear_infinite]"></div>
                    
                    {/* Center Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--primary)] rounded-full blur-[12px] animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Scrolling Steps */}
            <div className="lg:w-2/3">
              <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-12">
                {[
                  { step: "1", title: "We Understand Your Market", desc: "Our Sportsbook Software Development Company starts by identifying your target markets, preferred sports, betting products, player demographics, payment requirements, and business objectives." },
                  { step: "2", title: "We Plan the Platform", desc: "The Sportsbook Software Development Company team defines the architecture, sportsbook modules, integrations, frontend requirements, backend functionality, and scalability requirements." },
                  { step: "3", title: "We Configure Odds & Risk", desc: "Our Sportsbook Software Development Company configures odds, margins, betting limits, risk controls, market rules, and other sportsbook parameters according to your strategy." },
                  { step: "4", title: "We Integrate the Technology", desc: "The Sportsbook Software Development Company integrates odds feeds, payment gateways, PAM, CRM, analytics, wallets, APIs, and other required services." },
                  { step: "5", title: "We Develop & Customize", desc: "Our Sportsbook Software Development Company customizes the sportsbook interface, branding, workflows, betting features, and administrative tools." },
                  { step: "6", title: "We Test the Platform", desc: "The Sportsbook Software Development Company conducts functional, performance, compatibility, integration, and security-focused testing before deployment." },
                  { step: "7", title: "We Launch the Sportsbook", desc: "Our Sportsbook Software Development Company supports deployment and helps prepare the platform for launch." },
                  { step: "8", title: "We Provide Ongoing Support", desc: "The Sportsbook Software Development Company can continue supporting maintenance, updates, optimization, integrations, troubleshooting, and future development." }
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* The Dot on the timeline */}
                    <div className="absolute -left-[42px] md:-left-[58px] top-1 w-5 h-5 rounded-full bg-[#121212] border-4 border-white/10 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] transition-all duration-300"></div>
                    
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(var(--primary-rgb),0.1)]">
                       <span className="text-[var(--primary)] font-black text-sm mb-3 block uppercase tracking-widest">Step {item.step}</span>
                       <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                       <p className="text-gray-400 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Solutions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Comprehensive Sportsbook Capabilities</h2>
            <p className="text-gray-400 text-lg">Everything you need to build, manage, and scale a world-class sportsbook platform.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Sportsbook Software",
                icon: Settings,
                intro: "Off-the-shelf platforms can provide a quick starting point, they may limit control over functionality, integrations, markets, and user experience. Working a Sportsbook Software Development Company allows operators to customize technology around their specific business requirements.",
                conclusion: "A professional Sportsbook Software Development Company can help you build a sportsbook around your operational strategy rather than adapting your business to a fixed platform.",
                featuresTitle: "Customization Options",
                features: ["Custom frontend", "Custom branding", "Sports selection", "Market selection", "Odds configuration", "Betting limits", "Risk controls", "Payment integration", "PAM", "CRM", "Reporting", "Promotional tools", "Mobile interfaces"]
              },
              {
                title: "AI-Driven Sportsbook Risk Management",
                icon: Cpu,
                intro: "Our Sportsbook Software Development Company incorporate AI-assisted tools to support sportsbook risk analysis and operational monitoring. These technologies can help identify unusual patterns, analyze player behavior, monitor exposure & provide data-driven insights.",
                conclusion: "An AI-enabled Sportsbook Software Development Company give operators additional tools for understanding sportsbook activity and potential risk.",
                featuresTitle: "AI Capabilities",
                features: ["Player behavior analysis", "Betting pattern analysis", "Risk scoring", "Exposure monitoring", "Anomaly detection", "Automated alerts", "Liability analysis", "Player segmentation", "Data-driven reporting"]
              },
              {
                title: "White-Label Sportsbook Software",
                icon: LayoutTemplate,
                intro: "Our Sportsbook Software Development Company can provide white-label sportsbook technology for businesses looking to launch under their own brand. A white-label sportsbook can provide pre-built infrastructure while allowing operators customize visual identity and selected platform features.",
                conclusion: "A Sportsbook Software Development Company can configure the solution according to your target market and operational requirements.",
                featuresTitle: "White-Label Features",
                features: ["Custom branding", "Sportsbook frontend", "Odds integration", "Betting markets", "PAM", "CRM", "Payment integration", "Risk management", "Back-office tools", "Reporting", "Promotional functionality"]
              },
              {
                title: "Turnkey Sportsbook Solution",
                icon: Briefcase,
                intro: "A turnkey sportsbook combines essential betting technology into an integrated platform. Our Sportsbook Software Development Company provide turnkey solution sportsbook operations, player management, payments, risk controls, reporting.",
                conclusion: "A turnkey Sportsbook Software Development Company solution can simplify technology management by bringing multiple components together.",
                featuresTitle: "Turnkey Components",
                features: ["Sportsbook platform", "Odds engine", "Betting markets", "Live betting", "PAM", "CRM", "Payment integration", "Wallets", "Risk management", "Analytics", "Reporting", "Back-office management"]
              },
              {
                title: "Sportsbook Mobile Development",
                icon: Smartphone,
                intro: "Mobile users expect fast, intuitive responsive betting experiences. Our Sportsbook Software Development Company develops mobile-friendly sportsbook platforms for smartphones and tablets.",
                conclusion: "A mobile-focused Sportsbook Software Development Company can help operators provide consistent experiences across desktop and mobile environments.",
                featuresTitle: "Mobile Features",
                features: ["Responsive interface", "Touch-friendly controls", "Mobile bet slip", "Live betting", "Cash Out", "Mobile wallet", "Fast-loading pages", "Responsive event pages", "Cross-device compatibility"]
              },
              {
                title: "Bet Builder Software",
                icon: Layers,
                intro: "Our Sportsbook Software Development Company can integrate Bet Builder functionality that allows eligible selections from a sporting event to be combined into a single betting experience.",
                conclusion: "A flexible Sportsbook Software Development Company can configure Bet Builder functionality around supported sports and markets.",
                featuresTitle: "Bet Builder Features",
                features: ["Player selections", "Team selections", "Match selections", "Multiple markets", "Dynamic pricing", "Bet validation", "Real-time updates", "Mobile support"]
              },
              {
                title: "Cash Out Software",
                icon: CircleDollarSign,
                intro: "Our Sportsbook Software Development Company can provide Cash Out functionality for eligible bets, allowing players settle certain wagers before event concludes.",
                conclusion: "A sportsbook built by an experienced Sportsbook Software Development Company can incorporate Cash Out supported betting markets.",
                featuresTitle: "Cash Out Features",
                features: ["Full Cash Out", "Partial Cash Out", "Dynamic Cash Out values", "Real-time eligibility", "Automated calculations", "Mobile Cash Out", "Bet status updates"]
              },
              {
                title: "Sportsbook Analytics & Reporting",
                icon: BarChart3,
                intro: "Data provides operators valuable insights into betting activity, player behavior, market performance, revenue risk. Our Sportsbook Software Development Company can provide centralized analytics and reporting tools.",
                conclusion: "A data-driven Sportsbook Software Development Company can help operators organize sportsbook information through centralized reporting.",
                featuresTitle: "Reporting Capabilities",
                features: ["Player activity", "Betting activity", "Revenue reports", "Market performance", "Sports performance", "Risk reports", "Transaction reports", "Campaign analytics", "Player segmentation", "Operational dashboards"]
              },
              {
                title: "Sportsbook Security",
                icon: ShieldCheck,
                intro: "Security should be considered throughout sportsbook development. Our Sportsbook Software Development Company incorporates security-focused architecture and controls designed to protect platform and player information.",
                conclusion: "A security-focused Sportsbook Software Development Company can implement multiple protective layers across the sportsbook ecosystem.",
                featuresTitle: "Security Measures",
                features: ["Secure authentication", "Data encryption", "Access controls", "Transaction monitoring", "Anti-fraud functionality", "Activity monitoring", "Secure APIs", "Administrative permissions", "Infrastructure protection"]
              },
              {
                title: "Sportsbook Development Services",
                icon: Code,
                intro: "Our Sportsbook Software Development Company provides a broad range of sportsbook development services.",
                conclusion: "A full-service Sportsbook Software Development Company can coordinate multiple sportsbook requirements through one development process.",
                featuresTitle: "Our Services Include",
                features: ["Custom sportsbook development", "Sports betting software development", "White-label sportsbook development", "Turnkey sportsbook development", "Live betting software development", "Odds engine development", "Risk management development", "PAM development", "CRM integration", "Bet Builder development", "Cash Out development", "Mobile sportsbook development", "Crypto sportsbook development", "Payment integration", "API integration", "Sportsbook UI/UX development", "Sportsbook testing", "Sportsbook maintenance"]
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/5 rounded-3xl p-8 hover:border-[var(--primary)]/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full group">
                 <div className="flex items-start justify-between mb-6">
                   <div className="w-14 h-14 rounded-2xl bg-white/[0.03] group-hover:bg-[var(--primary)]/10 flex items-center justify-center border border-white/10 group-hover:border-[var(--primary)]/20 transition-colors">
                     <feature.icon className="text-[var(--primary)]" size={28} />
                   </div>
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                 <p className="text-gray-400 text-[15px] leading-relaxed mb-8">{feature.intro}</p>
                 
                 <div className="flex-1">
                   <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                     <ChevronRight size={16} className="text-[var(--primary)]" /> {feature.featuresTitle}
                   </h4>
                   <div className="flex flex-wrap gap-2 mb-8">
                     {feature.features.map((f, i) => (
                       <span key={i} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-200 text-[13px] font-medium hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--btn-text)] transition-all cursor-default shadow-sm">
                         {f}
                       </span>
                     ))}
                   </div>
                 </div>

                 <div className="p-5 bg-gradient-to-r from-[var(--primary)]/10 to-transparent rounded-xl border-l-2 border-[var(--primary)]/50 text-[14px] text-gray-200 shadow-[inset_0_0_20px_rgba(var(--primary-rgb),0.05)]">
                   <strong className="text-white block mb-1">Advantage:</strong> {feature.conclusion}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tags Wall */}
      <section className="py-24 border-t border-b border-white/5 bg-[#0A0A0A] overflow-hidden relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite reverse;
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
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advanced Tech</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">Ready to Build a Smarter Sportsbook?</h2>
            </div>
            
            <div className="lg:w-7/12 relative">
              <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Your sportsbook needs to perform when major events attract the highest betting activity. Our Sportsbook Software Development Company combines real-time odds, live betting, risk management, extensive markets, PAM, CRM, payment integration, analytics, and scalable technology.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you need custom sportsbook software, white-label sportsbook software, a turnkey sportsbook solution, live betting software crypto sportsbook technology, our Sportsbook Software Development Company can help create a platform to your business objectives.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-24 mb-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Build Your Sportsbook With</h3>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 marquee-hover py-4">
          {/* Gradient Overlays for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Row 1 (Scrolling Left) */}
          <div className="animate-marquee gap-5 pl-5">
            {[
              "Real-time odds", "Live betting", "50+ sports", "100+ betting markets", "Risk management",
              "AI-assisted tools", "PAM", "CRM", "Cash Out",
              "Real-time odds", "Live betting", "50+ sports", "100+ betting markets", "Risk management",
              "AI-assisted tools", "PAM", "CRM", "Cash Out"
            ].map((tag, idx) => (
              <span key={idx} className="px-8 py-3.5 rounded-full border border-white/5 bg-[#121212] text-[15px] text-gray-400 font-medium hover:border-[var(--primary)]/40 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 cursor-default whitespace-nowrap hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                {tag}
              </span>
            ))}
          </div>

          {/* Row 2 (Scrolling Right) */}
          <div className="animate-marquee-reverse gap-5 pl-5">
            {[
              "Bet Builder", "Payment integrations", "Crypto wallet support", "Mobile compatibility", "Custom branding", "Scalable infrastructure", "Ongoing technical support",
              "Bet Builder", "Payment integrations", "Crypto wallet support", "Mobile compatibility", "Custom branding", "Scalable infrastructure", "Ongoing technical support"
            ].map((tag, idx) => (
              <span key={idx} className="px-8 py-3.5 rounded-full border border-white/5 bg-[#121212] text-[15px] text-gray-400 font-medium hover:border-[var(--primary)]/40 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 cursor-default whitespace-nowrap hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* FAQs */}
      <section className="py-32 bg-[#121212] border-t border-white/5">
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
                    className="flex items-center justify-center w-full py-3.5 rounded-xl bg-[var(--primary)] text-[var(--btn-text)] font-bold text-sm hover:brightness-110 transition-all"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <FAQAccordion items={[
                { q: "What Does a Sportsbook Software Development Company Do?", a: "A Sportsbook Software Development Company develops technology for online sports betting platforms. This can include odds engines, betting markets, live betting, risk management, PAM, CRM, payments, wallets, analytics, mobile solutions, and back-office systems." },
                { q: "What Is Custom Sportsbook Software Development?", a: "Custom sportsbook development allows operators to build technology around their own requirements. A Sportsbook Software Development Company can customize the interface, sports, markets, betting rules, payment systems, risk controls, and player management features." },
                { q: "Can You Build a White-Label Sportsbook?", a: "Yes. A Sportsbook Software Development Company can provide white-label sportsbook software with customizable branding, betting markets, odds integration, PAM, CRM, payments, and backend tools." },
                { q: "Can You Develop a Turnkey Sportsbook?", a: "Yes. A turnkey solution from a Sportsbook Software Development Company can combine odds, betting markets, live betting, PAM, CRM, payments, risk management, reporting, and administrative tools." },
                { q: "Do You Provide Live Betting?", a: "Yes. Our Sportsbook Software Development Company supports live and in-play betting functionality with real-time odds, live markets, event updates, and applicable Cash Out features." },
                { q: "How Many Sports and Markets Can You Support?", a: "Our sportsbook platforms can support 50+ sports and 100+ betting markets, depending on the selected integrations, feeds, sports, and project configuration. A Sportsbook Software Development Company can also prioritize markets based on your target audience." },
                { q: "Can You Integrate Crypto Payments?", a: "Yes. A Sportsbook Software Development Company can integrate supported cryptocurrency and stablecoin payment technologies, subject to applicable technical and regulatory requirements." },
                { q: "Does the Platform Include Risk Management?", a: "Yes. A Sportsbook Software Development Company can integrate tools for monitoring exposure, liabilities, betting limits, player activity, and potential anomalies." },
                { q: "Can Sportsbook Software Integrate With a Casino?", a: "Yes. A Sportsbook Software Development Company can connect sportsbook and casino platforms through shared PAM, wallet, CRM, payment, and player-account infrastructure." },
                { q: "Do You Provide Ongoing Support?", a: "Yes. An experienced Sportsbook Software Development Company can provide maintenance, technical support, troubleshooting, platform optimization, integrations, updates, and new feature development." }
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
          title="Ready to Build a"
          highlightText="High-Performance Sportsbook?"
          description="Deliver an unmatched sports betting experience with our reliable, feature-rich, and globally accessible sportsbook software solutions."
          buttonText="Consult With Us"
          secondaryButtonText="Request Demo"
      />

    </div>
  );
}
