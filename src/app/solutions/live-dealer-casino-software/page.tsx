import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Live Dealer Casino Software | Sysgames",
  description:
    "Offer live dealer games on your branded casino portal with Sysgames Live Dealer Casino Software.",
};

export default function LiveDealerCasinoSoftwarePage() {
  return <ExactSolutionPage doc={solutionsExactContent["live-dealer-casino-software"]} />;
}

