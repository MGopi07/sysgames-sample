"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export interface TabSectionItem {
  id: string;
  label: string;
  heading: string;
  paragraphs: string[];
}

export default function SolutionTabs({
  tabs,
  eyebrow,
  title,
}: {
  tabs: TabSectionItem[];
  eyebrow: string;
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) return null;
  const activeTab = tabs[activeIndex] ?? tabs[0];

  return (
    <div className="glass-card rounded-3xl border border-white/10 p-6 lg:p-8 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] block mb-1">
            {eyebrow}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-0">
            {title}
          </h2>
        </div>

        <div
          className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0"
          role="tablist"
          aria-label={title}
        >
          {tabs.map((tab, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-gradient-accent text-white border-transparent shadow-[0_0_20px_rgba(var(--primary-rgb),0.35)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:border-[var(--primary)]/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-6 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            role="tabpanel"
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-white font-bold text-lg lg:text-xl">
              <ChevronRight size={18} className="text-[var(--primary)] shrink-0" />
              <h3 className="text-lg lg:text-xl font-bold text-white mb-0">
                {activeTab.heading}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {activeTab.paragraphs.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm lg:text-base text-gray-300 leading-relaxed"
                >
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

