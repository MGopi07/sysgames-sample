import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "White Label Casino Software | Sysgames",
  description:
    "White Label Casino Software from Sysgames helps operators launch a branded online casino without building the full platform from zero.",
};

export default function WhiteLabelCasinoSoftwarePage() {
  return <ExactSolutionPage doc={solutionsExactContent["white-label-casino-software"]} />;
}

