import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Casino API Integration | Sysgames",
  description:
    "Connect provider games to your white-label casino portal with Sysgames Casino API Integration.",
};

export default function CasinoApiIntegrationPage() {
  return <ExactSolutionPage doc={solutionsExactContent["casino-api-integration"]} />;
}

