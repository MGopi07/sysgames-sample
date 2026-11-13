export type SolutionIconName =
  | "Palette"
  | "Gamepad2"
  | "Wallet"
  | "ShieldCheck"
  | "Zap"
  | "Server"
  | "Code2"
  | "Layers"
  | "Globe"
  | "Video"
  | "Users"
  | "Trophy"
  | "Activity"
  | "Monitor"
  | "Cpu"
  | "Printer"
  | "Store"
  | "BarChart3";

export interface SolutionFeature {
  title: string;
  desc: string;
  icon: SolutionIconName;
}

export interface SolutionHighlight {
  title: string;
  desc: string;
}

export interface SolutionFAQ {
  q: string;
  a: string;
}

export interface SolutionPageData {
  slug: string;
  name: string;
  category: string;
  href: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroBadge: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroBenefits: string[];
  whyTitle: string;
  whyDescription: string;
  whyFeatures: SolutionFeature[];
  highlightsTitle: string;
  highlightsDescription: string;
  highlights: SolutionHighlight[];
  faqs: SolutionFAQ[];
  ctaTitle: string;
  ctaHighlight: string;
  ctaDescription: string;
}

export interface SolutionCategoryGroup {
  heading: string;
  items: {
    name: string;
    href: string;
    slug: string;
  }[];
}

export const solutionsData: SolutionPageData[] = [
  // Casino Software
  {
    slug: "white-label-casino-software",
    name: "White Label Casino Software",
    category: "Casino Software",
    href: "/solutions/white-label-casino-software",
    metaTitle: "White Label Casino Software | Launch Your Online Casino Fast",
    metaDescription:
      "Launch a branded online casino quickly with our White Label Casino Software featuring thousands of games, payment gateways, KYC, bonus engines, and 24/7 support.",
    keywords:
      "White Label Casino Software, White Label Online Casino, Turnkey Casino Platform, Branded Casino Software",
    heroBadge: "Casino Software",
    heroTitlePrefix: "White Label Casino Software, Built For",
    heroTitleHighlight: "Rapid Launch",
    heroDescription:
      "Enter the online gaming market in weeks instead of years. Our White Label Casino Software combines a customizable front-end, aggregated game library, multi-currency payments, and compliance tools in one ready-to-launch platform.",
    heroBenefits: [
      "Full Brand Customization: Custom UI, themes, and domain.",
      "10,000+ Casino Games: Slots, tables, and instant wins.",
      "Integrated Payments: Fiat, crypto, and local gateways.",
      "Automated Bonus Engine: Free spins, cashback, and VIP.",
      "Built-In KYC & AML: Automated player verification.",
      "Dedicated Back-Office: Real-time CRM and analytics.",
    ],
    whyTitle: "Why Choose Our White Label Casino Software?",
    whyDescription:
      "Developing a casino platform from scratch requires massive capital, licensing hurdles, and months of engineering. Our white-label solution gives you an enterprise-grade foundation so you can focus on player acquisition and brand growth.",
    whyFeatures: [
      { title: "Custom Brand Identity", desc: "Tailored templates, logos, and UX.", icon: "Palette" },
      { title: "Massive Game Catalog", desc: "100+ top-tier studio integrations.", icon: "Gamepad2" },
      { title: "Multi-Currency Wallets", desc: "Fiat and crypto payment support.", icon: "Wallet" },
      { title: "Fraud & Risk Control", desc: "Real-time AML and bonus abuse checks.", icon: "ShieldCheck" },
      { title: "Fast Time to Market", desc: "Go live in as little as 4 weeks.", icon: "Zap" },
      { title: "99.99% Uptime Cloud", desc: "Auto-scaling global infrastructure.", icon: "Server" },
    ],
    highlightsTitle: "Everything Needed to Operate at Scale",
    highlightsDescription:
      "From player onboarding to retention campaigns, every operational module is unified inside a single intuitive management suite.",
    highlights: [
      {
        title: "Player Account Management (PAM)",
        desc: "Centralized player profiles, segmentation, session tracking, and responsible gaming limits.",
      },
      {
        title: "Smart Retention & Loyalty",
        desc: "Configurable tournaments, tiered VIP clubs, promo codes, and automated trigger rewards.",
      },
      {
        title: "Affiliate & Agent Tracking",
        desc: "Built-in attribution links, CPA/RevShare models, and transparent partner reporting.",
      },
      {
        title: "Regulatory Readiness",
        desc: "Jurisdiction-ready reporting, age verification hooks, and audit-compliant logs.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to launch a White Label Casino?",
        a: "Most operators launch within 3 to 6 weeks depending on brand customization, payment gateway onboarding, and target market requirements.",
      },
      {
        q: "Can I customize the front-end design and player journey?",
        a: "Yes. You have full control over branding, color palettes, layouts, promotional banners, and localized content.",
      },
      {
        q: "Which game providers are included?",
        a: "The platform comes pre-integrated with leading slots, crash games, table games, and live dealer studios via a single unified integration.",
      },
      {
        q: "Does it support both fiat and cryptocurrency payments?",
        a: "Yes, our cashier supports cards, bank transfers, e-wallets, and major cryptocurrencies with automated conversion and settlement.",
      },
    ],
    ctaTitle: "Ready to Launch Your",
    ctaHighlight: "White Label Casino?",
    ctaDescription:
      "Get a tailored demo of our White Label Casino Software and discover how fast you can bring your brand to market.",
  },
  {
    slug: "casino-api-integration",
    name: "Casino API Integration",
    category: "Casino Software",
    href: "/solutions/casino-api-integration",
    metaTitle: "Casino API Integration | Unified Single API for 10,000+ Games",
    metaDescription:
      "Connect 100+ leading casino game providers through one seamless Casino API Integration. Fast deployment, unified wallet, and real-time reporting.",
    keywords:
      "Casino API Integration, Game Aggregator API, Unified Casino API, iGaming API",
    heroBadge: "Casino Software",
    heroTitlePrefix: "Seamless Casino API Integration Via",
    heroTitleHighlight: "One Unified Endpoint",
    heroDescription:
      "Eliminate months of individual studio integrations. Our Casino API Integration connects your existing platform to thousands of certified slots, table games, crash titles, and live dealer rooms through a single, low-latency REST & WebSocket API.",
    heroBenefits: [
      "Single Integration: Access 100+ game studios at once.",
      "Seamless & Transfer Wallets: Flexible balance models.",
      "Ultra-Low Latency: Global edge routing for fast loads.",
      "Unified Reporting: Consolidated GGR and bet logs.",
      "Free Round & Bonus API: Cross-provider promo support.",
      "24/7 Technical Support: Dedicated integration engineers.",
    ],
    whyTitle: "Why Choose Our Casino API Integration?",
    whyDescription:
      "Integrating game providers one by one drains engineering resources and delays revenue. Our unified API standardizes game launches, wallet callbacks, and session reconciliation across every studio.",
    whyFeatures: [
      { title: "Clean RESTful API", desc: "Well-documented schemas & webhooks.", icon: "Code2" },
      { title: "10,000+ Certified Titles", desc: "Slots, crash, RNG & live tables.", icon: "Gamepad2" },
      { title: "Multi-Wallet Support", desc: "Seamless or transfer wallet modes.", icon: "Wallet" },
      { title: "99.99% API Availability", desc: "Redundant multi-region clusters.", icon: "Server" },
      { title: "Instant Sandbox", desc: "Test credentials ready in minutes.", icon: "Zap" },
      { title: "RNG & Compliance", desc: "Certified fair-play game feeds.", icon: "ShieldCheck" },
    ],
    highlightsTitle: "Engineered for Developers & Operators",
    highlightsDescription:
      "Built to handle peak concurrency with predictable response times, idempotent transactions, and automated failover.",
    highlights: [
      {
        title: "Idempotent Wallet Transactions",
        desc: "Prevent duplicate debits or missed payouts with strict transaction key handling and retry queues.",
      },
      {
        title: "Real-Time Back-Office Sync",
        desc: "Stream bet, win, and rollback events directly into your analytics and risk engines.",
      },
      {
        title: "Automatic Game Updates",
        desc: "New releases from partnered studios appear automatically in your catalog without extra coding.",
      },
      {
        title: "Multi-Currency & Crypto Ready",
        desc: "Native support for micro-units, fiat currencies, and dynamic exchange rate mapping.",
      },
    ],
    faqs: [
      {
        q: "How long does the Casino API Integration take?",
        a: "With our standardized documentation and sandbox environment, most engineering teams complete integration in 5 to 10 business days.",
      },
      {
        q: "Do you support both Seamless Wallet and Transfer Wallet?",
        a: "Yes. You can choose Seamless Wallet for real-time balance callbacks or Transfer Wallet depending on your platform architecture.",
      },
      {
        q: "Can we select specific providers or regions?",
        a: "Yes, you can enable or restrict providers, individual games, and currencies per jurisdiction from the back-office.",
      },
      {
        q: "Is technical support available during integration?",
        a: "Yes, you get a dedicated integration channel with our solutions engineers from sandbox testing through production sign-off.",
      },
    ],
    ctaTitle: "Supercharge Your Platform With",
    ctaHighlight: "Unified Casino API",
    ctaDescription:
      "Request API documentation and sandbox access to start integrating thousands of casino games today.",
  },
  {
    slug: "live-dealer-casino-software",
    name: "Live Dealer Casino Software",
    category: "Casino Software",
    href: "/solutions/live-dealer-casino-software",
    metaTitle: "Live Dealer Casino Software | HD Streaming & Real-Time Tables",
    metaDescription:
      "Deliver authentic casino experiences with our Live Dealer Casino Software. Ultra-low latency HD video, multilingual dealers, branded tables, and mobile-first UI.",
    keywords:
      "Live Dealer Casino Software, Live Casino Software, Live Blackjack Roulette Baccarat, Branded Live Tables",
    heroBadge: "Casino Software",
    heroTitlePrefix: "Immersive Live Dealer Casino Software In",
    heroTitleHighlight: "4K Real-Time",
    heroDescription:
      "Bring the energy of a land-based casino floor directly to desktop and mobile screens. Our Live Dealer Casino Software delivers ultra-low latency HD streams, interactive dealer chat, multi-camera angles, and dedicated branded tables.",
    heroBenefits: [
      "Sub-Second Streaming: Adaptive HD & 4K video feeds.",
      "Classic & VIP Tables: Blackjack, Roulette, Baccarat, Poker.",
      "Dedicated Branded Tables: Custom studio felt and backdrops.",
      "Multilingual Dealers: Localized tables for global markets.",
      "Mobile-First Controls: Portrait & landscape bet UI.",
      "Side Bets & Multipliers: High-engagement game variants.",
    ],
    whyTitle: "Why Choose Our Live Dealer Casino Software?",
    whyDescription:
      "Live casino players expect crystal-clear video, instant bet settlement, and zero buffering. Our streaming architecture and studio partnerships ensure smooth gameplay across any network.",
    whyFeatures: [
      { title: "Ultra-Low Latency Video", desc: "WebRTC & adaptive bitrate streams.", icon: "Video" },
      { title: "Interactive Player UX", desc: "Live chat, tipping & statistics.", icon: "Users" },
      { title: "Custom Branded Studios", desc: "Your logo on tables and uniforms.", icon: "Palette" },
      { title: "Certified Studio Integrity", desc: "Optical recognition & audit trails.", icon: "ShieldCheck" },
      { title: "Global Localization", desc: "Multi-language UI & native dealers.", icon: "Globe" },
      { title: "High-Limit VIP Rooms", desc: "Configurable table limits & salons.", icon: "Wallet" },
    ],
    highlightsTitle: "Authentic Floor Experience, Anywhere",
    highlightsDescription:
      "Designed to maximize table occupancy, session duration, and player trust across every device.",
    highlights: [
      {
        title: "Multi-Angle Camera Switching",
        desc: "Players can toggle between wide studio views, close-up wheel/card shots, and clean betting overlays.",
      },
      {
        title: "Real-Time Roadmaps & Trends",
        desc: "Built-in Baccarat bead plates, Roulette hot/cold numbers, and Blackjack bet-behind features.",
      },
      {
        title: "Scalable Concurrent Seating",
        desc: "Unlimited player capacity on Infinite Blackjack and Roulette tables during peak sporting or weekend traffic.",
      },
      {
        title: "Unified Bonus Compatibility",
        desc: "Run live-table cashback, leaderboard races, and golden chip promotions seamlessly.",
      },
    ],
    faqs: [
      {
        q: "Which live dealer games are included?",
        a: "We offer Live Roulette, Blackjack, Baccarat, Sic Bo, Dragon Tiger, Andar Bahar, Teen Patti, and Casino Hold'em variants.",
      },
      {
        q: "Can we get dedicated tables with our own branding?",
        a: "Yes, operators can launch dedicated branded tables with custom felt, digital backdrops, and tailored betting limits.",
      },
      {
        q: "How does streaming perform on mobile networks?",
        a: "Adaptive bitrate streaming automatically adjusts video quality in real time to prevent buffering on 4G/5G connections.",
      },
      {
        q: "Can live dealer games be integrated via API?",
        a: "Yes, all live dealer rooms are accessible through the same unified Casino API and wallet integration.",
      },
    ],
    ctaTitle: "Elevate Player Engagement With",
    ctaHighlight: "Live Dealer Gaming",
    ctaDescription:
      "Schedule a live studio walkthrough and see how our Live Dealer Casino Software drives higher retention.",
  },

  // Sportsbook
  {
    slug: "white-label-sportsbook-software",
    name: "White Label Sportsbook Software",
    category: "Sportsbook",
    href: "/solutions/white-label-sportsbook-software",
    metaTitle: "White Label Sportsbook Software | Pre-Match, Live & Esports",
    metaDescription:
      "Launch a high-margin sportsbook fast with our White Label Sportsbook Software. Global odds feeds, live betting, risk management, bet builder, and cash-out.",
    keywords:
      "White Label Sportsbook Software, Turnkey Sportsbook Platform, Online Sportsbook Software, Betting Platform",
    heroBadge: "Sportsbook",
    heroTitlePrefix: "White Label Sportsbook Software For",
    heroTitleHighlight: "Global Markets",
    heroDescription:
      "Launch a feature-rich online sportsbook under your own brand without building trading desks or odds engines from scratch. Our White Label Sportsbook Software delivers 70,000+ monthly live events, automated risk management, and high-converting bet slips.",
    heroBenefits: [
      "70,000+ Live Events/Mo: Football, tennis, cricket & more.",
      "Full & Partial Cash-Out: Real-time settlement control.",
      "Bet Builder & Combos: Higher average bet margins.",
      "Automated Risk Engine: Dynamic limits & trader tools.",
      "Esports & Virtuals: 24/7 year-round betting action.",
      "Mobile-Optimized Slip: Fast one-tap live wagering.",
    ],
    whyTitle: "Why Choose Our White Label Sportsbook Software?",
    whyDescription:
      "Success in sports betting depends on odds accuracy, uptime during major tournaments, and a frictionless bet slip. Our platform combines institutional-grade data feeds with complete brand flexibility.",
    whyFeatures: [
      { title: "Global Sports Coverage", desc: "100+ sports & 2,000+ bet markets.", icon: "Trophy" },
      { title: "Real-Time Odds & Trading", desc: "Sub-second live odds updates.", icon: "Activity" },
      { title: "Risk & Margin Control", desc: "Player profiling & exposure caps.", icon: "ShieldCheck" },
      { title: "Custom Front-End UX", desc: "European, Asian & American views.", icon: "Palette" },
      { title: "Multi-Currency Cashier", desc: "Seamless deposits & fast payouts.", icon: "Wallet" },
      { title: "High-Concurrency Engine", desc: "Built for World Cup & IPL spikes.", icon: "Server" },
    ],
    highlightsTitle: "Built for Maximum Margin & Retention",
    highlightsDescription:
      "Give bettors the tools they love while protecting your book with automated risk and liability management.",
    highlights: [
      {
        title: "Live Match Trackers & Stats",
        desc: "Interactive 2D pitch visualizations, head-to-head stats, and live scoreboards keep bettors on-site.",
      },
      {
        title: "Free Bets & Odds Boosts",
        desc: "Run targeted accumulator insurance, enhanced odds, and sport-specific welcome offers.",
      },
      {
        title: "Managed Trading Desk",
        desc: "24/7 automated and human-supervised odds compilation to safeguard GGR margins.",
      },
      {
        title: "Omnichannel Ready",
        desc: "Sync online player accounts with retail betting shops using a unified wallet.",
      },
    ],
    faqs: [
      {
        q: "How many sports and live events are covered?",
        a: "Our sportsbook covers over 100 sports, 70,000+ monthly live events, and 100,000+ pre-match events including major leagues and esports.",
      },
      {
        q: "Can we customize odds margins and bet limits?",
        a: "Yes. Operators can configure margins per sport, league, or market, and set dynamic limits by player tier.",
      },
      {
        q: "Does it include Bet Builder and Cash-Out?",
        a: "Yes, both full/partial/auto Cash-Out and same-game Bet Builder are built in out of the box.",
      },
      {
        q: "Can we combine Sportsbook with Casino on one account?",
        a: "Yes, players use a single wallet and login across both your White Label Sportsbook and Casino.",
      },
    ],
    ctaTitle: "Launch Your Branded",
    ctaHighlight: "Sportsbook Platform",
    ctaDescription:
      "Talk to our sportsbook specialists for a live walkthrough of our odds feeds, bet slip UX, and back-office.",
  },
  {
    slug: "sportsbook-api-integration",
    name: "Sportsbook API Integration",
    category: "Sportsbook",
    href: "/solutions/sportsbook-api-integration",
    metaTitle: "Sportsbook API Integration | Real-Time Odds & Settlement Feeds",
    metaDescription:
      "Integrate live sportsbook odds, pre-match markets, bet settlement, and risk APIs into your existing platform with our low-latency Sportsbook API Integration.",
    keywords:
      "Sportsbook API Integration, Sports Betting API, Live Odds API, Betting Data Feed",
    heroBadge: "Sportsbook",
    heroTitlePrefix: "Low-Latency Sportsbook API Integration For",
    heroTitleHighlight: "Custom Platforms",
    heroDescription:
      "Power your proprietary front-end or existing gaming platform with our Sportsbook API Integration. Access real-time pre-match and in-play odds, automated ticket settlement, cash-out quotes, and match statistics via high-speed WebSockets and REST APIs.",
    heroBenefits: [
      "Sub-Second Odds Push: WebSocket streaming updates.",
      "Pre-Match & In-Play: Full global sports & esports.",
      "Automated Settlement: Fast, accurate result grading.",
      "Iframe or Pure API: Choose widget or headless UI.",
      "Custom Margin Rules: API-level vig & limit overrides.",
      "Developer-First Docs: OpenAPI specs & sandbox.",
    ],
    whyTitle: "Why Choose Our Sportsbook API Integration?",
    whyDescription:
      "Stale odds and delayed settlements cost operators money and trust. Our Sportsbook API is engineered for deterministic throughput, clean data normalization, and effortless integration into any tech stack.",
    whyFeatures: [
      { title: "REST & WebSocket Feeds", desc: "Push-based live odds & score diffs.", icon: "Code2" },
      { title: "Headless or Embeddable", desc: "Use raw JSON feeds or UI widgets.", icon: "Layers" },
      { title: "Instant Bet Settlement", desc: "Verified official data grading.", icon: "Zap" },
      { title: "Anti-Arbitrage Protection", desc: "Latency-aware bet acceptance.", icon: "ShieldCheck" },
      { title: "Global Localization", desc: "Multi-language team & market names.", icon: "Globe" },
      { title: "Scalable Edge Delivery", desc: "Handles massive peak traffic.", icon: "Server" },
    ],
    highlightsTitle: "Flexible Architecture for Any Product",
    highlightsDescription:
      "Whether you are building a bespoke betting front-end or adding sports betting to an existing casino, our API adapts to your stack.",
    highlights: [
      {
        title: "Normalized Market Taxonomy",
        desc: "Consistent sport, tournament, event, and outcome IDs across all data providers.",
      },
      {
        title: "Seamless Wallet & Ticket Sync",
        desc: "Atomic bet placement, voiding, cash-out, and resettlement callbacks.",
      },
      {
        title: "Rich Match Telemetry",
        desc: "Live match clocks, red cards, corners, and play-by-play events included in the feed.",
      },
      {
        title: "Granular Webhook Controls",
        desc: "Subscribe only to the sports, leagues, and market types your users actually bet on.",
      },
    ],
    faqs: [
      {
        q: "Can we build our own custom front-end UI with this API?",
        a: "Yes. Our headless Sportsbook API provides raw fixtures, odds, and bet-placement endpoints so you have 100% control over your UI.",
      },
      {
        q: "Do you also offer an embeddable sportsbook widget/iframe?",
        a: "Yes, if you prefer faster deployment, you can embed our responsive sportsbook module with your brand theme and seamless wallet.",
      },
      {
        q: "How fast are live odds updated?",
        a: "In-play odds updates are pushed over persistent WebSocket connections with sub-second latency.",
      },
      {
        q: "How are bet settlements and resettlements handled?",
        a: "Settlements are triggered automatically via signed webhooks as soon as official match results are confirmed.",
      },
    ],
    ctaTitle: "Power Your App With",
    ctaHighlight: "Sportsbook API",
    ctaDescription:
      "Connect with our engineering team to get sandbox API keys and inspect our Sportsbook API schema.",
  },
  {
    slug: "retail-sportsbook-software",
    name: "Retail Sportsbook Software",
    category: "Sportsbook",
    href: "/solutions/retail-sportsbook-software",
    metaTitle: "Retail Sportsbook Software | Land-Based Betting Shop Solutions",
    metaDescription:
      "Modernize land-based betting shops with our Retail Sportsbook Software. Over-the-counter POS, odds display screens, QR bet slips, and centralized shop reporting.",
    keywords:
      "Retail Sportsbook Software, Land-Based Betting Software, Betting Shop Sportsbook, OTC Betting System",
    heroBadge: "Sportsbook",
    heroTitlePrefix: "Retail Sportsbook Software For",
    heroTitleHighlight: "Land-Based Shops",
    heroDescription:
      "Unify your physical betting shops under one high-speed retail sportsbook ecosystem. Our Retail Sportsbook Software connects over-the-counter cashier stations, live odds display screens, self-service kiosks, and mobile QR bet slips in real time.",
    heroBenefits: [
      "Fast Ticket Printing: Thermal barcode & QR receipts.",
      "Live Odds Displays: Multi-screen TV wall layouts.",
      "QR Mobile-to-Shop: Build slips on phone, pay in shop.",
      "Multi-Shop Hierarchy: Manage agents, regions & shifts.",
      "Offline Resilience: Safe ticket queuing on drops.",
      "Unified Online Sync: Optional omnichannel wallet.",
    ],
    whyTitle: "Why Choose Our Retail Sportsbook Software?",
    whyDescription:
      "Retail betting shops require speed at the counter, zero confusion for cashiers, and complete visibility for owners. Our software streamlines ticket issuance, payouts, and cash reconciliation across every location.",
    whyFeatures: [
      { title: "Multi-Branch Control", desc: "Per-shop limits, taxes & payouts.", icon: "Store" },
      { title: "Live Odds & Scores", desc: "Synced across all shop displays.", icon: "Activity" },
      { title: "Cash & Shift Audits", desc: "Full drawer & cashier accountability.", icon: "BarChart3" },
      { title: "Anti-Fraud Tickets", desc: "Encrypted barcodes & payout locks.", icon: "ShieldCheck" },
      { title: "Instant Settlement", desc: "Scan ticket barcode to pay out.", icon: "Zap" },
      { title: "Hardware Agnostic", desc: "Runs on standard POS & printers.", icon: "Monitor" },
    ],
    highlightsTitle: "Designed for High-Volume Betting Floors",
    highlightsDescription:
      "Keep queues moving during peak match kickoffs while maintaining airtight financial oversight.",
    highlights: [
      {
        title: "QR Bet Booking",
        desc: "Customers browse odds on their phones, generate a booking code, and scan at the counter or kiosk to print.",
      },
      {
        title: "Dynamic TV Odds Boards",
        desc: "Schedule pre-match coupons, live odds tickers, and virtual sports streams across shop monitors.",
      },
      {
        title: "Flexible Agent Commissions",
        desc: "Configure GGR, turnover, or net-profit commission tiers for franchise partners and shop owners.",
      },
      {
        title: "Real-Time Liability Alerts",
        desc: "Get instant head-office notifications when large retail bets hit specific markets.",
      },
    ],
    faqs: [
      {
        q: "What hardware is needed for Retail Sportsbook Software?",
        a: "It runs on standard Windows/Linux PCs, touchscreen kiosks, thermal receipt printers, and barcode scanners.",
      },
      {
        q: "Can customers book bets on mobile and pay in the shop?",
        a: "Yes. Players can build a bet slip on mobile, receive a short booking code or QR, and pay cash at any shop counter.",
      },
      {
        q: "How do shop owners track daily cash flow?",
        a: "The central back-office provides live shift reports, cashier balances, ticket payouts, and net shop revenue.",
      },
      {
        q: "Can it work alongside online player accounts?",
        a: "Yes, you can enable omnichannel deposits and withdrawals so players can top up or cash out their online wallet in-shop.",
      },
    ],
    ctaTitle: "Upgrade Your Retail Network With",
    ctaHighlight: "Retail Sportsbook",
    ctaDescription:
      "Book a demo to see our over-the-counter POS, live display screens, and multi-shop management console.",
  },

  // Betting Shop Software
  {
    slug: "smart-pc",
    name: "Smart PC",
    category: "Betting Shop Software",
    href: "/solutions/smart-pc",
    metaTitle: "Smart PC Betting Shop Software | Turnkey Counter & Floor Terminal",
    metaDescription:
      "Turn any standard desktop into a high-speed betting workstation with Smart PC. Fast ticket entry, keyboard shortcuts, dual-screen support, and peripheral integration.",
    keywords:
      "Smart PC Betting Software, Betting Shop PC Software, Over the Counter Betting PC, Retail Betting Workstation",
    heroBadge: "Betting Shop Software",
    heroTitlePrefix: "Smart PC Software Built For",
    heroTitleHighlight: "High-Speed Counters",
    heroDescription:
      "Transform standard shop computers into ultra-responsive betting workstations. Smart PC is engineered for cashiers and self-service desktop stations, offering keyboard-driven fast bet entry, instant barcode scanning, and dual-screen customer displays.",
    heroBenefits: [
      "Keyboard-First Speed: Hotkeys for rapid ticket entry.",
      "Dual-Screen Support: Cashier view + customer odds screen.",
      "Plug & Play Peripherals: Thermal printers & scanners.",
      "Low Resource Footprint: Smooth on standard shop PCs.",
      "Instant Ticket Lookup: Scan to verify or cash out.",
      "Locked Kiosk Mode: Restrict OS access for security.",
    ],
    whyTitle: "Why Choose Smart PC for Your Betting Shops?",
    whyDescription:
      "During peak match hours, every second at the counter matters. Smart PC eliminates slow web-browser lag with a dedicated, locked-down desktop interface designed specifically for rapid retail betting operations.",
    whyFeatures: [
      { title: "Sub-Second Bet Entry", desc: "Quick match codes & hotkey slips.", icon: "Zap" },
      { title: "Locked Workstation", desc: "Prevents unauthorized browser use.", icon: "ShieldCheck" },
      { title: "Hardware Integration", desc: "Printers, cash drawers & scanners.", icon: "Cpu" },
      { title: "Dual Monitor Output", desc: "Mirror odds & slips for players.", icon: "Monitor" },
      { title: "Auto-Updates", desc: "Centralized remote version rollout.", icon: "Server" },
      { title: "Shift & Till Tracking", desc: "Per-PC cash reconciliation.", icon: "Wallet" },
    ],
    highlightsTitle: "Engineered for Reliability on the Shop Floor",
    highlightsDescription:
      "Keep every counter workstation fast, secure, and synchronized with your central sportsbook and casino back-office.",
    highlights: [
      {
        title: "Match-Code Quick Entry",
        desc: "Experienced cashiers can punch in event codes, markets, and stakes in seconds without touching a mouse.",
      },
      {
        title: "Seamless Virtuals & Lottery",
        desc: "Switch effortlessly between live sportsbook tickets, virtual races, and number games from one screen.",
      },
      {
        title: "Remote Device Monitoring",
        desc: "Check online status, printer paper alerts, and software health across all shop PCs from HQ.",
      },
      {
        title: "Strict Permission Controls",
        desc: "Require supervisor PINs for ticket cancellations, high-value payouts, or manual reprints.",
      },
    ],
    faqs: [
      {
        q: "What operating systems does Smart PC support?",
        a: "Smart PC runs smoothly on Windows and Linux shop workstations with minimal CPU and RAM requirements.",
      },
      {
        q: "Does it work with existing thermal printers and barcode scanners?",
        a: "Yes, it supports standard ESC/POS thermal receipt printers and USB/serial 1D/2D barcode scanners.",
      },
      {
        q: "Can Smart PC be used as a customer-facing desktop station?",
        a: "Yes, it can be switched into locked self-service mode for customer desktop booths in betting shops.",
      },
      {
        q: "How are software updates deployed across multiple shops?",
        a: "Updates are pushed centrally from the cloud management console without manual USB installation.",
      },
    ],
    ctaTitle: "Equip Your Counters With",
    ctaHighlight: "Smart PC Software",
    ctaDescription:
      "Request a live demonstration of Smart PC and see how fast your cashiers can process peak-hour bet slips.",
  },
  {
    slug: "terminal",
    name: "Terminal",
    category: "Betting Shop Software",
    href: "/solutions/terminal",
    metaTitle: "Betting Terminal Software | Self-Service Kiosk & SSBT",
    metaDescription:
      "Boost shop turnover without adding staff using our Self-Service Betting Terminal (SSBT) software. Intuitive touch UI, bill acceptors, and instant ticket printing.",
    keywords:
      "Betting Terminal Software, SSBT Software, Self Service Betting Kiosk, Betting Kiosk Software",
    heroBadge: "Betting Shop Software",
    heroTitlePrefix: "Self-Service Betting Terminal Software For",
    heroTitleHighlight: "24/7 Turnover",
    heroDescription:
      "Empower players to browse odds, place live bets, and print tickets independently. Our Terminal (SSBT) software delivers an intuitive touchscreen experience integrated with bill acceptors, coin hoppers, NFC cards, and thermal ticket printers.",
    heroBenefits: [
      "Touch-First Interface: Large buttons & fast bet slip.",
      "Cash & Card Hardware: Bill acceptors & NFC readers.",
      "Pre-Match, Live & Virtuals: Complete betting menu.",
      "QR Payout Vouchers: Redeem winnings at counter or kiosk.",
      "Remote Kiosk Telemetry: Cash box & printer monitoring.",
      "Zero Queue Bottlenecks: Serve more players per shop.",
    ],
    whyTitle: "Why Choose Our Betting Terminal Software?",
    whyDescription:
      "Self-service betting terminals increase ticket volume by up to 40% during peak hours while reducing staffing overhead. Our terminal OS is built for continuous 24/7 operation with tamper-proof security.",
    whyFeatures: [
      { title: "Intuitive Touch UX", desc: "Zero learning curve for players.", icon: "Monitor" },
      { title: "Hardware Peripheral SDK", desc: "Bill validators, printers & NFC.", icon: "Printer" },
      { title: "Tamper-Proof Security", desc: "Locked kiosk shell & audit logs.", icon: "ShieldCheck" },
      { title: "Live In-Play Speed", desc: "Instant odds refresh on screen.", icon: "Activity" },
      { title: "Remote Diagnostics", desc: "Live cash-in & hardware alerts.", icon: "Server" },
      { title: "Custom Branding", desc: "Your logo, colors & attract screen.", icon: "Palette" },
    ],
    highlightsTitle: "Turnkey Self-Service Hardware & Software Sync",
    highlightsDescription:
      "From single-screen upright kiosks to dual-screen cabinets, our Terminal software adapts to your retail hardware.",
    highlights: [
      {
        title: "Attract Mode & Promo Screens",
        desc: "Display upcoming big matches, boosted odds, and jackpots when the terminal is idle.",
      },
      {
        title: "Cash-In & Voucher Redemption",
        desc: "Accept banknotes directly into session credits and print scannable payout or credit vouchers.",
      },
      {
        title: "Player Card & QR Login",
        desc: "Allow loyal customers to tap an NFC shop card or scan a mobile QR to load their account.",
      },
      {
        title: "Automated Cash-Box Accounting",
        desc: "Track every note inserted and voucher dispensed in real time from the Shop Staff Panel.",
      },
    ],
    faqs: [
      {
        q: "Which kiosk hardware brands are supported?",
        a: "Our Terminal software supports standard touchscreen cabinets and integrates with major bill acceptors (JCM, Mei, CashCode) and thermal printers.",
      },
      {
        q: "Can players cash out winning tickets directly at the terminal?",
        a: "Yes, players can scan a winning ticket barcode to reuse credits on the terminal or redeem at the cashier counter.",
      },
      {
        q: "What happens if a terminal loses internet connection?",
        a: "Pending cash credits are safely logged locally and synced immediately upon reconnection, with full audit trails.",
      },
      {
        q: "Can we customize the languages on the terminal?",
        a: "Yes, players can switch between multiple configured languages with a single tap on the home screen.",
      },
    ],
    ctaTitle: "Scale Your Retail Revenue With",
    ctaHighlight: "Smart Terminals",
    ctaDescription:
      "See how our Self-Service Betting Terminal software maximizes floor capacity and reduces counter queues.",
  },
  {
    slug: "shop-staff-panel",
    name: "Shop Staff Panel",
    category: "Betting Shop Software",
    href: "/solutions/shop-staff-panel",
    metaTitle: "Shop Staff Panel | Cashier, Shift & Retail Operations Control",
    metaDescription:
      "Manage every betting shop counter, cashier shift, terminal cash box, and ticket payout from one centralized Shop Staff Panel.",
    keywords:
      "Shop Staff Panel, Betting Shop Back Office, Cashier Management Panel, Retail Betting POS",
    heroBadge: "Betting Shop Software",
    heroTitlePrefix: "Centralized Shop Staff Panel For",
    heroTitleHighlight: "Total Control",
    heroDescription:
      "Give shop managers and cashiers a unified command center for daily retail operations. The Shop Staff Panel streamlines shift openings, cash drawer reconciliation, terminal monitoring, ticket payouts, and player wallet top-ups.",
    heroBenefits: [
      "Role-Based Permissions: Cashier, manager & admin.",
      "Shift & Till Management: Accurate open/close reports.",
      "Ticket Verification: Instant scan, pay, or void.",
      "Terminal Oversight: Monitor kiosks & cash boxes.",
      "Player Account Top-Up: Retail deposits & withdrawals.",
      "Live Shop Analytics: Real-time turnover & GGR.",
    ],
    whyTitle: "Why Choose Our Shop Staff Panel?",
    whyDescription:
      "Managing multiple betting counters and self-service terminals shouldn't require spreadsheets or manual guesswork. Our Shop Staff Panel brings complete financial transparency and operational speed to every shift.",
    whyFeatures: [
      { title: "Granular Access Control", desc: "PIN/card login & action limits.", icon: "ShieldCheck" },
      { title: "Real-Time Cash Reports", desc: "Zero discrepancy shift closings.", icon: "BarChart3" },
      { title: "Terminal Control", desc: "Credit, lock, or reboot kiosks.", icon: "Monitor" },
      { title: "Fast Payout Workflow", desc: "Barcode scan & instant receipt.", icon: "Zap" },
      { title: "Multi-Shop Hierarchy", desc: "Compare branch performance live.", icon: "Store" },
      { title: "Audit-Ready Logs", desc: "Every action timestamped & tracked.", icon: "Server" },
    ],
    highlightsTitle: "Built for Cashiers, Managers & Franchise Owners",
    highlightsDescription:
      "Simplify daily floor operations while giving head office real-time visibility into every dollar across your retail estate.",
    highlights: [
      {
        title: "One-Click Shift Handover",
        desc: "Count drawers, reconcile terminal cash drops, and generate PDF/printed shift summaries in seconds.",
      },
      {
        title: "High-Win Approval Flows",
        desc: "Set automatic payout thresholds that require manager PIN approval for large winning tickets.",
      },
      {
        title: "Live Terminal Credit Top-Up",
        desc: "Cashiers can remotely add cash credits to any floor terminal directly from the staff panel.",
      },
      {
        title: "Fraud & Anomaly Alerts",
        desc: "Detect unusual void rates, repeated manual reprints, or suspicious ticket patterns immediately.",
      },
    ],
    faqs: [
      {
        q: "Can different staff members have different permissions?",
        a: "Yes. You can define custom roles for cashiers, shift supervisors, shop managers, and regional auditors.",
      },
      {
        q: "Does the Shop Staff Panel monitor self-service terminals too?",
        a: "Yes. Staff can view live terminal status, cash-in totals, paper levels, and remotely add or clear credits.",
      },
      {
        q: "Can cashiers process online player deposits and withdrawals?",
        a: "Yes, if omnichannel is enabled, cashiers can scan a player's QR code to process cash deposits or payouts.",
      },
      {
        q: "Are all actions logged for auditing?",
        a: "Every ticket sale, payout, void, login, and cash adjustment is permanently recorded with user ID and timestamp.",
      },
    ],
    ctaTitle: "Streamline Floor Operations With",
    ctaHighlight: "Shop Staff Panel",
    ctaDescription:
      "Request a demo to explore how our Shop Staff Panel simplifies shift management, payouts, and multi-shop reporting.",
  },
];

export const solutionCategories: SolutionCategoryGroup[] = [
  {
    heading: "Casino Software",
    items: solutionsData
      .filter((s) => s.category === "Casino Software")
      .map(({ name, href, slug }) => ({ name, href, slug })),
  },
  {
    heading: "Sportsbook",
    items: solutionsData
      .filter((s) => s.category === "Sportsbook")
      .map(({ name, href, slug }) => ({ name, href, slug })),
  },
  {
    heading: "Betting Shop Software",
    items: solutionsData
      .filter((s) => s.category === "Betting Shop Software")
      .map(({ name, href, slug }) => ({ name, href, slug })),
  },
];

export function getSolutionBySlug(slug: string): SolutionPageData | undefined {
  return solutionsData.find((item) => item.slug === slug);
}

