"use client";

import { useRef, ReactNode, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardsSliderProps {
    children: ReactNode[];
    autoPlayInterval?: number;
}

export default function CardsSlider({ children, autoPlayInterval = 3500 }: CardsSliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
            
            // Calculate active slide index
            if (scrollContainerRef.current.children.length > 0) {
                const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
                const cardWidth = firstChild.offsetWidth + 24; // 24px is gap-6
                const newIndex = Math.round(scrollLeft / cardWidth);
                setActiveIndex(newIndex);
            }
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
            const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
            // Scroll by exactly one card width + gap (gap-6 is 24px)
            const scrollAmount = firstChild.offsetWidth + 24;
            
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
            
            // Check scrollability after animation completes
            setTimeout(checkScrollability, 350);
        }
    };

    const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX > rect.width / 2) {
            scroll("right");
        } else {
            scroll("left");
        }
    };

    useEffect(() => {
        if (autoPlayInterval <= 0) return;

        const intervalId = setInterval(() => {
            if (!isPaused && scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                
                // If we've reached the end, scroll back to start
                if (scrollLeft >= scrollWidth - clientWidth - 10) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    setTimeout(checkScrollability, 350);
                } else {
                    scroll("right");
                }
            }
        }, autoPlayInterval);

        return () => clearInterval(intervalId);
    }, [isPaused, autoPlayInterval]);

    return (
        <div 
            className="relative group/slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 lg:-mx-6">
                <button 
                    onClick={() => scroll("left")}
                    className={`w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--secondary)] hover:text-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto ${!canScrollLeft ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-0 scale-90 group-hover/slider:opacity-100 group-hover/slider:scale-100'}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                
                <button 
                    onClick={() => scroll("right")}
                    className={`w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--secondary)] hover:text-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto ${!canScrollRight ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 sm:opacity-0 sm:scale-90 sm:group-hover/slider:opacity-100 sm:group-hover/slider:scale-100'}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Scroll Container */}
            <div 
                ref={scrollContainerRef}
                onScroll={checkScrollability}
                onDoubleClick={handleDoubleClick}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-stretch select-none"
            >
                {children.map((child, index) => (
                    <div key={index} className="shrink-0 snap-start w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col">
                        <div className="w-full h-full flex flex-col">
                            {child}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-3 mt-6">
                {children.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            if (scrollContainerRef.current && scrollContainerRef.current.children[idx]) {
                                const child = scrollContainerRef.current.children[idx] as HTMLElement;
                                // Need to account for the container's scroll position padding/margin
                                // Easiest way is to just use the child's offsetLeft relative to the parent
                                const scrollPos = child.offsetLeft - scrollContainerRef.current.offsetLeft - 16; // 16px is px-4 padding
                                scrollContainerRef.current.scrollTo({ left: scrollPos, behavior: 'smooth' });
                            }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            activeIndex === idx 
                                ? 'w-8 bg-[var(--secondary)] shadow-[0_0_10px_rgba(var(--secondary-rgb),0.5)]' 
                                : 'w-2 bg-white/20 hover:bg-white/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
