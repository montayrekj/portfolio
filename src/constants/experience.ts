export type Job = {
  company: string;
  role: string;
  period: string;
  start: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

// Source of truth: public/resume.pdf. Keep wording faithful to it.
export const JOBS: Job[] = [
  {
    company: 'MountainDev',
    role: 'Full Stack Developer',
    period: 'Sep 2024 – Present',
    start: '2024',
    current: true,
    summary:
      'Leading full stack work across web, backend, and mobile for healthcare, consumer wellness, and outdoor retail products.',
    points: [
      'Leading the GoRuck web rebrand: migrating and redesigning the Sandlot platform onto an updated design system.',
      'Built hivetracks.com, a hive management platform for beekeepers, owning both the frontend and backend architecture.',
      'Engineered the mobile app for an HIV prevention clinical study (NCT05111119), tracking pill adherence and protection metrics for trial data collection.',
      'Built a rehabilitation incentive app that uses geofencing to verify in-person attendance and prevent incentive fraud.',
      'Migrated a legacy React Native app to Expo SDK 52 for stability, performance, and long-term maintainability.',
    ],
    stack: ['React Native', 'Expo SDK 52', 'Geofencing APIs', 'Web + backend', 'CI/CD'],
  },
  {
    company: 'Expertise.com',
    role: 'Frontend Developer',
    period: 'May 2023 – Sep 2024',
    start: '2023',
    summary:
      'Frontend for a high-traffic service directory, where every change answered to search and conversion.',
    points: [
      'Drove site-wide SEO gains through URL routing changes, Contentful page templates, and technical SEO.',
      'Led A/B testing on Google Optimize, then the migration to GrowthBook when Optimize was retired.',
      'Built multi-step “journey” questionnaires that match visitors with local providers, lifting engagement and conversion.',
      'Executed a full-site rebrand: new page designs and a refreshed component library.',
      'Contributed frontend engineering behind the Forbes Advisor content partnership.',
    ],
    stack: ['Contentful', 'GrowthBook', 'Google Optimize', 'SEO / SEM'],
  },
  {
    company: 'Lanturn Pte Ltd',
    role: 'Frontend Developer',
    period: '2021 – May 2023',
    start: '2021',
    summary: 'Turned a spreadsheet process into a product.',
    points: [
      'Took a business compliance workflow from Excel to a browser app, significantly expanding the client user base.',
      'Reworked REST call patterns and rendering to cut load times and improve Core Web Vitals.',
      'Shipped fully responsive layouts that grew mobile traffic and cross-device use.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'REST'],
  },
  {
    company: 'Full Scale',
    role: 'React Developer',
    period: '2020 – 2021',
    start: '2020',
    summary: 'Component libraries and a framework migration, with a team trained along the way.',
    points: [
      'Built a reusable React shopping-cart component suite, shipped via private NPM and CDN, that let a client launch multiple stores.',
      'Scoped the AngularJS → React migration of a production app, then trained developers new to React to carry it out.',
    ],
    stack: ['React', 'NPM packages', 'CDN', 'AngularJS → React'],
  },
  {
    company: 'Alliance Software Inc.',
    role: 'Full Stack Developer',
    period: '2018 – 2020',
    start: '2018',
    summary: 'Enterprise web apps for Japanese clients, from requirements to delivery.',
    points: [
      'Built web applications for Japanese enterprise clients, with a 100% client satisfaction rate across deliveries.',
      'Gathered requirements directly with Japanese stakeholders, then estimated and supervised delivery schedules.',
    ],
    stack: ['React', 'Java', 'C#'],
  },
];
