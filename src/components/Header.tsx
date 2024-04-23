import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/mini-logo.png";
import Button from "./Button";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import classNames from "classnames";

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: (darkMode: boolean) => void;
};

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-screen bg-white text-black dark:bg-black dark:text-gray-200 fixed">
      <div className="max-w-screen-2xl mx-auto py-2 flex items-center justify-between pl-2 pr-4">
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
          <a href="/">Home</a>
          <a href="#about">About me</a>
          <a href="#projects">Portfolio</a>
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
          onClick={() => setMenuOpen((op) => !op)}
        />
      </div>

      <div
        className={classNames(
          "bg-dark flex flex-col items-center [&_a]:text-lg gap-4  w-full transition-all overflow-hidden [transition-duration:400ms]",
          menuOpen ? "py-8 h-screen" : "h-0"
        )}
      >
        <a href="/">Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About me
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Portfolio
        </a>
        <div className="flex gap-4">
          <Button
            label="Contact Me"
            url="#contact"
            onClick={() => setMenuOpen(false)}
          />
          <div className="border border-black dark:border-white rounded-full py-[8px] px-[6px] flex items-center">
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
