import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.webp";

export default function Footer() {
  return (
    <div className="w-full text-sm dark:!bg-[#111111] !bg-[#EEEEEE60] text-center py-2 flex items-center justify-center flex-col gap-2">
      <div>
        Copyright © 2024, King Joshua Montayre. Built with{" "}
        <a
          className="border-b border-black dark:border-white pb-[1px] text-sm"
          href="https://vitejs.dev/"
          target="_blank"
        >
          Vite
        </a>
        . Source on{" "}
        <a
          className="border-b border-black dark:border-white pb-[1px] text-sm"
          href="https://github.com/montayrekj/portfolio"
          target="_blank"
        >
          Github
        </a>
      </div>
      <div className="flex">
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/king-joshua-montayre/"
          target="_blank"
        >
          <img src={LinkedIn} className="h-8 w-8 ml-3 mb-3 rounded-md" />
        </a>
        <a
          className="cursor-pointer"
          href="https://github.com/montayrekj"
          target="_blank"
        >
          <img src={Github} className="h-8 w-8 ml-3 mb-3 rounded-md" />
        </a>
      </div>
    </div>
  );
}
