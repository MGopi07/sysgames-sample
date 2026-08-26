import Link from "next/link";
import { ArrowRight, Server, Shield, Globe } from "lucide-react";

interface CTASectionProps {
  title?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to Build Your",
  highlightText = "Global iGaming Empire?",
  description = "Partner with the leading iGaming software development company and launch a highly scalable, secure, and fully customized platform today.",
  buttonText = "Contact Us",
  secondaryButtonText,
  secondaryButtonHref = "#contact"
}: CTASectionProps) {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-transparent">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--secondary)]/10 rounded-full blur-[150px]"></div>
        
        {/* Technology grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-8 lg:px-14 lg:py-16 text-center relative overflow-hidden shadow-2xl w-full">
          {/* Internal glowing elements */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--secondary)]/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-accent">{highlightText}</span>
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#contact" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-[var(--btn-text)] rounded-full group bg-gradient-accent shadow-[0_0_30px_rgba(var(--secondary-rgb),0.4)] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.6)] transition-all w-full sm:w-auto text-base">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative z-10 flex items-center gap-2">{buttonText} <ArrowRight size={20} /></span>
              </Link>
              {secondaryButtonText && (
                <Link href={secondaryButtonHref} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto">
                  {secondaryButtonText}
                </Link>
              )}
            </div>

            {/* Floating UI Badges */}
            <div className="pt-5 flex flex-wrap justify-center gap-6 lg:gap-12 opacity-80">
              <div className="flex items-center gap-2 text-white/90 font-medium text-sm sm:text-base">
                 <Server size={20} className="text-[var(--primary)]" /> 100% Platform Ownership
              </div>
              <div className="flex items-center gap-2 text-white/90 font-medium text-sm sm:text-base">
                 <Shield size={20} className="text-[var(--secondary)]" /> Zero GGR Share
              </div>
              <div className="flex items-center gap-2 text-white/90 font-medium text-sm sm:text-base">
                 <Globe size={20} className="text-[var(--primary)]" /> Global Reach
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
