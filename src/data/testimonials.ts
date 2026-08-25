export interface Testimonial {
  id: string;
  service: string;
  client: string;
  review: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", service: "Sportsbook Development", client: "Alex Morgan", review: "Their sportsbook software is incredibly robust. We processed millions in bets during the world cup with zero downtime." },
  { id: "t2", service: "Casino Software Development", client: "Daniel Weber", review: "The casino platform provided exceeded our expectations. The management tools are powerful and the player experience is flawless." },
  { id: "t3", service: "Sweepstakes Casino", client: "Sophia Bennett", review: "Launching our sweepstakes casino was seamless. Their understanding of the unique compliance requirements saved us months of work." },
  { id: "t4", service: "Slot Game Development", client: "Lars Johansson", review: "The custom slot games they developed for us are among the top performers in our portfolio. The math models are spot on." },
  { id: "t5", service: "Prediction Market", client: "James Carter", review: "A highly complex project delivered perfectly. The real-time data processing capabilities of their prediction market software are unmatched." },
  { id: "t6", service: "Turnkey Platform", client: "Oliver Schmidt", review: "We went from concept to launch in record time thanks to their turnkey solution. Everything we needed was included out of the box." },
  { id: "t7", service: "White-Label Casino", client: "Isabella Martin", review: "The level of customization available on their white-label platform allowed us to create a truly unique brand identity." },
  { id: "t8", service: "Sports Betting", client: "Robert Wilson", review: "Their API integrations are flawless. We connected dozens of third-party feeds without a single issue during development." },
  { id: "t9", service: "Casino Games", client: "Emma Laurent", review: "Stunning graphics, engaging gameplay, and rock-solid stability. Our players love the new games they've developed for us." },
  { id: "t10", service: "Complete Solution", client: "Lucas Thompson", review: "A true technology partner. They delivered a comprehensive ecosystem that scales effortlessly as our global user base grows." }
];
