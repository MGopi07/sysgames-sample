export interface Statistic {
  id: string;
  value: string;
  label: string;
}

export const statistics: Statistic[] = [
  { id: "stat-1", value: "150+", label: "Platforms" },
  { id: "stat-2", value: "100+", label: "Clients" },
  { id: "stat-3", value: "5+", label: "Years Experience" },
  { id: "stat-4", value: "50+", label: "Countries" },
  { id: "stat-5", value: "100+", label: "Team Members" },
  { id: "stat-6", value: "3000+", label: "Games" }
];
