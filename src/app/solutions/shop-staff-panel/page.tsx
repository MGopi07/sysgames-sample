import type { Metadata } from "next";
import ExactSolutionPage from "@/components/solutions/ExactSolutionPage";
import { solutionsExactContent } from "@/data/solutionsExactContent";

export const metadata: Metadata = {
  title: "Betting Shop Software – Shop Staff Panel | Sysgames",
  description:
    "Complete operations hub for modern betting shops with Sysgames Betting Shop Software Shop Staff Panel.",
};

export default function ShopStaffPanelPage() {
  return <ExactSolutionPage doc={solutionsExactContent["shop-staff-panel"]} />;
}

