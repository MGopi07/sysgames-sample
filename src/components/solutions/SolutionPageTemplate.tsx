import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Palette,
  Gamepad2,
  Wallet,
  ShieldCheck,
  Zap,
  Server,
  Code2,
  Layers,
  Globe,
  Video,
  Users,
  Trophy,
  Activity,
  Monitor,
  Cpu,
  Printer,
  Store,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import { SolutionIconName, SolutionPageData } from "@/data/solutions";

const ICON_MAP: Record<SolutionIconName, LucideIcon> = {
  Palette,
  Gamepad2,
  Wallet,
  ShieldCheck,
  Zap,
  Server,
  Code2,
  Layers,
  Globe,
  Video,
  Users,
  Trophy,
  Activity,
  Monitor,
  Cpu,
  Printer,
  Store,
  BarChart3,
};

export default function SolutionPageTemplate({
  solution,
}: {
  solution: SolutionPageData;
}) {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">
                  {solution.heroBadge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {solution.heroTitlePrefix}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-accent">
                  {solution.heroTitleHighlight}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 leading-relaxed">
                {solution.heroDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {solution.heroBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[var(--primary)] shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-sm text-gray-300 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
              >
                Request a Live Demo <ChevronRight className="ml-2" />
              </Link>
            </div>

            {/* Right Visual Showcase Card */}
            <div className="w-full lg:w-2/5 flex justify-center relative">
              <div className="relative w-full max-w-md glass-card rounded-3xl p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--secondary)]/20 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                      {solution.category}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      Enterprise Ready
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {solution.name}
                  </h2>

                  <div className="space-y-3 pt-2">
                    {solution.whyFeatures.slice(0, 4).map((feat, idx) => {
                      const Icon = ICON_MAP[feat.icon] ?? Server;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/25 flex items-center justify-center shrink-0">
                            <Icon className="text-[var(--primary)]" size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {feat.title}
                            </p>
                            <p className="text-xs text-gray-400">{feat.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-sm font-bold text-[var(--primary)] tracking-widest uppercase">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {solution.whyTitle}
            </h2>
            <div className="w-12 h-1 bg-gradient-accent rounded-full mb-6" />
            <p className="text-gray-400 text-lg leading-relaxed">
              {solution.whyDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.whyFeatures.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] ?? Server;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[var(--primary)]/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/25 flex items-center justify-center mb-5 group-hover:bg-[var(--primary)]/20 transition-colors">
                    <Icon className="text-[var(--primary)]" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-20 bg-[#0D0D12] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {solution.highlightsTitle}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {solution.highlightsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-7 bg-[#121218] border border-white/10 hover:border-[var(--primary)]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)]">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-0">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Questions
              </span>
            </h2>
            <p className="text-gray-400">
              Everything you need to know about our {solution.name}.
            </p>
          </div>

          <FAQAccordion items={solution.faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title={solution.ctaTitle}
        highlightText={solution.ctaHighlight}
        description={solution.ctaDescription}
        buttonText="Get Started Today"
      />
    </div>
  );
}

