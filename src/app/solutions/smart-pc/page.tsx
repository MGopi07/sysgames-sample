import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Betting Shop Software – Smart PC | Sysgames",
  description:
    "Customer play stations for professional betting shops with Sysgames Betting Shop Software Smart PC.",
};

export default function SmartPcPage() {
  return <ExactSolutionPage doc={solutionsExactContent["smart-pc"]} />;
}

