"use client";

import { useRef, useEffect } from "react";
import { ChevronRight, Gamepad2, Cable, Database, LayoutDashboard, Layers, BarChart3, MonitorSmartphone } from "lucide-react";

export default function AdvantagesCarousel() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current && sliderRef.current.children.length > 0) {
            // Dynamically calculate scroll amount based on the actual card width + gap
            const card = sliderRef.current.children[0] as HTMLElement;
            const scrollAmount = card.offsetWidth + 24; // 24px is gap-6
            
            sliderRef.current.scrollBy({ 
                left: direction === "left" ? -scrollAmount : scrollAmount, 
                behavior: "smooth" 
            });
        }
    };

    const coreItems = [
        { title: "Multiple Game Providers", desc: "Connect supported casino game studios through a centralized aggregation platform.", icon: Gamepad2 },
        { title: "Single Integration", desc: "Reduce integration complexity by connecting to one aggregation layer.", icon: Cable },
        { title: "API-Based Integration", desc: "Connect your platform through supported APIs and technical interfaces.", icon: Database },
        { title: "Centralized Management", desc: "Manage supported game content and integration settings through a unified environment.", icon: LayoutDashboard },
        { title: "Large Game Portfolio", desc: "Access supported slots, live casino, table games, jackpot games, and more.", icon: Layers },
        { title: "Scalable Infrastructure", desc: "Add new game providers and content as your business evolves.", icon: BarChart3 },
        { title: "Mobile-Ready Content", desc: "Deliver supported games across desktop and mobile casino environments.", icon: MonitorSmartphone }
    ];

    // Duplicate array 10 times (70 items) to create a faux-infinite track
    const items = Array(10).fill(coreItems).flat();

    // On mount, jump to the exact middle of the massive track
    useEffect(() => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            // Delay slightly to ensure layout and scrollWidth are fully computed
            setTimeout(() => {
                const middlePos = (container.scrollWidth - container.clientWidth) / 2;
                container.scrollLeft = middlePos;
            }, 50);
        }
    }, []);

    return (
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                        <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">Advantages</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Why Choose Our Casino Game Aggregation Provider?</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Managing multiple casino game providers individually can create additional technical and operational complexity. Our solution helps operators expand their gaming portfolio while reducing the effort associated with maintaining separate integrations.
                    </p>
                </div>
                
                {/* Working Slider Buttons */}
                <div className="hidden md:flex gap-4">
                    <button 
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/10 flex items-center justify-center bg-white/5 text-white transition-all cursor-pointer z-20">
                        <ChevronRight className="rotate-180" />
                    </button>
                    <button 
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-[var(--primary)]/50 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] transition-all cursor-pointer z-20">
                        <ChevronRight />
                    </button>
                </div>
            </div>

            {/* Horizontal Snap Carousel (scroll-smooth removed to allow instant jump on load) */}
            <div 
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, idx) => (
                    <div key={idx} className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] snap-start glass-card p-8 rounded-3xl border border-white/5 hover:border-[var(--primary)]/40 hover:bg-[#121212] transition-all duration-300 group flex flex-col relative overflow-hidden shadow-xl hover:-translate-y-2">
                        
                        {/* Large Faint Background Icon */}
                        <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                            <item.icon size={160} className="text-white" />
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-all duration-300 relative z-10">
                            <item.icon className="text-gray-400 group-hover:text-[var(--primary)] transition-colors duration-300" size={32} />
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--primary)] transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* CSS to hide scrollbar for webkit */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
