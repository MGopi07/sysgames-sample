"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  Target,
  CheckCircle2,
  Zap,
  Sparkles,
  LayoutGrid,
  Layers,
} from "lucide-react";
import { DocxBlock } from "@/data/solutionsExactContent";

export interface AudienceBenefitSection {
  heading: string;
  blocks: DocxBlock[];
}

function parseColonText(text: string): { title?: string; body: string } {
  const colonIndex = text.indexOf(":");
  // Check if colon is within first 45 characters (typical for "Title: Description")
  if (colonIndex > 2 && colonIndex < 45) {
    return {
      title: text.slice(0, colonIndex).trim(),
      body: text.slice(colonIndex + 1).trim(),
    };
  }
  return { body: text };
}

export default function SolutionAudienceBenefits({
  sections,
}: {
  sections: AudienceBenefitSection[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<"tabs" | "all">("tabs");

  if (!sections || sections.length === 0) return null;

  const tabsMeta = sections.map((sec, idx) => {
    const headingLower = sec.heading.toLowerCase();
    const count = sec.blocks.filter((b) => Boolean(b.text)).length;

    let shortLabel = "Audience";
    let icon = Users;

    if (headingLower.startsWith("business benefits")) {
      shortLabel = "Business Benefits";
      icon = TrendingUp;
    } else if (headingLower.startsWith("ideal use")) {
      shortLabel = "Ideal Use Cases";
      icon = Target;
    } else if (headingLower.startsWith("who ")) {
      shortLabel = "Who It's For";
      icon = Users;
    } else {
      shortLabel = sec.heading.split(" ").slice(0, 3).join(" ");
    }

    return {
      idx,
      label: shortLabel,
      fullHeading: sec.heading,
      count,
      icon,
      blocks: sec.blocks.filter((b): b is DocxBlock & { text: string } => Boolean(b.text)),
    };
  });

  const currentTab = tabsMeta[activeTab] ?? tabsMeta[0];

  return (
    <section className="py-14 lg:py-20 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]">
              <Sparkles size={13} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--primary)] tracking-widest uppercase">
                Strategic Value & Fit
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Built for Growth, Engineered for Control
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mb-0">
              Explore target operator roles, measurable commercial advantages, and real-world deployment scenarios.
            </p>
          </div>

          {/* View mode toggle (Tabs vs Expanded) - hidden on mobile to avoid double button clutter */}
          <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("tabs")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "tabs"
                  ? "bg-gradient-accent text-white shadow-[0_0_12px_rgba(var(--primary-rgb),0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers size={14} />
              <span>Tabs</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("all")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "all"
                  ? "bg-gradient-accent text-white shadow-[0_0_12px_rgba(var(--primary-rgb),0.4)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutGrid size={14} />
              <span>View All</span>
            </button>
          </div>
        </div>

        {/* ===================== VIEW MODE 1: TABS ===================== */}
        {viewMode === "tabs" && (
          <div>
            {/* Tab navigation pills - single horizontal swipe row on mobile */}
            <div
              className="flex flex-nowrap sm:flex-wrap gap-2.5 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0"
              role="tablist"
            >
              {tabsMeta.map((tab) => {
                const isActive = tab.idx === activeTab;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.idx}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.idx)}
                    className={`shrink-0 whitespace-nowrap group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                      isActive
                        ? "bg-gradient-accent text-white border-transparent shadow-[0_0_25px_rgba(var(--primary-rgb),0.35)] scale-[1.02]"
                        : "bg-[#121218] text-gray-300 border-white/10 hover:border-[var(--primary)]/40 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={isActive ? "text-white" : "text-[var(--primary)]"}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Panel Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                role="tabpanel"
                className="space-y-6"
              >
                {/* Active Tab Heading */}
                <div className="pb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] animate-pulse" />
                    {currentTab.fullHeading}
                  </h3>
                </div>

                {/* Cards Grid */}
                <div
                  className={`grid grid-cols-1 ${
                    currentTab.label === "Business Benefits"
                      ? "md:grid-cols-2 lg:grid-cols-3"
                      : "md:grid-cols-2"
                  } gap-4 sm:gap-5`}
                >
                  {currentTab.blocks.map((b, bIdx) => {
                    const parsed = parseColonText(b.text);
                    const isBenefit = Boolean(parsed.title);

                    return (
                      <div
                        key={bIdx}
                        className="group relative rounded-2xl p-5 sm:p-6 bg-[#121218] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
                      >
                        {/* Subtle gradient hover wash */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative z-10">
                          {/* Card top bar */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] font-semibold">
                              {(bIdx + 1).toString().padStart(2, "0")}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-colors">
                              {isBenefit ? (
                                <Zap size={15} />
                              ) : (
                                <CheckCircle2 size={15} />
                              )}
                            </div>
                          </div>

                          {/* Card title & text */}
                          {isBenefit ? (
                            <>
                              <h4 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                                {parsed.title}
                              </h4>
                              <p className="text-sm text-gray-300 leading-relaxed mb-0">
                                {parsed.body}
                              </p>
                            </>
                          ) : (
                            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-0 font-medium">
                              {b.text}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* ===================== VIEW MODE 2: EXPANDED VIEW ===================== */}
        {viewMode === "all" && (
          <div className="space-y-12">
            {tabsMeta.map((sec, secIdx) => {
              const Icon = sec.icon;
              return (
                <div key={secIdx} className="space-y-5">
                  <div className="pb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)]">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-0">
                        {sec.fullHeading}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`grid grid-cols-1 ${
                      sec.label === "Business Benefits"
                        ? "md:grid-cols-2 lg:grid-cols-3"
                        : "md:grid-cols-2"
                    } gap-4 sm:gap-5`}
                  >
                    {sec.blocks.map((b, bIdx) => {
                      const parsed = parseColonText(b.text);
                      const isBenefit = Boolean(parsed.title);

                      return (
                        <div
                          key={bIdx}
                          className="group relative rounded-2xl p-5 sm:p-6 bg-[#121218] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/25 text-[var(--primary)] font-semibold">
                                {(bIdx + 1).toString().padStart(2, "0")}
                              </span>
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-colors">
                                {isBenefit ? <Zap size={15} /> : <CheckCircle2 size={15} />}
                              </div>
                            </div>

                            {isBenefit ? (
                              <>
                                <h4 className="text-white font-bold text-base mb-2 group-hover:text-[var(--primary)] transition-colors leading-snug">
                                  {parsed.title}
                                </h4>
                                <p className="text-sm text-gray-300 leading-relaxed mb-0">
                                  {parsed.body}
                                </p>
                              </>
                            ) : (
                              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-0 font-medium">
                                {b.text}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

