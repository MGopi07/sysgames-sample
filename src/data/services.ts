export interface Service {
  id: string;
  category: string;
  heading: string;
  description: string;
  features: string[];
  cta: string;
  visual: string;
  link?: string;
}

export const services: Service[] = [
  {
    id: "igaming",
    category: "iGaming",
    heading: "End-to-End iGaming Software Development",
    description: "Launch, run, scale a fully compliant iGaming operation on one unified platform built for how operators actually work, not a stitched-together patchwork vendors.",
    features: [
      "Multi-Product Platform: Casino, Sportsbook, and Slots in One Stack",
      "Rapid Market Entry with Localized Payments & Languages",
      "Real-Time Player Analytics and Behavioral Insights",
      "Full Regulatory and Licensing Support"
    ],
    cta: "Know More",
    visual: "igaming",
    link: "/services/white-label-igaming-software-solutions"
  },
  {
    id: "casino-games",
    category: "Casino Games",
    heading: "Casino Game Development Built Around Player Behavior",
    description: "A continuously expanding, fully customizable game library designed to hold attention through short, mobile-first sessions last decade's templates.",
    features: [
      "Wide Library of Table, Card, and Specialty Games",
      "Custom Themes and Regional Localization",
      "Built-In Gamification and Engagement Mechanics",
      "High-Performance, Cross-Device Rendering"
    ],
    cta: "Know More",
    visual: "casino-games",
    link: "/services/online-casino-game-development-company"
  },
  {
    id: "sports-book",
    category: "Sports Book",
    heading: "Sportsbook Software for Any Market",
    description: "A dynamic, real-time betting engine paired AI-driven risk management so your odds move as fast as the market does.",
    features: [
      "Real-Time, Automated Odds Engine",
      "50+ Sports and 100+ Betting Markets",
      "Live Betting and In-Play Props",
      "Integrated PAM and CRM Tools"
    ],
    cta: "Know More",
    visual: "sports-book",
    link: "/services/sportsbook-software-development-company"
  },
  {
    id: "casino-platform",
    category: "Casino Platform",
    heading: "A Casino Platform Built to Scale With You",
    description: "Modular, API-first architecture that lets you launch fast today add markets, payment rails, and games tomorrow without a rebuild.",
    features: [
      "Modular, API-First Platform Design",
      "Multi-Currency and Multi-Language Support",
      "End-to-End Security and Encryption",
      "Real-Time Reporting and Admin Back Office"
    ],
    cta: "Know More",
    visual: "casino-platform",
    link: "/services/casino-platform-development-company"
  },
  {
    id: "retail-betting-shops",
    category: "Retail Betting Shops",
    heading: "Retail Betting Shop Software Provider for Modern Betting",
    description: "Partner with a retail betting shop software provider for terminals, real-time odds, sportsbook management, payments, risk controls, analytics, and support.",
    features: [
      "Omnichannel Integration with Online Platforms",
      "Centralized Terminal and Shop Management",
      "Real-Time Odds and Ticket Settlement",
      "Staff and Cash Management Tools"
    ],
    cta: "Know More",
    visual: "retail-betting-shops",
    link: "/services/retail-betting-shop-software-provider"
  },
  {
    id: "betting-kiosks",
    category: "Betting Kiosks",
    heading: "Sportsbook Kiosk Software Provider for Modern Betting Businesses",
    description: "Launch self-service betting kiosks with secure betting technology, real-time odds, player management, payments, and centralized administration.",
    features: [
      "Intuitive, Touch-Optimized Interface",
      "Seamless PAM and Payment Integration",
      "Configurable for Sports, Lottery, or Casino",
      "Remote Monitoring and Fleet Management"
    ],
    cta: "Know More",
    visual: "betting-kiosks",
    link: "/services/sportsbook-kiosk-software-provider"
  },
  {
    id: "slot-games",
    category: "Slot Games",
    heading: "Slot Game Software Provider for Modern Online Casinos",
    description: "Partner with a reliable slot game software provider for engaging online slots, custom game development, API integration, mobile-ready gameplay, and scalable casino gaming solutions.",
    features: [
      "Fully Customizable RTP and Volatility",
      "Branded and IP-Based Slot Series",
      "Integrated Bonus and Loyalty Mechanics",
      "Mobile-First, Touch-Optimized Builds"
    ],
    cta: "Know More",
    visual: "slot-games",
    link: "/services/slot-game-software-provider"
  },
  {
    id: "casino-game-aggregator",
    category: "Casino Game Aggregator",
    heading: "Casino Game Aggregation Provider for a Broader Casino Portfolio",
    description: "Partner with a reliable casino game aggregation provider to access multiple casino game studios through one integration.",
    features: [
      "Single API Access to Top Game Providers",
      "Centralized Reporting Across All Studios",
      "Fast Onboarding of New Game Content",
      "Unified Player Wallet Across Providers"
    ],
    cta: "Know More",
    visual: "casino-game-aggregator",
    link: "/services/casino-game-aggregation-provider"
  }
];
