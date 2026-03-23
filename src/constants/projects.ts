import ReactMUI from '../assets/react-mui.png';
import SampleEcommerce from '../assets/sample-ecommerce.png';
import Clock from '../assets/clock.png';
import Toggle from '../assets/toggle.png';
import ChatApp from '../assets/react-chat-app.png';
import CTherapies from '../assets/ctherapies.png';
import TaraTakbo from '../assets/tara-takbo.png';

export const PROJECTS = [
  {
    title: 'React MUI',
    description:
      'This web application is just a simple sample project using Next.js to showcase implementation skills on React/Next.js as well as the use of Material UI as UI Library.',
    image: ReactMUI,
    tags: ['React', 'Next.js', 'MaterialUI'],
    projectLink: 'https://react-mui-five.vercel.app/',
    githubLink: 'https://github.com/montayrekj/react-mui',
  },
  {
    title: 'Sample Ecommerce',
    description:
      'This web application is a sample ecommerce project using Next.js with TailwindCSS. This contains the home and product page and has the ability to add to cart and favorites but all done on the client side.',
    image: SampleEcommerce,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'https://sample-ecommerce-chi.vercel.app/',
    githubLink: 'https://github.com/montayrekj/sample_ecommerce',
  },
  {
    title: 'Dark Mode Toggle',
    description:
      'This project is a toggle element for dark/light mode using just CSS and Javascript for styling and animation. Preview and code is on Codepen.',
    image: Toggle,
    imgClass: 'w-full',
    tags: ['Javascript', 'CSS'],
    projectLink: 'https://codepen.io/montayrekj/pen/VwYGjdb',
  },
  {
    title: 'Aesthetic Clock',
    description:
      'This project is an aesthetic clock with the React logo as inspiration and is created using CSS and Javascript. Preview and code is on Codepen.',
    image: Clock,
    tags: ['Javascript', 'CSS'],
    projectLink: 'https://codepen.io/montayrekj/pen/NWPYNgE',
  },
  {
    title: "Let's Chat!",
    description:
      'This project is a messaging app powered using Firebase/Firestore. You can message on the main/general channel as well as create your own channels to chat with your friends. ',
    image: ChatApp,
    tags: ['React', 'Vite', 'Firebase', 'Firestore'],
    projectLink: 'https://react-chat-app-beta-bice.vercel.app/',
    githubLink: 'https://github.com/montayrekj/react-chat-app',
  },
  {
    title: 'CTherapies',
    description:
      'This project is a website for a company that provides therapy services. It is a simple website with a home page, about page, services page, and contact page.',
    image: CTherapies,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'http://ctherapies.vercel.app/',
    githubLink: 'https://github.com/montayrekj/ctherapies',
  },
  {
    title: 'TaraTakbo',
    description:
      'This project is a website to easily map your running routes using Google Maps API and Mapbox GL JS and Turf.js. It also allows you to add your running routes to a map, visualize the route turn by turn and then share them with your friends.',
    image: TaraTakbo,
    tags: ['React', 'Next.js', 'TailwindCSS'],
    projectLink: 'http://tara-takbo.vercel.app/',
    githubLink: 'https://github.com/montayrekj/tara-takbo',
  },
];
