import {
  ShieldCheck,
  Users,
  LayoutDashboard,
  Store,
  Briefcase,
  Laptop,
  Monitor,
  Activity,
  Wallet,
  ArrowUpRight,
  FileText,
  TrendingUp,
  BarChart3,
  Scale,
  Gamepad2,
  Trophy,
  Code2,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { DocxBlock } from "@/data/solutionsExactContent";

interface SubGroup {
  subheading: string;
  paragraphs: string[];
}

function getFeatureIcon(title: string): LucideIcon {
  const lower = title.toLowerCase();
  if (lower.includes("login") || lower.includes("auth") || lower.includes("security") || lower.includes("fraud")) {
    return ShieldCheck;
  }
  if (lower.includes("role") || lower.includes("access") || lower.includes("user")) {
    return Users;
  }
  if (lower.includes("dashboard") || lower.includes("portal") || lower.includes("lobby")) {
    return LayoutDashboard;
  }
  if (lower.includes("shop") || lower.includes("location") || lower.includes("retail")) {
    return Store;
  }
  if (lower.includes("team") || lower.includes("cashier") || lower.includes("staff")) {
    return Briefcase;
  }
  if (lower.includes("smart pc") || lower.includes("pc")) {
    return Laptop;
  }
  if (lower.includes("terminal") || lower.includes("cabinet") || lower.includes("kiosk")) {
    return Monitor;
  }
  if (lower.includes("board") || lower.includes("live") || lower.includes("stream") || lower.includes("real-time")) {
    return Activity;
  }
  if (lower.includes("coin") || lower.includes("wallet") || lower.includes("balance") || lower.includes("deposit")) {
    return Wallet;
  }
  if (lower.includes("cash-out") || lower.includes("payout") || lower.includes("withdrawal")) {
    return ArrowUpRight;
  }
  if (lower.includes("history") || lower.includes("log") || lower.includes("audit")) {
    return FileText;
  }
  if (lower.includes("insight") || lower.includes("analytic")) {
    return TrendingUp;
  }
  if (lower.includes("report") || lower.includes("statement")) {
    return BarChart3;
  }
  if (lower.includes("settlement") || lower.includes("network") || lower.includes("hierarchy") || lower.includes("compliance")) {
    return Scale;
  }
  if (lower.includes("game") || lower.includes("casino") || lower.includes("slot")) {
    return Gamepad2;
  }
  if (lower.includes("odds") || lower.includes("bet") || lower.includes("sportsbook")) {
    return Trophy;
  }
  if (lower.includes("api") || lower.includes("code") || lower.includes("integration") || lower.includes("engine")) {
    return Code2;
  }
  return Sparkles;
}

export default function SolutionKeyFeatures({
  heading,
  blocks,
}: {
  heading: string;
  blocks: DocxBlock[];
}) {
  const introParagraphs: string[] = [];
  const subGroups: SubGroup[] = [];
  let current: SubGroup | null = null;

  for (const block of blocks) {
    if (block.type === "Heading3") {
      current = { subheading: block.text ?? "", paragraphs: [] };
      subGroups.push(current);
    } else if (block.text) {
      if (current) {
        current.paragraphs.push(block.text);
      } else {
        introParagraphs.push(block.text);
      }
    }
  }

  return (
    <section className="py-14 lg:py-20 bg-[#0D0D12] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]">
            <Sparkles size={13} className="text-[var(--primary)]" />
            <span className="text-xs font-bold text-[var(--primary)] tracking-widest uppercase">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            {heading}
          </h2>
          <div className="w-14 h-1 bg-gradient-accent rounded-full mb-5 mx-auto" />

          {introParagraphs.map((p, idx) => (
            <p key={idx} className="text-gray-400 text-base lg:text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
              {p}
            </p>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subGroups.map((sg, idx) => {
            // Strip leading "1. ", "2. ", "10. " from the subheading
            const cleanTitle = sg.subheading.replace(/^\d+\.\s*/, "").trim();
            const Icon = getFeatureIcon(cleanTitle);
            const leadParagraph = sg.paragraphs[0];
            const supportingParagraphs = sg.paragraphs.slice(1);

            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-6 lg:p-7 bg-[#121218] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Bar: Contextual Icon + Clean Monospace Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 group-hover:bg-gradient-accent group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/25 font-bold tracking-wider">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Clean Feature Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors mb-3 leading-snug">
                    {cleanTitle}
                  </h3>

                  {/* Primary Feature Description */}
                  {leadParagraph && (
                    <p className="text-sm sm:text-[14.5px] text-gray-200 leading-relaxed font-normal mb-4">
                      {leadParagraph}
                    </p>
                  )}

                  {/* Supporting Operational Details */}
                  {supportingParagraphs.length > 0 && (
                    <div className="space-y-2.5 mt-auto pt-1">
                      {supportingParagraphs.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-400 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0 opacity-80" />
                          <p className="mb-0 text-gray-400 leading-relaxed">{p}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

