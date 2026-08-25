"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="grid gap-4">
            {items.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                    <div
                        key={idx}
                        className={`group rounded-2xl border transition-all duration-300 relative overflow-hidden ${isOpen ? 'border-[var(--primary)]/40 bg-white/5 shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]' : 'bg-[#121212] border-white/5 hover:border-white/10'}`}
                    >
                        {/* Subtle gradient background for active state */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-[var(--secondary)]/5 pointer-events-none transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                        <button
                            onClick={() => toggle(idx)}
                            className="w-full flex items-center justify-between p-6 lg:p-8 text-left outline-none relative z-10 focus:outline-none"
                        >
                            <div className="flex gap-4 lg:gap-6 items-center">
                                {/* Number Badge */}
                                <span className={`font-mono text-sm px-3 py-1.5 rounded-lg border flex-shrink-0 transition-colors duration-300 ${isOpen ? 'border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]' : 'border-white/10 text-gray-400 bg-white/5'}`}>
                                    {(idx + 1).toString().padStart(2, '0')}
                                </span>
                                <span className={`font-semibold text-base lg:text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                                    {faq.q}
                                </span>
                            </div>
                            
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'bg-[var(--primary)]/10' : 'bg-white/5'}`}>
                                <ChevronDown size={20} className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[var(--primary)]' : 'text-gray-400'}`} />
                            </div>
                        </button>
                        
                        <div
                            className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                        >
                            <div className="overflow-hidden relative z-10">
                                <div className="p-6 lg:p-8 pt-0 lg:pt-0 ml-4 lg:ml-6 pl-[3.5rem] lg:pl-[4.5rem]">
                                    <div className="w-8 h-[1px] bg-gradient-to-r from-[var(--primary)]/50 to-transparent mb-4"></div>
                                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
