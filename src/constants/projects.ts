import ReactMUI from "../assets/react-mui.png";
import SampleEcommerce from "../assets/sample-ecommerce.png";
import WeddingInvitation from "../assets/wedding-invitation.png";

export const PROJECTS = [
  {
    title: "React MUI",
    description:
      "This web application is just a simple sample project using Next.js to showcase implementation skills on React/Next.js as well as the use of Material UI as UI Library.",
    image: ReactMUI,
    tags: ["React", "Next.js", "MaterialUI"],
    projectLink: "https://react-mui-five.vercel.app/",
    githubLink: "https://github.com/montayrekj/react-mui",
  },
  {
    title: "Sample Ecommerce",
    description:
      "This web application is a sample ecommerce project using Next.js with TailwindCSS. This contains the home and product page and has the ability to add to cart and favorites but all done on the client side.",
    image: SampleEcommerce,
    tags: ["React", "Next.js", "TailwindCSS"],
    projectLink: "https://sample-ecommerce-chi.vercel.app/",
    githubLink: "https://github.com/montayrekj/sample_ecommerce",
  },
  {
    title: "Our Wedding Invation/RSVP",
    description:
      "This website is created just using Canva. It was used as an invitation/infographics for our wedding as well as the RSVP with the use of Google Forms linked in the website (now closed/hidden).",
    image: WeddingInvitation,
    tags: ["Canva"],
    projectLink: "https://king-and-tala-wedding-invitation.online/",
  },
];
