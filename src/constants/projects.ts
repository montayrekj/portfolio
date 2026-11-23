import Aluma from '../assets/builds/aluma-1600.webp';
import AlumaSm from '../assets/builds/aluma-800.webp';
import LuluInjects from '../assets/builds/lulu-injects-800.webp';
import RealAesthetix from '../assets/builds/real-aesthetix-800.webp';
import CebuTimepieces from '../assets/builds/cebu-timepieces-1600.webp';
import CebuTimepiecesSm from '../assets/builds/cebu-timepieces-800.webp';
import ShineOn from '../assets/builds/shineon-1600.webp';
import ShineOnSm from '../assets/builds/shineon-800.webp';
import TrimStation from '../assets/builds/trim-station-1600.webp';
import TrimStationSm from '../assets/builds/trim-station-800.webp';
import TopFrame from '../assets/builds/top-frame-1600.webp';
import TopFrameSm from '../assets/builds/top-frame-800.webp';
import DinkUp from '../assets/builds/dink-up-1600.webp';
import DinkUpSm from '../assets/builds/dink-up-800.webp';
import TaraTakbo from '../assets/builds/tara-takbo-1600.webp';
import TaraTakboSm from '../assets/builds/tara-takbo-800.webp';
import CTherapies from '../assets/builds/ctherapies-1600.webp';
import CTherapiesSm from '../assets/builds/ctherapies-800.webp';
import ChatApp from '../assets/builds/react-chat-app-1600.webp';
import ChatAppSm from '../assets/builds/react-chat-app-800.webp';
import SampleEcommerce from '../assets/builds/sample-ecommerce-1600.webp';
import SampleEcommerceSm from '../assets/builds/sample-ecommerce-800.webp';
import ReactMUI from '../assets/builds/react-mui-1600.webp';
import ReactMUISm from '../assets/builds/react-mui-800.webp';
import Toggle from '../assets/builds/toggle-800.webp';
import Clock from '../assets/builds/clock-800.webp';

export type Partner = {
  title: string;
  place: string;
  image: string;
  projectLink: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageSm: string;
  /** natural aspect ratio of the screenshot, width / height */
  ratio: number;
  tags: string[];
  projectLink: string;
  githubLink?: string;
  /** label for the live link; CodePen pens are demos, not deployments */
  liveLabel?: string;
  /** the only screenshot is an empty state: show a type tile instead */
  typeCover?: boolean;
  /** sibling sites shipped alongside this one */
  partners?: Partner[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Aluma Medical Aesthetics',
    description:
      'The site for Aluma, a network that helps nurse injectors open and run their own medspas, with content managed in Payload, data on Neon, and Mailchimp for email. Partner injectors in the network get sites of their own. Some partner injectors also has shops built recently.',
    image: Aluma,
    imageSm: AlumaSm,
    ratio: 2880 / 1472,
    tags: ['Next.js', 'Payload CMS', 'Neon Postgres', 'Mailchimp', 'Shopify'],
    projectLink: 'https://www.alumamedicalaesthetics.com/',
    partners: [
      {
        title: 'Lulu Injects',
        place: 'Rancho Cucamonga, CA',
        image: LuluInjects,
        projectLink: 'https://luluinjects.com/',
      },
      {
        title: 'Real Aesthetix',
        place: 'Carlsbad, CA',
        image: RealAesthetix,
        projectLink: 'https://www.realaesthetix.com/',
      },
    ],
  },
  {
    title: 'Cebu Timepieces',
    description:
      'A chat-first watch catalog for Cebu Timepieces, an independent watch dealer in Talisay, Cebu. Stock comes from a Google Sheet the dealer edits, every photo is watermarked as it is served, and each Message button opens Messenger or Instagram with the watch already named.',
    image: CebuTimepieces,
    imageSm: CebuTimepiecesSm,
    ratio: 3380 / 1742,
    tags: ['Next.js', 'TailwindCSS', 'Google Sheets', 'Sharp'],
    projectLink: 'https://cebu-timepieces.vercel.app/',
  },
  {
    title: 'ShineOn Car Solutions',
    description:
      'A site for ShineOn, a car detailing studio in Cebu City. Pick a vehicle size and services like tint, PPF, coatings or paint correction, and it gives a price range and shop time in about 30 seconds, then opens Messenger with the quote filled in.',
    image: ShineOn,
    imageSm: ShineOnSm,
    ratio: 3382 / 1728,
    tags: ['Next.js', 'TypeScript', 'Messenger handoff'],
    projectLink: 'https://shineon-web.vercel.app/',
  },
  {
    title: 'Trim Station',
    description:
      'The website for Trim Station, a two-chair barbershop in Cebu City: a price board, barber profiles, a style chart to point at, live open-or-closed hours, a map, and online booking through Setmore.',
    image: TrimStation,
    imageSm: TrimStationSm,
    ratio: 2880 / 1472,
    tags: ['Next.js', 'Setmore booking', 'Google Maps'],
    projectLink: 'https://trim-station.vercel.app/',
  },
  {
    title: 'Dink Up',
    description:
      'A mobile-first PWA for scoring pickleball games. Supports singles and doubles with proper server rotation tracking, rally and side-out scoring modes, configurable win scores, per-team undo, and full offline capability via service workers.',
    image: DinkUp,
    imageSm: DinkUpSm,
    ratio: 3412 / 1748,
    tags: ['Next.js', 'TailwindCSS', 'Zustand', 'PWA'],
    projectLink: 'https://dink-up.vercel.app/',
    githubLink: 'https://github.com/montayrekj/dink-up',
  },
  {
    title: 'CTherapies',
    description:
      'A rebuild of the site for Community Therapies, an outpatient physical therapy clinic in Clovis, New Mexico. Patients can see the services and the insurance plans the clinic takes, meet the therapists, read the FAQs, and book online, call, or send a message.',
    image: CTherapies,
    imageSm: CTherapiesSm,
    ratio: 3382 / 1736,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'http://ctherapies.vercel.app/',
  },
  {
    title: 'TaraTakbo',
    description:
      'Map your running routes with the Google Maps API, Mapbox GL JS, and Turf.js. Add routes to a map, replay them turn by turn, and share them with friends.',
    image: TaraTakbo,
    imageSm: TaraTakboSm,
    ratio: 3414 / 1738,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'http://tara-takbo.vercel.app/',
    githubLink: 'https://github.com/montayrekj/tara-takbo',
  },
  {
    title: 'TopFrame',
    description:
      'An AI-powered Instagram post curator. Upload 20+ photos, describe your vibe, and let AI pick the best shots and generate caption and song suggestions — powered by Claude and Ollama.',
    image: TopFrame,
    imageSm: TopFrameSm,
    ratio: 3410 / 1742,
    tags: ['Next.js', 'TailwindCSS', 'Claude AI', 'Ollama'],
    typeCover: true,
    projectLink: 'https://top-frame.vercel.app/',
    githubLink: 'https://github.com/montayrekj/top-frame',
  },
  {
    title: "Let's Chat!",
    description:
      'A messaging app on Firebase and Firestore. Chat in the general channel or create your own channels with friends.',
    image: ChatApp,
    imageSm: ChatAppSm,
    ratio: 3406 / 1728,
    tags: ['React', 'Vite', 'Firebase', 'Firestore'],
    projectLink: 'https://react-chat-app-beta-bice.vercel.app/',
    githubLink: 'https://github.com/montayrekj/react-chat-app',
  },
  {
    title: 'Sample Ecommerce',
    description:
      'A sample storefront in Next.js and TailwindCSS with home and product pages, cart, and favorites, all handled client-side.',
    image: SampleEcommerce,
    imageSm: SampleEcommerceSm,
    ratio: 3416 / 1738,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'https://sample-ecommerce-chi.vercel.app/',
    githubLink: 'https://github.com/montayrekj/sample_ecommerce',
  },
  {
    title: 'React MUI',
    description:
      'A sample Next.js project showing React and Next.js implementation with Material UI as the component library.',
    image: ReactMUI,
    imageSm: ReactMUISm,
    ratio: 3414 / 1742,
    tags: ['React', 'Next.js', 'MaterialUI'],
    projectLink: 'https://react-mui-five.vercel.app/',
    githubLink: 'https://github.com/montayrekj/react-mui',
  },
  {
    title: 'Dark Mode Toggle',
    description:
      'A dark/light mode toggle built with just CSS and JavaScript for the styling and animation.',
    image: Toggle,
    imageSm: Toggle,
    ratio: 660 / 510,
    tags: ['JavaScript', 'CSS'],
    projectLink: 'https://codepen.io/montayrekj/pen/VwYGjdb',
    liveLabel: 'Open on CodePen',
  },
  {
    title: 'Aesthetic Clock',
    description:
      'A clock inspired by the React logo, drawn and animated with CSS and JavaScript.',
    image: Clock,
    imageSm: Clock,
    ratio: 1272 / 785,
    tags: ['JavaScript', 'CSS'],
    projectLink: 'https://codepen.io/montayrekj/pen/NWPYNgE',
    liveLabel: 'Open on CodePen',
  },
];
