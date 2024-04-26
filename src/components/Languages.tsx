import javascript from "../assets/languages/javascript.png";
import react from "../assets/languages/react.png";
import nextjs from "../assets/languages/nextjs.png";
import git from "../assets/languages/git.png";
import tailwind from "../assets/languages/tailwind.png";
import nodejs from "../assets/languages/nodejs.png";
import sql from "../assets/languages/sql.png";
import graphql from "../assets/languages/graphql.png";
import classNames from "classnames";

const languages = [
  {
    name: "Javascript",
    description: "Strong JS knowledge and advanced web development.",
    icon: javascript,
  },
  {
    name: "React",
    description: "Building fast and efficient React App's and websites.",
    icon: react,
    iconClass: "w-9",
  },
  {
    name: "Next.js",
    description: "Fast server-side rendering, dynamic routing & less code.",
    icon: nextjs,
  },
  {
    name: "Git",
    description: "DevOps for streamlined source code management.",
    icon: git,
  },
  {
    name: "TailwindCSS",
    description: "A utility-first widely used frontend CSS framework.",
    icon: tailwind,
    iconClass: "h-6 w-12",
  },
  {
    name: "NodeJS",
    description:
      "Using NodeJS with Express.js to build RESTful APIs for the frontend to consume data.",
    icon: nodejs,
  },
  {
    name: "SQL",
    description: "Using SQL for scalable databases for the backend",
    icon: sql,
  },
  {
    name: "GraphQL",
    description:
      "A fast performant way to developer, manipulate and query APIs or data.",
    icon: graphql,
  },
];

export default function Languages() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-left py-10 md:px-12">
      {languages.map((language) => (
        <div className="flex flex-col gap-2">
          <img
            src={language.icon}
            className={classNames(
              "h-8 w-8 ml-3 mb-3",
              language.iconClass ?? ""
            )}
          />
          <h4 className="border-l-2 pl-2 dark:border-gray-700 border-gray-300 font-semibold ">
            {language.name}
          </h4>
          <p className="ml-[10px] font-light text-sm">{language.description}</p>
        </div>
      ))}
    </div>
  );
}
