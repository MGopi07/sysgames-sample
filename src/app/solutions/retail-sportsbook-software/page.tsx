import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Retail Sportsbook Software | Sysgames",
  description:
    "Sports betting on betting shop Smart PCs and Terminals with Sysgames Retail Sportsbook Software.",
};

export default function RetailSportsbookSoftwarePage() {
  return <ExactSolutionPage doc={solutionsExactContent["retail-sportsbook-software"]} />;
}

