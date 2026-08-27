import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2, Users, Target, Lightbulb, ShieldCheck, Gamepad2,
  Settings, LineChart, Globe2, Cpu, ArrowRight, CheckCircle2,
  Zap, Handshake, Code2, MonitorPlay, Server, Briefcase, LayoutGrid, Terminal, Check
} from 'lucide-react';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'About Us | iGaming Software Development Company',
  description: 'Learn about our iGaming software development company, mission, vision, technology expertise, and goals for delivering scalable casino, sportsbook, and gaming solutions.',
  keywords: 'iGaming Software Development Company, iGaming Software Company, iGaming Technology Company, iGaming Software Provider, iGaming Solutions Provider, Online Casino Software Company, Sportsbook Software Company, Casino Software Development, Sportsbook Software Development, iGaming Platform Development'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden">

      {/* Background Decorators */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--primary)]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--primary)]/5 blur-[100px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-[var(--primary)]/5 blur-[120px]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                <span className="text-xs font-bold text-[var(--primary)] tracking-widest uppercase">About Us</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                Building Smarter <br />
                <span className="text-transparent bg-clip-text bg-gradient-accent">
                  iGaming <br />
                  Technology
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
                We are an iGaming software development company focused on creating reliable, scalable, and flexible technology for businesses entering and growing the online gaming industry. Our goal is simple: build powerful iGaming technology that helps operators launch faster, operate efficiently, and create better player experiences.
              </p>
              <p className="text-base text-slate-400 max-w-3xl leading-relaxed mb-10">
                From online casino and sportsbook platforms to white label solutions, casino game aggregation, slot game technology, retail betting solutions, and betting kiosks, we provide a range of solutions designed around the evolving needs of modern iGaming businesses.
              </p>

              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]">
                Talk to Our iGaming Experts
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Visual Anchor - Abstract 3D Glassmorphic Grid */}
            <div className="hidden lg:block relative w-full h-[600px] perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 via-[var(--primary)]/10 to-transparent rounded-[40px] blur-3xl"></div>
              <div className="relative w-full h-full transform-gpu rotate-y-[-15deg] rotate-x-[10deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-1000 ease-out">
                {/* Main Glass Panel */}
                <div className="absolute inset-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/50"></div>

                  {/* Mock Dashboard UI */}
                  <div className="p-8 h-full flex flex-col gap-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-6">
                      <div className="w-32 h-6 bg-white/10 rounded-full"></div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#050505]/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--primary)]/20 blur-2xl"></div>
                        <div className="text-gray-400 text-sm mb-2">Platform Scalability</div>
                        <div className="text-3xl font-black text-white">100k+</div>
                        <div className="text-[var(--primary)] text-xs mt-2 font-bold">+ Concurrent Users</div>
                      </div>
                      <div className="bg-[#050505]/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--primary)]/20 blur-2xl"></div>
                        <div className="text-gray-400 text-sm mb-2">API Response</div>
                        <div className="text-3xl font-black text-white">&lt;50ms</div>
                        <div className="text-[var(--primary)] text-xs mt-2 font-bold">Latency Optimized</div>
                      </div>
                    </div>

                    <div className="flex-1 bg-[#050505]/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex items-end">
                      {/* Decorative Graph */}
                      <div className="w-full flex items-end gap-2 h-32 opacity-50">
                        {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--primary)]/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-10 -left-10 bg-[#111111] p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md animate-bounce-slow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="text-white font-bold">Enterprise Security</div>
                      <div className="text-gray-400 text-sm">ISO Certified Core</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & TRUST SIGNALS */}
      <section className="relative py-10 z-10 bg-[#111111] border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center lg:justify-between gap-8 text-center lg:text-left">
            {[
              { label: "Platform Uptime", value: "99.9%", color: "text-[var(--primary)]" },
              { label: "Platform Integrations", value: "50+", color: "text-white" },
              { label: "Dedicated SLA Support", value: "24/7", color: "text-[var(--primary)]" },
              { label: "Supported Markets", value: "Global", color: "text-white" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider w-32 leading-tight">{stat.label}</div>
                {i < 3 && <div className="hidden lg:block w-px h-12 bg-white/10 ml-8"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE (Isometric UI Upgrade) */}
      <section className="relative py-24 lg:py-32 px-6 bg-[#0A0A0A] z-10 overflow-hidden perspective-1000">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Side */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
                <Users size={14} className="text-gray-400" />
                <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">Company Overview</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Who We Are</h2>
              <div className="w-20 h-1.5 bg-gradient-accent rounded-full mb-10"></div>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  The iGaming industry moves quickly, and operators need technology that can keep pace. We combine software development expertise, gaming technology, platform integrations, and industry-focused knowledge to help businesses turn their ideas into functional iGaming products.
                </p>
                <p>
                  Our approach goes beyond simply delivering software. We work to understand each client's business model, target audience, market requirements, technical environment, and long-term goals before developing the right technology solution.
                </p>
                <div className="p-6 mt-8 rounded-2xl bg-[#111111] border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--primary)]"></div>
                  <p className="text-[var(--primary)] font-bold text-lg relative z-10">
                    Whether you are launching a gaming brand or expanding an existing operation, our team provides technology designed to support your journey from concept to deployment and beyond.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side - Isometric UI Pattern */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute inset-0 bg-[var(--primary)]/5 rounded-full blur-[120px] animate-pulse"></div>

              {/* Isometric Container */}
              <div className="absolute inset-0 flex items-center justify-center transform-gpu rotate-x-[55deg] rotate-z-[-45deg] scale-90 hover:scale-100 transition-transform duration-700 ease-out group">

                {/* Isometric Grid Base */}
                <div className="relative grid grid-cols-2 gap-6 w-[400px] h-[400px]">

                  {/* Card 1 (Top Left) */}
                  <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.8)] p-6 transform transition-transform duration-500 hover:-translate-z-4 hover:-translate-y-4 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent"></div>
                    <Cpu size={40} className="text-white mb-4 relative z-10" />
                    <div className="font-bold text-white text-lg relative z-10">Scalable Tech</div>
                  </div>

                  {/* Card 2 (Top Right) */}
                  <div className="bg-[#151515]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.8)] p-6 transform transition-transform duration-500 hover:-translate-z-4 hover:-translate-y-4 translate-z-[20px] -translate-y-2 translate-x-2 flex flex-col items-center justify-center">
                    <Globe2 size={40} className="text-[var(--primary)] mb-4" />
                    <div className="font-bold text-white text-lg">Global Reach</div>
                  </div>

                  {/* Card 3 (Bottom Left) */}
                  <div className="bg-[#151515]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.8)] p-6 transform transition-transform duration-500 hover:-translate-z-4 hover:-translate-y-4 translate-z-[40px] -translate-y-4 -translate-x-2 flex flex-col items-center justify-center">
                    <ShieldCheck size={40} className="text-[var(--primary)] mb-4" />
                    <div className="font-bold text-white text-lg">Secure Core</div>
                  </div>

                  {/* Card 4 (Bottom Right) */}
                  <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[20px_20px_50px_rgba(0,0,0,0.8)] p-6 transform transition-transform duration-500 hover:-translate-z-4 hover:-translate-y-4 translate-z-[60px] -translate-y-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tl from-[var(--primary)]/20 to-transparent"></div>
                    <div className="text-4xl font-black text-white mb-2 relative z-10">10+</div>
                    <div className="font-medium text-slate-300 text-sm tracking-wider uppercase relative z-10">Years Exp</div>
                  </div>

                  {/* Floating Connection Lines */}
                  <div className="absolute top-1/2 left-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent -translate-x-1/2 -translate-y-1/2 -rotate-45 translate-z-[30px]"></div>
                  <div className="absolute top-1/2 left-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 translate-z-[30px]"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO (Asymmetrical Bento Grid) */}
      <section className="relative py-24 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 mb-6">
              <LayoutGrid size={14} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">What We Do</h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">We develop and provide iGaming solutions across multiple areas of the gaming ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">

            {/* Hero Card 1 - Online Casino (Spans 2 cols, 2 rows) */}
            <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/10 hover:border-[var(--primary)]/50 p-10 rounded-3xl group transition-all duration-500 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>

              <div className="relative z-20">
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-8 shrink-0 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                  <MonitorPlay size={32} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Online Casino Software</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  Build feature-rich online casino platforms with gaming integrations, player management, payment systems, bonuses, reporting, and administrative functionality.
                </p>
                <Link href="/services/casino-platform" className="mt-8 inline-flex items-center gap-2 text-[var(--primary)] font-bold group/link w-max bg-[var(--primary)]/5 px-4 py-2 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-black transition-all">
                  Explore Solution <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Abstract UI Mockup Background (Bottom Right) */}
              <div className="absolute -bottom-10 -right-10 w-[80%] h-[60%] transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700 ease-out flex gap-4 z-0 opacity-80 group-hover:opacity-100">

                {/* Mock Card 1 */}
                <div className="w-1/2 h-full bg-[#1A1A1A]/80 backdrop-blur-md rounded-tl-3xl border-t border-l border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 relative overflow-hidden flex flex-col gap-4 translate-y-12">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/20 blur-[50px]"></div>
                  <div className="w-full h-32 bg-white/5 rounded-xl flex items-end justify-center pb-4 relative overflow-hidden">
                    <div className="w-8 h-12 bg-white/10 mx-1 rounded-t-md animate-pulse"></div>
                    <div className="w-8 h-20 bg-[var(--primary)]/50 mx-1 rounded-t-md"></div>
                    <div className="w-8 h-16 bg-[var(--primary)] mx-1 rounded-t-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"></div>
                    <div className="w-8 h-10 bg-white/10 mx-1 rounded-t-md"></div>
                  </div>
                  <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                  <div className="w-1/2 h-3 bg-white/5 rounded-full"></div>
                </div>

                {/* Mock Card 2 */}
                <div className="w-1/2 h-full bg-[#151515]/90 backdrop-blur-md rounded-t-3xl border-t border-x border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20"></div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="w-full h-24 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                    <Gamepad2 size={32} className="text-white/20" />
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full"></div>
                  <div className="w-2/3 h-3 bg-white/5 rounded-full"></div>
                </div>

              </div>
            </div>

            {/* Card 2 - Sportsbook (Spans 2 cols, 1 row) */}
            <div className="lg:col-span-2 lg:row-span-1 bg-[#111111] border border-white/10 hover:border-cyan-500/50 p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-all"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Sportsbook Software</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Create sportsbook platforms with betting markets, odds integrations, player accounts, wallets, risk management, and flexible administration.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - White Label (Spans 2 cols, 1 row) */}
            <div className="lg:col-span-2 lg:row-span-1 bg-[#111111] border border-white/10 hover:border-purple-500/50 p-8 rounded-3xl group transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 blur-[80px] group-hover:bg-purple-500/10 transition-all"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <Building2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">White Label iGaming</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Launch a branded casino or sportsbook platform using an established technology foundation that can be configured around your requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Cards (Span 1 col) */}
            {[
              { icon: <LayoutGrid size={24} />, title: "Game Aggregation", color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10", border: "hover:border-[var(--primary)]/50", desc: "Connect multiple providers through one streamlined integration." },
              { icon: <Gamepad2 size={24} />, title: "Slot Software", color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10", border: "hover:border-[var(--primary)]/50", desc: "Develop and integrate engaging custom slot game experiences." },
              { icon: <Terminal size={24} />, title: "Kiosk Software", color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10", border: "hover:border-[var(--primary)]/50", desc: "Self-service sportsbook kiosk technology for retail environments." },
              { icon: <Globe2 size={24} />, title: "Retail Betting", color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10", border: "hover:border-[var(--primary)]/50", desc: "Support retail businesses with tech designed for operational efficiency." }
            ].map((item, i) => (
              <div key={i} className={`bg-[#0A0A0A] border border-white/10 ${item.border} p-8 rounded-3xl group transition-all duration-300 flex flex-col`}>
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* MISSION & VISION (Enhanced with Cyan Secondary Accent) */}
      <section className="relative py-24 px-6 bg-[#0A0A0A] border-y border-white/5 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Mission (Primary Accent) */}
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-10 lg:p-12 rounded-3xl border-t-2 border-t-[var(--primary)]/50 border-x border-b border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-[var(--primary)]/20"></div>
              <Target size={200} className="absolute -bottom-10 -right-10 text-[var(--primary)]/5 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                    <Target size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">Our Mission</h2>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Our mission is deliver innovative, scalable, secure, and flexible iGaming technology that helps businesses launch, operate, grow with confidence. We focus understanding each client's business objectives and transforming them practical technology solutions that create long-term value.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  We aim simplify complex iGaming technology by bringing together powerful platforms, gaming content, integrations, payment solutions, player management, analytics, operational tools within a connected ecosystem.
                </p>

                <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                  <span className="w-6 h-px bg-[var(--primary)]"></span>
                  Our Mission Is to:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Deliver reliable and scalable iGaming software solutions.",
                    "Help businesses launch their platforms more efficiently.",
                    "Create engaging and user-friendly player experiences.",
                    "Provide flexible technology that adapts to different models.",
                    "Simplify gaming, payment, API, and third-party integrations.",
                    "Support operators as they expand platforms and markets.",
                    "Maintain a strong focus on security and performance.",
                    "Build long-term relationships through continuous support."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[var(--primary)]/30 transition-all duration-300 group/item cursor-default">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center group-hover/item:bg-[var(--primary)]/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] group-hover/item:scale-150 transition-transform"></div>
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-snug group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision (Primary Accent) */}
            <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] p-10 lg:p-12 rounded-3xl border-t-2 border-t-[var(--primary)]/50 border-x border-b border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-[var(--primary)]/20"></div>
              <Lightbulb size={200} className="absolute -bottom-10 -right-10 text-[var(--primary)]/5 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                    <Lightbulb size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">Our Vision</h2>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Our vision is become a globally trusted iGaming technology partner, recognized for innovation, reliability, flexibility, and exceptional software solutions.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  We envision a future where iGaming businesses can access powerful technology without unnecessary complexity. By continuously improving platforms and exploring emerging technologies, we aim to help our clients create competitive gaming experiences adapt to changing markets and player expectations.
                </p>

                <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                  <span className="w-6 h-px bg-[var(--primary)]"></span>
                  Our Vision Includes:
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Becoming a trusted global iGaming technology partner.",
                    "Developing next-generation casino and sportsbook platforms.",
                    "Creating smarter and more connected gaming ecosystems.",
                    "Expanding our technology across emerging iGaming markets.",
                    "Investing in innovation and modern gaming technologies.",
                    "Helping businesses build sustainable operations.",
                    "Setting higher standards for iGaming development."
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[var(--primary)]/30 transition-all duration-300 group/item cursor-default">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[var(--primary)]/10 flex items-center justify-center group-hover/item:bg-[var(--primary)]/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] group-hover/item:scale-150 transition-transform"></div>
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-snug group-hover/item:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APPROACH (Horizontal Timeline Stepper) */}
      <section className="relative py-24 px-6 z-10 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Approach</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">We follow a structured approach to help transform an idea into a practical iGaming technology solution.</p>
          </div>

          {/* Simple Grid Layout */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Understand",
                desc: "Learning about your business, audience, and target markets to build a solid foundation.",
                icon: <Users size={24} />
              },
              {
                title: "Plan",
                desc: "Creating a technology approach based on your specific architecture requirements.",
                icon: <LayoutGrid size={24} />
              },
              {
                title: "Develop",
                desc: "Developing or configuring the required solution using modern, scalable tech.",
                icon: <Code2 size={24} />
              },
              {
                title: "Integrate",
                desc: "Connecting compatible third-party services, games, and payments seamlessly.",
                icon: <Cpu size={24} />
              },
              {
                title: "Test",
                desc: "Rigorous testing of functionality, workflows, and performance requirements.",
                icon: <ShieldCheck size={24} />
              },
              {
                title: "Launch",
                desc: "Deploying your platform and making it available to your intended users.",
                icon: <Globe2 size={24} />
              },
              {
                title: "Scale",
                desc: "Ongoing technical support, maintenance, and platform improvements.",
                icon: <LineChart size={24} />
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`w-full md:w-[calc(50%-12px)] ${i < 4 ? 'lg:w-[calc(25%-18px)]' : 'lg:w-[calc(33.333%-16px)]'} bg-[#111111] p-6 lg:p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg relative overflow-hidden`}
              >
                {/* Top Glow on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-slate-400 group-hover:text-[var(--primary)] group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 flex items-center justify-center shadow-inner group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div className="text-slate-400 group-hover:text-[var(--primary)] font-bold text-[10px] lg:text-xs tracking-widest uppercase bg-white/5 border border-white/5 group-hover:bg-[var(--primary)]/10 group-hover:border-[var(--primary)]/30 px-3 py-1.5 rounded-full shrink-0 ml-2 transition-all duration-500">
                      Step {i + 1}
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-base lg:text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US? */}
      <section className="relative py-24 px-6 bg-[#0A0A0A] border-y border-white/5 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 mb-6">
              <ShieldCheck size={14} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">The Advantage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Choose Us?</h2>
          </div>

          {/* Interactive Piano Key Accordion */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[380px] gap-2 w-full max-w-4xl mx-auto">
            {[
              {
                title: "Industry-Focused Tech",
                desc: "We understand that iGaming platforms have different requirements. Our solutions are designed around gaming operations, player journeys, and scalable integrations.",
                icon: <Settings size={24} />
              },
              {
                title: "Flexible Solutions",
                desc: "Every business has different requirements. We provide configurable technology that adapts to different business models, branding, and operational needs.",
                icon: <Zap size={24} />
              },
              {
                title: "Scalable Architecture",
                desc: "Our technology is designed with growth in mind, allowing businesses to expand capabilities, gaming content, and supported markets as requirements develop.",
                icon: <LineChart size={24} />
              },
              {
                title: "Integration Expertise",
                desc: "Modern iGaming businesses rely on multiple technologies. We connect compatible gaming providers, payments, APIs, wallets, and platform components.",
                icon: <Cpu size={24} />
              },
              {
                title: "Security-Focused",
                desc: "We consider authentication, data protection, access controls, transaction security, and platform reliability throughout development and integration.",
                icon: <ShieldCheck size={24} />
              },
              {
                title: "Ongoing Support",
                desc: "Launching a platform is only the beginning. We provide ongoing technical assistance, troubleshooting, updates, and platform improvements.",
                icon: <Handshake size={24} />
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative flex-1 lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-[#111111] hover:bg-[#151515] border border-white/5 hover:border-[var(--primary)]/30 rounded-3xl overflow-hidden cursor-pointer flex flex-col items-center py-4 lg:py-5 shadow-lg"
              >
                {/* Number Circle (Top) */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/10 group-hover:border-[var(--primary)]/30 bg-black/40 text-[var(--primary)] flex items-center justify-center font-bold text-xs lg:text-sm mb-auto shrink-0 transition-all duration-500 z-20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                  0{i + 1}
                </div>

                {/* Unexpanded State (Rotated Text) - Hidden on mobile, visible on desktop until hover */}
                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10">
                  <h3 
                    className="text-base font-bold text-slate-300 tracking-wider whitespace-nowrap group-hover:text-white transition-colors"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Mobile Title (Visible only on mobile) */}
                <div className="lg:hidden w-full text-center mt-6 mb-4 px-4">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>

                {/* Expanded State (Horizontal Text & Description) - Visible only on desktop hover */}
                <div className="hidden lg:flex absolute top-[70px] bottom-[50px] left-1/2 -translate-x-1/2 w-[240px] xl:w-[280px] flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto z-10">
                   <h3 className="text-xl xl:text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.title}</h3>
                   <p className="text-slate-400 leading-snug text-sm xl:text-base translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">{item.desc}</p>
                </div>

                {/* Icon (Bottom) */}
                <div className="mt-auto shrink-0 text-slate-500 group-hover:text-[var(--primary)] transition-colors duration-500 z-20 lg:group-hover:opacity-0 lg:group-hover:translate-y-4">
                  {item.icon}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES (Horizontal Interactive Cards) */}
      <section className="relative py-24 px-6 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 mb-6">
              <Lightbulb size={14} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">Our DNA</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">Principles that guide our engineering, communication, and client relationships.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", icon: <Lightbulb size={24} />, desc: "Exploring new technologies and gaming experiences." },
              { title: "Reliability", icon: <Server size={24} />, desc: "Dependable technology designed for continuous operation." },
              { title: "Transparency", icon: <Users size={24} />, desc: "Clear communication throughout planning and development." },
              { title: "Flexibility", icon: <Settings size={24} />, desc: "Solutions that adapt to different business models." },
              { title: "Security", icon: <ShieldCheck size={24} />, desc: "Treating platform and transaction security as essential." },
              { title: "Partnership", icon: <Handshake size={24} />, desc: "Working as technology partners, not just vendors." },
            ].map((val, i) => (
              <div key={i} className="flex items-center gap-6 bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{val.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH DESIGNED AROUND YOU & RESPONSIBLE TECH */}
      <section className="relative py-24 px-6 bg-[#050505] border-y border-white/5 z-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Tech List */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 mb-8">
                <Cpu size={14} className="text-[var(--primary)]" />
                <span className="text-xs font-bold text-[var(--primary)] tracking-wider uppercase">Platform Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Technology Designed <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-accent">Around Your Business</span>
              </h2>
              <p className="text-slate-400 mb-12 leading-relaxed text-lg max-w-xl">
                We understand that technology should support your business strategy rather than restrict it. That's why we offer solutions seamlessly configured around your diverse requirements.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Custom Branding", "Multi-Device Compatibility", "API Integrations",
                  "Payment Integrations", "Player Account Management", "Game Aggregation",
                  "Bonus & Promotion Tools", "Administrative Dashboards", "Reporting & Analytics",
                  "Security Controls", "Scalable Infrastructure", "Multi-Language Support"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-center gap-4 bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 p-4 rounded-2xl hover:bg-white/[0.08] hover:border-[var(--primary)]/30 transition-all duration-300"
                  >
                    <div className="w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 transition-all duration-300">
                      <Check size={14} className="text-slate-500 group-hover:text-[var(--primary)] transition-colors" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsible Tech & Operators/Players */}
            <div className="space-y-6 lg:space-y-8 relative z-10">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/5 hover:border-[var(--primary)]/30 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-[var(--primary)]/15 pointer-events-none"></div>
                <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.08] text-[var(--primary)] group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <ShieldCheck size={180} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 flex items-center justify-center shrink-0 shadow-inner group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all duration-500">
                     <ShieldCheck size={26} className="text-slate-400 group-hover:text-[var(--primary)] transition-colors duration-500" />
                  </div>
                  Responsible Tech
                </h3>
                <p className="text-slate-400 leading-relaxed relative z-10 text-lg">
                  iGaming is a highly regulated industry where technology must be developed with appropriate compliance considerations. Our solutions can seamlessly incorporate KYC workflows, responsible gaming tools, advanced player controls, and secure transaction monitoring.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-white/5 hover:border-[var(--primary)]/30 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-[80px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-[var(--primary)]/15 pointer-events-none"></div>
                <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.08] text-[var(--primary)] group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <Users size={180} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 flex items-center justify-center shrink-0 shadow-inner group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)] transition-all duration-500">
                     <Users size={26} className="text-slate-400 group-hover:text-[var(--primary)] transition-colors duration-500" />
                  </div>
                  Operators & Players
                </h3>
                <p className="text-slate-400 leading-relaxed relative z-10 text-lg">
                  A successful platform must provide total control, extreme scalability, and granular reporting for operators while simultaneously delivering an intuitive, highly responsive, and engaging experience for players. We build for both.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <FinalCTA
        title={
          <>
            Ready to Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">iGaming Platform?</span>
          </>
        }
        description={
          <>
            Your next iGaming project starts with the right technology foundation.<br className="hidden md:block" />
            Let's discuss your business model, platform requirements, target market, and growth objectives and explore how we can turn your vision into a scalable iGaming solution.
          </>
        }
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-[-15deg] { transform: rotateY(-15deg); }
        .rotate-x-[10deg] { transform: rotateX(10deg); }
        .hover\\:rotate-y-\\[0deg\\]:hover { transform: rotateY(0deg); }
        .hover\\:rotate-x-\\[0deg\\]:hover { transform: rotateX(0deg); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-bounce-slow { animation: bounce 6s infinite; }
      `}} />
    </main>
  );
}
