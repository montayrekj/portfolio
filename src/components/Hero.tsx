import coding from "../assets/developer-coding.png";
import resume from "../../public/resume.pdf";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <h2 className="font-semibold text-5xl">Frontend Developer</h2>
      <p className="mt-1 mb-3">{`{ Javascript, React, Next.js, NodeJS, CSS... }`}</p>
      <p className="mx-auto">
        Specializing in React & Next.js I leverage cutting edge technologies to
        bring web projects to life.
      </p>
      <div className="mt-6 flex items-center mx-auto justify-center gap-4">
        <Button label="See my dev work" variant="secondary" url="#projects" />
        <a
          className="dark:text-lightblue text-darkblue font-semibold border-b-2 border-darkblue dark:border-lightblue pb-[1px]"
          href={resume}
          download="King Joshua Montayre - Resume"
        >
          Download Resume
        </a>
      </div>
      <div className="flex justify-center mt-10 mb-14">
        <img src={coding} className="h-[320px]" />
      </div>
    </>
  );
}
