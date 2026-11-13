import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/ui/CTASection";
import SolutionTabs, { TabSectionItem } from "@/components/solutions/SolutionTabs";
import SolutionAudienceBenefits from "@/components/solutions/SolutionAudienceBenefits";
import SolutionKeyFeatures from "@/components/solutions/SolutionKeyFeatures";
import { DocxBlock, ExactSolutionDoc } from "@/data/solutionsExactContent";

interface SectionGroup {
  heading: string;
  blocks: DocxBlock[];
}

interface SubGroup {
  subheading: string;
  paragraphs: string[];
}

function groupIntoSections(blocks: DocxBlock[]): {
  h1Title: string;
  sections: SectionGroup[];
} {
  let h1Title = "";
  const sections: SectionGroup[] = [];
  let current: SectionGroup | null = null;

  for (const block of blocks) {
    if (block.type === "Heading1" && !h1Title) {
      h1Title = block.text ?? "";
    } else if (block.type === "Heading2") {
      current = { heading: block.text ?? "", blocks: [] };
      sections.push(current);
    } else if (current) {
      current.blocks.push(block);
    }
  }

  return { h1Title, sections };
}

function splitByHeading3(blocks: DocxBlock[]): {
  introParagraphs: string[];
  subGroups: SubGroup[];
} {
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

  return { introParagraphs, subGroups };
}

function makeShortTabLabel(heading: string): string {
  const lower = heading.toLowerCase();
  if (lower.startsWith("what is")) return "What It Is";
  if (lower.startsWith("how ")) return "How It Works";
  if (lower.startsWith("why choose")) return "Why Choose Us";
  if (lower.startsWith("get started")) return "Get Started";
  if (lower.includes(" vs ")) return "Comparison";
  if (lower.startsWith("seo content")) return "SEO Angles";
  if (lower.startsWith("operational best")) return "Best Practices";
  if (lower.startsWith("recommended website")) return "Page Structure";
  if (lower.startsWith("content quality")) return "Content Quality";
  if (lower.startsWith("closing summary")) return "Summary";
  if (lower.startsWith("final cta")) return "CTA Guidance";
  if (heading.length > 26) {
    return heading.split(" ").slice(0, 3).join(" ");
  }
  return heading;
}

export default function ExactSolutionPage({
  doc,
}: {
  doc: ExactSolutionDoc;
}) {
  const { h1Title, sections } = groupIntoSections(doc.blocks);
  const heroSection = sections[0];
  const heroParagraphs = heroSection
    ? heroSection.blocks.filter(
        (b): b is DocxBlock & { text: string } => Boolean(b.text)
      )
    : [];
  const primaryHeroParagraph = heroParagraphs[0];
  const secondaryHeroParagraphs = heroParagraphs.slice(1);
  const bodySections = sections.slice(1);

  const bentoListSections: SectionGroup[] = [];
  const featureSections: SectionGroup[] = [];
  const faqSections: SectionGroup[] = [];
  const coreTabs: TabSectionItem[] = [];
  const extraTabs: TabSectionItem[] = [];

  if (secondaryHeroParagraphs.length > 0) {
    coreTabs.push({
      id: "hero-overview",
      label: "Overview",
      heading: heroSection?.heading ?? h1Title,
      paragraphs: secondaryHeroParagraphs.map((b) => b.text),
    });
  }

  for (let i = 0; i < bodySections.length; i++) {
    const sec = bodySections[i];
    const hasHeading3 = sec.blocks.some((b) => b.type === "Heading3");
    const lowerHeading = sec.heading.toLowerCase();

    if (lowerHeading.includes("frequently asked questions") && hasHeading3) {
      faqSections.push(sec);
    } else if (hasHeading3) {
      featureSections.push(sec);
    } else if (
      sec.heading.startsWith("Who ") ||
      sec.heading.startsWith("Business Benefits") ||
      sec.heading.startsWith("Ideal Use Cases")
    ) {
      bentoListSections.push(sec);
    } else {
      const paragraphs = sec.blocks
        .map((b) => b.text)
        .filter((t): t is string => Boolean(t));
      const item: TabSectionItem = {
        id: `tab-${i}`,
        label: makeShortTabLabel(sec.heading),
        heading: sec.heading,
        paragraphs,
      };
      const isCore =
        lowerHeading.startsWith("what is") ||
        lowerHeading.startsWith("how ") ||
        lowerHeading.startsWith("why choose") ||
        lowerHeading.startsWith("get started");

      if (isCore) {
        coreTabs.push(item);
      } else {
        extraTabs.push(item);
      }
    }
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-gray-300">
      {/* Compact Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-5">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-xs font-bold text-[var(--primary)] tracking-widest uppercase">
                  {doc.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                {h1Title}
              </h1>

              {heroSection && (
                <>
                  <h2 className="text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-accent mb-4">
                    {heroSection.heading}
                  </h2>
                  {primaryHeroParagraph && (
                    <p className="text-base text-gray-300 leading-relaxed mb-7">
                      {primaryHeroParagraph.text}
                    </p>
                  )}
                </>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-[var(--btn-text)] bg-gradient-accent rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
              >
                Request a Demo <ChevronRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-xl">
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-3xl blur-[60px] pointer-events-none" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doc.image}
                  alt={h1Title}
                  className="relative z-10 w-full h-auto aspect-[16/10] object-cover rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Core Platform Deep-Dive */}
      {coreTabs.length > 0 && (
        <section className="py-10 lg:py-14 bg-[#0D0D12] relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <SolutionTabs
              tabs={coreTabs}
              eyebrow="Platform Deep Dive"
              title="Architecture & Value"
            />
          </div>
        </section>
      )}

      {/* Audience, Business Benefits & Ideal Use Cases */}
      {bentoListSections.length > 0 && (
        <SolutionAudienceBenefits sections={bentoListSections} />
      )}

      {/* Key Features Sections */}
      {featureSections.map((sec, secIdx) => (
        <SolutionKeyFeatures
          key={secIdx}
          heading={sec.heading}
          blocks={sec.blocks}
        />
      ))}

      {/* Tabbed Strategy & Operations Notes */}
      {extraTabs.length > 0 && (
        <section className="py-12 lg:py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <SolutionTabs
              tabs={extraTabs}
              eyebrow="Operations & Strategy"
              title="Deployment & Best Practices"
            />
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {faqSections.map((sec, secIdx) => {
        const { introParagraphs, subGroups } = splitByHeading3(sec.blocks);
        const faqItems = subGroups.map((sg) => ({
          q: sg.subheading.replace(/^\d+\.\s*/, "").trim(),
          a: sg.paragraphs.join(" "),
        }));

        const introText =
          introParagraphs.length > 0
            ? introParagraphs.join(" ")
            : `Everything you need to know about our ${h1Title} and platform capabilities.`;

        return (
          <section
            key={secIdx}
            className="py-16 lg:py-24 bg-[#0A0A0A] relative border-t border-white/5"
          >
            {/* Background glow wrapped to prevent overflow without breaking sticky */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative">
                {/* Left Side: Sticky Information & Support Card */}
                <div className="lg:col-span-5 lg:sticky lg:top-[15vh] flex flex-col justify-start">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] mb-6 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                    </span>
                    <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">
                      Answers
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {sec.heading}
                  </h2>

                  <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
                    {introText}
                  </p>

                  <div className="p-8 rounded-3xl glass-card border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                      Still have questions?
                    </h3>
                    <p className="text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">
                      Our enterprise integration specialists are available 24/7 to discuss your platform requirements.
                    </p>
                    <Link
                      href="/contact"
                      className="block text-center w-full py-4 rounded-xl font-bold text-[var(--btn-text)] bg-[var(--primary)] hover:bg-[var(--primary)]/90 transition-colors shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] relative z-10"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-7">
                  <FAQAccordion items={faqItems} />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}
