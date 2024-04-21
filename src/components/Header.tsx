import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/mini-logo.png";
import Button from "./Button";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <div className="w-screen bg-white text-black dark:bg-black dark:text-white pl-2 pr-4 fixed">
      <div className="max-w-screen-2xl mx-auto py-2 flex items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <a href="/">
            <img src={logo} className="h-12 md:h-16" />
          </a>
          <div>
            <h1 className="font-bold text-xl leading-tight">
              King Joshua Montayre
            </h1>
            <h3 className="leading-none text-sm">Frontend Developer</h3>
          </div>
        </div>
        <div className="flex flex-1 gap-8 justify-center font-medium max-md:hidden">
          <a>Home</a>
          <a>About me</a>
          <a>Portfolio</a>
        </div>
        <div className="flex flex-1 gap-4 items-center justify-end max-md:hidden">
          <Button label="Contact Me" url="#contact" />
          <div className="border border-black dark:border-white rounded-full p-[6px]">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </div>
        </div>
        <FontAwesomeIcon
          className="block md:hidden dark:text-lightblue text-darkblue"
          icon={faBars}
          size="2xl"
        />
      </div>
    </div>
  );
}
