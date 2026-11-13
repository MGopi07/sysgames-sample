import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "White Label Sportsbook Software | Sysgames",
  description:
    "Add branded sports betting to your operator platform with Sysgames White Label Sportsbook Software.",
};

export default function WhiteLabelSportsbookSoftwarePage() {
  return <ExactSolutionPage doc={solutionsExactContent["white-label-sportsbook-software"]} />;
}

