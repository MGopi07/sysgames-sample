export interface Benefit {
  id: string;
  title: string;
  icon: string;
  bullets: string[];
}

export const benefits: Benefit[] = [
  {
    id: "ownership",
    title: "100% Ownership",
    icon: "Key",
    bullets: [
      "Complete ownership of your iGaming platform and business assets.",
      "Full control over source code, integrations, and platform functionality.",
      "Freedom to customize and scale your solution as your business grows."
    ]
  },
  {
    id: "ggr",
    title: "Truly No GGR Share",
    icon: "TrendingUp",
    bullets: [
      "No unnecessary GGR-sharing model for your platform.",
      "Greater control over your revenue and business operations.",
      "Transparent development and pricing structure."
    ]
  },
  {
    id: "deployment",
    title: "Faster Deployment",
    icon: "Rocket",
    bullets: [
      "Proven development frameworks for quicker implementation.",
      "Ready-to-integrate modules and third-party solutions.",
      "Faster time-to-market for new iGaming businesses."
    ]
  },
  {
    id: "api",
    title: "Unified and Stable API",
    icon: "Network",
    bullets: [
      "Unified APIs for games, payments, sportsbook, and third-party integrations.",
      "Stable connectivity between different platform components.",
      "Simplified integration and improved platform performance."
    ]
  },
  {
    id: "turnkey",
    title: "Turnkey & Custom",
    icon: "Blocks",
    bullets: [
      "Ready-to-launch turnkey iGaming platforms.",
      "Fully customized solutions based on your business requirements.",
      "Flexible branding, features, workflows, and integrations."
    ]
  },
  {
    id: "fraud",
    title: "Anti-Fraud Protection",
    icon: "ShieldCheck",
    bullets: [
      "Advanced tools to identify suspicious activities.",
      "Risk monitoring and transaction security mechanisms.",
      "Improved protection for operators, players, and platform operations."
    ]
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    icon: "Wallet",
    bullets: [
      "Flexible development options for different business models.",
      "Cost-effective solutions without compromising essential functionality.",
      "Scalable technology that supports long-term growth."
    ]
  },
  {
    id: "support",
    title: "24X7 Technical Support",
    icon: "Headphones",
    bullets: [
      "Round-the-clock technical assistance for platform operations.",
      "Faster troubleshooting and issue resolution.",
      "Continuous support to maintain platform stability and performance."
    ]
  },
  {
    id: "pam",
    title: "AI-Based PAM System",
    icon: "BrainCircuit",
    bullets: [
      "AI-powered player account management capabilities.",
      "Automated processes and intelligent player insights.",
      "Support for personalization, monitoring, and operational efficiency."
    ]
  },
  {
    id: "legal",
    title: "Legal Consulting",
    icon: "Scale",
    bullets: [
      "Guidance on market-specific iGaming requirements.",
      "Support for understanding licensing and compliance considerations.",
      "Practical assistance for implementing platforms responsibly and efficiently."
    ]
  }
];
