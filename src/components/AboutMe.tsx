import {
  faPeopleGroup,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import AboutMeItems from "../components/AboutMeItems";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import portrait from "../assets/king-portrait-outline.png";

export default function AboutMe() {
  return (
    <div id="about" className="scroll-mt-24">
      <h3 className="font-semibold text-4xl">{"Problem solver <coder>"}</h3>
      <span>Frontend Developer with 5 years of experience</span>
      <div className="max-w-screen-xl w-full border-b-2 dark:border-gray-700 border-gray-300">
        <div className="flex justify-center items-center max-md:flex-col max-md:gap-8 mt-8">
          <div className="max-w-[400px] mt-8 flex flex-col gap-8 justify-center px-4">
            <AboutMeItems
              icon={faUserGraduate}
              mainLabel="Bachelor of Science in Computer Science."
              subLabel="Graduated on CIT-University last March 2018."
            />
            <AboutMeItems
              icon={faReact}
              mainLabel="Specializing in React & Next.js"
              subLabel="I am constantly working on learning new technologies & following industry trends"
            />
            <AboutMeItems
              icon={faPeopleGroup}
              mainLabel="Love working in a team."
              subLabel="I enjoy working in a team, but I can also work independently."
            />
          </div>
          <img src={portrait} className="h-[450px]" />
        </div>
      </div>
    </div>
  );
}
