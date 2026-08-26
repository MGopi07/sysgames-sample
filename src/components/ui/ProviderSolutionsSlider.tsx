"use client";

import { useEffect, useRef } from "react";
import { Cable, Globe, Database, BarChart3, MonitorSmartphone, LayoutDashboard, ShieldCheck } from "lucide-react";

export default function ProviderSolutionsSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const coreItems = [
        { title: "Centralized Integration", desc: "Connect supported casino providers through one aggregation layer.", icon: Cable },
        { title: "Broad Content Access", desc: "Expand your casino lobby with available slots, live casino, table games, jackpots, and specialty content.", icon: Globe },
        { title: "Flexible API Architecture", desc: "Integrate compatible gaming content with your existing platform.", icon: Database },
        { title: "Scalable Platform", desc: "Add providers and content as your casino business expands.", icon: BarChart3 },
        { title: "Mobile Compatibility", desc: "Support available gaming content across supported mobile and desktop environments.", icon: MonitorSmartphone },
        { title: "Centralized Administration", desc: "Manage supported content and provider integrations from one environment.", icon: LayoutDashboard },
        { title: "Technical Support", desc: "Receive assistance with integration, configuration, troubleshooting, and ongoing platform requirements.", icon: ShieldCheck }
    ];

    // For infinite loop on mobile, we can duplicate the array 
    const items = [...coreItems, ...coreItems, ...coreItems];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Auto-slide logic (only active on mobile/tablet widths where grid is not active)
        const slideInterval = setInterval(() => {
            if (window.innerWidth >= 768) return; // md breakpoint, don't auto-slide if it's a grid

            const cardWidth = slider.children[0]?.clientWidth || 0;
            const gap = 16; // gap-4 on mobile
            const scrollAmount = cardWidth + gap;

            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });

            // If we've scrolled near the end, instantly reset to the middle to create an infinite illusion
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - scrollAmount * 2) {
                setTimeout(() => {
                    slider.scrollTo({ left: scrollAmount * coreItems.length, behavior: 'instant' as any });
                }, 500); // Wait for smooth scroll to finish
            }
        }, 3000); // Auto snap every 3 seconds

        // Start from the middle set so we can loop
        setTimeout(() => {
            if (window.innerWidth < 768) {
                const cardWidth = slider.children[0]?.clientWidth || 0;
                slider.scrollTo({ left: (cardWidth + 16) * coreItems.length, behavior: 'instant' as any });
            }
        }, 100);

        return () => clearInterval(slideInterval);
    }, [coreItems.length]);

    return (
        <div className="relative overflow-hidden md:overflow-visible mx-[-1.5rem] px-[1.5rem] md:mx-0 md:px-0">
            <div 
                ref={sliderRef}
                className="flex md:grid flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-6 md:pb-0 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 hide-scrollbar" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`glass-card rounded-2xl p-8 border border-white/5 hover:border-[var(--primary)]/40 hover:bg-[#1a1a1a] transition-all duration-300 group shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center md:snap-align-none 
                            ${idx >= coreItems.length ? 'md:hidden' : ''} 
                            ${idx === 0 ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-white/[0.02] to-[var(--primary)]/5' : ''}
                        `}
                    >
                        <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${idx === 0 || idx === coreItems.length || idx === coreItems.length*2 ? 'bg-[var(--primary)]/20 border-[var(--primary)]/30' : 'group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/10'}`}>
                            <item.icon className={idx === 0 || idx === coreItems.length || idx === coreItems.length*2 ? 'text-[var(--primary)]' : 'text-gray-400 group-hover:text-[var(--primary)]'} size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
            {/* Hide scrollbar for webkit */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
