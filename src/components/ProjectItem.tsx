import classNames from "classnames";
import code from "../assets/code.svg";
import Button from "./Button";

type ProjectItem = {
  image?: string;
  tags: string[];
  title: string;
  description: string;
  projectLink: string;
  githubLink?: string;
  repoLabel?: string;
  imgClass?: string;
};

export default function ProjectItem({
  image,
  imgClass,
  tags,
  title,
  description,
  projectLink,
  githubLink,
  repoLabel = "See on Github",
}: ProjectItem) {
  return (
    <div className="grid grid-rows-[200px_1fr_30px] rounded-xl">
      <div className="flex items-center justify-center rounded-xl bg-[#DDDDDD] dark:bg-[#DDDDDD20] h-[200px] overflow-hidden shadow-[2px_2px_3px_#eee] dark:shadow-[2px_2px_2px_#222]">
        {image ? (
          <img
            src={image}
            className={classNames(imgClass, "object-cover h-full")}
          />
        ) : (
          <img src={code} className="h-[150px]" />
        )}
      </div>
      <div className="flex flex-col text-left px-4 pt-4 max-md:text-center">
        <ul className="flex text-xs dark:text-gray-400 gap-2 max-md:justify-center">
          {tags.map((tag) => (
            <li className="px-2 py-[1px] bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-3xl">
              <span>{tag}</span>
            </li>
          ))}
        </ul>
        <span className="mt-2 font-semibold">{title}</span>
        <span className="font-light my-3">{description}</span>
      </div>
      <div className="flex items-center gap-4 max-md:justify-center px-4">
        <Button
          label="See live"
          variant="tertiary"
          url={projectLink}
          className="text-sm"
          externalLink={true}
        />
        {githubLink && (
          <a
            className="border-b border-black dark:border-white pb-[1px] text-sm"
            href={githubLink}
            target="_blank"
          >
            {repoLabel}
          </a>
        )}
      </div>
    </div>
  );
}
