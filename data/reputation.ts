interface ReputationProps {
  id: number;
  name: string;
  have: number;
  need: number;
}

export const reputationData = [
  { id: 0, name: 'Neutral', have: 0, need: 0 },
  { id: 1, name: 'Friendly', have: 3000, need: 3000 },
  { id: 2, name: 'Honored', have: 9000, need: 12000 },
  { id: 3, name: 'Revered', have: 21000, need: 21000 },
  { id: 4, name: 'Exalted', have: 42000, need: 42000 },
];
