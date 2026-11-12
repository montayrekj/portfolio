export type PlateKey = 'c' | 'm' | 'y' | 'k';

export type StackPlate = {
  key: PlateKey;
  ink: string;
  layer: string;
  line: string;
  tools: string[];
};

// Four process plates, four layers of the stack.
export const PLATES: StackPlate[] = [
  {
    key: 'c',
    ink: 'Cyan',
    layer: 'Interface',
    line: 'What people see and touch.',
    tools: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS', 'Vite'],
  },
  {
    key: 'm',
    ink: 'Magenta',
    layer: 'Mobile',
    line: 'The same product, in a pocket.',
    tools: ['React Native', 'Expo', 'Geofencing APIs', 'PWAs', 'Service workers'],
  },
  {
    key: 'y',
    ink: 'Yellow',
    layer: 'Services & data',
    line: 'Where the logic and the records live.',
    tools: ['Node.js', 'Express', 'REST', 'GraphQL', 'Prisma', 'PostgreSQL', 'Java', 'C#'],
  },
  {
    key: 'k',
    ink: 'Key',
    layer: 'Delivery',
    line: 'Getting it shipped, measured, and found.',
    tools: ['Git', 'CI/CD', 'Vercel', 'AWS', 'Contentful', 'A/B testing', 'SEO'],
  },
];
