import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Betting Shop Software – Terminal | Sysgames",
  description:
    "Cabinet play solutions for modern betting shop floors with Sysgames Betting Shop Software Terminal.",
};

export default function TerminalPage() {
  return <ExactSolutionPage doc={solutionsExactContent["terminal"]} />;
}

