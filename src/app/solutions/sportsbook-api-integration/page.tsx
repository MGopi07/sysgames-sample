import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Sportsbook API Integration | Sysgames",
  description:
    "Integrate sportsbook into your branded portal wallet with Sysgames Sportsbook API Integration.",
};

export default function SportsbookApiIntegrationPage() {
  return <ExactSolutionPage doc={solutionsExactContent["sportsbook-api-integration"]} />;
}

