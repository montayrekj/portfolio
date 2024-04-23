import code from "../assets/code.svg";
import Button from "./Button";

type ProjectItem = {
  image?: string;
  tags: string[];
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
};

export default function ProjectItem({
  image,
  tags,
  title,
  description,
  projectLink,
  githubLink,
}: ProjectItem) {
  return (
    <div className="grid grid-rows-2 rounded-xl">
      <div className="flex items-center justify-center rounded-xl bg-[#DDDDDD] dark:bg-[#DDDDDD20]">
        {image ? <img src={image} /> : <img src={code} className="h-[200px]" />}
      </div>
      <div className="flex flex-col text-left p-4 max-md:text-center">
        <ul className="flex text-xs dark:text-gray-400 gap-2 max-md:justify-center">
          {tags.map((tag) => (
            <li className="px-2 py-[1px] bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-3xl">
              <span>{tag}</span>
            </li>
          ))}
        </ul>
        <span className="mt-1 font-semibold">{title}</span>
        <span className="font-light my-3">{description}</span>
        <div className="flex items-center gap-4 max-md:justify-center">
          <Button
            label="See live"
            variant="tertiary"
            url={projectLink}
            className="text-sm"
          />
          <a
            className="border-b border-black dark:border-white pb-[1px] text-sm"
            href={githubLink}
          >
            See on Github
          </a>
        </div>
      </div>
    </div>
  );
}
