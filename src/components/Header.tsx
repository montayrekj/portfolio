import logo from "../assets/mini-logo.png";
import Button from "./Button";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <div className="w-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-screen-2xl mx-auto py-2 flex items-center justify-between">
        <div className="flex flex-1 items-center gap-2">
          <a href="/">
            <img src={logo} className="h-16" />
          </a>
          <div>
            <h1 className="font-bold text-xl leading-tight">
              King Joshua Montayre
            </h1>
            <h3 className="leading-none text-sm">Frontend Developer</h3>
          </div>
        </div>
        <div className="flex flex-1 gap-8 justify-center font-medium">
          <a>Home</a>
          <a>About me</a>
          <a>Portfolio</a>
        </div>
        <div className="flex flex-1 gap-4 items-center justify-end">
          <Button label="Contact Me" url="#contact" />
          <div className="border border-black dark:border-white rounded-full p-[6px]">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
